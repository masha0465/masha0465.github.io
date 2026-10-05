import type { Metric } from "./types";

// Every number below exists verbatim in the career document. See docs/phase1-design.md §0.
export const metrics: Metric[] = [
  { value: "10", unit: "Years", label: "Software QA 경력", source: "about", sourceLabel: "2012 ~ 현재" },
  {
    value: "7",
    unit: "Roles",
    label: "전사 권한 매트릭스 설계",
    source: "qa-system-0-to-1",
    sourceLabel: "QA 체계 0 → 1 구축",
  },
  {
    value: "96.3",
    unit: "%",
    label: "TC 수행률 (54건 중 52건)",
    source: "clevis-vmi-verification",
    sourceLabel: "CleVis VMI 기능 검증",
  },
  {
    value: "67",
    unit: "Issues",
    label: "사내 최초 QA 사이클에서 등록",
    source: "clevis-vmi-verification",
    sourceLabel: "CleVis VMI 기능 검증",
  },
  {
    value: "90",
    unit: "%",
    label: "클라우드 테스트 환경 구축 시간 단축",
    source: "ncp-csp-infra-automation",
    sourceLabel: "NCP 인프라 자동화",
  },
  {
    value: "80",
    unit: "%",
    label: "E2E 회귀 테스트 시간 단축",
    source: "dbsafer-e2e-framework",
    sourceLabel: "DBSAFER E2E 프레임워크",
  },
  {
    value: "491",
    unit: "Issues",
    label: "첫 출시 전 사전 해결 · 운영 치명 결함 0",
    source: "webmanager-first-release",
    sourceLabel: "Web Manager 7.0 첫 출시",
  },
  {
    value: "7",
    unit: "Clouds",
    label: "WebtoB 클라우드 환경 안정성 입증",
    source: "webtob-multi-cloud",
    sourceLabel: "WebtoB 멀티 클라우드",
  },
];
