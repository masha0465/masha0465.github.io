import { Arrow, Box, Caption, Frame, Label, Pill } from "./primitives";

function Pod({ x, y, label, accent }: { x: number; y: number; label: string; accent?: boolean }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path
        d="M14,0 L26,7 L26,21 L14,28 L2,21 L2,7 Z"
        className={`fill-surface ${accent ? "stroke-accent" : "stroke-fg"}`}
        strokeWidth={1.3}
      />
      <text x={34} y={18} className="fill-fg font-mono" style={{ fontSize: 10 }}>
        {label}
      </text>
    </g>
  );
}

/** On-premise Kubernetes cluster (1 master, 2 workers) replacing Docker-based test environments. */
export function K8sCluster({ slice }: { slice?: boolean }) {
  return (
    <Frame title="온프레미스 Kubernetes 테스트 환경: Master 1대, Worker 2대, DB Pod 배치 및 Docker 환경에서의 전환" slice={slice}>
      {/* before */}
      <Label x={40} y={60} size={11} bold>
        Before · Docker 단일 호스트
      </Label>
      <rect x={40} y={74} width={190} height={120} rx={8} className="fill-surface stroke-line-strong" strokeWidth={1.2} strokeDasharray="5 4" />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${56 + i * 56} 100)`}>
          <rect width={44} height={30} rx={4} className="fill-surface-2 stroke-line-strong" strokeWidth={1} />
          <text x={22} y={19} textAnchor="middle" className="fill-muted font-mono" style={{ fontSize: 9 }}>
            DB
          </text>
        </g>
      ))}
      <Label x={56} y={160} size={9.5} muted>
        배포 2시간 · 환경 1개
      </Label>
      <Label x={56} y={176} size={9.5} muted>
        리소스 관리 어려움
      </Label>
      <Arrow x1={230} y1={134} x2={290} y2={134} accent />

      {/* cluster */}
      <rect x={290} y={40} width={470} height={330} rx={12} className="fill-surface stroke-accent" strokeWidth={1.4} />
      <Label x={306} y={62} size={11} bold accent>
        Kubernetes Cluster · 3 PCs on-premise
      </Label>

      <Box x={430} y={80} w={190} h={54} label="Master" sub="control plane · API server" accent />
      <Arrow x1={500} y1={134} x2={400} y2={176} curve />
      <Arrow x1={550} y1={134} x2={650} y2={176} curve />

      {[
        { x: 306, label: "Worker 1" },
        { x: 556, label: "Worker 2" },
      ].map((w) => (
        <g key={w.label}>
          <rect x={w.x} y={176} width={190} height={150} rx={8} className="fill-surface-2 stroke-fg" strokeWidth={1.2} />
          <Label x={w.x + 12} y={196} size={10.5} bold>
            {w.label}
          </Label>
          <Pod x={w.x + 12} y={210} label="Pod · DB" accent />
          <Pod x={w.x + 12} y={246} label="Pod · Service" />
          <Pod x={w.x + 12} y={282} label="Pod · Test" />
        </g>
      ))}

      <Pill x={306} y={338} text="배포 · 스케일링 · 장애 복구 테스트" />
      <Pill x={556} y={338} text="2h → 48m · 환경 1 → 3" tone="accent" />

      <Label x={40} y={236} size={11} bold>
        구축 가이드 문서화
      </Label>
      <Label x={40} y={254} size={9.5} muted>
        연구소 · QA실 전사 공유
      </Label>

      <Caption>사내 Kubernetes 테스트 환경 · 구성 개념도 (원본 일러스트)</Caption>
    </Frame>
  );
}
