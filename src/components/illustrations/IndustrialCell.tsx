import { Arrow, Box, Camera3D, Caption, Frame, Label, Pill, PlcCabinet, RobotArm, Screen } from "./primitives";

/** EVO-W OLT cell: FANUC robot + 3D vision + PLC feeding a CleVis workflow, isolated behind Mocks. */
export function IndustrialCell({ slice }: { slice?: boolean }) {
  return (
    <Frame title="EVO-W OLT 셀 구성 개념도: FANUC 로봇, 3D 비전 카메라, PLC가 CleVis Workflow와 연계되고 Mock으로 대체되는 구조" slice={slice}>
      {/* floor line */}
      <path d="M40,340 H520" className="stroke-line-strong" strokeWidth={1.2} />

      {/* robot */}
      <RobotArm x={140} y={332} scale={0.95} />
      <Label x={140} y={366} anchor="middle" size={11} bold>
        FANUC Robot
      </Label>
      <Label x={140} y={380} anchor="middle" size={9.5} muted>
        OLT-Picking / Assembly
      </Label>

      {/* conveyor + part */}
      <rect x={250} y={300} width={190} height={14} rx={3} className="fill-surface stroke-fg" strokeWidth={1.3} />
      {[0, 1, 2, 3, 4].map((i) => (
        <circle key={i} cx={268 + i * 38} cy={307} r={4} className="fill-surface-2 stroke-fg" strokeWidth={1} />
      ))}
      <rect x={318} y={268} width={54} height={32} rx={4} className="fill-surface stroke-accent" strokeWidth={1.4} />
      <Label x={345} y={288} anchor="middle" size={9.5} accent>
        PART
      </Label>

      {/* 3D camera */}
      <Camera3D x={345} y={120} coneTo={{ x: 345, y: 268, half: 46 }} label="3D Vision Camera" />

      {/* PLC */}
      <PlcCabinet x={450} y={212} label="PLC" sub="Melsec / LS" />
      <Pill x={440} y={176} text="OK / NG 신호" />

      {/* CleVis node graph screen */}
      <Screen x={560} y={34} w={216} h={190} title="CleVis · Node Graph" accent>
        <g>
          <Box x={14} y={14} w={72} h={30} label="Camera" />
          <Box x={14} y={66} w={72} h={30} label="Robot Pose" />
          <Box x={14} y={118} w={72} h={30} label="PLC Runner" />
          <Box x={126} y={66} w={76} h={30} label="Inspect" accent />
          <Arrow x1={86} y1={29} x2={126} y2={81} curve />
          <Arrow x1={86} y1={81} x2={126} y2={81} />
          <Arrow x1={86} y1={133} x2={126} y2={81} curve />
          <Label x={164} y={128} anchor="middle" size={9.5} muted>
            Node-level 실행 결과
          </Label>
          <Pill x={118} y={136} text="Offline 실행" tone="accent" />
        </g>
      </Screen>

      {/* mocks */}
      <Label x={560} y={262} size={10.5} bold>
        물리 장비 → Mock 대체
      </Label>
      <Box x={560} y={272} w={66} h={40} label="Mock" sub="Robot" accent dashed />
      <Box x={635} y={272} w={66} h={40} label="Mock" sub="PLC" accent dashed />
      <Box x={710} y={272} w={66} h={40} label="Mock" sub="Vision" accent dashed />

      {/* dependency arrows from devices to mocks (dashed) */}
      <Arrow x1={238} y1={250} x2={560} y2={292} dashed curve head={false} />
      <Arrow x1={528} y1={262} x2={635} y2={292} dashed curve head={false} />
      <Arrow x1={372} y1={150} x2={710} y2={292} dashed curve head={false} />

      <Pill x={560} y={326} text="정상 · 오류 · Timeout 시나리오" />
      <Pill x={560} y={352} text="Version / Config / Runtime 추적" />

      <Caption>EVO-W OLT 테스트 시뮬레이터 · 시스템 구성 개념도 (원본 일러스트)</Caption>
    </Frame>
  );
}
