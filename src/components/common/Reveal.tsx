"use client";

import type { ElementType, ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

type Props = {
  children: ReactNode;
  /** Delay in ms applied via CSS variable. */
  delay?: number;
  as?: ElementType;
  className?: string;
  /** Use `data-draw` behaviour (SVG stroke animation) instead of fade/slide. */
  draw?: boolean;
};

/** Wraps children and toggles `.is-visible` when the element scrolls into view. */
export function Reveal({ children, delay = 0, as: Tag = "div", className, draw }: Props) {
  const { ref, inView } = useInView<HTMLElement>();
  const attr = draw ? { "data-draw": "" } : { "data-reveal": "" };
  return (
    <Tag
      ref={ref}
      {...attr}
      className={`${className ?? ""}${inView ? " is-visible" : ""}`}
      style={
        delay
          ? ({ ["--reveal-delay" as string]: `${delay}ms`, ["--draw-delay" as string]: `${delay}ms` } as React.CSSProperties)
          : undefined
      }
    >
      {children}
    </Tag>
  );
}
