import type { Company } from "./types";

// Order: most recent first. Facts from the career document only.
export const companies: Company[] = [
  {
    id: "cleorobotics",
    name: "클레로보틱스",
    nameEn: "CleoRobotics",
    period: { start: "2026.06" },
    role: "책임연구원 / QA 리드",
    keyFocus: ["QA 0 → 1", "Industrial Robot · PLC · Vision QA", "Test Simulator", "AI-assisted QA"],
    summary:
      "QA가 없던 조직에서 QA 기능을 처음부터 설계하고, PLC–로봇–3D Vision이 결합된 산업용 시스템 QA로 검증 영역을 확장. 물리 장비 의존성을 분리한 Mock 기반 테스트 시뮬레이터 구축 진행 중.",
  },
  {
    id: "pnpsecure",
    name: "피앤피시큐어",
    nameEn: "PNP Secure",
    period: { start: "2024.05", end: "2026.04" },
    role: "테스트 자동화 엔지니어 (QA 리드 · QA 팀장 역할 포함)",
    keyFocus: ["E2E · API Automation", "Cloud QA (NCP · AWS · Azure)", "Kubernetes", "Left-Shift Testing"],
    summary:
      "DB 접근제어 솔루션 DBSAFER 제품군의 QA 리드로 첫 출시 품질 관리와 자동화 전환을 주도하고, 개발팀 내 테스트 자동화 엔지니어로 전환하여 Playwright E2E 프레임워크와 클라우드 인프라 자동화를 구축.",
  },
  {
    id: "tmaxsoft",
    name: "티맥스소프트",
    nameEn: "TmaxSoft",
    period: { start: "2013.12", end: "2020.04" },
    role: "테스트 리더 / 매니저",
    keyFocus: ["Middleware QA", "Java Automation", "Multi-OS", "7 Clouds", "GS 인증", "Performance"],
    summary:
      "웹서버 WebtoB의 정기 릴리즈 QA와 Java 기반 자동화 확장을 담당하고, 5개 OS 호환성, 7개 클라우드 환경 배포 검증, GS 인증, 성능 비교 검증을 수행.",
  },
  {
    id: "nhnts",
    name: "NHN Technology Services",
    nameEn: "NHN TS",
    period: { start: "2012.07", end: "2013.07" },
    role: "테스트 엔지니어 (TL)",
    keyFocus: ["Mobile App · Web QA", "Test Lead", "Global Collaboration"],
    summary:
      "20종 이상 모바일 단말 환경에서 앱·웹 호환성과 첫 출시 앱 품질을 검증하고, 팀 리더로서 중국 테스터와의 글로벌 협업을 조율.",
  },
];

export const companyById = Object.fromEntries(companies.map((c) => [c.id, c])) as Record<
  Company["id"],
  Company
>;

export function formatPeriod(p: { start: string; end?: string }) {
  return `${p.start} ~ ${p.end ?? "현재"}`;
}
