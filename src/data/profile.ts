// Source of truth: docs/resume-source.txt (경력기술서). Do not add facts that are not in it.

export const profile = {
  nameKo: "김선아",
  nameEn: "Sunah Kim",
  title: "QA Engineer",
  yearsLabel: "10 Years of Software QA",
  tagline: {
    en: "Building Testable Systems,\nNot Just Tests.",
    ko: "테스트를 수행하는 QA에서, 테스트 가능한 시스템을 만드는 QA로.",
  },
  focus: [
    "Test Automation",
    "Cloud QA",
    "Robot · PLC · Vision QA",
    "AI-assisted QA Engineering",
  ],
  intro:
    "10년 간의 SW QA 실무 경험을 바탕으로, 품질 관리 체계와 테스트 프로세스를 구축·개선해 온 QA 엔지니어입니다. 테스트 자동화와 AI 기반 업무 활용을 통해 QA 생산성을 높이고, 복잡한 시스템을 구조화하여 재현 가능한 테스트 환경과 효율적인 품질 검증 체계를 구축해 왔습니다.",
  links: {
    email: "pingpongvv@gmail.com",
    linkedin: "https://www.linkedin.com/in/masha-sunah-kim",
    github: "https://github.com/masha0465",
  },
  location: "Korea",
} as const;

export const about = [
  {
    index: "01",
    title: "10년 QA 경험",
    body:
      "10년간 SW QA 실무를 수행하며 품질 관리 체계와 테스트 프로세스를 구축·개선해 온 QA Engineer. 모바일 서비스, 엔터프라이즈 미들웨어, DB 보안 솔루션, 산업용 로봇·비전 시스템까지 서로 다른 도메인에서 테스트 계획부터 릴리즈 판단까지 전 과정을 담당했습니다.",
  },
  {
    index: "02",
    title: "시스템 범위 확장",
    body:
      "소프트웨어 기능 검증에서 출발해 자동화, 클라우드 인프라, Robot·PLC·3D Vision이 결합된 산업용 시스템, 물리 장비를 대체하는 테스트 환경과 시뮬레이터, 그리고 QA 조직과 프로세스 설계까지 검증 범위를 확장해 왔습니다.",
    chain: [
      "Software QA",
      "Automation",
      "Cloud",
      "Robot / PLC / Vision",
      "Test Environment / Simulator",
      "QA Process / Organization",
    ],
  },
  {
    index: "03",
    title: "현재의 강점",
    body:
      "복잡한 시스템을 구조화하고, 실제 환경의 외부 의존성을 분석하며, 재현 가능한 테스트 환경과 품질 검증 체계를 설계합니다. AI 도구는 분석과 구현을 가속하는 수단으로 쓰되, 그 결과는 다른 도구와 실제 시스템 실행으로 교차 검증합니다.",
  },
] as const;
