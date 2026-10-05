import { Reveal } from "@/components/common/Reveal";
import { growthPath } from "@/data/growth";

/**
 * Career growth path. Horizontal stepper on large screens, vertical rail on small.
 * Steps reveal in sequence as the block scrolls into view.
 */
export function GrowthPath() {
  return (
    <div className="mt-16">
      <Reveal>
        <p className="eyebrow">Career Growth Path</p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
          테스트를 수행하는 사람에서, 테스트 가능한 시스템을 만드는 사람으로
        </h3>
      </Reveal>

      <ol className="relative mt-8 grid gap-6 lg:grid-cols-7 lg:gap-3" aria-label="커리어 확장 단계">
        {/* connector line (desktop) */}
        <div
          className="absolute left-0 right-0 top-[11px] hidden h-px bg-line-strong lg:block"
          aria-hidden
        />
        {growthPath.map((step, i) => (
          <Reveal
            as="li"
            key={step.id}
            delay={i * 90}
            className="relative flex gap-4 lg:block lg:pr-2"
          >
            {/* vertical rail (mobile) */}
            {i < growthPath.length - 1 ? (
              <span
                className="absolute left-[11px] top-6 h-[calc(100%+1.5rem)] w-px bg-line-strong lg:hidden"
                aria-hidden
              />
            ) : null}
            <span
              className={`relative z-10 mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border-2 bg-bg ${
                step.current ? "border-accent" : "border-line-strong"
              }`}
              aria-hidden
            >
              <span
                className={`size-2 rounded-full ${step.current ? "bg-accent" : "bg-muted"}`}
              />
            </span>
            <div className="lg:mt-4">
              <p className="font-mono text-[11px] tracking-wider text-muted">{step.year}</p>
              <p className="mt-1 text-sm font-semibold leading-snug">{step.label}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-muted">{step.evidence}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
