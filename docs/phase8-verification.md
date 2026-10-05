# Phase 8 — 콘텐츠 사실관계 검증 결과

검증일: 2026-10-06
대상: 사이트 전체 콘텐츠 (`src/data/**`, 일러스트 라벨, 섹션 컴포넌트 문구)
근거: `docs/resume-source.txt` (경력기술서 추출 원문)
도구: `scripts/factcheck.py` (자동 대조) + 수기 검토

---

## 1. 자동 검사 (`python scripts/factcheck.py`)

| 검사 | 결과 |
|------|------|
| 금지·위험 표현 17종 ("구축 완료", "자동화 완료", "Simulator 구축 완료", "FANUC Robot 개발", "AI 개발", "AI 모델 개발", "모델 학습", "10+ Years", "완성된 시뮬레이터" 등) | **0건**. 유일한 매치는 "AI 모델 개발 경험은 없음"이라는 부정문(허용) |
| 회사명 · 재직 기간 4건 | **4/4 일치** |
| 프로젝트명 · 기간 21건 | **21/21 일치** |
| 프로젝트별 기술(tech) 항목 전수 | **전부 경력서 본문에 존재** (FANUC은 "FANUC Robot 기반 OLT Workflow 및 Robot 연계 구조 분석"에 근거해 "(OLT 연계 구조 분석)" 꼬리표 유지) |
| 수치 토큰 전수 대조 | 사이트에 쓰인 모든 수치가 경력서에 그대로 존재. 미매치 6건은 모두 CSS 클래스 값(`mt-0.5`, `gap-2.5` 등)으로 가짜 양성 |
| 도출 수치 | `4 Companies`, `21 Projects`, `4 Certs`는 데이터에서 계산하며 경력서 항목 수와 일치 |
| 진행 중 프로젝트 상태 문구 | EVO-W: "MVP 기반 확보 · 확장 진행 중" / QA 체계: "QA 프로세스 수립 · 전사 확대 진행 중" |

## 2. 수기 검토 — 핵심 주장별 근거

| 사이트 표현 | 위치 | 경력서 근거 | 판정 |
|-------------|------|-------------|------|
| 10 Years of Software QA | Hero, Metrics | "10년 간의 SW QA 실무 경험" | ✓ ("10+" 사용 안 함) |
| 테스트를 수행하는 QA에서, 테스트 가능한 시스템을 만드는 QA로 | Hero | 사용자 요청 메시지 + "복잡한 시스템을 구조화하여 재현 가능한 테스트 환경… 구축" | ✓ 서사 문구 |
| QA 조직·프로세스 0 → 1 | About, Metrics, Featured | "QA 부재 조직에서 QA 기능을 0→1로 설계 (2026.06~)" | ✓ |
| 7개 역할 × Lead / Access / Assignee Pool 3축 | Featured, 상세, 일러스트 | "7개 역할의 권한… Lead / Access / Assignee Pool 3개 축" | ✓ (일러스트 셀 배치는 "예시"로 표기) |
| Slack → n8n(+ngrok) → OpenProject Work Package | Featured, 상세, 일러스트 | "n8n + ngrok을 활용하여 Slack 이슈를 OpenProject Work Package로 자동 등록" | ✓ |
| 2026.10 내부 Beta · 2026.11 전사 Open | 상세(Planned 배지), Featured 칩 | 경력서에 없음. **사용자 제공 정보(2026-10-05 확인)**. "Planned"로만 표기 | ✓ 조건부 |
| EVO-W Simulator "MVP 기반 확보 · 확장 진행 중", Story Flow 마지막 단계 "Future Automated Testing" 점선 | Featured, 상세, 카드 배지 | "시뮬레이터 MVP 구축 기반 확보", "확장 진행 중" | ✓ 완성 표현 없음 |
| FANUC Robot | Growth Path, Skills, 일러스트 라벨 | "FANUC Robot 기반 OLT Workflow 및 Robot 연계 구조 분석" | ✓ "구조 분석"으로만 표현 |
| UR 협동로봇 TCP 설정 · Master Teaching · 셋업·검증 | 온보딩 상세, 일러스트 | "UR 협동로봇 TCP 설정, Hand-eye Calibration, Master Teaching 등 셋업 및 검증" | ✓ |
| OCR Stage1 17자 conf 0.89~0.97 / Stage2 11건 · 0/17 | VMI 상세, AI 섹션, 일러스트 | 동일 문장 존재 | ✓ |
| Claude Code(Orca) 가속 → ChatGPT 교차 검증 → QA 검증 | AI 섹션, EVO-W 상세 | "Claude Code(Orca)를 활용하여… 가속하고, ChatGPT를 활용해… 교차 검증하여 AI 생성 결과에 대한 QA 검증 수행" | ✓ Phase 8에서 QA Check 세부 문구를 경력서 수준으로 낮춤 |
| "AI 모델을 개발하거나 학습시킨 경험은 없습니다" | AI 섹션, Skills | 경력서에 모델 개발 기재 없음 | ✓ 범위 명시 |
| PNP QnA Bot: 기여도 30%, QA 역할 | 카드, 상세, AI 섹션 | "기여도 30% (기능 검증, 사용성 테스트 및 개선 제안) \| QA" | ✓ 개발 주체로 표현하지 않음 |
| 80% / 90% / 65% / 70% / 60% 단축 | Metrics, 상세 | 각 프로젝트 R 항목 | ✓ 출처 프로젝트 라벨 병기 |
| 290+ Java TC · Fail률 35% → 5% | Metrics, Growth | "Java 기반 신규 자동화 TC 290건 이상", "Fail률 35% → 5% 이하" | ✓ |
| 7 Clouds | Metrics, 일러스트 | AWS, Kubernetes, UCloud, OpenShift, Ncloud, TmaxCloud, Azure | ✓ |
| 자격 4종 · 취득 연월 | Certs, Metrics | 자격사항 | ✓ |
| Growth Path 연도 | About | 각 프로젝트 기간 (2026-10-06 수정: 근거별 연도 병기) | ✓ |
| 88.5% 압축률 · 89% 비용 절감 | — | 요약에만 존재, **개인 프로젝트로 확인되어 사이트 전체에서 제외** | ✓ 미사용 |
| 경력 공백 2020.04 ~ 2024.05 | Timeline | 경력서 미기재 | ✓ 설명·추측 추가하지 않음 |
| Senior QA Engineer · QA Automation Engineer · QA Lead · Quality Engineering 포지션 관심 | Footer | 경력서 아님. 사용자 요청서 §21 목표 포지션 | ✓ 사용자 의도 |
| 프로젝트 일러스트 | 카드, 상세 | 경력서 내용을 그린 원본 개념도. 캡션 "원본 일러스트 (실제 제품 사진 아님)" | ✓ 제품 사진·로고 미사용 |

## 3. Phase 8에서 수정한 항목

1. AI 섹션 QA Check 문구 2건과 원칙 1번 본문을 경력서 범위로 축소 (세부 방법론처럼 읽히던 표현 제거).
2. QA 체계 프로젝트 상태 문구에서 "완료" 제거 → "QA 프로세스 수립 · 전사 확대 진행 중".
3. 일러스트 중립화: VIN 예시의 제조사 식별 접두(KMH) 제거, 이전 회사 내부 VPC 이름 제거, 경력서에 없는 "Oracle"/"DBSAFER Pod" 라벨을 "NoSQL"/"Service"로 변경, 권한 매트릭스에 "셀 배치는 예시" 표기.

## 4. 잔여 참고 사항

- 공개 연락처: 이메일만 노출 (경력서 공개 연락처). 전화번호는 사이트·저장소 모두에 없음. 경력서 PDF와 추출 텍스트는 `.gitignore`로 커밋 차단.
- 사용자 제공 정보 2건(OpenProject Beta/Open 일정, 88.5%/89% 제외 사유)은 경력서 외 근거이며 본 문서에 출처를 남김.
- 재검증 방법: 콘텐츠 수정 후 `python scripts/factcheck.py` 실행. 금지 표현 0건, 미매치 수치가 CSS 값만인지 확인.
