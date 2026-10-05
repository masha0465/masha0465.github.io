import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/layout/Section";
import { metrics } from "@/data/metrics";
import { sections } from "@/data/nav";

export function Metrics() {
  return (
    <Section
      id={sections.metrics.id}
      index={sections.metrics.index}
      label="By the Numbers"
      title="숫자로 보는 QA Experience"
      description="모든 수치는 기술경력서에 기록된 실제 프로젝트 결과입니다. 각 카드 하단에 출처 프로젝트를 표시했습니다."
      wide
    >
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {metrics.map((m, i) => (
          <Reveal
            as="li"
            key={`${m.source}-${m.label}`}
            delay={i * 60}
            className="flex flex-col justify-between rounded-xl border border-line bg-surface p-5 shadow-card sm:p-6"
          >
            <p className="flex items-baseline gap-1.5 font-mono tracking-tight">
              <span className="text-3xl font-semibold text-fg sm:text-4xl">{m.value}</span>
              {m.unit ? <span className="text-sm text-accent">{m.unit}</span> : null}
            </p>
            <p className="mt-3 text-sm leading-snug text-fg">{m.label}</p>
            <p className="mt-3 border-t border-line pt-3 font-mono text-[11px] tracking-wide text-muted">
              {m.sourceLabel}
            </p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
