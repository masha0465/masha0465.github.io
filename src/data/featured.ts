// Featured Systems section content. Every statement maps to the career document;
// "future" items are explicitly marked and never presented as done.

export type FlowStep = {
  label: string;
  sub?: string;
  tone?: "neutral" | "accent" | "future";
};

export type Flow = {
  title: string;
  steps: FlowStep[];
};

export type FeaturedBlock = {
  slug: string;
  eyebrow: string;
  headline: string;
  lead: string;
  problem: string[];
  approach: string[];
  facts: string[];
  /** 'side' = text left, one vertical flow right. 'stack' = text on top, flows below. */
  layout: "side" | "stack";
  flows: Flow[];
};

export const featuredBlocks: FeaturedBlock[] = [
  {
    slug: "evo-w-olt-test-simulator",
    eyebrow: "Featured System 01 · Test Environment / Simulator",
    headline: "물리 장비 없이 고객 환경의 Workflow를 반복 실행할 수 있게",
    lead:
      "Robot / PLC / Vision에 의존하는 EVO-W OLT Workflow는 사내에서 재현하기 어려웠습니다. 실제 Workflow를 분석해 외부 장비 의존 영역을 식별하고, 그 영역을 Mock으로 분리해 반복 가능한 테스트 환경의 기반을 확보하는 프로젝트입니다. 현재 MVP 기반을 확보하고 확장 중입니다.",
    problem: [
      "실제 장비와 현장 환경에 의존하는 테스트 영역 — 사내에서 반복 실행과 장애 재현이 어려움",
      "고객사별 CleVis 버전 · Config · 장비 데이터 차이로 현장 이슈 재현성과 추적성 확보 필요",
    ],
    approach: [
      "실제 EVO-W Config · Node Graph 분석으로 OLT-Picking / Assembly Workflow와 장비 연계 구조 파악",
      "CleVis Offline 환경에서 Workflow를 실행하고 Node별 결과와 오류 원인 분석",
      "Robot Pose · PLC Runner · Camera Dataset 등 의존 영역을 Mock으로 대체하는 시뮬레이션 구조 설계",
      "CleVis 버전 · Config · Runtime을 함께 관리하는 추적성 확보 방향 정의",
    ],
    facts: ["In Progress · MVP 기반 확보", "Robot / PLC / Vision Mock", "Offline 실행 · Node-level 분석", "AI-assisted 분석 · 교차 검증"],
    layout: "side",
    flows: [
      {
        title: "Story Flow",
        steps: [
          { label: "Customer Environment", sub: "고객사별 CleVis Version · Config · 장비 데이터" },
          { label: "Actual CleVis Workflow", sub: "OLT-Picking / OLT-Assembly · Node Graph" },
          { label: "Robot / PLC / Vision Dependencies", sub: "Robot Pose · PLC Runner · Camera Dataset" },
          { label: "Dependency Analysis", sub: "CleVis Offline 실행 · Node-level 오류 분석" },
          { label: "Mock / Simulator Design", sub: "물리 장비 → Robot / PLC / Vision Mock", tone: "accent" },
          { label: "Repeatable Test Environment", sub: "정상 · 오류 · Timeout 시나리오 · 추적성", tone: "accent" },
          { label: "Future Automated Testing", sub: "향후 확장 방향", tone: "future" },
        ],
      },
    ],
  },
  {
    slug: "qa-system-0-to-1",
    eyebrow: "Featured System 02 · QA Process / Organization",
    headline: "QA가 없던 조직에 QA 프로세스와 전사 업무 관리 체계를 0 → 1로",
    lead:
      "도구를 도입한 프로젝트가 아니라 조직의 품질·업무 관리 체계를 설계한 프로젝트입니다. 테스트 계획부터 결과 보고까지의 QA 프로세스와 ISTQB 기반 결함 기준을 처음 수립하고, 7개 직군의 역할·권한을 반영한 업무관리 체계를 AWS 기반 OpenProject 위에 구축해 이슈 관리에서 전사 Task 관리로 확장하고 있습니다.",
    problem: [
      "릴리즈 이력과 현장 이슈가 Slack에 산재 — 체계적인 이슈 추적과 품질관리 프로세스 부재",
      "직군별 업무와 권한이 다른데 공통 트래킹 체계가 없고, 릴리즈에 QA 검증 단계가 편입되어 있지 않음",
    ],
    approach: [
      "테스트 계획 → TC 설계 → 수행 → 이슈 관리 → 결과 보고의 QA 기본 프로세스 수립",
      "ISTQB 기반 Severity 5단계 / Priority 4단계 / Type 분류와 결함 리포팅 템플릿 표준화",
      "monday.com / Linear / OpenProject 비교 평가 · PoC 후 AWS 환경에 OpenProject 구축",
      "7개 역할 × Lead / Access / Assignee Pool 3축 권한 매트릭스와 프로젝트 템플릿 설계",
      "Slack 업무 흐름을 유지하면서 n8n + ngrok으로 이슈를 Work Package로 자동 등록",
    ],
    facts: ["In Progress · 전사 확대 중", "7 Roles × 3 Axes", "3 Tools PoC", "Planned: 2026.10 내부 Beta · 2026.11 전사 Open"],
    layout: "stack",
    flows: [
      {
        title: "확장 경로",
        steps: [
          { label: "QA Process", sub: "테스트 · 결함 · 릴리즈 표준", tone: "accent" },
          { label: "Issue Management", sub: "Slack 산재 이슈 → 공식 이력" },
          { label: "Project Management", sub: "템플릿 · Workflow · 권한" },
          { label: "Company-wide Task Management", sub: "전사 확대 진행 중", tone: "future" },
        ],
      },
      {
        title: "자동화 구조",
        steps: [
          { label: "Slack", sub: "실시간 커뮤니케이션" },
          { label: "n8n", sub: "+ ngrok" },
          { label: "OpenProject", sub: "AWS 기반", tone: "accent" },
          { label: "Work Package", sub: "자동 등록" },
          { label: "Tracking", sub: "Project · Task · Issue" },
        ],
      },
    ],
  },
];
