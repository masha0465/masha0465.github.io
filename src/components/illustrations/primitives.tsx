import { useId, type ReactNode } from "react";

/**
 * Shared primitives for original system illustrations (line-art, theme-aware).
 * All colours come from CSS variables via Tailwind fill / stroke utility classes, so the
 * drawings follow dark / light mode automatically.
 */

export const VB = { w: 800, h: 450 } as const;

type FrameProps = {
  title: string;
  children: ReactNode;
  className?: string;
  /** Crop to fill the container (used for card thumbnails). */
  slice?: boolean;
};

export function Frame({ title, children, className, slice }: FrameProps) {
  const gridId = useId();
  return (
    <svg
      viewBox={`0 0 ${VB.w} ${VB.h}`}
      role="img"
      aria-label={title}
      preserveAspectRatio={slice ? "xMidYMid slice" : "xMidYMid meet"}
      className={`block h-full w-full ${className ?? ""}`}
    >
      <defs>
        <pattern id={gridId} width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" className="stroke-line" strokeWidth="0.6" />
        </pattern>
      </defs>
      <rect width={VB.w} height={VB.h} className="fill-surface-2" />
      <rect width={VB.w} height={VB.h} fill={`url(#${gridId})`} />
      {children}
    </svg>
  );
}

type BoxProps = {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  sub?: string;
  accent?: boolean;
  dashed?: boolean;
  muted?: boolean;
  children?: ReactNode;
};

/** Labelled rounded box (node). */
export function Box({ x, y, w, h, label, sub, accent, dashed, muted, children }: BoxProps) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect
        width={w}
        height={h}
        rx={8}
        className={`fill-surface ${accent ? "stroke-accent" : muted ? "stroke-line" : "stroke-line-strong"}`}
        strokeWidth={accent ? 1.6 : 1.2}
        strokeDasharray={dashed ? "5 4" : undefined}
      />
      <text
        x={w / 2}
        y={sub ? h / 2 - 3 : h / 2 + 4}
        textAnchor="middle"
        className={`font-mono ${muted ? "fill-muted" : "fill-fg"}`}
        style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: "0.02em" }}
      >
        {label}
      </text>
      {sub ? (
        <text
          x={w / 2}
          y={h / 2 + 13}
          textAnchor="middle"
          className="fill-muted font-mono"
          style={{ fontSize: 10 }}
        >
          {sub}
        </text>
      ) : null}
      {children}
    </g>
  );
}

type ArrowProps = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  dashed?: boolean;
  accent?: boolean;
  /** Draw as a smooth horizontal S-curve instead of a straight line. */
  curve?: boolean;
  head?: boolean;
};

/** Line with a small arrowhead. */
export function Arrow({ x1, y1, x2, y2, dashed, accent, curve, head = true }: ArrowProps) {
  const ang = Math.atan2(y2 - y1, x2 - x1);
  const size = 7;
  const d = curve
    ? `M${x1},${y1} C${(x1 + x2) / 2},${y1} ${(x1 + x2) / 2},${y2} ${x2},${y2}`
    : `M${x1},${y1} L${x2},${y2}`;
  const hx = curve ? x2 : x2;
  const hy = curve ? y2 : y2;
  const a = curve ? 0 : ang;
  const p1 = `${hx},${hy}`;
  const p2 = `${hx - size * Math.cos(a - Math.PI / 6)},${hy - size * Math.sin(a - Math.PI / 6)}`;
  const p3 = `${hx - size * Math.cos(a + Math.PI / 6)},${hy - size * Math.sin(a + Math.PI / 6)}`;
  const cls = accent ? "stroke-accent" : "stroke-line-strong";
  return (
    <g>
      <path d={d} fill="none" className={cls} strokeWidth={1.4} strokeDasharray={dashed ? "5 4" : undefined} />
      {head ? <polygon points={`${p1} ${p2} ${p3}`} className={accent ? "fill-accent" : "fill-line-strong"} /> : null}
    </g>
  );
}

type LabelProps = {
  x: number;
  y: number;
  children: ReactNode;
  size?: number;
  muted?: boolean;
  accent?: boolean;
  anchor?: "start" | "middle" | "end";
  bold?: boolean;
};

export function Label({ x, y, children, size = 11, muted, accent, anchor = "start", bold }: LabelProps) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      className={`font-mono ${accent ? "fill-accent" : muted ? "fill-muted" : "fill-fg"}`}
      style={{ fontSize: size, fontWeight: bold ? 600 : 400, letterSpacing: "0.04em" }}
    >
      {children}
    </text>
  );
}

/** Small caption in the bottom-left corner. */
export function Caption({ children }: { children: ReactNode }) {
  return (
    <Label x={24} y={VB.h - 18} size={10} muted>
      {children}
    </Label>
  );
}

/** Approximate rendered width of monospace text with mixed Latin / CJK characters. */
export function textWidth(text: string, fontSize = 10) {
  let w = 0;
  for (const ch of text) {
    if (/[ᄀ-ᇿ㄰-㆏가-힯一-鿿　-〿＀-￯]/.test(ch)) w += fontSize * 1.05;
    else if (ch === "→" || ch === "×") w += fontSize * 1.0;
    else if (ch === "·" || ch === " " || ch === "•") w += fontSize * 0.5;
    else w += fontSize * 0.66;
  }
  return w;
}

/** Status dot + text, e.g. PLC OK / NG, Mock ON. */
export function Pill({
  x,
  y,
  text,
  tone = "neutral",
}: {
  x: number;
  y: number;
  text: string;
  tone?: "neutral" | "accent" | "warn";
}) {
  const w = textWidth(text, 10) + 26;
  const stroke = tone === "accent" ? "stroke-accent" : tone === "warn" ? "stroke-accent-2" : "stroke-line-strong";
  const dot = tone === "accent" ? "fill-accent" : tone === "warn" ? "fill-accent-2" : "fill-muted";
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width={w} height={20} rx={10} className={`fill-surface ${stroke}`} strokeWidth={1} />
      <circle cx={11} cy={10} r={3} className={dot} />
      <text x={20} y={14} className="fill-fg font-mono" style={{ fontSize: 10 }}>
        {text}
      </text>
    </g>
  );
}

/** Simplified 6-axis industrial robot arm (FANUC-style proportions). */
export function RobotArm({
  x,
  y,
  scale = 1,
  cobot = false,
}: {
  x: number;
  y: number;
  scale?: number;
  cobot?: boolean;
}) {
  // Points: base → shoulder → elbow → wrist → tool
  const sw = cobot ? 9 : 14;
  const joint = cobot ? "fill-accent" : "fill-surface";
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      {/* pedestal */}
      <rect x={-34} y={-8} width={68} height={16} rx={3} className="fill-surface stroke-fg" strokeWidth={1.4} />
      <rect x={-22} y={-40} width={44} height={34} rx={6} className="fill-surface stroke-fg" strokeWidth={1.4} />
      {/* arm segments */}
      <g className="stroke-fg" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M0,-40 L-20,-120" />
        <path d="M-20,-120 L70,-170" />
        <path d="M70,-170 L110,-130" />
      </g>
      {/* joints */}
      <g className={`${joint} stroke-fg`} strokeWidth={1.6}>
        <circle cx={0} cy={-40} r={cobot ? 9 : 12} />
        <circle cx={-20} cy={-120} r={cobot ? 9 : 12} />
        <circle cx={70} cy={-170} r={cobot ? 8 : 11} />
        <circle cx={110} cy={-130} r={cobot ? 7 : 9} />
      </g>
      {/* gripper */}
      <g className="stroke-fg" strokeWidth={3} strokeLinecap="round" fill="none">
        <path d="M110,-130 L118,-108" />
        <path d="M110,-130 L100,-108" />
        <path d="M100,-108 L96,-96" />
        <path d="M118,-108 L122,-96" />
      </g>
    </g>
  );
}

/** 3D camera with a projection cone. */
export function Camera3D({
  x,
  y,
  coneTo,
  label,
}: {
  x: number;
  y: number;
  coneTo: { x: number; y: number; half: number };
  label?: string;
}) {
  return (
    <g>
      <g transform={`translate(${x} ${y})`}>
        <rect x={-30} y={-14} width={60} height={28} rx={5} className="fill-surface stroke-fg" strokeWidth={1.4} />
        <circle cx={-12} cy={0} r={7} className="fill-surface-2 stroke-fg" strokeWidth={1.4} />
        <circle cx={-12} cy={0} r={2.5} className="fill-fg" />
        <circle cx={12} cy={0} r={7} className="fill-surface-2 stroke-fg" strokeWidth={1.4} />
        <circle cx={12} cy={0} r={2.5} className="fill-fg" />
        {/* mount */}
        <path d="M0,-14 L0,-30" className="stroke-fg" strokeWidth={2} />
      </g>
      <path
        d={`M${x - 14},${y + 14} L${coneTo.x - coneTo.half},${coneTo.y} L${coneTo.x + coneTo.half},${coneTo.y} L${x + 14},${y + 14} Z`}
        className="fill-accent-soft stroke-accent"
        strokeWidth={1}
        strokeDasharray="3 3"
      />
      {label ? (
        <Label x={x} y={y - 38} anchor="middle" size={10.5} bold>
          {label}
        </Label>
      ) : null}
    </g>
  );
}

/** PLC cabinet with status LEDs. */
export function PlcCabinet({ x, y, label = "PLC", sub }: { x: number; y: number; label?: string; sub?: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width={78} height={100} rx={6} className="fill-surface stroke-fg" strokeWidth={1.4} />
      <rect x={8} y={8} width={62} height={22} rx={3} className="fill-surface-2 stroke-line-strong" strokeWidth={1} />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <circle
          key={i}
          cx={14 + (i % 3) * 12}
          cy={44 + Math.floor(i / 3) * 14}
          r={3}
          className={i === 0 || i === 4 ? "fill-accent" : "fill-line-strong"}
        />
      ))}
      {[0, 1, 2].map((i) => (
        <rect key={i} x={50} y={40 + i * 12} width={20} height={6} rx={1} className="fill-line-strong" />
      ))}
      <text x={39} y={88} textAnchor="middle" className="fill-fg font-mono" style={{ fontSize: 11, fontWeight: 600 }}>
        {label}
      </text>
      {sub ? (
        <text x={39} y={114} textAnchor="middle" className="fill-muted font-mono" style={{ fontSize: 9.5 }}>
          {sub}
        </text>
      ) : null}
    </g>
  );
}

/** Database cylinder. */
export function Db({ x, y, label, accent }: { x: number; y: number; label: string; accent?: boolean }) {
  const stroke = accent ? "stroke-accent" : "stroke-fg";
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M-22,-16 v30 a22,8 0 0 0 44,0 v-30" className={`fill-surface ${stroke}`} strokeWidth={1.3} />
      <ellipse cx={0} cy={-16} rx={22} ry={8} className={`fill-surface ${stroke}`} strokeWidth={1.3} />
      <text x={0} y={38} textAnchor="middle" className="fill-fg font-mono" style={{ fontSize: 10.5 }}>
        {label}
      </text>
    </g>
  );
}

/** Cloud outline. */
export function Cloud({ x, y, label, accent, w = 110 }: { x: number; y: number; label: string; accent?: boolean; w?: number }) {
  const s = w / 110;
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path
        d="M-40,20 a18,18 0 0 1 2,-36 a26,26 0 0 1 50,-6 a20,20 0 0 1 30,22 a16,16 0 0 1 -6,20 Z"
        className={`fill-surface ${accent ? "stroke-accent" : "stroke-fg"}`}
        strokeWidth={1.3 / s}
        strokeLinejoin="round"
      />
      <text x={0} y={8} textAnchor="middle" className="fill-fg font-mono" style={{ fontSize: 11 / s, fontWeight: 600 }}>
        {label}
      </text>
    </g>
  );
}

/** Screen/window frame with title bar. */
export function Screen({
  x,
  y,
  w,
  h,
  title,
  children,
  accent,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  children?: ReactNode;
  accent?: boolean;
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width={w} height={h} rx={8} className={`fill-surface ${accent ? "stroke-accent" : "stroke-line-strong"}`} strokeWidth={1.3} />
      <path d={`M0,24 H${w}`} className="stroke-line" strokeWidth={1} />
      <circle cx={12} cy={12} r={3} className="fill-line-strong" />
      <circle cx={22} cy={12} r={3} className="fill-line-strong" />
      <circle cx={32} cy={12} r={3} className="fill-line-strong" />
      <text x={w / 2} y={16} textAnchor="middle" className="fill-muted font-mono" style={{ fontSize: 10 }}>
        {title}
      </text>
      <g transform="translate(0 24)">{children}</g>
    </g>
  );
}

/** Horizontal text lines inside a screen (placeholder content). */
export function TextLines({ x, y, widths, gap = 12, accentIndex }: { x: number; y: number; widths: number[]; gap?: number; accentIndex?: number }) {
  return (
    <g>
      {widths.map((w, i) => (
        <rect key={i} x={x} y={y + i * gap} width={w} height={4} rx={2} className={i === accentIndex ? "fill-accent" : "fill-line-strong"} />
      ))}
    </g>
  );
}
