import { ArrowDown, ArrowUpRight, Bot, ShieldCheck } from "lucide-react";
import { Chip } from "@/components/common/Chip";
import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/layout/Section";
import { ProjectLink } from "@/components/project/ProjectLink";
import { aiPipeline, aiPrinciples, aiVerified } from "@/data/ai";
import { sections } from "@/data/nav";

const tone = {
  neutral: "border-line-strong",
  ai: "border-accent-2/50 bg-accent-2-soft/30",
  accent: "border-accent shadow-[0_0_0_3px_var(--accent-soft)]",
};

export function AiQa() {
  return (
    <Section
      id={sections.aiQa.id}
      index={sections.aiQa.index}
      label="AI-assisted QA"
      title="AI를 개발·분석 가속 도구로 쓰고, 결과는 QA로 검증합니다"
      description="AI가 생성한 결과를 그대로 사용하지 않습니다. 다른 AI 도구와 실제 시스템 실행 결과로 교차 검증하는 것이 QA의 역할입니다. 아래는 EVO-W 테스트 시뮬레이터 프로젝트에서 실제로 사용한 작업 흐름입니다."
      wide
    >
      {/* pipeline */}
      <ol className="flex flex-col lg:flex-row lg:items-stretch" aria-label="AI-assisted QA 작업 흐름">
        {aiPipeline.map((s, i) => {
          const last = i === aiPipeline.length - 1;
          const t = s.tone ?? "neutral";
          return (
            <li key={s.label} className="flex min-w-0 flex-col lg:flex-1 lg:basis-0 lg:flex-row lg:items-stretch">
              <Reveal
                delay={i * 100}
                className={`flex min-w-0 flex-1 flex-col rounded-xl border bg-surface p-4 shadow-card ${tone[t]}`}
              >
                <p className="flex items-start gap-1.5 font-mono text-[10px] leading-tight tracking-widest text-muted">
                  {String(i + 1).padStart(2, "0")}
                  {t === "ai" ? <Bot className="size-3.5 text-accent-2" aria-hidden /> : null}
                  {t === "accent" ? <ShieldCheck className="size-3.5 text-accent" aria-hidden /> : null}
                  <span>{s.role}</span>
                </p>
                <h3 className="mt-2 text-[15px] font-semibold leading-snug">{s.label}</h3>
                <dl className="mt-3 space-y-2 border-t border-line pt-3">
                  {s.fields.map((f) => (
                    <div key={f.k}>
                      <dt className="font-mono text-[10px] tracking-wider text-muted">{f.k}</dt>
                      <dd className="mt-0.5 text-xs leading-relaxed text-fg/90">{f.v}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
              {!last ? (
                <Reveal
                  delay={i * 100 + 50}
                  className="flex h-6 items-center justify-center text-line-strong lg:h-auto lg:w-6 lg:shrink-0"
                  aria-hidden
                >
                  <ArrowDown className="size-4 lg:-rotate-90" />
                </Reveal>
              ) : null}
            </li>
          );
        })}
      </ol>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        {/* principles */}
        <div>
          <Reveal>
            <p className="eyebrow">Principles</p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight">QA 관점의 AI 활용 원칙</h3>
          </Reveal>
          <ol className="mt-5 space-y-3">
            {aiPrinciples.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 80} className="rounded-xl border border-line bg-surface p-5">
                <p className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-semibold">{p.title}</span>
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* verified AI/ML features */}
        <div>
          <Reveal>
            <p className="eyebrow">AI / ML Features I Verified</p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight">AI 결과를 검증한 경험</h3>
            <p className="mt-2 text-sm text-muted">
              AI를 사용하는 것과 별개로, AI/ML 기능이 들어간 제품을 QA 관점에서 검증한 사례입니다.
            </p>
          </Reveal>
          <ul className="mt-5 space-y-3">
            {aiVerified.map((v, i) => (
              <Reveal as="li" key={v.slug} delay={i * 90}>
                <ProjectLink
                  slug={v.slug}
                  className="group block rounded-xl border border-line bg-surface p-5 transition-colors hover:border-line-strong"
                  ariaLabel={`${v.title} 상세 보기`}
                >
                  <p className="flex items-start justify-between gap-3">
                    <span className="font-semibold leading-snug">{v.title}</span>
                    <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{v.body}</p>
                  <span className="mt-3 flex flex-wrap gap-1.5">
                    {v.tags.map((t) => (
                      <Chip key={t} mono className="text-[11px]">
                        {t}
                      </Chip>
                    ))}
                  </span>
                </ProjectLink>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
