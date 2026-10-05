import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/layout/Section";
import { sections } from "@/data/nav";
import { about } from "@/data/profile";
import { GrowthPath } from "./GrowthPath";

export function About() {
  return (
    <Section
      id={sections.about.id}
      index={sections.about.index}
      label="About"
      title="10년의 QA, 그리고 검증 범위의 확장"
      description="단순히 테스트 케이스를 실행하는 QA가 아니라, 복잡한 시스템을 구조화하고 테스트 가능한 환경을 만들며, 자동화와 AI를 활용해 품질 시스템 자체를 구축합니다."
      wide
    >
      <div className="grid gap-4 md:grid-cols-3">
        {about.map((card, i) => (
          <Reveal
            key={card.index}
            delay={i * 80}
            className="flex flex-col rounded-xl border border-line bg-surface p-6 shadow-card"
          >
            <p className="font-mono text-xs tracking-widest text-accent">{card.index}</p>
            <h3 className="mt-3 text-lg font-semibold tracking-tight">{card.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{card.body}</p>
            {"chain" in card ? (
              <ol className="mt-5 flex flex-wrap items-center gap-x-1.5 gap-y-2 border-t border-line pt-4 font-mono text-[11px] tracking-wide">
                {card.chain.map((c, j) => (
                  <li key={c} className="flex items-center gap-1.5">
                    <span className={j === card.chain.length - 1 ? "text-accent" : "text-fg"}>{c}</span>
                    {j < card.chain.length - 1 ? (
                      <ArrowRight className="size-3 text-muted" aria-hidden />
                    ) : null}
                  </li>
                ))}
              </ol>
            ) : null}
          </Reveal>
        ))}
      </div>

      <GrowthPath />
    </Section>
  );
}
