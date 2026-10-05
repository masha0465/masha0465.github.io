import { Chip } from "@/components/common/Chip";
import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/layout/Section";
import { companies, formatPeriod } from "@/data/companies";
import { sections } from "@/data/nav";
import { projects, projectsByCompany } from "@/data/projects";
import { ProjectGrid } from "./ProjectGrid";

export function Timeline() {
  return (
    <Section
      id={sections.experience.id}
      index={sections.experience.index}
      label="Career / Experience"
      title={`${companies.length}개 회사, ${projects.length}개 프로젝트`}
      description="최신 경력부터 보여줍니다. 카드를 열면 프로젝트 배경, 해결한 문제, 수행 내용, 결과를 확인할 수 있습니다. 모든 내용은 기술경력서를 근거로 작성했습니다."
      wide
    >
      <ol className="relative">
        {/* rail */}
        <div
          className="absolute bottom-0 left-[7px] top-2 w-px bg-line-strong sm:left-[9px]"
          aria-hidden
        />

        {companies.map((c, idx) => {
          const list = projectsByCompany(c.id);
          const current = !c.period.end;
          return (
            <li
              key={c.id}
              className={`relative pl-8 sm:pl-12 ${idx < companies.length - 1 ? "pb-16 sm:pb-20" : ""}`}
            >
              {/* marker */}
              <span
                className={`absolute left-0 top-1.5 flex size-4 items-center justify-center rounded-full border-2 bg-bg sm:size-5 ${
                  current ? "border-accent" : "border-line-strong"
                }`}
                aria-hidden
              >
                <span
                  className={`size-1.5 rounded-full sm:size-2 ${current ? "bg-accent" : "bg-muted"}`}
                />
              </span>

              <Reveal className="mb-6">
                <p className="font-mono text-xs tracking-wider text-muted">
                  {formatPeriod(c.period)}
                  {current ? (
                    <span className="ml-2 text-accent">● 재직 중</span>
                  ) : null}
                </p>
                <h3 className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    {c.name}
                  </span>
                  <span className="font-mono text-sm text-muted">
                    {c.nameEn}
                  </span>
                </h3>
                <p className="mt-1 text-base text-fg">{c.role}</p>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
                  {c.summary}
                </p>
                <ul
                  className="mt-4 flex flex-wrap gap-1.5"
                  aria-label={`${c.name} Key Focus`}
                >
                  {c.keyFocus.map((k) => (
                    <li key={k}>
                      <Chip tone="accent" mono className="text-[11px]">
                        {k}
                      </Chip>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <ProjectGrid projects={list} companyName={c.name} initial={4} />
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
