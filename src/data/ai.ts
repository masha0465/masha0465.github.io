// AI-assisted QA. Scope is exactly what the career document states:
// Claude Code (Orca) accelerates analysis/implementation, ChatGPT cross-validates,
// real CleVis Offline execution and QA verification decide. No model development.

export type AiStage = {
  label: string;
  role: string;
  tone?: "neutral" | "ai" | "accent";
  fields: { k: string; v: string }[];
};

export const aiPipeline: AiStage[] = [
  {
    label: "Actual Workflow Analysis",
    role: "입력 · 실제 시스템",
    fields: [
      { k: "Input", v: "실제 EVO-W Config · Node Graph · CleVis Offline 실행 결과" },
      { k: "QA 역할", v: "Robot / PLC / Vision 의존 영역과 테스트 데이터 구조 식별" },
    ],
  },
  {
    label: "Claude Code (Orca)",
    role: "AI-assisted Analysis / Implementation",
    tone: "ai",
    fields: [
      { k: "AI 활용", v: "Workflow 분석, 테스트 시나리오, 시뮬레이터 구현 가속" },
      { k: "QA Check", v: "AI 생성 결과를 그대로 쓰지 않고 QA 검증 대상으로 취급" },
    ],
  },
  {
    label: "ChatGPT",
    role: "Design / Logic Cross Validation",
    tone: "ai",
    fields: [
      { k: "AI 활용", v: "설계·분석 결과와 구현 방향을 다른 모델로 교차 검증" },
      { k: "QA Check", v: "설계·분석 결과와 구현 방향을 교차 검증" },
    ],
  },
  {
    label: "Actual CleVis Offline Execution",
    role: "실제 실행",
    fields: [
      { k: "검증", v: "실제 Workflow 실행으로 Node 단위 결과·오류 확인" },
      { k: "Output", v: "정상 / 오류 시나리오 비교 데이터" },
    ],
  },
  {
    label: "QA Verification",
    role: "최종 판단",
    tone: "accent",
    fields: [
      { k: "QA 역할", v: "AI 생성 결과에 대한 QA 검증 후 시뮬레이터 구조에 반영" },
      { k: "Output", v: "Mock 기반 반복 테스트 환경 (MVP, 진행 중)" },
    ],
  },
];

export const aiPrinciples = [
  {
    title: "AI는 가속 도구, 판단은 QA",
    body: "AI가 만든 분석과 구현을 그대로 쓰지 않습니다. 다른 AI 도구와 실제 CleVis Offline 실행 결과로 교차 검증한 뒤 반영합니다.",
  },
  {
    title: "교차 검증은 두 겹으로",
    body: "다른 AI 도구로 설계·논리를 한 번 더 검토하고, 마지막은 실제 CleVis Offline 실행 결과로 확인합니다.",
  },
  {
    title: "범위를 과장하지 않음",
    body: "AI 모델을 개발하거나 학습시킨 경험은 없습니다. 분석·구현 가속과 교차 검증, 그리고 AI/ML 기능의 QA가 제 범위입니다.",
  },
];

export const aiVerified = [
  {
    slug: "clevis-vmi-verification",
    title: "OCR / ONNX 2-Stage 추론 파이프라인 검증",
    body:
      "Stage 1(문자 검출)은 17자를 confidence 0.89~0.97로 정상 검출했지만 Stage 2(문자 인식)는 11건만 반환하고 정확도 0/17. 학습 데이터 문자셋 한계로 원인을 규명하고 개발팀과 리스크 수용 기준을 합의.",
    tags: ["OCR", "ONNX", "Confidence 분석", "Risk Acceptance"],
  },
  {
    slug: "pnp-qna-bot-qa",
    title: "LLM 기반 사내 QnA 챗봇 QA (기여도 30%)",
    body:
      "OpenAI Vector Storage 기반 문서 검색 정확도와 응답 품질, Webhook 안정성을 검증. 카테고리 선택 구조가 실제 업무 흐름과 맞지 않음을 발견해 통합 검색으로의 개선을 제안하고 전후 응답 품질을 비교 검증.",
    tags: ["Vector Search", "응답 품질", "Usability", "개선 제안"],
  },
];
