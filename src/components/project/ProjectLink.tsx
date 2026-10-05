"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useOpenProjectOnClick } from "./ProjectDrawer";

/** Link to a project that opens the drawer when inside a ProjectDrawerProvider. */
export function ProjectLink({ slug, className, children, ariaLabel }: { slug: string; className?: string; children: ReactNode; ariaLabel?: string }) {
  const onClick = useOpenProjectOnClick(slug);
  return (
    <Link href={`/projects/${slug}/`} onClick={onClick} className={className} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
