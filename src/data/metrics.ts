import { companies } from "./companies";
import { projects } from "./projects";
import type { Metric } from "./types";

// Career-wide numbers only. Every value exists in the career document; counts are
// derived from the data files, which mirror the document. See docs/phase1-design.md §0.
export const metrics: Metric[] = [
  {
    value: "10",
    unit: "Years",
    label: "Software QA 경력",
    source: "career",
    sourceLabel: "2012 ~ 현재 · NHN → 티맥스 → 피앤피시큐어 → 클레로보틱스",
  },
  {
    value: String(companies.length),
    unit: "Companies",
    label: `${projects.length}개 프로젝트 · 모바일 → 미들웨어 → DB 보안 → 산업용 로봇·비전`,
    source: "career",
    sourceLabel: "도메인 확장",
  },
  {
    value: "0 → 1",
    unit: "QA",
    label: "QA 조직·프로세스 신규 구축 · 7개 역할 권한 모델",
    source: "qa-system-0-to-1",
    sourceLabel: "클레로보틱스 QA 체계 구축",
  },
  {
    value: "7",
    unit: "Clouds",
    label: "AWS · Azure · NCP · Kubernetes · OpenShift 등 클라우드 환경 검증",
    source: "webtob-multi-cloud",
    sourceLabel: "WebtoB 멀티 클라우드 · NCP 인프라 자동화",
  },
  {
    value: "80",
    unit: "%",
    label: "E2E 자동화로 회귀 테스트 시간 단축",
    source: "dbsafer-e2e-framework",
    sourceLabel: "Playwright + CI/CD 품질 게이트",
  },
  {
    value: "90",
    unit: "%",
    label: "클라우드 인프라 자동화로 테스트 환경 구축 시간 단축",
    source: "ncp-csp-infra-automation",
    sourceLabel: "NCP API 기반 생성·삭제 자동화",
  },
  {
    value: "290+",
    unit: "TC",
    label: "Java 자동화 TC 확장 · Fail률 35% → 5%",
    source: "webtob-release-qa-automation",
    sourceLabel: "WebtoB 정기 릴리즈 QA · 5개 OS",
  },
  {
    value: "4",
    unit: "Certs",
    label: "ISTQB Advanced (Test Manager) · NCP Professional · ISTQB Foundation · 정보처리기사",
    source: "career",
    sourceLabel: "자격사항",
  },
];
