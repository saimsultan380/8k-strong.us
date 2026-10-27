# Builds public/favicon.ico as a classic BMP/DIB icon (not PNG-compressed).
# Google's favicon crawler often fails to decode PNG-inside-ICO files and then
# shows the default globe even when separate PNG icons exist.
Add-Type -AssemblyName System.Drawing

function Get-BgraImage([string]$path) {
  $bmp = [System.Drawing.Bitmap]::FromFile($path)
  $rect = New-Object System.Drawing.Rectangle 0, 0, $bmp.Width, $bmp.Height
  $data = $bmp.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::ReadOnly, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  try {
    $stride = $data.Stride
    $bytes = New-Object byte[] ($stride * $bmp.Height)
    [System.Runtime.InteropServices.Marshal]::Copy($data.Scan0, $bytes, 0, $bytes.Length)
    return @{ W = $bmp.Width; H = $bmp.Height; Stride = $stride; Bytes = $bytes }
  } finally {
    $bmp.UnlockBits($data)
    $bmp.Dispose()
  }
}

function New-DibIcoImage($img) {
  $w = $img.W
  $h = $img.H
  $xorSize = $w * $h * 4
  $maskStride = [int]([Math]::Ceiling($w / 32.0) * 4)
  $maskSize = $maskStride * $h

  $ms = New-Object System.IO.MemoryStream
  $bw = New-Object System.IO.BinaryWriter $ms
  $bw.Write([uint32]40)
  $bw.Write([int32]$w)
  $bw.Write([int32]($h * 2))
  $bw.Write([uint16]1)
  $bw.Write([uint16]32)
  $bw.Write([uint32]0)
  $bw.Write([uint32]($xorSize + $maskSize))
  $bw.Write([int32]0)
  $bw.Write([int32]0)
  $bw.Write([uint32]0)
  $bw.Write([uint32]0)

  for ($y = $h - 1; $y -ge 0; $y--) {
    for ($x = 0; $x -lt $w; $x++) {
      $si = $y * $img.Stride + $x * 4
      $bw.Write($img.Bytes[$si])
      $bw.Write($img.Bytes[$si + 1])
      $bw.Write($img.Bytes[$si + 2])
      $bw.Write($img.Bytes[$si + 3])
    }
  }

  $mask = New-Object byte[] $maskSize
  $bw.Write($mask)
  $bw.Flush()
  return $ms.ToArray()
}

$root = Split-Path -Parent $PSScriptRoot
$sources = @(
  (Join-Path $root "public\favicon-96x96.png"),
  (Join-Path $root "public\favicon-48x48.png")
)

$images = foreach ($path in $sources) {
  $img = Get-BgraImage $path
  if ($img.W -ne $img.H) { throw "Icon must be square: $path" }
  @{ Meta = $img; Dib = (New-DibIcoImage $img) }
}

$out = New-Object System.IO.MemoryStream
$bw = New-Object System.IO.BinaryWriter $out
$bw.Write([uint16]0)
$bw.Write([uint16]1)
$bw.Write([uint16]$images.Count)

$offset = 6 + (16 * $images.Count)
foreach ($image in $images) {
  $dim = [byte]$image.Meta.W
  $bw.Write($dim)
  $bw.Write($dim)
  $bw.Write([byte]0)
  $bw.Write([byte]0)
  $bw.Write([uint16]1)
  $bw.Write([uint16]32)
  $bw.Write([uint32]$image.Dib.Length)
  $bw.Write([uint32]$offset)
  $offset += $image.Dib.Length
}

foreach ($image in $images) {
  $dib = [byte[]]$image.Dib
  Write-Output ("frame {0}x{1} dib {2}" -f $image.Meta.W, $image.Meta.H, $dib.Length)
  $bw.BaseStream.Write($dib, 0, $dib.Length)
}

$bw.Flush()
$dest = Join-Path $root "public\favicon.ico"
$bytes = $out.ToArray()
[System.IO.File]::WriteAllBytes($dest, $bytes)
Write-Output ("wrote {0} bytes" -f $bytes.Length)
