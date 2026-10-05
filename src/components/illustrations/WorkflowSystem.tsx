import { Arrow, Box, Caption, Frame, Label, Pill } from "./primitives";

const ROLES = ["개발", "SE", "HW", "QA", "POC", "GS", "임원"];
const AXES = ["Lead", "Access", "Assignee"];
// Illustrative fill pattern only (the real matrix is internal).
const FILL = [
  [1, 1, 1],
  [1, 1, 1],
  [0, 1, 1],
  [1, 1, 1],
  [0, 1, 1],
  [0, 1, 0],
  [0, 1, 0],
];

/** QA system 0→1: Slack → n8n → OpenProject → Work Package, role matrix, expansion ladder. */
export function WorkflowSystem({ slice }: { slice?: boolean }) {
  return (
    <Frame title="QA 체계 및 전사 업무관리 체계: Slack에서 n8n을 거쳐 OpenProject Work Package로 자동 등록되는 흐름, 7개 역할 권한 매트릭스, 확장 단계" slice={slice}>
      {/* top flow */}
      <Box x={40} y={60} w={110} h={54} label="Slack" sub="실시간 커뮤니케이션" />
      <Box x={200} y={60} w={110} h={54} label="n8n" sub="+ ngrok" />
      <Box x={360} y={60} w={130} h={54} label="OpenProject" sub="AWS" accent />
      <Box x={540} y={60} w={110} h={54} label="Work Package" sub="자동 등록" />
      <Box x={690} y={60} w={86} h={54} label="Tracking" sub="Project · Task" />
      <Arrow x1={150} y1={87} x2={200} y2={87} />
      <Arrow x1={310} y1={87} x2={360} y2={87} />
      <Arrow x1={490} y1={87} x2={540} y2={87} />
      <Arrow x1={650} y1={87} x2={690} y2={87} />
      <Label x={40} y={140} size={10} muted>
        Slack 이슈 → Work Package 자동 등록 Workflow · 공식 업무 이력은 OpenProject에 남김
      </Label>

      {/* role matrix */}
      <Label x={40} y={186} size={11} bold>
        7개 역할 × 3축 권한 매트릭스
      </Label>
      <g transform="translate(40 196)">
        {AXES.map((a, j) => (
          <Label key={a} x={76 + j * 54 + 20} y={12} anchor="middle" size={9.5} muted>
            {a}
          </Label>
        ))}
        {ROLES.map((r, i) => (
          <g key={r} transform={`translate(0 ${22 + i * 24})`}>
            <Label x={0} y={13} size={10}>
              {r}
            </Label>
            {FILL[i].map((v, j) => (
              <rect
                key={j}
                x={76 + j * 54}
                y={0}
                width={40}
                height={18}
                rx={3}
                className={v ? "fill-accent-soft stroke-accent" : "fill-surface stroke-line"}
                strokeWidth={1}
              />
            ))}
          </g>
        ))}
      </g>
      <Label x={40} y={400} size={9.5} muted>
        프로젝트 템플릿: 역할별 Workflow · 필수 항목 · 종료 조건
      </Label>

      {/* expansion ladder */}
      <Label x={330} y={186} size={11} bold>
        확장 단계
      </Label>
      {["QA Process", "Issue Management", "Project Management", "Company-wide Task"].map((t, i) => (
        <g key={t}>
          <Box x={330} y={200 + i * 46} w={200} h={34} label={t} accent={i === 0} dashed={i === 3} />
          {i < 3 ? <Arrow x1={430} y1={234 + i * 46} x2={430} y2={246 + i * 46} /> : null}
        </g>
      ))}

      {/* defect standard */}
      <Label x={580} y={186} size={11} bold>
        결함 관리 표준 (ISTQB)
      </Label>
      <Pill x={580} y={200} text="Severity 5단계" />
      <Pill x={580} y={226} text="Priority 4단계" />
      <Pill x={580} y={252} text="Type 분류 · 템플릿" />
      <Label x={580} y={300} size={11} bold>
        도구 비교 · PoC
      </Label>
      <Pill x={580} y={314} text="monday.com" />
      <Pill x={580} y={340} text="Linear" />
      <Pill x={580} y={366} text="OpenProject ✓" tone="accent" />

      <Caption>QA 체계 0 → 1 · 전사 업무관리 체계 구성 개념도 (원본 일러스트)</Caption>
    </Frame>
  );
}
