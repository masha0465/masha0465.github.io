import { Arrow, Box, Caption, Cloud, Db, Frame, Label, Pill } from "./primitives";

/** NCP VPC test environment created/destroyed by Python automation; 3 CSPs feeding CSP AutoDiscovery. */
export function CloudInfra({ slice }: { slice?: boolean }) {
  return (
    <Frame title="NCP VPC 기반 Cloud DB 테스트 환경을 Python으로 생성·삭제하고, AWS·Azure·NCP 3개 CSP에서 DBSAFER CSP AutoDiscovery를 검증하는 구조" slice={slice}>
      {/* CSPs */}
      <Cloud x={120} y={70} label="AWS" w={96} />
      <Cloud x={240} y={70} label="Azure" w={96} />
      <Cloud x={360} y={70} label="NCP" w={96} accent />
      <Box x={470} y={44} w={160} h={50} label="DBSAFER" sub="CSP AutoDiscovery" accent />
      <Arrow x1={150} y1={96} x2={470} y2={78} curve />
      <Arrow x1={270} y1={96} x2={470} y2={72} curve />
      <Arrow x1={400} y1={94} x2={470} y2={66} curve />
      <Label x={650} y={62} size={10} muted>
        프로필 등록 → 동기화
      </Label>
      <Label x={650} y={78} size={10} muted>
        → 보안 대상 자동 등록
      </Label>

      {/* VPC */}
      <rect x={250} y={130} width={510} height={240} rx={10} className="fill-surface stroke-accent" strokeWidth={1.4} strokeDasharray="6 4" />
      <Label x={264} y={150} size={10.5} bold accent>
        VPC pnp-cloud-service · 10.0.100.0/24
      </Label>
      {[
        { x: 264, y: 164, t: "Zone A · public" },
        { x: 510, y: 164, t: "Zone B · public" },
        { x: 264, y: 258, t: "Zone A · private" },
        { x: 510, y: 258, t: "Zone B · private" },
      ].map((s) => (
        <g key={s.t}>
          <rect x={s.x} y={s.y} width={236} height={84} rx={6} className="fill-surface-2 stroke-line-strong" strokeWidth={1} />
          <Label x={s.x + 8} y={s.y + 14} size={9.5} muted>
            Subnet · {s.t}
          </Label>
        </g>
      ))}
      <Box x={276} y={186} w={100} h={30} label="Bastion" sub="Ubuntu 24.04" />
      <Db x={548} y={212} label="MySQL ×3" />
      <Db x={626} y={212} label="MSSQL ×3" />
      <Db x={704} y={212} label="PgSQL ×3" />
      <Db x={320} y={302} label="MongoDB ×4" />
      <Db x={420} y={302} label="Redis ×9" />
      <Label x={520} y={300} size={9.5} muted>
        ACG · 의존성 순서 생성/삭제
      </Label>
      <Label x={520} y={316} size={9.5} muted>
        VPC → Subnet → ACG → Cloud DB
      </Label>

      {/* automation */}
      <Box x={40} y={190} w={170} h={64} label="Python · NCP API" sub="HMAC-SHA256 signature" accent />
      <Arrow x1={210} y1={212} x2={250} y2={212} accent />
      <Label x={230} y={204} anchor="middle" size={9} accent>
        create
      </Label>
      <Arrow x1={250} y1={236} x2={210} y2={236} accent dashed />
      <Label x={230} y={250} anchor="middle" size={9} accent>
        delete
      </Label>
      <Pill x={40} y={270} text="폴링 최대 15분 · 상태 대기" />
      <Pill x={40} y={296} text="30분 → 3분 (90% ↓)" tone="accent" />
      <Pill x={40} y={322} text="테스트 후 즉시 삭제 · 비용 최소화" />

      <Caption>NCP 테스트 인프라 자동화 · 구성 개념도 (원본 일러스트)</Caption>
    </Frame>
  );
}
