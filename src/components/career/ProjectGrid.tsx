"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import type { Project } from "@/data/types";
import { ProjectCard } from "./ProjectCard";

type Props = { projects: Project[]; initial?: number; companyName: string };

/** Shows the first `initial` projects; the rest expand with "더 보기". */
export function ProjectGrid({ projects, initial = 4, companyName }: Props) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? projects : projects.slice(0, initial);
  const hidden = projects.length - visible.length;

  return (
    <div>
      <ul className="grid gap-4 md:grid-cols-2">
        {visible.map((p, i) => (
          <Reveal
            as="li"
            key={p.slug}
            delay={Math.min(i, 3) * 70}
            className={p.tier === 1 ? "md:col-span-2" : undefined}
          >
            <ProjectCard project={p} index={i} />
          </Reveal>
        ))}
      </ul>
      {hidden > 0 ? (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          className="mt-4 inline-flex items-center gap-2 rounded-md border border-line bg-surface px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-line-strong hover:text-fg"
          aria-label={`${companyName} 프로젝트 ${hidden}개 더 보기`}
        >
          프로젝트 {hidden}개 더 보기
          <ChevronDown className="size-4" aria-hidden />
        </button>
      ) : null}
    </div>
  );
}
