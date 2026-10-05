import Image from "next/image";
import type { ProjectImage } from "@/data/types";

/**
 * Screenshots / photos of the actual solution. Images live in /public/projects/<slug>/.
 * Renders nothing when the project has no images yet.
 */
export function ProjectGallery({ images, title }: { images?: ProjectImage[]; title: string }) {
  if (!images || images.length === 0) return null;
  const single = images.length === 1;
  return (
    <section aria-label={`${title} 이미지`} className="mt-10">
      <p className="eyebrow">Gallery</p>
      <ul className={`mt-4 grid gap-4 ${single ? "" : "sm:grid-cols-2"}`}>
        {images.map((img) => (
          <li key={img.src} className="overflow-hidden rounded-xl border border-line bg-surface-2">
            <figure>
              <div className={`relative w-full ${single ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-contain"
                />
              </div>
              {img.caption ? (
                <figcaption className="border-t border-line px-4 py-3 text-xs leading-relaxed text-muted">
                  {img.caption}
                </figcaption>
              ) : null}
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
