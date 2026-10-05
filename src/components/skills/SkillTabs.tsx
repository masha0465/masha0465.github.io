"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { ProjectLink } from "@/components/project/ProjectLink";

export type SkillView = {
  name: string;
  note?: string;
  projects: { slug: string; title: string }[];
};
export type CategoryView = {
  id: string;
  label: string;
  labelKo: string;
  description: string;
  skills: SkillView[];
  related: { slug: string; title: string }[];
};

/** Accessible tabs (roving tabindex, arrow keys) over skill categories. */
export function SkillTabs({ categories }: { categories: CategoryView[] }) {
  const [active, setActive] = useState(0);
  const [focusSkill, setFocusSkill] = useState<string | null>(null);
  const baseId = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const n = categories.length;
    let next: number | null = null;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (i + 1) % n;
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (i - 1 + n) % n;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = n - 1;
    if (next !== null) {
      e.preventDefault();
      setActive(next);
      setFocusSkill(null);
      tabRefs.current[next]?.focus();
    }
  };

  const cat = categories[active];
  const selected = focusSkill ? cat.skills.find((s) => s.name === focusSkill) : null;
  const related = selected ? selected.projects : cat.related;

  return (
    <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
      <div role="tablist" aria-label="기술 스택 카테고리" aria-orientation="vertical" className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible">
        {categories.map((c, i) => {
          const on = i === active;
          return (
            <button
              key={c.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              role="tab"
              id={`${baseId}-tab-${c.id}`}
              aria-selected={on}
              aria-controls={`${baseId}-panel-${c.id}`}
              tabIndex={on ? 0 : -1}
              onClick={() => {
                setActive(i);
                setFocusSkill(null);
              }}
              onKeyDown={(e) => onKey(e, i)}
              className={`shrink-0 rounded-lg border px-4 py-3 text-left transition-colors ${
                on ? "border-accent bg-surface text-fg shadow-[0_0_0_3px_var(--accent-soft)]" : "border-line bg-surface text-muted hover:border-line-strong hover:text-fg"
              }`}
            >
              <span className="block font-mono text-[10px] tracking-widest text-muted">{String(i + 1).padStart(2, "0")}</span>
              <span className="mt-0.5 block text-sm font-semibold">{c.label}</span>
              <span className="mt-0.5 hidden text-xs text-muted lg:block">{c.labelKo}</span>
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`${baseId}-panel-${cat.id}`}
        aria-labelledby={`${baseId}-tab-${cat.id}`}
        className="rounded-xl border border-line bg-surface p-6 shadow-card sm:p-7"
      >
        <p className="eyebrow">{cat.label}</p>
        <h3 className="mt-2 text-lg font-semibold tracking-tight">{cat.labelKo}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{cat.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${cat.label} 기술`}>
          {cat.skills.map((s) => {
            const on = focusSkill === s.name;
            const n = s.projects.length;
            return (
              <li key={s.name}>
                <button
                  type="button"
                  aria-pressed={on}
                  onClick={() => setFocusSkill(on ? null : s.name)}
                  title={s.note ?? (n ? `${n}개 프로젝트에서 사용` : undefined)}
                  className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 font-mono text-xs transition-colors ${
                    on ? "border-accent bg-accent-soft text-accent" : "border-line bg-surface-2 text-fg hover:border-line-strong"
                  }`}
                >
                  {s.name}
                  {n ? (
                    <span className={`rounded-sm px-1 text-[10px] ${on ? "bg-accent/20" : "bg-line text-muted"}`}>{n}</span>
                  ) : null}
                </button>
              </li>
            );
          })}
        </ul>

        {selected?.note ? <p className="mt-3 text-xs text-muted">{selected.note}</p> : null}

        <div className="mt-6 border-t border-line pt-5">
          <p className="eyebrow">
            {selected ? `${selected.name} 사용 프로젝트` : "관련 프로젝트"}
            <span className="ml-2 text-accent">{related.length}</span>
          </p>
          {related.length ? (
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {related.map((p) => (
                <li key={p.slug}>
                  <ProjectLink
                    slug={p.slug}
                    className="group flex items-start justify-between gap-2 rounded-lg border border-line bg-bg px-3 py-2 text-sm transition-colors hover:border-line-strong"
                  >
                    <span className="leading-snug">{p.title}</span>
                    <ArrowUpRight className="mt-0.5 size-3.5 shrink-0 text-muted group-hover:text-fg" aria-hidden />
                  </ProjectLink>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-sm text-muted">기술경력서의 기술 스택 항목에 포함되어 있으며, 개별 프로젝트 카드에는 별도 표기되지 않았습니다.</p>
          )}
        </div>
      </div>
    </div>
  );
}
