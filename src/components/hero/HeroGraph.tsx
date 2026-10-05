import { Reveal } from "@/components/common/Reveal";

/**
 * Decorative node graph: physical dependencies (Robot / PLC / Vision) feed the
 * CleVis workflow, which is isolated behind Mocks into a repeatable test environment.
 * Purely illustrative; data lives in the project pages.
 */
export function HeroGraph() {
  const nodes = {
    robot: { x: 40, y: 40, label: "Robot" },
    plc: { x: 40, y: 150, label: "PLC" },
    vision: { x: 40, y: 260, label: "Vision" },
    workflow: { x: 250, y: 150, label: "Workflow" },
    mock: { x: 440, y: 150, label: "Mock" },
    qa: { x: 440, y: 40, label: "Test Env" },
    ai: { x: 440, y: 260, label: "AI Check" },
  };
  const W = 110;
  const H = 44;

  const edge = (a: { x: number; y: number }, b: { x: number; y: number }, i: number) => {
    const x1 = a.x + W;
    const y1 = a.y + H / 2;
    const x2 = b.x;
    const y2 = b.y + H / 2;
    const cx = (x1 + x2) / 2;
    return (
      <path
        key={i}
        d={`M${x1},${y1} C${cx},${y1} ${cx},${y2} ${x2},${y2}`}
        pathLength={1}
        style={{ ["--draw-delay" as string]: `${200 + i * 120}ms` } as React.CSSProperties}
      />
    );
  };

  return (
    <Reveal draw className="w-full" aria-hidden>
      <svg
        viewBox="0 0 560 350"
        className="h-auto w-full text-muted"
        role="img"
        aria-label="Robot, PLC, Vision 의존성이 Workflow를 거쳐 Mock 기반 테스트 환경으로 분리되는 구조"
      >
        <g fill="none" stroke="currentColor" strokeWidth={1.25} strokeOpacity={0.55}>
          {edge(nodes.robot, nodes.workflow, 0)}
          {edge(nodes.plc, nodes.workflow, 1)}
          {edge(nodes.vision, nodes.workflow, 2)}
          {edge(nodes.workflow, nodes.qa, 3)}
          {edge(nodes.workflow, nodes.mock, 4)}
          {edge(nodes.workflow, nodes.ai, 5)}
        </g>
        {Object.entries(nodes).map(([key, n]) => {
          const highlight = key === "mock" || key === "workflow";
          return (
            <g key={key} transform={`translate(${n.x} ${n.y})`}>
              <rect
                width={W}
                height={H}
                rx={8}
                className={highlight ? "fill-surface stroke-accent" : "fill-surface stroke-line-strong"}
                strokeWidth={1.25}
              />
              <circle cx={14} cy={H / 2} r={3} className={highlight ? "fill-accent" : "fill-muted"} />
              <text
                x={28}
                y={H / 2 + 4}
                className="fill-fg font-mono"
                style={{ fontSize: 12, letterSpacing: "0.04em" }}
              >
                {n.label}
              </text>
            </g>
          );
        })}
        <text x={40} y={330} className="fill-muted font-mono" style={{ fontSize: 10, letterSpacing: "0.12em" }}>
          DEPENDENCIES → WORKFLOW → MOCK → REPEATABLE TESTS
        </text>
      </svg>
    </Reveal>
  );
}
