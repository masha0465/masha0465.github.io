import { Chip } from "@/components/common/Chip";
import { StatusBadge } from "@/components/common/StatusBadge";
import { companyById, formatPeriod } from "@/data/companies";
import type { Project } from "@/data/types";
import { ProjectIllustration, hasIllustration } from "@/components/illustrations";
import { ProjectGallery } from "./ProjectGallery";

type Block = { key: keyof Project; label: string; en: string };

/** Detail section order from the design. Blocks without data are skipped. */
const BLOCKS: Block[] = [
  { key: "problem", label: "문제 / 배경", en: "Problem" },
  { key: "approach", label: "접근", en: "Approach" },
  { key: "architecture", label: "기술 구조", en: "Technical Architecture" },
  { key: "testStrategy", label: "테스트 전략", en: "Test Strategy" },
  { key: "implementation", label: "수행 내용", en: "Implementation" },
  { key: "result", label: "결과 / 성과", en: "Result" },
  { key: "learned", label: "배운 점", en: "What I Learned" },
];

export function ProjectDetail({ project: p, titleAs = "h1" }: { project: Project; titleAs?: "h1" | "h2" }) {
  const Title = titleAs;
  const company = companyById[p.company];
  const showIllu = hasIllustration(p.slug);

  return (
    <article>
      {/* Overview */}
      <header>
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs tracking-wider text-muted">{formatPeriod(p.period)}</span>
          <StatusBadge status={p.status === "in-progress" ? "in-progress" : "done"} />
          {p.statusNote ? <span className="text-xs text-muted">{p.statusNote}</span> : null}
        </div>
        <Title className="mt-4 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
          {p.title}
        </Title>
        <p className="mt-2 font-mono text-sm text-muted">{p.titleEn}</p>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-fg sm:text-lg">{p.summary}</p>

        <dl className="mt-6 grid gap-4 rounded-xl border border-line bg-surface p-5 text-sm sm:grid-cols-3">
          <div>
            <dt className="eyebrow">Company</dt>
            <dd className="mt-1.5 font-medium">
              {company.name} <span className="font-mono text-xs text-muted">{company.nameEn}</span>
            </dd>
          </div>
          <div>
            <dt className="eyebrow">My Role</dt>
            <dd className="mt-1.5 font-medium">{p.role}</dd>
          </div>
          <div>
            <dt className="eyebrow">Contribution</dt>
            <dd className="mt-1.5 font-medium">{p.contribution}</dd>
          </div>
        </dl>

        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="주요 기술">
          {p.tech.map((t) => (
            <li key={t}>
              <Chip mono className="text-[11px]">
                {t}
              </Chip>
            </li>
          ))}
        </ul>
      </header>

      {showIllu ? (
        <figure className="mt-8 overflow-hidden rounded-xl border border-line shadow-card">
          <div className="aspect-[16/9]">
            <ProjectIllustration slug={p.slug} />
          </div>
          <figcaption className="border-t border-line bg-surface px-4 py-2.5 font-mono text-[11px] tracking-wide text-muted">
            시스템 구성 개념도 · 경력서 내용을 바탕으로 그린 원본 일러스트 (실제 제품 사진 아님)
          </figcaption>
        </figure>
      ) : null}

      {p.metrics && p.metrics.length > 0 ? (
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3" aria-label="핵심 수치">
          {p.metrics.map((m) => (
            <li key={m.label} className="rounded-xl border border-line bg-surface p-4">
              <p className="font-mono text-2xl font-semibold tracking-tight">{m.value}</p>
              <p className="mt-1 text-xs text-muted">{m.label}</p>
            </li>
          ))}
        </ul>
      ) : null}

      <ProjectGallery images={p.images} title={p.title} />

      {/* Sections */}
      <div className="mt-10 space-y-10">
        {BLOCKS.map((b) => {
          const items = p[b.key] as string[] | undefined;
          if (!items || items.length === 0) return null;
          const isResult = b.key === "result";
          return (
            <section key={b.key} aria-labelledby={`${p.slug}-${b.key}`}>
              <p className="eyebrow">{b.en}</p>
              <h2 id={`${p.slug}-${b.key}`} className="mt-1.5 text-xl font-semibold tracking-tight">
                {b.label}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {items.map((it) => (
                  <li key={it} className="flex gap-3 text-[15px] leading-relaxed text-fg/90">
                    <span
                      className={`mt-[11px] size-1.5 shrink-0 rounded-full ${isResult ? "bg-accent" : "bg-line-strong"}`}
                      aria-hidden
                    />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}

        {p.plan && p.plan.length > 0 ? (
          <section aria-labelledby={`${p.slug}-plan`}>
            <p className="eyebrow">Planned</p>
            <h2 id={`${p.slug}-plan`} className="mt-1.5 text-xl font-semibold tracking-tight">
              예정
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {p.plan.map((it) => (
                <li key={it}>
                  <StatusBadge status="planned" label={it} />
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </article>
  );
}
