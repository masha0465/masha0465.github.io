import { Caption, Frame, Label, Pill, TextLines } from "./primitives";

const DEVICES = [
  { x: 60, w: 70, h: 130, os: "iOS" },
  { x: 150, w: 78, h: 142, os: "Android" },
  { x: 250, w: 66, h: 120, os: "Android" },
  { x: 336, w: 82, h: 150, os: "iOS" },
  { x: 440, w: 72, h: 134, os: "Android" },
  { x: 534, w: 90, h: 160, os: "Android" },
  { x: 646, w: 70, h: 128, os: "iOS" },
];

/** 20+ mobile devices, iOS/Android, three products. */
export function MobileDevices({ slice }: { slice?: boolean }) {
  return (
    <Frame title="20종 이상의 iOS·Android 단말에서 모바일 앱과 웹 호환성을 검증한 구성" slice={slice}>
      <Label x={40} y={56} size={11} bold>
        NBP 모바일팜 · WANNABE · 네이버북스
      </Label>
      <Label x={40} y={74} size={10} muted>
        기능 · 네트워크 · 단말 호환성 · 현지화
      </Label>
      {DEVICES.map((d, i) => {
        const y = 250 - d.h / 2;
        return (
          <g key={i} transform={`translate(${d.x} ${y})`}>
            <rect width={d.w} height={d.h} rx={10} className={`fill-surface ${i === 3 ? "stroke-accent" : "stroke-fg"}`} strokeWidth={1.4} />
            <rect x={7} y={14} width={d.w - 14} height={d.h - 30} rx={3} className="fill-surface-2" />
            <circle cx={d.w / 2} cy={d.h - 8} r={3} className="fill-line-strong" />
            <TextLines x={13} y={24} widths={[d.w - 30, d.w - 40, d.w - 34]} gap={9} accentIndex={i === 3 ? 0 : undefined} />
            <text x={d.w / 2} y={d.h + 16} textAnchor="middle" className="fill-muted font-mono" style={{ fontSize: 9.5 }}>
              {d.os}
            </text>
          </g>
        );
      })}
      <Pill x={40} y={372} text="20+ 단말 호환성" tone="accent" />
      <Pill x={200} y={372} text="중국 테스터 글로벌 협업 · TL" />
      <Pill x={430} y={372} text="첫 릴리즈 · 일정 100% 준수" />
      <Caption>NHN TS 모바일 QA · 검증 구성 개념도 (원본 일러스트)</Caption>
    </Frame>
  );
}
