import { Arrow, Box, Caption, Cloud, Frame, Label, Pill } from "./primitives";

export type WebtobVariant = "multicloud" | "gs" | "perf" | "openssl" | "release";

const NOTES: Record<WebtobVariant, { title: string; head: string; pills: string[] }> = {
  multicloud: {
    title: "WebtoB 웹서버를 AWS, Kubernetes, OpenShift, Naver Ncloud, Azure, KT UCloud, TmaxCloud 7개 환경에 배포·검증한 구조",
    head: "7개 클라우드 환경 배포 · 검증",
    pills: ["이미지 생성 · 등록", "scale-in / out · Auto-Scaling", "환경별 배포 가이드"],
  },
  gs: {
    title: "WebtoB 5 GS 인증 준비: 기능 리스트, 시험 합의서, 연동 환경, 현장 심사",
    head: "GS 인증 획득",
    pills: ["기능 리스트 · 시험 합의서", "JDK · PHP 연동 환경", "1·2차 결함 대응 · 현장 심사"],
  },
  perf: {
    title: "WebtoB 4/5, Nginx, Apache 성능 비교 테스트",
    head: "성능 비교 검증",
    pills: ["LoadRunner · Ngrinder", "vs Nginx · Apache", "WebtoB 5 +20% · 자동화 TC 30"],
  },
  openssl: {
    title: "OpenSSL 보안 패치를 5개 OS, 9개 버전에서 회귀 검증",
    head: "OpenSSL 보안 패치 검증",
    pills: ["5 OS 회귀 테스트", "9개 버전 패치", "패치 검증 프로세스"],
  },
  release: {
    title: "WebtoB 정기 릴리즈 QA와 Java 자동화 TC 확장",
    head: "정기 릴리즈 QA · 자동화 확장",
    pills: ["Java 자동화 TC 290+", "Fail률 35% → 5%", "Fix · SP · Major 릴리즈"],
  },
};

const CLOUDS = ["AWS", "Kubernetes", "OpenShift", "Ncloud", "Azure", "UCloud", "TmaxCloud"];
const OS = ["Linux", "AIX", "HP-UX", "SunOS", "Windows"];

/** TmaxSoft WebtoB: web server + JEUS, multi-cloud deployment, multi-OS compatibility. */
export function WebServerClouds({ slice, variant = "multicloud" }: { slice?: boolean; variant?: WebtobVariant }) {
  const n = NOTES[variant];
  const multi = variant === "multicloud";
  return (
    <Frame title={n.title} slice={slice}>
      {/* clouds row */}
      {CLOUDS.map((c, i) => (
        <Cloud key={c} x={90 + i * 104} y={70} label={c} w={92} accent={multi && (c === "AWS" || c === "Kubernetes")} />
      ))}
      {CLOUDS.map((_, i) => (
        <Arrow key={i} x1={400} y1={190} x2={90 + i * 104} y2={94} curve head={false} dashed={!multi} />
      ))}

      {/* server */}
      <rect x={250} y={190} width={300} height={110} rx={10} className="fill-surface stroke-accent" strokeWidth={1.6} />
      <Label x={400} y={216} anchor="middle" size={14} bold>
        WebtoB
      </Label>
      <Label x={400} y={232} anchor="middle" size={9.5} muted>
        Web Server · 4.x / 5.x
      </Label>
      <Box x={266} y={246} w={120} h={40} label="JEUS" sub="WAS 연동" />
      <Box x={414} y={246} w={120} h={40} label="OpenSSL" sub="TLS" accent={variant === "openssl"} />

      {/* OS row */}
      <Label x={250} y={330} size={10.5} bold>
        5 OS 호환성
      </Label>
      {OS.map((o, i) => (
        <Pill key={o} x={250 + i * 76} y={340} text={o} />
      ))}

      {/* side notes */}
      <Label x={40} y={200} size={11} bold>
        {n.head}
      </Label>
      {n.pills.map((p, i) => (
        <Pill key={p} x={40} y={212 + i * 28} text={p} tone={i === n.pills.length - 1 ? "accent" : "neutral"} />
      ))}

      <Label x={580} y={200} size={11} bold>
        릴리즈 QA
      </Label>
      <Pill x={580} y={212} text="Java 자동화 TC" />
      <Pill x={580} y={240} text="릴리즈 노트 · 인스톨러" />
      <Pill x={580} y={268} text="형상 관리 · 패치 이슈" />

      <Caption>티맥스소프트 WebtoB 검증 환경 개념도 (원본 일러스트)</Caption>
    </Frame>
  );
}
