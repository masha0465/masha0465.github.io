import { ArrowUpRight } from "lucide-react";
import { Chip } from "@/components/common/Chip";
import { Reveal } from "@/components/common/Reveal";
import { StatusBadge } from "@/components/common/StatusBadge";
import { FlowDiagram } from "@/components/diagrams/FlowDiagram";
import { Section } from "@/components/layout/Section";
import { ProjectLink } from "@/components/project/ProjectLink";
import { formatPeriod } from "@/data/companies";
import { featuredBlocks } from "@/data/featured";
import { sections } from "@/data/nav";
import { projectBySlug } from "@/data/projects";

export function Featured() {
  return (
    <Section
      id={sections.featured.id}
      index={sections.featured.index}
      label="Featured Systems"
      title="테스트를 수행하는 일에서, 테스트 가능한 시스템을 만드는 일로"
      description="현재 진행 중인 두 프로젝트입니다. 완성된 결과물이 아니라, 테스트가 어려웠던 영역을 테스트 가능한 구조로 바꾸어 가는 과정과 설계를 보여줍니다."
      wide
    >
      <div className="space-y-8">
        {featuredBlocks.map((b, bi) => {
          const p = projectBySlug[b.slug];
          const side = b.layout === "side";
          return (
            <article
              key={b.slug}
              aria-labelledby={`featured-${b.slug}`}
              className="relative overflow-hidden rounded-2xl border border-accent/30 bg-surface p-6 shadow-card sm:p-8 lg:p-10"
            >
              <span
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
                aria-hidden
              />
              <div className={side ? "grid gap-10 lg:grid-cols-[1.1fr_1fr]" : "space-y-10"}>
                {/* text */}
                <div>
                  <Reveal>
                    <p className="eyebrow">{b.eyebrow}</p>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs tracking-wider text-muted">{formatPeriod(p.period)}</span>
                      <StatusBadge status={p.status === "in-progress" ? "in-progress" : "done"} />
                      {p.statusNote ? <span className="text-xs text-muted">{p.statusNote}</span> : null}
                    </div>
                    <h3 id={`featured-${b.slug}`} className="mt-4 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                      {b.headline}
                    </h3>
                    <p className="mt-2 font-mono text-sm text-muted">{p.title}</p>
                    <p className="mt-5 text-[15px] leading-relaxed text-fg/90">{b.lead}</p>
                  </Reveal>

                  <div className={`mt-8 grid gap-6 ${side ? "" : "md:grid-cols-2"}`}>
                    <Reveal delay={80}>
                      <p className="eyebrow">Problem</p>
                      <ul className="mt-3 space-y-2">
                        {b.problem.map((t) => (
                          <li key={t} className="flex gap-2.5 text-sm leading-relaxed text-fg/90">
                            <span className="mt-[9px] size-1.5 shrink-0 rounded-full bg-accent-2" aria-hidden />
                            {t}
                          </li>
                        ))}
                      </ul>
                    </Reveal>
                    <Reveal delay={140}>
                      <p className="eyebrow">Approach</p>
                      <ul className="mt-3 space-y-2">
                        {b.approach.map((t) => (
                          <li key={t} className="flex gap-2.5 text-sm leading-relaxed text-fg/90">
                            <span className="mt-[9px] size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                            {t}
                          </li>
                        ))}
                      </ul>
                    </Reveal>
                  </div>

                  <Reveal delay={200} className="mt-8 flex flex-wrap items-center gap-2">
                    {b.facts.map((f) => (
                      <Chip key={f} mono tone={f.startsWith("In Progress") ? "warn" : f.startsWith("Planned") ? "neutral" : "accent"}>
                        {f}
                      </Chip>
                    ))}
                  </Reveal>

                  <Reveal delay={240} className="mt-8">
                    <ProjectLink
                      slug={b.slug}
                      className="inline-flex items-center gap-2 rounded-md bg-fg px-4 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
                      ariaLabel={`${p.title} 상세 보기`}
                    >
                      프로젝트 상세
                      <ArrowUpRight className="size-4" aria-hidden />
                    </ProjectLink>
                  </Reveal>
                </div>

                {/* diagrams */}
                <div className={side ? "lg:border-l lg:border-line lg:pl-10" : "grid gap-8 border-t border-line pt-8"}>
                  {b.flows.map((f, fi) => (
                    <FlowDiagram
                      key={f.title}
                      title={f.title}
                      steps={f.steps}
                      direction={side ? "vertical" : "responsive"}
                      startDelay={bi * 60 + fi * 200}
                    />
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
