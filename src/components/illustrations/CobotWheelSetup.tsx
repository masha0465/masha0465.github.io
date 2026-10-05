import { Arrow, Camera3D, Caption, Frame, Label, Pill, RobotArm, Screen, TextLines } from "./primitives";

/** UR cobot + CoPick3D camera wheel/tire mounting setup. */
export function CobotWheelSetup({ slice }: { slice?: boolean }) {
  return (
    <Frame title="UR 협동로봇과 CoPick3D 3D 카메라 기반 휠/타이어 자동 장착 셋업 개념도" slice={slice}>
      <path d="M40,350 H520" className="stroke-line-strong" strokeWidth={1.2} />

      {/* cobot */}
      <RobotArm x={170} y={342} scale={1} cobot />
      <Label x={170} y={376} anchor="middle" size={11} bold>
        UR e-Series
      </Label>
      <Label x={170} y={390} anchor="middle" size={9.5} muted>
        TCP 설정 · Master Teaching
      </Label>

      {/* wheel */}
      <g transform="translate(400 300)">
        <circle r={46} className="fill-surface stroke-fg" strokeWidth={1.6} />
        <circle r={30} className="fill-surface-2 stroke-fg" strokeWidth={1.2} />
        <circle r={9} className="fill-surface stroke-fg" strokeWidth={1.2} />
        {[0, 1, 2, 3, 4].map((i) => {
          const a = (i / 5) * Math.PI * 2;
          return <circle key={i} cx={Math.cos(a) * 19} cy={Math.sin(a) * 19} r={3} className="fill-fg" />;
        })}
      </g>
      <Label x={400} y={372} anchor="middle" size={10.5} bold>
        Wheel Hub
      </Label>

      {/* camera */}
      <Camera3D x={400} y={110} coneTo={{ x: 400, y: 254, half: 50 }} label="CoPick3D250S" />

      {/* screens */}
      <Screen x={560} y={40} w={216} h={140} title="WheelHubApplication" accent>
        <TextLines x={14} y={14} widths={[150, 110, 130]} />
        <Pill x={14} y={56} text="Master Teaching" tone="accent" />
        <Pill x={14} y={82} text="Setup / Manual / Auto" />
      </Screen>

      <Screen x={560} y={204} w={216} h={160} title="CoPick3D Calibration · YML">
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i} transform={`translate(14 ${12 + i * 24})`}>
            <rect width={11} height={11} rx={2} className={i < 4 ? "fill-accent-soft stroke-accent" : "fill-surface stroke-line-strong"} strokeWidth={1} />
            {i < 4 ? <path d="M2.5,5.5 L4.8,8 L8.8,3" className="stroke-accent" strokeWidth={1.4} fill="none" /> : null}
            <rect x={20} y={3} width={[120, 96, 140, 110, 80][i]} height={4} rx={2} className="fill-line-strong" />
          </g>
        ))}
        <Label x={14} y={128} size={9.5} muted>
          해상도 · 패턴 · Final Pose · 수렴 오차
        </Label>
      </Screen>

      {/* flow arrows */}
      <Arrow x1={300} y1={240} x2={560} y2={110} dashed curve head={false} />
      <Arrow x1={440} y1={300} x2={560} y2={284} dashed curve head={false} />

      <Label x={40} y={60} size={11} bold>
        셋업 매뉴얼 13장 · 체크리스트 14항목
      </Label>
      <Label x={40} y={78} size={10} muted>
        TCP 설정 → Calibration → Master Teaching → 검증
      </Label>

      <Caption>UR 로봇 휠/타이어 자동 장착 셋업 · 시스템 구성 개념도 (원본 일러스트)</Caption>
    </Frame>
  );
}
