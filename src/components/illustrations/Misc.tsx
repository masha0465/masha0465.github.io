import { Arrow, Box, Caption, Frame, Label, Pill, Screen, TextLines } from "./primitives";

/** ClickUp-based team process: board, scrum, knowledge archive, Grafana. */
export function ProcessBoard({ slice }: { slice?: boolean }) {
  const cols = ["Backlog", "In Progress", "Review", "Done"];
  const cards = [3, 2, 2, 4];
  return (
    <Frame title="ClickUp 워크스페이스 기반 팀 프로세스: 보드, 자동화 템플릿, 데일리 스크럼, Knowledge Archive, Grafana 대시보드" slice={slice}>
      <Screen x={40} y={40} w={460} h={300} title="ClickUp · QA Team Workspace" accent>
        {cols.map((c, i) => (
          <g key={c} transform={`translate(${14 + i * 110} 14)`}>
            <Label x={0} y={10} size={10} bold>
              {c}
            </Label>
            {Array.from({ length: cards[i] }).map((_, j) => (
              <g key={j} transform={`translate(0 ${22 + j * 54})`}>
                <rect width={98} height={44} rx={5} className={`fill-surface-2 ${i === 3 ? "stroke-accent" : "stroke-line-strong"}`} strokeWidth={1} />
                <TextLines x={8} y={10} widths={[70, 50]} gap={10} />
                <rect x={8} y={32} width={26} height={5} rx={2} className={i === 3 ? "fill-accent" : "fill-line-strong"} />
              </g>
            ))}
          </g>
        ))}
      </Screen>
      <Box x={530} y={60} w={230} h={54} label="자동화 템플릿" sub="업무 표준화" accent />
      <Box x={530} y={130} w={230} h={54} label="데일리 스크럼" sub="진행 상황 공유" />
      <Box x={530} y={200} w={230} h={54} label="Knowledge Archive" sub="Confluence" />
      <Box x={530} y={270} w={230} h={54} label="Grafana" sub="성능 테스트 환경 표준" />
      <Pill x={40} y={356} text="보고서 주 4h → 2h" tone="accent" />
      <Pill x={220} y={356} text="일정 준수율 85% → 100%" tone="accent" />
      <Caption>팀 프로세스 구성 개념도 (원본 일러스트)</Caption>
    </Frame>
  );
}

/** LINE chatbot with vector search over internal sources; before/after category removal. */
export function ChatbotQa({ slice }: { slice?: boolean }) {
  return (
    <Frame title="LINE 기반 사내 QnA 챗봇: Flask Webhook, OpenAI Vector Storage, Bugs·Cafe·Wiki 소스, 통합 검색 개선" slice={slice}>
      {/* phone */}
      <g transform="translate(60 60)">
        <rect width={150} height={300} rx={14} className="fill-surface stroke-fg" strokeWidth={1.4} />
        <rect x={8} y={18} width={134} height={262} rx={5} className="fill-surface-2" />
        <Label x={75} y={34} anchor="middle" size={9.5} muted>
          LINE · PNP QnA Bot
        </Label>
        <rect x={16} y={48} width={92} height={28} rx={8} className="fill-surface stroke-line-strong" strokeWidth={1} />
        <TextLines x={24} y={58} widths={[70, 50]} gap={8} />
        <rect x={42} y={88} width={92} height={40} rx={8} className="fill-accent-soft stroke-accent" strokeWidth={1} />
        <TextLines x={50} y={98} widths={[76, 60, 40]} gap={9} />
        <rect x={16} y={142} width={100} height={28} rx={8} className="fill-surface stroke-line-strong" strokeWidth={1} />
        <TextLines x={24} y={152} widths={[80, 44]} gap={8} />
        <rect x={16} y={246} width={118} height={22} rx={11} className="fill-surface stroke-line-strong" strokeWidth={1} />
      </g>

      <Arrow x1={210} y1={160} x2={270} y2={160} />
      <Box x={270} y={132} w={130} h={56} label="Flask" sub="Webhook" />
      <Arrow x1={400} y1={160} x2={450} y2={160} />
      <Box x={450} y={122} w={170} h={76} label="OpenAI Assistant" sub="File Search · Vector Storage" accent />
      {["Bugs (Mantis)", "기술카페", "Google Drive", "PNP Wiki"].map((s, i) => (
        <g key={s}>
          <Box x={650} y={60 + i * 56} w={120} h={40} label={s} muted />
          <Arrow x1={650} y1={80 + i * 56} x2={620} y2={160} curve head={false} dashed />
        </g>
      ))}

      <Label x={270} y={250} size={11} bold>
        QA 관점 개선 제안
      </Label>
      <Box x={270} y={262} w={160} h={40} label="카테고리 선택" sub="Bugs / Cafe / Product" dashed muted />
      <Arrow x1={430} y1={282} x2={470} y2={282} accent />
      <Box x={470} y={262} w={160} h={40} label="통합 검색" sub="단일 질의" accent />
      <Pill x={270} y={320} text="기능 · 검색 정확도 · Webhook 안정성 검증" />
      <Pill x={270} y={346} text="개선 전후 응답 품질 비교 검증" tone="accent" />
      <Caption>사내 QnA 챗봇 QA 참여 · 구성 개념도 (원본 일러스트, 기여도 30%)</Caption>
    </Frame>
  );
}
