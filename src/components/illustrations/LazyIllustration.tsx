"use client";

import { useInView } from "@/hooks/useInView";
import { ProjectIllustration } from "./index";

/**
 * Renders the (DOM-heavy) SVG illustration only once the container nears the viewport.
 * Keeps initial DOM small on the home page where many cards are listed.
 */
export function LazyIllustration({ slug, slice, className }: { slug: string; slice?: boolean; className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0, rootMargin: "400px 0px" });
  return (
    <div ref={ref} className={className} aria-hidden>
      {inView ? <ProjectIllustration slug={slug} slice={slice} /> : <div className="h-full w-full bg-surface-2" />}
    </div>
  );
}
