# Phase 8 fact-check: compare site content (src/data, illustrations, key components)
# against the career document (docs/resume-source.txt). Run: python scripts/factcheck.py
import glob
import io
import re

RESUME = io.open("docs/resume-source.txt", encoding="utf-8").read()
R = RESUME.replace(" ", "").replace("\n", "")  # space-insensitive haystack
R_LOWER = R.lower()

FILES = (
    sorted(glob.glob("src/data/**/*.ts", recursive=True))
    + sorted(glob.glob("src/components/illustrations/*.tsx"))
    + [
        "src/components/featured/Featured.tsx",
        "src/components/ai/AiQa.tsx",
        "src/components/about/About.tsx",
        "src/components/metrics/Metrics.tsx",
        "src/components/career/Timeline.tsx",
        "src/components/layout/Footer.tsx",
        "src/components/skills/Skills.tsx",
        "src/app/layout.tsx",
    ]
)

STR_RE = re.compile(r'"((?:[^"\\]|\\.)*)"|\'((?:[^\'\\]|\\.)*)\'|`((?:[^`\\]|\\.)*)`')


def strings_in(path):
    text = io.open(path, encoding="utf-8").read()
    out = []
    for m in STR_RE.finditer(text):
        s = m.group(1) or m.group(2) or m.group(3) or ""
        if re.search(r"[가-힣]", s) or (re.search(r"\d", s) and len(s) > 3 and not s.startswith(("/", "#", "http", "M", "L", "C", "translate", "0 0"))):
            out.append(s)
    return out


# ---------------------------------------------------------------- 1. forbidden phrases
FORBIDDEN = [
    "구축 완료", "자동화 완료", "Simulator 구축 완료", "시뮬레이터 구축 완료", "FANUC Robot 개발", "FANUC 프로그래밍",
    "FANUC 로봇 프로그래밍", "AI 개발", "AI 모델 개발", "모델 학습", "모델을 학습", "10+ Years", "10+년",
    "완성된 시뮬레이터", "시뮬레이터 완성", "Simulator 완성", "자동화 테스트 완료",
]
ALLOW_CTX = ["개발하거나 학습시킨 경험은 없", "AI 모델 개발 경험은 없", "학습 데이터", "model development"]

print("== 1. 금지/위험 표현 검사")
hits = 0
for f in FILES:
    t = io.open(f, encoding="utf-8").read()
    for ph in FORBIDDEN:
        for m in re.finditer(re.escape(ph), t):
            ctx = t[max(0, m.start() - 45) : m.end() + 45].replace("\n", " ")
            if any(a in ctx for a in ALLOW_CTX):
                print(f"  허용(부정문/범위 명시): {f}: …{ctx}…")
                continue
            hits += 1
            print(f'  !! {f}: "{ph}" …{ctx}…')
print(f"  -> {hits} hits")

# ---------------------------------------------------------------- 2. numbers
print("\n== 2. 수치 대조 — 경력서에 그대로 없는 수치")
DERIVED_OK = {
    "21": "프로젝트 수: 데이터에서 계산 (경력서 프로젝트 21개와 일치)",
    "4": "회사 수·자격 수: 경력서 항목 개수",
    "6": "스킬 카테고리 수 (UI)",
    "5": "5개 OS (경력서 '다중 OS 환경(5개)') / Severity 5단계",
}
UI_INDEX = {"01", "02", "03", "04", "05", "06", "07", "08", "09"}
NUM_RE = re.compile(
    r"\d+(?:[.,]\d+)*\s*(?:%|배|×|건|개|종|회|시간|h|m|분|초|대|자|년|개월|GB|KB|MB|vCPU|users|Years|Roles|Clouds|TC|Certs|Issues|Companies|OS|CSP|Pods?|PCs?|장|항목|단계|축|역할)?",
    re.I,
)
seen = {}
for f in FILES:
    for s in strings_in(f):
        for m in NUM_RE.finditer(s):
            tok = m.group(0).strip()
            core = re.sub(r"[^\d.]", "", tok).strip(".")
            if not core or core in UI_INDEX:
                continue
            if re.fullmatch(r"20\d\d(\.\d\d)?", core):  # dates
                continue
            if "illustrations" in f and re.fullmatch(r"\d+", core) and not re.search(r"[%×배건개종자장항목단계축역할]|users|vCPU|GB", tok, re.I):
                # bare integers in SVG files are mostly coordinates; keep only those with a unit
                continue
            seen.setdefault(core, set()).add((f, s[:100]))
missing = []
for core, ctxs in sorted(seen.items(), key=lambda kv: float(kv[0]) if re.fullmatch(r"\d+(\.\d+)?", kv[0]) else 0):
    found = core in R or core.replace(".", ",") in R
    if not found and core not in DERIVED_OK:
        missing.append((core, ctxs))
for core, ctxs in missing:
    print(f"  ?? {core}")
    for f, s in sorted(ctxs)[:4]:
        print(f"       {f}: {s}")
print(f"  -> {len(missing)} numbers need review")
for k, v in DERIVED_OK.items():
    if k in seen:
        print(f"  (derived) {k}: {v}")

# ---------------------------------------------------------------- 3. companies / periods / titles
print("\n== 3. 회사 · 기간 · 프로젝트명 대조")
comp = io.open("src/data/companies.ts", encoding="utf-8").read()
for name, start, end in re.findall(r'name: "([^"]+)",\s*nameEn: "[^"]+",\s*period: \{ start: "([^"]+)"(?:, end: "([^"]+)")?', comp):
    ok_name = name.replace(" ", "") in R
    ok_per = start in R and ((end in R) if end else True)
    print(f'  {"OK" if ok_name and ok_per else "!!"} {name} {start}~{end or "현재"}')

proj_src = "".join(io.open(f, encoding="utf-8").read() for f in sorted(glob.glob("src/data/projects/*.ts")))
R_T = R.replace("-", "").replace("—", "").replace("–", "")
for title, start, end in re.findall(r'\n\s+title: "([^"]+)",\s*titleEn: "[^"]+",\s*period: \{ start: "([^"]+)"(?:, end: "([^"]+)")?', proj_src):
    tnorm = title.replace(" ", "").replace("—", "").replace("-", "").replace("–", "")
    ok_t = tnorm in R_T
    ok_p = start in R and ((end in R) if end else True)
    print(f'  {"OK" if ok_t and ok_p else "!!"} [{start}~{end or "현재"}] {title}' + ("" if ok_t else "  <- 제목 불일치") + ("" if ok_p else "  <- 기간 불일치"))

# ---------------------------------------------------------------- 4. tech per project
print("\n== 4. 프로젝트 tech 항목 중 경력서 본문에 없는 것")
ALIAS = {
    "hp-ux": "hp_ux",
    "gitlab ci/cd": "gitlabci/cd",
    "naver cloud": "navercloud",
    "ncp api": "ncpapi",
    "rest api": "restapi",
    "chrome / edge / safari": "chrome/edge/safari",
    "robot / plc / vision mock": "robot/plc/visionmock",
    "claude code (orca)": "claudecode(orca)",
    "clevis (저코드 2d/3d 비전 검사 워크플로우 엔진)": "clevis(저코드2d/3d비전검사워크플로우엔진)",
    "fanuc robot (olt 연계 구조 분석)": "fanucrobot기반oltworkflow",
    "ur e-series 협동로봇": "ure-series협동로봇",
    "copick3d250s 3d 카메라": "copick3d250s3d카메라",
    "openai assistant api (file search / vector storage)": "openaiassistantapi(filesearch/vectorstorage)",
    "kt ucloud": "ktucloud",
    "jeus 7": "jeus7",
    "owasp zap": "owaspzap",
    "copick3d gui v1.10.1": "copick3dguiv1.10.1",
}
for m in re.finditer(r'slug: "([^"]+)".*?tech: \[(.*?)\]', proj_src, re.S):
    slug, body = m.group(1), m.group(2)
    for tech in re.findall(r'"([^"]+)"', body):
        key = ALIAS.get(tech.lower(), tech.lower().replace(" ", ""))
        if key not in R_LOWER:
            print(f"  ?? {slug}: {tech}")
print("  (끝)")

# ---------------------------------------------------------------- 5. status wording
print("\n== 5. 진행 중 프로젝트 상태 표현")
for m in re.finditer(r'slug: "([^"]+)".*?status: "([^"]+)"(?:,\s*statusNote: "([^"]+)")?', proj_src, re.S):
    slug, status, note = m.groups()
    if status == "in-progress":
        print(f"  {slug}: {status} · {note}")
