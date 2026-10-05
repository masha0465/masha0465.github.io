// Tech stack grouped by category. Only tools that appear in the career document.
// `match` lists strings used to find the projects where the skill was applied
// (matched case-insensitively against each project's tech / tags / title).

export type Skill = { name: string; match?: string[]; note?: string };
export type SkillCategory = {
  id: string;
  label: string;
  labelKo: string;
  description: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "qa-testing",
    label: "QA / Testing",
    labelKo: "테스트 자동화 · 성능",
    description: "E2E · API · 성능 자동화와 테스트 관리. Playwright + TypeScript, Postman/Newman, JMeter/LoadRunner/Ngrinder.",
    skills: [
      { name: "Python", match: ["python"] },
      { name: "Java", match: ["java"] },
      { name: "TypeScript", match: ["typescript"] },
      { name: "pytest" },
      { name: "Selenium" },
      { name: "Playwright", match: ["playwright"] },
      { name: "Postman", match: ["postman"] },
      { name: "Newman", match: ["newman"] },
      { name: "boto3" },
      { name: "JMeter", match: ["jmeter"] },
      { name: "LoadRunner", match: ["loadrunner"] },
      { name: "Ngrinder", match: ["ngrinder"] },
      { name: "TestLink", match: ["testlink"] },
      { name: "OWASP ZAP", match: ["owasp"] },
      { name: "Mock 기반 테스트 환경", match: ["mock"] },
    ],
  },
  {
    id: "cloud-infra",
    label: "Cloud / Infrastructure",
    labelKo: "클라우드 · 인프라 · CI/CD",
    description: "7개 클라우드 환경 검증, NCP API 인프라 자동화, 온프레미스 Kubernetes 구축, GitLab CI · Jenkins 파이프라인.",
    skills: [
      { name: "AWS", match: ["aws"] },
      { name: "Naver Cloud (NCP)", match: ["ncp", "naver cloud", "ncloud"] },
      { name: "Azure", match: ["azure"] },
      { name: "Kubernetes", match: ["kubernetes", "k8s"] },
      { name: "OpenShift", match: ["openshift"] },
      { name: "Docker", match: ["docker"] },
      { name: "GitLab CI/CD", match: ["gitlab"] },
      { name: "Jenkins", match: ["jenkins"] },
      { name: "GitHub Actions" },
      { name: "Grafana", match: ["grafana"] },
    ],
  },
  {
    id: "os-network-db",
    label: "OS / Network / DB",
    labelKo: "OS · 네트워크 · DB",
    description: "5개 OS 호환성 검증, 프로토콜 레벨 접속 검증, RDB · NoSQL 호환성 테스트.",
    skills: [
      { name: "Linux", match: ["linux"] },
      { name: "Windows", match: ["windows"] },
      { name: "AIX", match: ["aix"] },
      { name: "HP-UX", match: ["hp-ux", "hp_ux"] },
      { name: "SunOS", match: ["sunos"] },
      { name: "TCP/IP · HTTP" },
      { name: "SSH · SFTP · TELNET", match: ["ssh", "sftp", "telnet"] },
      { name: "Oracle" },
      { name: "PostgreSQL", match: ["postgresql", "pgsql"] },
      { name: "MySQL", match: ["mysql"] },
      { name: "NoSQL (8종)", match: ["nosql", "couchbase", "clickhouse", "opensearch"] },
    ],
  },
  {
    id: "qa-collab",
    label: "QA / Collaboration",
    labelKo: "업무 · 이슈 · 협업 도구",
    description: "이슈·프로젝트 관리 도구 비교 평가와 도입, Workflow · 권한 · 템플릿 설계, Slack–n8n 자동화.",
    skills: [
      { name: "OpenProject", match: ["openproject"] },
      { name: "Linear", match: ["linear"] },
      { name: "monday.com", match: ["monday"] },
      { name: "Jira" },
      { name: "Confluence", match: ["confluence"] },
      { name: "ClickUp", match: ["clickup"] },
      { name: "Slack", match: ["slack"] },
      { name: "n8n", match: ["n8n"] },
      { name: "ngrok", match: ["ngrok"] },
      { name: "GitHub", match: ["github"] },
      { name: "Figma", match: ["figma"] },
    ],
  },
  {
    id: "industrial",
    label: "Industrial System",
    labelKo: "산업용 로봇 · 비전 · 제어",
    description: "UR 협동로봇 셋업·검증, FANUC Robot 연계 구조 분석, PLC 신호 기반 OK/NG 검증, 3D 비전 보정, OCR/ONNX 추론 검증.",
    skills: [
      { name: "UR 협동로봇 (e-Series)", match: ["ur e-series", "ur 협동로봇", "ur robot"] },
      { name: "FANUC Robot", match: ["fanuc"], note: "OLT Workflow 연계 구조 분석" },
      { name: "PLC (Melsec · LS)", match: ["plc"] },
      { name: "3D Vision Camera (CoPick3D)", match: ["copick3d", "3d 카메라", "vision"] },
      { name: "OCR", match: ["ocr", "vmi", "vin marking"] },
      { name: "ONNX", match: ["onnx", "vmi", "vin marking"] },
      { name: "PLC Simulator", match: ["plc simulator"] },
      { name: "Robot / PLC / Vision Mock", match: ["vision mock", "robot/plc/vision mock"] },
      { name: "CleVis", match: ["clevis"] },
    ],
  },
  {
    id: "ai",
    label: "AI",
    labelKo: "AI-assisted Development · QA Analysis · Cross Validation",
    description: "AI를 분석·구현 가속 도구로 활용하고, 다른 AI 도구와 실제 시스템 실행 결과로 교차 검증. AI/ML 기능이 들어간 제품의 QA 수행. AI 모델 개발 경험은 없음.",
    skills: [
      { name: "Claude Code", match: ["claude code"], note: "분석 · 구현 가속" },
      { name: "Orca", match: ["orca"], note: "Claude Code 실행 환경" },
      { name: "ChatGPT", match: ["chatgpt"], note: "설계 · 논리 교차 검증" },
      { name: "OpenAI Assistant API", match: ["openai"], note: "QA 대상 (Vector Storage 검색 품질 검증)" },
      { name: "OCR / ONNX 추론 검증", match: ["onnx", "vmi"], note: "AI/ML 결과 검증" },
    ],
  },
];
