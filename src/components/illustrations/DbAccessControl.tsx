import { Arrow, Box, Caption, Db, Frame, Label, Pill, Screen, TextLines } from "./primitives";

export type DbVariant = "e2e" | "api" | "release" | "db";

const VARIANTS: Record<DbVariant, { title: string; bottom: string; pills: string[]; screen: string }> = {
  e2e: {
    title: "DBSAFER 접근제어 구조와 Playwright E2E 자동화, CI/CD 품질 게이트",
    bottom: "Playwright + TypeScript E2E",
    pills: ["Page Object 12", "Protocol Helper 4종", "GitLab CI 품질 게이트"],
    screen: "Web Manager · Policy",
  },
  api: {
    title: "DBSAFER REST API 테스트 자동화 전환: Postman에서 Newman, Jenkins로",
    bottom: "Postman → Newman 자동화",
    pills: ["TC 78 · API Docs 정합성", "Jenkins 커밋 트리거", "8h → 2.4h"],
    screen: "REST API",
  },
  release: {
    title: "Web Manager 7.0 첫 출시 품질 관리: 스프린트 QA, 보안·DB 검증",
    bottom: "3차 스프린트 QA",
    pills: ["233 TC · 보안 · 대용량", "OWASP ZAP · DBeaver", "491 이슈 해결 · 치명 0"],
    screen: "Web Manager 7.0",
  },
  db: {
    title: "DBSAFER DB 모듈 호환성·성능 검증",
    bottom: "DB 호환성 · 성능 검증",
    pills: ["NoSQL 8종 · 343 TC", "JMeter 500 users", "응답시간 차 5% 미만"],
    screen: "Enterprise Manager",
  },
};

/** DBSAFER: users → access-control gateway (policy + audit) → DB / SSH / SFTP / TELNET, with the test layer below. */
export function DbAccessControl({ slice, variant = "e2e" }: { slice?: boolean; variant?: DbVariant }) {
  const v = VARIANTS[variant];
  return (
    <Frame title={v.title} slice={slice}>
      {/* users */}
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(70 ${70 + i * 52})`}>
          <circle cx={0} cy={0} r={9} className="fill-surface stroke-fg" strokeWidth={1.3} />
          <path d="M-14,26 a14,14 0 0 1 28,0" className="fill-surface stroke-fg" strokeWidth={1.3} />
        </g>
      ))}
      <Label x={70} y={222} anchor="middle" size={10} muted>
        User / Admin
      </Label>

      {/* gateway */}
      <g>
        <rect x={190} y={48} width={200} height={170} rx={10} className="fill-surface stroke-accent" strokeWidth={1.6} />
        <Label x={290} y={74} anchor="middle" size={13} bold>
          DBSAFER
        </Label>
        <Label x={290} y={90} anchor="middle" size={9.5} muted>
          DB 접근제어 · 보안 게이트웨이
        </Label>
        <Box x={206} y={104} w={168} h={30} label="접근제어 정책" />
        <Box x={206} y={142} w={168} h={30} label="감사 로그" />
        <Box x={206} y={180} w={168} h={30} label="CSP AutoDiscovery" muted />
      </g>
      {[0, 1, 2].map((i) => (
        <Arrow key={i} x1={90} y1={82 + i * 52} x2={190} y2={133} curve />
      ))}

      {/* targets */}
      <Db x={470} y={70} label="MySQL" />
      <Db x={560} y={70} label="PostgreSQL" />
      <Db x={650} y={70} label="Oracle" />
      <Box x={450} y={150} w={90} h={34} label="SSH" />
      <Box x={552} y={150} w={90} h={34} label="SFTP" />
      <Box x={654} y={150} w={90} h={34} label="TELNET" />
      <Arrow x1={390} y1={110} x2={446} y2={76} curve />
      <Arrow x1={390} y1={133} x2={450} y2={167} curve />
      <Label x={450} y={210} size={10} muted>
        허용 / 차단 → 실제 접속 시도 → 감사 로그 검증
      </Label>

      {/* test layer */}
      <path d="M40,250 H760" className="stroke-line-strong" strokeWidth={1} strokeDasharray="4 4" />
      <Label x={40} y={276} size={11} bold>
        {v.bottom}
      </Label>
      <Screen x={40} y={290} w={230} h={120} title={v.screen}>
        <TextLines x={14} y={14} widths={[160, 120, 180, 100]} gap={14} accentIndex={1} />
        <Pill x={14} y={70} text="로그인 → 정책 → 접속 → 로그" tone="accent" />
      </Screen>
      <Arrow x1={270} y1={350} x2={310} y2={350} />
      <Box x={310} y={326} w={130} h={48} label="Test Runner" sub={variant === "api" ? "Newman" : variant === "db" ? "JMeter" : "Playwright"} accent />
      <Arrow x1={440} y1={350} x2={480} y2={350} />
      <Box x={480} y={326} w={130} h={48} label="CI / CD" sub={variant === "e2e" ? "GitLab CI" : variant === "release" ? "GitLab Issues" : "Jenkins"} />
      <g transform="translate(616 300)">
        {v.pills.map((p, i) => (
          <Pill key={p} x={0} y={i * 28} text={p} tone={i === v.pills.length - 1 ? "accent" : "neutral"} />
        ))}
      </g>

      <Caption>DBSAFER 제품군 검증 구조 개념도 (원본 일러스트)</Caption>
    </Frame>
  );
}
