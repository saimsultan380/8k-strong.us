import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const src = path.join(root, "public", "icon-192.png");
const outDir = path.join(root, "public");
const sizes = [16, 32, 48, 96];

function pngToIco(pngBuffers) {
  const count = pngBuffers.length;
  const headerSize = 6 + count * 16;
  let offset = headerSize;
  const entries = [];

  for (const buf of pngBuffers) {
    const w = (buf[16] << 24) | (buf[17] << 16) | (buf[18] << 8) | buf[19];
    const h = (buf[20] << 24) | (buf[21] << 16) | (buf[22] << 8) | buf[23];
    entries.push({
      w: w >= 256 ? 0 : w,
      h: h >= 256 ? 0 : h,
      size: buf.length,
      offset,
      buf,
    });
    offset += buf.length;
  }

  const out = Buffer.alloc(offset);
  out.writeUInt16LE(0, 0);
  out.writeUInt16LE(1, 2);
  out.writeUInt16LE(count, 4);

  let entryOffset = 6;
  for (const entry of entries) {
    out.writeUInt8(entry.w, entryOffset);
    out.writeUInt8(entry.h, entryOffset + 1);
    out.writeUInt8(0, entryOffset + 2);
    out.writeUInt8(0, entryOffset + 3);
    out.writeUInt16LE(1, entryOffset + 4);
    out.writeUInt16LE(32, entryOffset + 6);
    out.writeUInt32LE(entry.size, entryOffset + 8);
    out.writeUInt32LE(entry.offset, entryOffset + 12);
    entry.buf.copy(out, entry.offset);
    entryOffset += 16;
  }

  return out;
}

const pngBuffers = [];

for (const size of sizes) {
  const out = path.join(outDir, `favicon-${size}x${size}.png`);
  await sharp(src)
    .resize(size, size, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 1 },
    })
    .png()
    .toFile(out);
  pngBuffers.push(fs.readFileSync(out));
  console.log("wrote", path.relative(root, out));
}

const icoPath = path.join(outDir, "favicon.ico");
fs.writeFileSync(icoPath, pngToIco(pngBuffers));
console.log("wrote", path.relative(root, icoPath), fs.statSync(icoPath).size, "bytes");
