"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Chip } from "@/components/common/Chip";
import { StatusBadge } from "@/components/common/StatusBadge";
import { hasIllustration } from "@/components/illustrations";
import { LazyIllustration } from "@/components/illustrations/LazyIllustration";
import { useOpenProjectOnClick } from "@/components/project/ProjectDrawer";
import { formatPeriod } from "@/data/companies";
import type { Project } from "@/data/types";

type Props = { project: Project; index?: number };

/**
 * Tier 1: large emphasised card (spans 2 columns). Tier 2: standard. Tier 3: compact.
 * Clicking navigates to /projects/[slug]/ (Phase 4 adds the in-page drawer).
 */
export function ProjectCard({ project: p }: Props) {
  const featured = p.tier === 1;
  const compact = p.tier === 3;
  const showIllu = hasIllustration(p.slug);
  const onClick = useOpenProjectOnClick(p.slug);

  return (
    <Link
      href={`/projects/${p.slug}/`}
      onClick={onClick}
      aria-label={`${p.title} 상세 보기`}
      className={`group relative flex h-full flex-col rounded-xl border bg-surface shadow-card transition-[transform,border-color,box-shadow] duration-150 hover:-translate-y-0.5 hover:border-line-strong focus-visible:-translate-y-0.5 ${
        featured ? "border-accent/40 p-6 sm:p-7 md:col-span-2" : compact ? "border-line p-5" : "border-line p-5 sm:p-6"
      }`}
    >
      {featured ? (
        <span
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
          aria-hidden
        />
      ) : null}

      {showIllu ? (
        <LazyIllustration
          slug={p.slug}
          slice={featured}
          className={`mb-5 overflow-hidden rounded-lg border border-line ${featured ? "aspect-[16/6]" : "aspect-[16/9]"}`}
        />
      ) : null}

      <div className="flex flex-wrap items-center gap-2">
        <span className="font-mono text-[11px] tracking-wider text-muted">{formatPeriod(p.period)}</span>
        {p.status === "in-progress" ? <StatusBadge status="in-progress" /> : null}
        {featured ? (
          <span className="ml-auto font-mono text-[11px] tracking-widest text-accent">FEATURED</span>
        ) : null}
      </div>

      <h4
        className={`mt-3 font-semibold tracking-tight text-fg ${
          featured ? "text-xl sm:text-2xl" : compact ? "text-base" : "text-lg"
        }`}
      >
        {p.title}
      </h4>
      {!compact ? <p className="mt-1 font-mono text-xs text-muted">{p.titleEn}</p> : null}

      <p className={`mt-3 leading-relaxed text-muted ${compact ? "text-sm" : "text-sm sm:text-[15px]"}`}>
        {p.summary}
      </p>

      <ul className={`mt-4 space-y-1.5 text-fg/90 ${compact ? "text-[13px]" : "text-sm"}`}>
          {p.highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex gap-2">
              <span className="mt-[9px] size-1 shrink-0 rounded-full bg-accent" aria-hidden />
              <span className="leading-relaxed">{h}</span>
            </li>
          ))}
      </ul>

      <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-5">
        {p.tags.map((t) => (
          <Chip key={t} mono className="text-[11px]">
            {t}
          </Chip>
        ))}
        <span className="ml-auto inline-flex items-center gap-1 font-mono text-[11px] tracking-wide text-muted transition-colors group-hover:text-fg">
          Detail
          <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
