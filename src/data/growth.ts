// Career growth path. Each step cites evidence (with its year) that exists in the career document.
// `year` is when the area first appears; evidence may span later years, so years are repeated inline.

export type GrowthStep = {
  id: string;
  label: string;
  year: string;
  evidence: string;
  current?: boolean;
};

export const growthPath: GrowthStep[] = [
  {
    id: "software-qa",
    label: "Software QA",
    year: "2012",
    evidence: "2012~2013 모바일 앱/Web QA · 20종+ 단말 호환성 · 테스트 리더",
  },
  {
    id: "test-automation",
    label: "Test Automation",
    year: "2013 →",
    evidence: "2013~2020 Java 자동화 TC 290건+ · Fail률 35% → 5% · 2016~2017 LoadRunner / Ngrinder 성능",
  },
  {
    id: "cloud-qa",
    label: "Cloud QA",
    year: "2016 →",
    evidence: "2016~2019 WebtoB 7개 클라우드 환경 검증 · 2025 NCP / AWS / Azure Cloud DB · 온프레미스 K8s 구축",
  },
  {
    id: "qa-process",
    label: "QA Process Engineering",
    year: "2025 →",
    evidence: "2025 ClickUp 도입 · 스프린트 기반 QA 프로세스 설계 · 2026 QA 조직 0 → 1 구축",
  },
  {
    id: "industrial-qa",
    label: "Industrial Robot / Vision QA",
    year: "2026.06 →",
    evidence: "2026.06 UR 셋업 · PLC (Melsec / LS) · CoPick3D · OCR / ONNX 검증 · 2026.09 FANUC Robot 연계 구조 분석",
  },
  {
    id: "simulator",
    label: "Test Environment / Simulator",
    year: "2026.09 →",
    evidence: "EVO-W OLT Workflow 분석 · Robot / PLC / Vision Mock 구조 설계 · MVP 기반 확보 (진행 중)",
    current: true,
  },
  {
    id: "ai-qa",
    label: "AI-assisted QA Engineering",
    year: "2026.09 →",
    evidence: "Claude Code (Orca) 분석·구현 가속 · ChatGPT 교차 검증 · 실제 실행 결과로 QA 검증",
    current: true,
  },
];
