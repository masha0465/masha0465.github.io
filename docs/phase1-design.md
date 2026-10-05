# Phase 1 — 경력서 분석 · Site Map · UX 설계안

작성일: 2026-10-05
근거: `docs/resume-source.txt` (경력기술서_QA김선아.pdf 추출본), 벤치마킹 https://www.s00y-portfolio.site/

---

## 0. 사실관계 체크 결과 (구현 전 확인 필요)

### 경력서와 요청 프롬프트 간 불일치 / 미근거 항목

| # | 항목 | 프롬프트 | 경력서 | 처리 방안 |
|---|------|----------|--------|-----------|
| 1 | 경력 연수 | "10+ Years" | "10년 간" (실제 재직 합산 약 9년 7개월: 2012.07~2013.07, 2013.12~2020.04, 2024.05~2026.04, 2026.06~) | **"10 Years"** 표기. "10+"는 사용하지 않음 |
| 2 | OpenProject 일정 | 2026.10 내부 Beta / 2026.11 전사 Open | 없음 (경력서는 "전사 확대 기반 마련", "구축 진행 중") | **사용자 확인 완료(2026-10-05)**: "Planned" 로만 표기 |
| 3 | "100% E2E Pass" | Metrics 후보 | "MVP 기반 테스트 시나리오 **100% 구현**" (Pass 아님) | **"100% MVP Scenario Implemented"** 로 교체 |
| 4 | 88.5% 압축률 / 89% 비용 절감 | Metrics 후보 | 요약(클라우드 서비스 품질 검증)에만 존재. 프로젝트 상세 없음. 소속 회사·기간 불명 | **사용자 확인 완료(2026-10-05): NCP 개인 프로젝트 → 사이트 전체에서 제외** (Metrics·요약 모두) |
| 5 | QA 체계 프로젝트명 | "…전사 이슈·프로젝트·**Task** 관리 체계 도입" | "…전사 이슈·프로젝트 관리 체계 도입" | 경력서 제목 사용, 본문에서 Task 관리 확장 언급 |
| 6 | FANUC Robot | — | "FANUC Robot 기반 OLT Workflow 및 Robot 연계 **구조 분석**" | "분석"으로만 표현. 프로그래밍/개발 표현 금지 |
| 7 | UR Robot | — | "TCP 설정, Hand-eye Calibration, Master Teaching 등 **셋업 및 검증**" | "셋업·검증"으로 표현 |
| 8 | EVO-W Simulator 상태 | 완성처럼 보이지 않게 | "MVP 구축 **기반 확보**", "확장 **진행 중**" | 상태 배지 `In Progress · MVP`, 문구는 "기반 확보/진행 중" 유지 |
| 9 | OpenProject 상태 | — | "구축 **진행 중**" | 상태 배지 `In Progress` |
| 10 | PNP QnA Bot | — | 기여도 30%, 역할 QA(기능 검증·사용성 테스트) | "개발 참여(QA 검증)"로만 표기. AI 개발로 보이지 않게 |
| 11 | AI 활용 | 과장 금지 | "Claude Code(Orca)로 분석·구현 가속, ChatGPT로 교차 검증, AI 생성 결과에 대한 QA 검증" | 이 범위 그대로 사용. "AI 모델 개발" 류 표현 없음 |
| 12 | 경력 공백 | — | 2020.04 ~ 2024.05 미기재 | 사이트에서 설명·추측하지 않음. 타임라인에 그대로 표시 |

### 사용 가능 수치 (경력서 근거 확인됨)

| 수치 | 출처 프로젝트 |
|------|---------------|
| 10 Years QA | 자기소개 |
| 7 Role Permission Model | 클레로보틱스 QA 체계 |
| 54 TC · 96.3% 수행률 · 67 Issues (Critical 4/Major 9/Minor 35/Trivial 19) | VMI 기능 검증 |
| 90% 환경 구축 시간 단축 (30분→3분) | NCP 인프라 자동화 |
| 80% 회귀 시간 단축 · Page Object 12 · Helper 4 · MVP 시나리오 100% 구현 | DBSAFER E2E 프레임워크 |
| 65% 회귀 단축 (16h→5.6h) · 자동화율 50% · UI 대응 70% 단축 | Web Manager 7.0 Playwright |
| 70% API 테스트 단축 (8h→2.4h) · TC 78 | DBSAFER API 자동화 |
| 60% 배포 시간 단축 (2h→48m) · 환경 1→3 | 사내 K8s 환경 |
| 491 이슈 사전 해결 · 치명 결함 0 · 로그 조회 14배 · 일정 100% 준수 · TC 233 | Web Manager 7.0 첫 출시 |
| 343 TC · 응답시간 차 5% 미만 · 8종 DB | NoSQL 8종 |
| 7 클라우드 환경 | Tmax WebtoB 클라우드 |
| Java 자동화 TC 290+ · Fail률 35%→5% · 회귀 50% 단축 | Tmax 정기 릴리즈 QA |
| 5 OS · 9 버전 패치 | OpenSSL 대응 |
| 20+ 단말 | NHN 모바일 QA |
| 자격 4종 (ISTQB AL-TM 2025.11, NCP Pro 2025.06, ISTQB FL 2012.11, 정보처리기사 2011.09) | 자격사항 |
| 88.5% / 89% | 개인 프로젝트 → 제외 |

---

## 1. 경력서 분석 요약

### 인물
- 김선아 · SW QA Engineer · 10년
- 연락: pingpongvv@gmail.com · LinkedIn linkedin.com/in/masha-sunah-kim · GitHub github.com/masha0465
- 학력: 동덕여자대학교 컴퓨터공학(주) / 국제경영(복수) 2005.03~2012.02

### 회사 (최신순)
| 회사 | 기간 | 직무 | Key Focus |
|------|------|------|-----------|
| 클레로보틱스 | 2026.06 ~ 재직 중 | 책임연구원 / QA 리드 | QA 0→1, Robot·PLC·3D Vision QA, Test Simulator, AI-assisted QA |
| 피앤피시큐어 | 2024.05 ~ 2026.04 | 테스트 자동화 엔지니어 (QA 리드/팀장 역할 포함) | Playwright/Newman 자동화, Cloud QA (NCP/AWS/Azure, K8s), Left-Shift |
| 티맥스소프트 | 2013.12 ~ 2020.04 | 테스트 리더/매니저 | 엔터프라이즈 미들웨어(WebtoB) QA, Java 자동화, 멀티 OS, 7 클라우드 배포, GS 인증, 성능 |
| NHN Technology Services | 2012.07 ~ 2013.07 | 테스트 엔지니어 (TL) | 모바일 앱/Web QA, 글로벌 테스터 협업 |

### 핵심 Narrative → 커리어 성장 매핑
```
Software QA ............... 2012  NHN 모바일/Web QA
Test Automation ........... 2013~ Tmax Java 자동화 TC 290+, LoadRunner/Ngrinder
Cloud QA .................. 2016~ Tmax 7 클라우드 배포 검증 → 2025 NCP/AWS/Azure, K8s 구축
QA Process Engineering .... 2025  스프린트 QA 설계, ClickUp 프로세스 → 2026 QA 0→1
Industrial Robot/Vision QA  2026.06 UR/FANUC·PLC·CoPick3D·OCR/ONNX
Test Environment/Simulator  2026.09 EVO-W OLT Mock/Simulator (MVP 진행 중)
AI-assisted QA ............ 2026  Claude Code(Orca) + ChatGPT 교차 검증
```
자동화·클라우드가 2013/2016부터 시작된 점이 차별 포인트 (최근에 급히 붙인 키워드가 아님).

---

## 2. 벤치마킹 분석 (s00y-portfolio.site)

### 구조
- 인트로(진입 선택: 01 QA Experience / 02 Career Portfolio) → 서브페이지 2개
- `/portfolio/`: 단일 페이지 앵커 내비. Hero → Career Journey(2단계 타임라인) → Product QA Experience(카드 3 + 상세 Drawer/캐러셀 "01/03") → Quality Approach(원칙 3 + 수식형 다이어그램) → AI & Automation(4단계 탭: Input/Process/QA Review/Output) → QA Notes(아티클) → Skills(8 카테고리 칩) → Philosophy → Footer
- `/qa-experience/`: 인터랙티브 체험 (기획안 vs 구현 비교 → 결함 발견 → 표준 템플릿 등록)
- 기술: 순수 HTML/CSS/JS, Pretendard, 라이트 모드 전용, 톤 `--ink #132238 / --blue #3e6bf2 / --paper #f7f8fb`, max-width 930px, 미디어쿼리 900/720/430

### 참고할 점 (채택)
- 영문 eyebrow 라벨 + 한국어 헤딩 조합 (Career Journey / 경력 여정)
- 숫자 인덱스 모티프 (01/02/03)
- 프로젝트 카드 → 상세 Drawer (`role="dialog"`, aria-controls), 상세 내부 고정 필드 구조
- AI 섹션의 "QA Review" 고정 필드 — AI 결과를 사람이 검증한다는 메시지를 구조로 표현
- 스킵 링크, prefers-reduced-motion 대응, tablist/tabpanel 시맨틱
- 타임라인에 재직 기간 배지

### 다르게 갈 점 (차별화)
- 벤치마크는 "기획 단계 참여형 QA" 메시지 → 우리는 "Testable System을 만드는 QA" (시스템/환경/프로세스 구축)
- 라이트 단일 테마 → Dark 기본 + Light 토글 (Engineering 톤)
- 프로젝트 3개 → 21개를 3-Tier로 계층화 (Featured 2 / Detailed 7 / Compact 12)
- 수식형 다이어그램 → **Node Graph 스타일 아키텍처 다이어그램** (CleVis Node Graph 분석 경험과 시각적으로 연결)
- 수치 거의 없음 → 근거 있는 Metrics 카드 섹션 추가
- 인트로 선택 화면 생략 (30초 내 이해 목표에 역행). 바로 Hero
- 정적 HTML → Next.js + TS + 데이터/UI 분리

---

## 3. Site Map

```
/                               Home (단일 페이지, 앵커 내비)
├── #hero                       01 HERO
├── #about                      02 ABOUT  (3 포인트 + Career Growth Path)
├── #metrics                    03 BY THE NUMBERS
├── #experience                 04 CAREER TIMELINE (회사 4 → 프로젝트 카드)
├── #featured                   05 FEATURED SYSTEMS (EVO-W Simulator · QA System 2종 대형 카드 + 다이어그램)
├── #ai-qa                      06 AI-ASSISTED QA (Workflow + QA Verification)
├── #skills                     07 TECH STACK (5 카테고리 탭/그리드)
├── #certs                      08 CERTIFICATIONS & EDUCATION
└── #contact                    09 CONTACT / FOOTER

/projects/[slug]                프로젝트 상세 (22개). 홈에서 카드 클릭 시 Drawer로 열리고,
                                URL이 동기화됨 → 직접 접근/공유/SEO 시 전체 페이지로 렌더
```
Drawer + URL 동기화 방식: 홈 컨텍스트 유지 + 공유 가능한 링크 둘 다 확보 (Next.js Intercepting/Parallel Routes 또는 쿼리 동기화 중 단순한 쪽 선택).

---

## 4. Homepage Wireframe (Desktop)

```
┌──────────────────────────────────────────────────────────────────────┐
│ SUNAH KIM · QA ENGINEER     About  Experience  Systems  AI  Skills  ◐│  sticky, blur
├──────────────────────────────────────────────────────────────────────┤
│ 01 — QA ENGINEER · 10 YEARS                                          │
│                                                                      │
│ Building Testable Systems,                                           │
│ Not Just Tests.                                                      │
│ 테스트를 수행하는 QA에서, 테스트 가능한 시스템을 만드는 QA로.          │
│                                                                      │
│ [Test Automation] [Cloud QA] [Robot / PLC / Vision QA] [AI-assisted] │  4 칩만
│ ( Featured Systems ↓ )   ( GitHub )  ( LinkedIn )                    │
│                                        ┌─────────────────────────┐   │
│                                        │ 우측: 라인 아트 Node Graph│   │  장식, 저강도
│                                        │ Robot─PLC─Vision→Mock    │   │
│                                        └─────────────────────────┘   │
├──────────────────────────────────────────────────────────────────────┤
│ 02 — ABOUT                                                           │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐                      │
│ │ 10년 QA     │ │ 시스템 범위  │ │ 현재의 강점  │                      │
│ │ 실무·체계구축│ │ 확장        │ │ 구조화·재현  │                      │
│ └─────────────┘ └─────────────┘ └─────────────┘                      │
│ CAREER GROWTH PATH (가로 스텝, 연도 포함, 스크롤 시 순차 reveal)      │
│ SW QA ─ Automation ─ Cloud ─ Process ─ Robot/Vision ─ Simulator ─ AI │
│ 2012    2013        2016    2025      2026.06        2026.09      2026│
├──────────────────────────────────────────────────────────────────────┤
│ 03 — BY THE NUMBERS                                                  │
│ [10 Years] [7 Roles] [96.3% TC 수행] [67 Issues] [90% 환경구축↓]     │
│ [80% 회귀↓] [491 Issues 사전해결] [7 Clouds]          ← 8개 이내     │
├──────────────────────────────────────────────────────────────────────┤
│ 04 — CAREER                                                          │
│ ●─ 클레로보틱스 2026.06~  책임연구원/QA 리드   Key Focus 칩           │
│ │   ┌──────────┐┌──────────┐┌──────────┐┌──────────┐                 │
│ │   │★EVO-W    ││★QA 체계  ││VMI 검증  ││온보딩    │  ★=강조(대형)   │
│ │   └──────────┘└──────────┘└──────────┘└──────────┘                 │
│ ●─ 피앤피시큐어 2024.05~2026.04 ...  카드 11 (상위 노출 + 더보기)     │
│ ●─ 티맥스소프트 2013.12~2020.04 ...  카드 5                           │
│ ●─ NHN TS 2012.07~2013.07 ...        카드 1                           │
├──────────────────────────────────────────────────────────────────────┤
│ 05 — FEATURED SYSTEMS                                                │
│ ┌────────────────────────────┐ ┌────────────────────────────┐        │
│ │ EVO-W OLT Test Simulator   │ │ QA System 0→1              │        │
│ │ In Progress · MVP          │ │ In Progress                │        │
│ │ Story Flow 다이어그램(세로) │ │ Slack→n8n→OpenProject 다이어그램│   │
│ │ Problem / Approach / Status│ │ QA Process→Issue→Project→Task │     │
│ └────────────────────────────┘ └────────────────────────────┘        │
├──────────────────────────────────────────────────────────────────────┤
│ 06 — AI-ASSISTED QA                                                  │
│ Workflow 분석 → Claude Code(Orca) → ChatGPT 교차검증 → CleVis Offline │
│ 실행 → QA Verification     (각 노드: Input / What AI did / QA Check)  │
│ "AI 결과를 그대로 쓰지 않고, 교차 검증하고 실제 실행으로 확인한다"    │
├──────────────────────────────────────────────────────────────────────┤
│ 07 — TECH STACK   [QA/Testing][Cloud/Infra][QA/Collab][Industrial][AI]│
│ 탭 선택 → 칩 그리드 + 해당 카테고리가 쓰인 프로젝트 수 표시           │
├──────────────────────────────────────────────────────────────────────┤
│ 08 — CERTIFICATIONS   ISTQB AL-TM · NCP Pro · ISTQB FL · 정보처리기사 │
├──────────────────────────────────────────────────────────────────────┤
│ 09 — CONTACT   Email · LinkedIn · GitHub        © 2026 Sunah Kim      │
└──────────────────────────────────────────────────────────────────────┘
```

Mobile: 내비 → 햄버거 시트, Growth Path 가로→세로, 타임라인 좌측 단일 레일, 프로젝트 카드 1열, Metrics 2열, Skills 탭→아코디언, Drawer → 풀스크린 시트.

---

## 5. Project Hierarchy (3-Tier)

### Tier 1 — Featured (대형 카드 + 아키텍처 다이어그램 + 전체 상세 9섹션)
| slug | 프로젝트 | 기간 | 상태 |
|------|----------|------|------|
| `evo-w-olt-test-simulator` | CleVis EVO-W OLT 테스트 시뮬레이터 구축 | 2026.09 ~ 현재 | In Progress · MVP 기반 확보 |
| `qa-system-0-to-1` | QA 체계 신규 구축 및 전사 이슈·프로젝트 관리 체계 도입 | 2026.06 ~ 현재 | In Progress |

### Tier 2 — Detailed (표준 카드 + STAR 전체 상세)
| slug | 프로젝트 | 회사 | 기간 |
|------|----------|------|------|
| `clevis-vmi-verification` | CleVis 각자타각기(VMI) 기능 검증 및 테스트 프로세스 정립 | 클레로보틱스 | 2026.07~08 |
| `dbsafer-e2e-framework` | DBSAFER 제품군 E2E 테스트 자동화 프레임워크 구축 | 피앤피시큐어 | 2025.11 |
| `ncp-csp-infra-automation` | DBSAFER CSP 연동 테스트 및 NCP 인프라 자동화 | 피앤피시큐어 | 2025.09 |
| `webmanager-playwright-framework` | Web Manager 7.0 Playwright 자동화 프레임워크 | 피앤피시큐어 | 2025.09 |
| `k8s-test-environment` | 사내 쿠버네티스 테스트 환경 구축 | 피앤피시큐어 | 2025.09 |
| `webmanager-first-release` | Web Manager 7.0 첫 출시 제품 품질 관리 | 피앤피시큐어 | 2025.04~07 |
| `webtob-multi-cloud` | 다양한 클라우드 환경 WebtoB 테스트 및 배포 | 티맥스소프트 | 2016.12~2019.12 |

### Tier 3 — Compact (소형 카드 + 요약 상세: Overview/Role/Result) — 12개
| slug | 프로젝트 | 회사 | 기간 |
|------|----------|------|------|
| `onboarding-setup-manual` | 온보딩 과제 - 제품 셋업 매뉴얼 및 검증 체크리스트 표준화 | 클레로보틱스 | 2026.06~07 |
| `im-webmanager-e2e` | IM 통합 Web Manager E2E 테스트 | 피앤피시큐어 | 2026.01 |
| `pnp-qna-bot-qa` | PNP QnA Bot 사내 지식 검색 챗봇 개발 참여 (QA, 기여 30%) | 피앤피시큐어 | 2025.07 |
| `dbsafer-api-automation` | DBSAFER API 테스트 자동화 전환 | 피앤피시큐어 | 2025.02~04 |
| `clickup-process` | ClickUp 도입을 통한 팀 프로세스 혁신 | 피앤피시큐어 | 2025.01~02 |
| `nosql-8db-verification` | NoSQL 8종 DB 신규 서비스 품질 검증 | 피앤피시큐어 | 2024.08~12 |
| `postgresql-module-compat` | PostgreSQL 기반 DB 모듈 호환성 테스트 | 피앤피시큐어 | 2024.07 |
| `webtob5-gs-certification` | WebtoB 5 GS 인증 획득 | 티맥스소프트 | 2016.10~2017.08 |
| `webtob5-performance` | WebtoB 5 성능 개선 검증 | 티맥스소프트 | 2016.10~2017.08 |
| `openssl-security-patch` | OpenSSL 보안 취약점 신속 대응 | 티맥스소프트 | 2015.03~2019.05 |
| `webtob-release-qa-automation` | WebtoB 정기 릴리즈 QA 및 테스트 자동화 확장 | 티맥스소프트 | 2013.12~2020.04 |
| `nhn-mobile-qa` | 모바일 앱/Web QA (NBP_모바일팜, WANNABE, 네이버북스) | NHN TS | 2012.07~2013.07 |

총 21개 (Tier 1: 2 · Tier 2: 7 · Tier 3: 12). 홈 타임라인에서 회사별 상위 4개 노출, 나머지는 "더 보기"로 펼침. (초안의 22개는 집계 오류였음, 2026-10-05 수정)

---

## 6. Visual Direction

- **톤**: Engineering portfolio. 격자(grid) 배경, 모노스페이스 인덱스 라벨(`01 —`), 노드 그래프 다이어그램, 상태 배지(In Progress / Done)
- **테마**: Dark 기본 + Light 토글, `prefers-color-scheme` 존중
  - Dark: bg `#0B0F14`, surface `#111827`, border `#1F2937`, text `#E5E7EB`, muted `#9CA3AF`
  - Light: bg `#FAFAF9`, surface `#FFFFFF`, border `#E7E5E4`, text `#111827`, muted `#6B7280`
  - Accent 1개: **verification green** `#22C55E` (PASS 의미) + 보조 amber `#F59E0B` (In Progress) — 색 의미를 QA 어휘와 연결
- **타이포**: Pretendard Variable (한글/본문) + JetBrains Mono (라벨/수치/다이어그램)
- **레이아웃**: max-width 1120px (벤치마크 930보다 넓게, 프로젝트/스킬 충분히 노출), 섹션 간 96–128px
- **다이어그램**: SVG 노드+엣지, 스크롤 진입 시 엣지 draw 애니메이션 1회 (reduced-motion 시 생략)
- **모션 예산**: reveal 300ms, hover 150ms, 카운터는 Metrics 1회만. 패럴랙스/배경 애니메이션 없음

---

## 7. 주요 컴포넌트

```
components/
  layout/   Header, MobileNav, ThemeToggle, Footer, Section(index, label, title)
  hero/     Hero, HeroGraph(SVG)
  about/    AboutCards, GrowthPath(step[])
  metrics/  MetricCard(value, unit, label, source), MetricsGrid
  career/   Timeline, TimelineItem(company), ProjectCard(tier), ProjectGrid(+더보기)
  project/  ProjectDrawer(dialog), ProjectDetail(sections[]), StatusBadge, TechChips
  diagrams/ FlowDiagram(nodes, edges, direction), SimulatorStoryFlow, QaSystemFlow,
            AiWorkflowFlow
  skills/   SkillTabs(categories), SkillChip, SkillCategoryPanel
  certs/    CertList
  common/   Chip, Badge, Reveal(IntersectionObserver), Counter
data/
  profile.ts, companies.ts, projects/*.ts (22), skills.ts, metrics.ts, certs.ts, growth.ts
  types.ts  (Project { slug, tier, company, title, period, status, role, contribution,
             tech[], sections: { overview, problem, role, approach, architecture?,
             testStrategy?, implementation?, result, learned? }, metrics?[] })
```

---

## 8. 기술 스택 (구현)

| 영역 | 선택 | 이유 |
|------|------|------|
| Framework | Next.js 15 (App Router) + React 19 + TypeScript | 정적 export 가능, 메타데이터/OG/sitemap 내장, `/projects/[slug]` SEO |
| 스타일 | Tailwind CSS v4 | 토큰 기반 다크/라이트, 의존성 최소 |
| 애니메이션 | CSS transition + 자체 `useInView` 훅 (IntersectionObserver) | framer-motion 미도입으로 번들 최소화 |
| 아이콘 | lucide-react | 경량, 트리쉐이킹 |
| 폰트 | next/font (JetBrains Mono) + Pretendard Variable (CDN CSS) | 한글 가변 폰트 |
| 테마 | 자체 훅 + `data-theme` + localStorage (next-themes 미도입) | 의존성 최소 |
| 품질 | ESLint, Prettier, `tsc --noEmit` | |
| SEO/A11y | metadata API, JSON-LD Person, sitemap/robots, skip link, dialog focus trap, reduced-motion | |
| 배포 | `output: 'export'` → **GitHub Pages 확정 (2026-10-05)**: repo `masha0465/masha0465.github.io`, URL https://masha0465.github.io/, GitHub Actions 자동 배포 | |

dependencies: next, react, react-dom, lucide-react / dev: typescript, tailwindcss, @tailwindcss/postcss, eslint, prettier 수준.

---

## 9. 프로젝트별 표현 방식

### EVO-W OLT Test Simulator (Tier 1)
- 상태 배지 `In Progress · MVP 기반 확보`
- Story Flow 세로 다이어그램: Customer Environment → Actual CleVis Workflow → Robot/PLC/Vision Dependencies → Dependency Analysis → Mock/Simulator Design → Repeatable Test Environment → Future Automated Testing (마지막 노드는 점선 = 향후)
- Problem / Approach(8항목) / Technical Architecture(Node Graph·Offline 실행·Mock 3영역·Traceability) / Test Strategy(정상·오류·Timeout 시나리오 확장 기반) / Result(경력서 R 그대로) / Status
- AI-assisted 서브블록 포함 (Section 06과 동일 다이어그램 재사용)
- 금지: "Simulator 구축 완료", "자동화 완료"

### QA System 0→1 (Tier 1)
- 2단 다이어그램: ① QA Process → Issue Mgmt → Project Mgmt → Company-wide Task Mgmt(점선=확장 중) ② Slack → n8n(+ngrok) → OpenProject → Work Package → Tracking
- 7 역할 권한 매트릭스 요약표(개발/SE/HW/QA/POC/GS/임원 × Lead/Access/Assignee Pool 3축)
- 도구 비교 PoC(monday/Linear/OpenProject, 평가축 6개), ISTQB 결함 기준(Severity 5/Priority 4/Type)
- 일정(내부 Beta/전사 Open)은 사용자 확인 후 "Planned"로 표기
- 메시지: "Tool 도입"이 아니라 "조직의 업무·품질 관리 체계 설계"

### Tier 2 (STAR 전체)
Overview → Problem(S) → My Role(기여도·직무) → Approach(T/A) → Implementation(A 상세) → Result(R, 수치) → 필요 시 Test Strategy. 억지로 9섹션 채우지 않음.

### Tier 3 (요약)
Overview · Role · Result 3단 + 기술 칩. 특히 QnA Bot은 "기여도 30% · QA 검증 참여" 명시.

### 회사 Key Focus 칩
- 클레로보틱스: QA 0→1 · Industrial Robot/PLC/Vision QA · Test Simulator · AI-assisted QA
- 피앤피시큐어: E2E/API Automation · Cloud QA (NCP/AWS/Azure) · K8s · Left-Shift
- 티맥스소프트: Middleware QA · Java Automation · Multi-OS · 7 Clouds · GS 인증 · Performance
- NHN TS: Mobile QA · Test Lead

---

## 10. Hero 문구 후보

| 안 | 영문 | 한국어 서브라인 | 비고 |
|----|------|-----------------|------|
| **A (확정 2026-10-05)** | Building Testable Systems, Not Just Tests. | 테스트를 수행하는 QA에서, 테스트 가능한 시스템을 만드는 QA로. | 요청 메시지와 직결, 짧음 |
| B | From Running Tests to Engineering Testability. | 10년의 QA, 복잡한 시스템을 테스트 가능한 구조로 만듭니다. | 성장 서사 강조 |
| C | QA Engineer who makes complex systems testable. | Robot · PLC · Vision · Cloud까지, 재현 가능한 품질 검증 체계를 설계합니다. | 도메인 명시형 |

---

## 11. Phase 계획

| Phase | 범위 | 산출물 |
|-------|------|--------|
| 1 | 분석·설계 (본 문서) | docs/phase1-design.md |
| 2 | 프로젝트 셋업, 디자인 토큰, Header/Footer/Theme, Hero, About, Growth Path | 동작하는 홈 상단 |
| 3 | 데이터 모델 + 21개 프로젝트 데이터 입력, Timeline, ProjectCard, Metrics | 홈 중단 |
| 4 | ProjectDrawer + `/projects/[slug]` 상세 | 상세 UX |
| 5 | FlowDiagram 컴포넌트, Simulator/QA System 다이어그램, Featured 섹션 | 시각화 |
| 6 | AI-assisted QA 섹션 | |
| 7 | 반응형, 모션, 접근성, SEO, 성능 점검 | Lighthouse |
| 8 | 경력서 대조 전수 검증 (회사명·기간·직무·수치·상태 표현) | 검증 체크리스트 |
