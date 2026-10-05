import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  tone?: "neutral" | "accent" | "warn";
  mono?: boolean;
  className?: string;
};

const tones = {
  neutral: "border-line bg-surface text-fg",
  accent: "border-accent/30 bg-accent-soft text-accent",
  warn: "border-accent-2/30 bg-accent-2-soft text-accent-2",
};

export function Chip({ children, tone = "neutral", mono, className }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs leading-none ${
        mono ? "font-mono tracking-wide" : "font-medium"
      } ${tones[tone]} ${className ?? ""}`}
    >
      {children}
    </span>
  );
}
