import Image from "next/image";

/** Single featured image under the blog title and intro. */
export function BlogFeaturedImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div
      className="relative mx-auto mt-8 aspect-[16/9] w-full max-w-4xl overflow-hidden rounded-2xl border"
      style={{
        borderColor: "var(--feature-card-border)",
        boxShadow: "var(--feature-card-shadow)",
        backgroundColor: "rgba(0,0,0,0.45)",
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        unoptimized
        className="object-cover"
        sizes="(max-width: 896px) 100vw, 896px"
        priority
      />
    </div>
  );
}
