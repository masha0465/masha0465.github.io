import type { ReactNode } from "react";
import { Reveal } from "@/components/common/Reveal";

type Props = {
  id: string;
  index: string;
  label: string;
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
  /** Wider inner container for dense content (timeline, skills). */
  wide?: boolean;
};

export function Section({ id, index, label, title, description, children, className, wide }: Props) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`scroll-mt-20 py-20 sm:py-24 lg:py-28 ${className ?? ""}`}
    >
      <div className={`mx-auto px-5 sm:px-8 ${wide ? "max-w-6xl" : "max-w-5xl"}`}>
        <Reveal className="mb-10 sm:mb-14">
          <p className="eyebrow">
            {index} <span aria-hidden>—</span> {label}
          </p>
          <h2
            id={`${id}-title`}
            className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            {title}
          </h2>
          {description ? (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {description}
            </p>
          ) : null}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
