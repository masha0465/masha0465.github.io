import { ArrowDown } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import type { FlowStep } from "@/data/featured";

type Props = {
  steps: FlowStep[];
  /** vertical: always a column. responsive: column on small screens, row on lg+. */
  direction?: "vertical" | "responsive";
  title?: string;
  /** Stagger offset in ms, so several diagrams on one screen do not animate in unison. */
  startDelay?: number;
};

const tones = {
  neutral: "border-line-strong bg-surface",
  accent: "border-accent bg-surface shadow-[0_0_0_3px_var(--accent-soft)]",
  future: "border-line-strong border-dashed bg-surface-2 text-muted",
};

/**
 * Accessible flow diagram built from real text nodes (an ordered list) so it reflows
 * on small screens and is readable by screen readers. Nodes reveal in sequence.
 */
export function FlowDiagram({ steps, direction = "vertical", title, startDelay = 0 }: Props) {
  const row = direction === "responsive";
  return (
    <figure>
      {title ? <figcaption className="eyebrow mb-3">{title}</figcaption> : null}
      <ol
        className={`flex flex-col items-stretch ${row ? "lg:flex-row lg:items-stretch" : ""}`}
        aria-label={title}
      >
        {steps.map((s, i) => {
          const tone = s.tone ?? "neutral";
          const last = i === steps.length - 1;
          return (
            <li key={s.label} className={`flex flex-col ${row ? "lg:flex-1 lg:flex-row lg:items-center" : ""}`}>
              <Reveal
                delay={startDelay + i * 90}
                className={`flex min-h-[64px] flex-1 flex-col justify-center rounded-lg border px-4 py-3 ${tones[tone]}`}
              >
                <p className={`text-sm font-semibold leading-snug ${tone === "future" ? "text-muted" : "text-fg"}`}>
                  <span className="mr-2 font-mono text-[10px] tracking-widest text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.label}
                </p>
                {s.sub ? <p className="mt-1 text-xs leading-relaxed text-muted">{s.sub}</p> : null}
              </Reveal>
              {!last ? (
                <Reveal
                  delay={startDelay + i * 90 + 45}
                  className={`flex items-center justify-center text-line-strong ${
                    row ? "h-6 lg:h-auto lg:w-8 lg:shrink-0" : "h-6"
                  }`}
                  aria-hidden
                >
                  <ArrowDown
                    className={`size-4 ${row ? "lg:-rotate-90" : ""} ${steps[i + 1]?.tone === "future" ? "opacity-50" : ""}`}
                  />
                </Reveal>
              ) : null}
            </li>
          );
        })}
      </ol>
    </figure>
  );
}
