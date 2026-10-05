import type { Project } from "../types";

// NHN Technology Services (2012.07 ~ 2013.07)
export const nhntsProjects: Project[] = [
  {
    slug: "nhn-mobile-qa",
    tier: 3,
    company: "nhnts",
    title: "모바일 앱/Web QA (NBP_모바일팜, WANNABE, 네이버북스)",
    titleEn: "Mobile App & Web QA",
    period: { start: "2012.07", end: "2013.07" },
    status: "done",
    role: "TL (기능, 네트워크 테스트 및 중국 테스터 협업 관리)",
    contribution: "80% (TL로 테스트 총괄 및 협업 조율)",
    tech: ["iOS", "Android"],
    tags: ["Mobile QA", "Test Lead", "Localization"],
    summary:
      "20종 이상 모바일 단말에서 웹 호환성과 첫 출시 앱의 기능·네트워크 품질을 검증하고, 팀 리더로서 중국 테스터와의 글로벌 협업과 현지화 이슈를 관리.",
    highlights: [
      "20종 이상 모바일 단말기 환경 테스트, 기능 및 네트워크 비기능 테스트",
      "설계 문서 기반 테스트 케이스 작성 및 커버리지 확보",
      "앱 첫 릴리즈 완료 · 출시 일정 100% 준수",
    ],
    implementation: [
      "20종 이상 모바일 단말기 환경 테스트 수행, 기능 및 네트워크 등 비기능 테스트 수행",
      "팀 리더로서 중국 테스터와 글로벌 협업 및 현지화 이슈 관리",
      "설계 문서 기반 테스트 케이스 작성 및 커버리지 확보",
    ],
    result: [
      "앱 첫 릴리즈 성공적 완료",
      "단말기별 이슈 신속 확인 및 팀 협업으로 출시 일정 100% 준수",
      "글로벌 협업 경험으로 QA 역량 강화",
    ],
  },
];
