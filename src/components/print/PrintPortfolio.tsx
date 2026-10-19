import { ProjectIllustration, hasIllustration } from "@/components/illustrations";
import { aiPipeline, aiPrinciples, aiVerified } from "@/data/ai";
import { certs, education } from "@/data/certs";
import { companies, formatPeriod } from "@/data/companies";
import { featuredBlocks } from "@/data/featured";
import { growthPath } from "@/data/growth";
import { metrics } from "@/data/metrics";
import { about, profile } from "@/data/profile";
import { projectBySlug, projects, projectsByCompany } from "@/data/projects";
import { skillCategories } from "@/data/skills";
import type { Project } from "@/data/types";

/**
 * Print-only rendition of the whole portfolio (no animation, light theme, A4 page breaks).
 * Rendered at /print and converted to public/portfolio.pdf by scripts/pdf.mjs.
 * Same data files as the website, so the PDF never drifts from the site.
 */

const SITE = "masha0465.github.io";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">{children}</p>;
}

function H2({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="mb-5 border-b border-line pb-2">
      <Eyebrow>{index}</Eyebrow>
      <h2 className="mt-1 text-[22px] font-semibold tracking-tight">{children}</h2>
    </div>
  );
}

function Bullets({ items, accent }: { items: string[]; accent?: boolean }) {
  return (
    <ul className="space-y-1">
      {items.map((it) => (
        <li key={it} className="flex gap-2 text-[11px] leading-[1.55] text-fg/90">
          <span className={`mt-[7px] size-1 shrink-0 rounded-full ${accent ? "bg-accent" : "bg-line-strong"}`} aria-hidden />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

function Chips({ items }: { items: readonly string[] }) {
  return (
    <p className="flex flex-wrap gap-1">
      {items.map((t) => (
        <span key={t} className="rounded border border-line bg-surface-2 px-1.5 py-0.5 font-mono text-[9.5px]">
          {t}
        </span>
      ))}
    </p>
  );
}

function Status({ p }: { p: Project }) {
  return p.status === "in-progress" ? (
    <span className="rounded border border-accent-2/40 bg-accent-2-soft px-1.5 py-0.5 font-mono text-[9px] text-accent-2">
      In Progress{p.statusNote ? ` · ${p.statusNote}` : ""}
    </span>
  ) : null;
}

const DETAIL_BLOCKS: { key: keyof Project; label: string }[] = [
  { key: "problem", label: "Problem · 문제 / 배경" },
  { key: "approach", label: "Approach · 접근" },
  { key: "architecture", label: "Technical Architecture · 기술 구조" },
  { key: "testStrategy", label: "Test Strategy · 테스트 전략" },
  { key: "implementation", label: "Implementation · 수행 내용" },
  { key: "result", label: "Result · 결과 / 성과" },
];

export function PrintPortfolio() {
  const generated = "2026.10";
  return (
    <div className="print-root mx-auto max-w-[720px] bg-bg px-10 py-10 text-fg" data-theme="light">
      {/* ---------------- Cover ---------------- */}
      <section className="flex min-h-[240mm] flex-col justify-between">
        <div>
          <Eyebrow>Portfolio · QA Engineer · 10 Years of Software QA</Eyebrow>
          <h1 className="mt-8 text-[44px] font-semibold leading-[1.05] tracking-tight">
            Building Testable Systems,
            <br />
            <span className="text-muted">Not Just Tests.</span>
          </h1>
          <p className="mt-6 text-[15px] text-muted">{profile.tagline.ko}</p>
          <p className="mt-10 flex items-baseline gap-3">
            <span className="text-[26px] font-semibold tracking-tight">{profile.nameKo}</span>
            <span className="font-mono text-sm text-muted">{profile.nameEn} · {profile.title}</span>
          </p>
          <div className="mt-5">
            <Chips items={profile.focus} />
          </div>
          <p className="mt-10 max-w-[560px] text-[12px] leading-relaxed text-fg/90">{profile.intro}</p>
        </div>
        <div className="grid grid-cols-2 gap-4 border-t border-line pt-5 font-mono text-[10.5px] text-muted">
          <div>
            <p>Email · {profile.links.email}</p>
            <p>LinkedIn · linkedin.com/in/masha-sunah-kim</p>
            <p>GitHub · github.com/masha0465</p>
          </div>
          <div className="text-right">
            <p>Web · {SITE}</p>
            <p>이 문서는 웹 포트폴리오와 같은 데이터로 생성되었습니다.</p>
            <p>{generated} 기준</p>
          </div>
        </div>
      </section>

      {/* ---------------- About ---------------- */}
      <section className="page-break">
        <H2 index="01 — About">10년의 QA, 그리고 검증 범위의 확장</H2>
        <div className="grid grid-cols-3 gap-3">
          {about.map((c) => (
            <div key={c.index} className="avoid-break rounded-lg border border-line bg-surface p-3.5">
              <p className="font-mono text-[10px] text-accent">{c.index}</p>
              <p className="mt-1 text-[12.5px] font-semibold">{c.title}</p>
              <p className="mt-1.5 text-[10.5px] leading-[1.55] text-muted">{c.body}</p>
            </div>
          ))}
        </div>

        <Eyebrow>
          <span className="mt-6 block">Career Growth Path</span>
        </Eyebrow>
        <p className="mt-1 text-[14px] font-semibold">테스트를 수행하는 사람에서, 테스트 가능한 시스템을 만드는 사람으로</p>
        <ol className="mt-3 space-y-1.5">
          {growthPath.map((s, i) => (
            <li key={s.id} className="flex gap-3 text-[11px]">
              <span className={`w-16 shrink-0 font-mono text-[10px] ${s.current ? "text-accent" : "text-muted"}`}>{s.year}</span>
              <span className="w-56 shrink-0 font-semibold">
                {String(i + 1).padStart(2, "0")} {s.label}
              </span>
              <span className="text-muted">{s.evidence}</span>
            </li>
          ))}
        </ol>

        <H2 index="02 — By the Numbers">숫자로 보는 QA Experience</H2>
        <div className="grid grid-cols-4 gap-2.5">
          {metrics.map((m) => (
            <div key={m.label} className="avoid-break rounded-lg border border-line bg-surface p-3">
              <p className="font-mono">
                <span className="text-[20px] font-semibold">{m.value}</span>
                {m.unit ? <span className="ml-1 text-[10px] text-accent">{m.unit}</span> : null}
              </p>
              <p className="mt-1 text-[10px] leading-snug">{m.label}</p>
              <p className="mt-1.5 border-t border-line pt-1.5 font-mono text-[8.5px] text-muted">{m.sourceLabel}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- Career ---------------- */}
      <section className="page-break">
        <H2 index="03 — Career / Experience">
          {companies.length}개 회사, {projects.length}개 프로젝트
        </H2>
        {companies.map((c) => {
          const list = projectsByCompany(c.id);
          return (
            <div key={c.id} className="mb-7">
              <div className="avoid-break border-l-2 border-accent pl-3">
                <p className="font-mono text-[10px] text-muted">
                  {formatPeriod(c.period)}
                  {!c.period.end ? " · 재직 중" : ""}
                </p>
                <p className="text-[16px] font-semibold tracking-tight">
                  {c.name} <span className="font-mono text-[11px] font-normal text-muted">{c.nameEn}</span>
                </p>
                <p className="text-[11px]">{c.role}</p>
                <p className="mt-1 text-[10.5px] leading-[1.55] text-muted">{c.summary}</p>
                <div className="mt-1.5">
                  <Chips items={c.keyFocus} />
                </div>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2.5">
                {list.map((p) => (
                  <div
                    key={p.slug}
                    className={`avoid-break rounded-lg border bg-surface p-3 ${p.tier === 1 ? "col-span-2 border-accent/50" : "border-line"}`}
                  >
                    <p className="flex flex-wrap items-center gap-1.5 font-mono text-[9.5px] text-muted">
                      {formatPeriod(p.period)}
                      <Status p={p} />
                      {p.tier === 1 ? <span className="ml-auto text-accent">FEATURED</span> : null}
                    </p>
                    <p className="mt-1 text-[12px] font-semibold leading-snug">{p.title}</p>
                    <p className="font-mono text-[9px] text-muted">{p.titleEn}</p>
                    <p className="mt-1.5 text-[10.5px] leading-[1.5] text-muted">{p.summary}</p>
                    <div className="mt-1.5">
                      <Bullets items={p.highlights} accent />
                    </div>
                    <div className="mt-2">
                      <Chips items={p.tags} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* ---------------- Featured ---------------- */}
      <section className="page-break">
        <H2 index="04 — Featured Systems">테스트를 수행하는 일에서, 테스트 가능한 시스템을 만드는 일로</H2>
        {featuredBlocks.map((b) => {
          const p = projectBySlug[b.slug];
          return (
            <div key={b.slug} className="mb-4 rounded-lg border border-accent/40 bg-surface p-3.5">
              <Eyebrow>{b.eyebrow}</Eyebrow>
              <p className="mt-1 text-[15px] font-semibold leading-snug">{b.headline}</p>
              <p className="font-mono text-[9.5px] text-muted">
                {p.title} · {formatPeriod(p.period)}
              </p>
              <p className="mt-2 text-[10.5px] leading-[1.55] text-fg/90">{b.lead}</p>
              <div className="mt-2">
                <Chips items={b.facts} />
              </div>
              <div className="avoid-break mt-3 grid grid-cols-2 gap-4">
                <div>
                  <Eyebrow>Problem</Eyebrow>
                  <div className="mt-1">
                    <Bullets items={b.problem} />
                  </div>
                </div>
                <div>
                  <Eyebrow>Approach</Eyebrow>
                  <div className="mt-1">
                    <Bullets items={b.approach} accent />
                  </div>
                </div>
              </div>
              {b.flows.map((f) => (
                <div key={f.title} className="avoid-break mt-2.5">
                  <Eyebrow>{f.title}</Eyebrow>
                  <ol className="mt-1 flex flex-wrap items-center gap-1 text-[10px]">
                    {f.steps.map((s, i) => (
                      <li key={s.label} className="flex items-center gap-1">
                        <span
                          className={`rounded border px-1.5 py-0.5 ${
                            s.tone === "accent"
                              ? "border-accent bg-accent-soft"
                              : s.tone === "future"
                                ? "border-dashed border-line-strong text-muted"
                                : "border-line bg-surface-2"
                          }`}
                        >
                          <span className="mr-1 font-mono text-[8.5px] text-muted">{String(i + 1).padStart(2, "0")}</span>
                          {s.label}
                        </span>
                        {i < f.steps.length - 1 ? <span className="text-muted">→</span> : null}
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          );
        })}
      </section>

      {/* ---------------- AI ---------------- */}
      <section className="page-break">
        <H2 index="05 — AI-assisted QA">AI를 개발·분석 가속 도구로 쓰고, 결과는 QA로 검증합니다</H2>
        <ol className="grid grid-cols-5 gap-2">
          {aiPipeline.map((s, i) => (
            <li
              key={s.label}
              className={`avoid-break rounded-lg border bg-surface p-2.5 ${
                s.tone === "accent" ? "border-accent" : s.tone === "ai" ? "border-accent-2/50" : "border-line"
              }`}
            >
              <p className="font-mono text-[8.5px] text-muted">
                {String(i + 1).padStart(2, "0")} · {s.role}
              </p>
              <p className="mt-1 text-[11px] font-semibold leading-snug">{s.label}</p>
              <dl className="mt-1.5 space-y-1 border-t border-line pt-1.5">
                {s.fields.map((f) => (
                  <div key={f.k}>
                    <dt className="font-mono text-[8px] text-muted">{f.k}</dt>
                    <dd className="text-[9.5px] leading-snug">{f.v}</dd>
                  </div>
                ))}
              </dl>
            </li>
          ))}
        </ol>
        <div className="mt-5 grid grid-cols-2 gap-4">
          <div>
            <Eyebrow>Principles</Eyebrow>
            <ol className="mt-1.5 space-y-1.5">
              {aiPrinciples.map((p, i) => (
                <li key={p.title} className="text-[10.5px] leading-[1.5]">
                  <span className="font-mono text-accent">{String(i + 1).padStart(2, "0")}</span> <span className="font-semibold">{p.title}</span>
                  <span className="text-muted"> · {p.body}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <Eyebrow>AI / ML Features I Verified</Eyebrow>
            <ul className="mt-1.5 space-y-1.5">
              {aiVerified.map((v) => (
                <li key={v.slug} className="text-[10.5px] leading-[1.5]">
                  <span className="font-semibold">{v.title}</span>
                  <span className="text-muted"> · {v.body}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <H2 index="06 — Tech Stack">실무에서 사용한 기술</H2>
        <div className="grid grid-cols-2 gap-3">
          {skillCategories.map((c) => (
            <div key={c.id} className="avoid-break rounded-lg border border-line bg-surface p-3">
              <p className="text-[12px] font-semibold">
                {c.label} <span className="font-normal text-muted">· {c.labelKo}</span>
              </p>
              <p className="mt-1 text-[10px] leading-snug text-muted">{c.description}</p>
              <div className="mt-2">
                <Chips items={c.skills.map((s) => s.name)} />
              </div>
            </div>
          ))}
        </div>

        <H2 index="07 — Certifications & Education">자격과 학력</H2>
        <div className="grid grid-cols-2 gap-3">
          <ul className="space-y-1.5">
            {certs.map((c) => (
              <li key={c.name} className="flex items-baseline gap-2 text-[11px]">
                <span className="w-16 shrink-0 font-mono text-[10px] text-muted">{c.date}</span>
                <span className="font-semibold">{c.name}</span>
                <span className="text-muted">· {c.issuer}</span>
              </li>
            ))}
          </ul>
          <div className="text-[11px]">
            <p className="font-semibold">{education.school}</p>
            <p className="text-muted">{education.major}</p>
            <p className="font-mono text-[10px] text-muted">{education.period}</p>
          </div>
        </div>
      </section>

      {/* ---------------- Appendix: project details ---------------- */}
      {projects.map((p, idx) => {
        const company = companies.find((c) => c.id === p.company)!;
        return (
          <section key={p.slug} className="page-break">
            <Eyebrow>
              Appendix {String(idx + 1).padStart(2, "0")} / {projects.length} · {company.name} · {formatPeriod(p.period)}
            </Eyebrow>
            <h2 className="mt-1.5 text-[19px] font-semibold leading-tight tracking-tight">{p.title}</h2>
            <p className="font-mono text-[10px] text-muted">{p.titleEn}</p>
            <p className="mt-2 flex flex-wrap items-center gap-1.5">
              <Status p={p} />
            </p>
            <p className="mt-2 text-[11px] leading-[1.55]">{p.summary}</p>
            <dl className="mt-3 grid grid-cols-3 gap-3 rounded-lg border border-line bg-surface p-3 text-[10px]">
              <div>
                <dt className="font-mono text-[8.5px] uppercase tracking-wider text-muted">Role</dt>
                <dd className="mt-0.5 font-semibold">{p.role}</dd>
              </div>
              <div>
                <dt className="font-mono text-[8.5px] uppercase tracking-wider text-muted">Contribution</dt>
                <dd className="mt-0.5 font-semibold">{p.contribution}</dd>
              </div>
              <div>
                <dt className="font-mono text-[8.5px] uppercase tracking-wider text-muted">Tech</dt>
                <dd className="mt-0.5 leading-snug">{p.tech.join(" · ")}</dd>
              </div>
            </dl>
            {p.metrics?.length ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {p.metrics.map((m) => (
                  <span key={m.label} className="rounded border border-line bg-surface-2 px-2 py-1 font-mono text-[10px]">
                    <span className="font-semibold">{m.value}</span> <span className="text-muted">{m.label}</span>
                  </span>
                ))}
              </div>
            ) : null}
            {hasIllustration(p.slug) ? (
              <figure className="avoid-break mt-3 overflow-hidden rounded-lg border border-line">
                <div className="aspect-[16/9]">
                  <ProjectIllustration slug={p.slug} />
                </div>
                <figcaption className="border-t border-line bg-surface px-3 py-1.5 font-mono text-[8.5px] text-muted">
                  시스템 구성 개념도 · 원본 일러스트 (실제 제품 사진 아님)
                </figcaption>
              </figure>
            ) : null}
            <div className="mt-4 space-y-3">
              {DETAIL_BLOCKS.map((b) => {
                const items = p[b.key] as string[] | undefined;
                if (!items?.length) return null;
                return (
                  <div key={b.key} className="avoid-break">
                    <Eyebrow>{b.label}</Eyebrow>
                    <div className="mt-1">
                      <Bullets items={items} accent={b.key === "result"} />
                    </div>
                  </div>
                );
              })}
              {p.plan?.length ? (
                <div className="avoid-break">
                  <Eyebrow>Planned · 예정</Eyebrow>
                  <div className="mt-1">
                    <Chips items={p.plan} />
                  </div>
                </div>
              ) : null}
            </div>
          </section>
        );
      })}
    </div>
  );
}
