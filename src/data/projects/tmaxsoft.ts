import type { Project } from "../types";

// 티맥스소프트 (2013.12 ~ 2020.04) — most recent first.
export const tmaxsoftProjects: Project[] = [
  {
    slug: "webtob-multi-cloud",
    tier: 2,
    company: "tmaxsoft",
    title: "다양한 클라우드 환경 WebtoB 테스트 및 배포",
    titleEn: "WebtoB Multi-Cloud Verification & Deployment",
    period: { start: "2016.12", end: "2019.12" },
    status: "done",
    role: "QA 리드 (클라우드 환경별 이미지 생성 및 연동 테스트 주도)",
    contribution: "70% (테스트 설계 및 실행 주도)",
    tech: ["AWS", "Kubernetes", "Naver Ncloud", "Azure", "OpenShift", "KT UCloud", "TmaxCloud", "Docker"],
    tags: ["Cloud QA", "Kubernetes", "Multi-Cloud"],
    summary:
      "WebtoB의 클라우드 시장 진출을 위해 AWS, Kubernetes, OpenShift, Naver Ncloud, Azure 등 7개 클라우드 환경에서 이미지 생성·배포와 안정성을 검증하고 환경별 배포 가이드를 문서화.",
    highlights: [
      "AWS 제품 등록 · WebtoB 이미지 생성, OpenShift Docker 이미지 생성·배포",
      "Kubernetes 테스트 환경 구축 및 scale-in/out, JEUS 연동 Auto-Scaling 검증",
      "7개 클라우드 환경 안정성 입증 · 환경별 배포 가이드 문서화",
    ],
    problem: [
      "WebtoB 제품의 클라우드 시장 진출을 위해 다양한 클라우드 환경 지원 필요",
      "AWS, Kubernetes, UCloud, OpenShift, Ncloud, TmaxCloud, Azure 등 다중 클라우드 환경에서 안정성 검증 필요",
    ],
    implementation: [
      "AWS 제품 등록 및 WebtoB 이미지 생성",
      "Kubernetes 테스트 환경 구축 및 scale-in/out 검증, JEUS 연동 및 Auto-Scaling 검증",
      "KT UCloud, Naver Ncloud, TmaxCloud, MS Azure 환경별 연동 테스트",
      "OpenShift Docker image 생성 및 배포, 그룹사 제품(ProLinux, ProJDK) 호환성 테스트",
    ],
    result: [
      "7개 클라우드 환경 안정성 입증",
      "고객사 요구사항 충족으로 시장 경쟁력 강화",
      "클라우드 환경별 배포 가이드 문서화",
    ],
    metrics: [{ value: "7", label: "클라우드 환경" }],
  },
  {
    slug: "webtob5-gs-certification",
    tier: 3,
    company: "tmaxsoft",
    title: "WebtoB 5 GS 인증 획득",
    titleEn: "WebtoB 5 GS Certification",
    period: { start: "2016.10", end: "2017.08" },
    status: "done",
    role: "QA (GS 인증 준비 및 현장 심사 대응)",
    contribution: "100% (인증 준비 및 결함 대응 주도)",
    tech: ["Linux", "AIX", "HP-UX", "SunOS", "Windows", "JDK", "PHP"],
    tags: ["GS 인증", "Certification QA"],
    summary:
      "WebtoB 5의 GS 인증 획득을 위해 제품 소개서·기능 리스트 작성, 시험 합의서 검토, 연동 환경 구성, 1·2차 결함 대응과 현장 심사를 수행해 인증 획득.",
    highlights: [
      "제품 소개서 · 기능 리스트 작성, 시험 합의서 검토 및 GS 인증 상담",
      "JDK · WebtoB · PHP 연동 설치 환경 구성, 1차·2차 결함 관리 및 패치 적용",
      "현장 심사 대응 및 매뉴얼 작업 → GS 인증 획득",
    ],
    implementation: [
      "제품 소개서 및 기능 리스트 작성, 시험 합의서 검토 및 GS 인증 상담 진행",
      "JDK, WebtoB, PHP 연동 설치 환경 구성",
      "1차 및 2차 결함 관리 및 패치 적용, 현장 심사 대응 및 매뉴얼 작업",
    ],
    result: [
      "WebtoB 5 GS 인증 획득",
      "인증 과정 중 발생 결함 효율적 해결, 제품 품질 공식 입증으로 공공 시장 진출 기반 마련",
    ],
  },
  {
    slug: "webtob5-performance",
    tier: 3,
    company: "tmaxsoft",
    title: "WebtoB 5 성능 개선 검증",
    titleEn: "WebtoB 5 Performance Verification",
    period: { start: "2016.10", end: "2017.08" },
    status: "done",
    role: "QA (자동화 TC 작성 및 성능 테스트 수행)",
    contribution: "100% (성능 테스트 및 자동화)",
    tech: ["LoadRunner", "Ngrinder", "Nginx", "Apache", "JEUS 7"],
    tags: ["Performance Testing", "LoadRunner · Ngrinder"],
    summary:
      "LoadRunner와 Ngrinder로 WebtoB 4/5, Nginx, Apache 성능을 비교해 WebtoB 5의 멀티스레드 기반 성능 개선(20% 이상)과 Nginx 대비 동등 이상 성능을 입증.",
    highlights: [
      "WebtoB 4/5 · Nginx · Apache 성능 비교 테스트",
      "신규 자동화 테스트 케이스 30건 작성, 내장 JEUS 7 버전업 테스트",
      "WebtoB 4 대비 20% 이상 성능 향상 · Nginx 대비 동등 이상 확인",
    ],
    implementation: [
      "LoadRunner, Ngrinder를 활용한 WebtoB 4/5, Nginx, Apache 성능 비교 테스트",
      "신규 자동화 테스트 케이스 30건 작성, 내장 JEUS 7 버전업 테스트",
    ],
    result: [
      "WebtoB 5가 WebtoB 4 대비 성능 20% 이상 향상 입증",
      "Nginx 대비 동등 이상 성능 확인, 멀티스레드 기반 안정성 확보",
    ],
  },
  {
    slug: "openssl-security-patch",
    tier: 3,
    company: "tmaxsoft",
    title: "OpenSSL 보안 취약점 신속 대응",
    titleEn: "OpenSSL Vulnerability Patch Verification",
    period: { start: "2015.03", end: "2019.05" },
    status: "done",
    role: "QA (다중 OS 환경 회귀 테스트 수행)",
    contribution: "100% (테스트 실행 및 검증)",
    tech: ["OpenSSL", "Linux", "AIX", "HP-UX", "SunOS", "Windows"],
    tags: ["Security Patch", "Multi-OS Regression"],
    summary:
      "OpenSSL 보안 취약점 발생 시 5개 OS 환경과 다수 버전에 대한 패치 적용 후 기능·성능 회귀 테스트를 수행해 9개 버전을 안정적으로 패치하고 검증 프로세스를 정립.",
    highlights: [
      "Linux · AIX · HP-UX · SunOS · Windows 5개 OS 환경 회귀 검증",
      "9개 버전 안정적 패치 완료",
      "패치 검증 프로세스 정립",
    ],
    implementation: [
      "Linux, AIX, HP_UX, SunOS, Windows 환경에서 보안 패치 적용 후 기능/성능 회귀 테스트",
      "이슈 추적 및 해결, 5개 OS 환경 검증 수행",
    ],
    result: [
      "9개 버전 안정적 패치 완료",
      "보안 취약점 조기 해결로 제품 신뢰성 강화, 패치 검증 프로세스 정립",
    ],
  },
  {
    slug: "webtob-release-qa-automation",
    tier: 3,
    company: "tmaxsoft",
    title: "WebtoB 정기 릴리즈 QA 및 테스트 자동화 확장",
    titleEn: "WebtoB Release QA & Java Automation Expansion",
    period: { start: "2013.12", end: "2020.04" },
    status: "done",
    role: "QA (Java 기반 자동화 TC 작성 및 안정화, 릴리즈 프로세스 관리)",
    contribution: "100% (자동화 확장 및 릴리즈 관리)",
    tech: ["Java", "Linux", "AIX", "HP-UX", "SunOS", "Windows"],
    tags: ["Java Automation", "Release QA", "Multi-OS"],
    summary:
      "WebtoB 4.x / 5.x 정기 릴리즈(Fix, SP, Major) 품질을 책임지며 Java 자동화 TC를 290건 이상 확장하고, 환경 변화로 빈발하던 자동화 Fail률을 35%에서 5% 이하로 안정화.",
    highlights: [
      "Java 기반 신규 자동화 TC 290건+ 추가, 5개 OS 호환성 검증 자동화",
      "Fail 케이스 원인 분석 및 TC·환경 설정 수정으로 Fail률 35% → 5% 이하",
      "회귀 시간 50% 단축 유지 · 릴리즈 지연 이슈 40% 이하 · 고객 불만 30% 감소",
    ],
    problem: [
      "WebtoB 4.x, 5.x 정기 릴리즈(Fix, SP, Major) 품질 보증 필요",
      "기존 테스트 자동화 프레임워크는 있었으나 신규 기능 추가에 따른 테스트 커버리지 확장 필요",
      "잦은 릴리즈 및 테스트 환경 변화로 자동화 TC fail 빈발",
    ],
    implementation: [
      "Java 기반 신규 자동화 TC 290건 이상 추가 작성, WebtoB 신규 기능 및 개선사항 대응",
      "다중 OS 환경(5개) 호환성 검증 자동화, OS별 환경 설정 표준화",
      "환경 변화로 인한 fail 케이스 원인 분석 및 TC·환경 설정 수정",
      "릴리즈 노트 및 매뉴얼 검수, 인스톨러 제작, 형상 관리 적용 및 패치 이슈 재정리",
      "WebtoB 기능 목록 상세 문서화로 팀 내 지식 공유 체계 구축",
    ],
    result: [
      "테스트 커버리지 지속 확장 (Java 기반 290건 이상 TC 추가)",
      "자동화 TC 안정성 향상 (Fail률 35% → 5% 이하)",
      "회귀 테스트 시간 50% 단축 유지",
      "릴리즈 지연 이슈 40% 이하 유지 (목표 달성), 릴리즈 품질 향상으로 고객 불만 30% 감소",
    ],
    metrics: [
      { value: "290+", label: "Java 자동화 TC" },
      { value: "35% → 5%", label: "자동화 Fail률" },
    ],
  },
];
