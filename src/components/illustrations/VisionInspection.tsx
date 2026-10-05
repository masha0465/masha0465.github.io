import { Arrow, Box, Camera3D, Caption, Frame, Label, Pill, PlcCabinet, Screen, TextLines } from "./primitives";

/** VIN marking inspection: camera → decode → 2-stage OCR → OK/NG, with PLC simulator and TestLink. */
export function VisionInspection({ slice }: { slice?: boolean }) {
  return (
    <Frame title="CleVis 각자타각기(VIN Marking Inspection) 검증 구성: 카메라, OCR 2-Stage 파이프라인, PLC 시뮬레이터, TestLink" slice={slice}>
      {/* camera over VIN plate */}
      <Camera3D x={150} y={80} coneTo={{ x: 150, y: 212, half: 78 }} label="2D / 3D Vision" />
      <rect x={66} y={212} width={168} height={40} rx={4} className="fill-surface stroke-fg" strokeWidth={1.4} />
      <text x={150} y={238} textAnchor="middle" className="fill-fg font-mono" style={{ fontSize: 13, letterSpacing: "0.16em", fontWeight: 600 }}>
        KMH•A81•••••••••
      </text>
      <Label x={150} y={270} anchor="middle" size={10} muted>
        VIN 각자 17자 · 실촬영 샘플 10여 장
      </Label>

      {/* PLC */}
      <PlcCabinet x={60} y={296} label="PLC" sub="기준값 수신 · OK/NG" />
      <Pill x={150} y={312} text="수동 모드: 판정 없음" tone="warn" />

      {/* pipeline */}
      <Box x={285} y={60} w={150} h={44} label="Decode" sub="image input" />
      <Box x={285} y={130} w={150} h={44} label="Stage 1 · Detect" sub="17자 · conf 0.89~0.97" accent />
      <Box x={285} y={200} w={150} h={44} label="Stage 2 · Recognize" sub="11건 반환 · 정확도 0/17" dashed />
      <Box x={285} y={270} w={150} h={44} label="OK / NG" sub="PLC 기준값 비교" />
      <Arrow x1={360} y1={104} x2={360} y2={130} />
      <Arrow x1={360} y1={174} x2={360} y2={200} />
      <Arrow x1={360} y1={244} x2={360} y2={270} />
      <Arrow x1={234} y1={232} x2={285} y2={82} curve head={false} dashed />
      <Pill x={285} y={326} text="Critical 기준: 조용히 실패하는가" tone="warn" />
      <Label x={285} y={370} size={10} muted>
        OCR / ONNX 2-Stage 추론 파이프라인
      </Label>

      {/* PLC simulator screen */}
      <Screen x={560} y={40} w={216} h={130} title="PLC Simulator (Web) + Mock Device" accent>
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(14 ${12 + i * 26})`}>
            <rect width={34} height={16} rx={8} className={i === 2 ? "fill-surface stroke-line-strong" : "fill-accent-soft stroke-accent"} strokeWidth={1} />
            <circle cx={i === 2 ? 8 : 26} cy={8} r={5} className={i === 2 ? "fill-line-strong" : "fill-accent"} />
            <text x={44} y={12} className="fill-fg font-mono" style={{ fontSize: 10 }}>
              {["기준값 송신", "카메라 Mock", "조명 Mock"][i]}
            </text>
          </g>
        ))}
        <Label x={130} y={96} size={9.5} muted>
          Mock DLL 이슈 해소
        </Label>
      </Screen>

      {/* TestLink */}
      <Screen x={560} y={194} w={216} h={170} title="TestLink · 9 Suites / 54 TC">
        <Label x={14} y={18} size={9.5} muted>
          SETUP OCR DET ROI VIEW LOG COM PERF STAB
        </Label>
        <TextLines x={14} y={30} widths={[170, 150, 180, 120, 160, 140]} gap={13} accentIndex={2} />
        <Pill x={14} y={112} text="52 / 54 수행 · 67 Issues" tone="accent" />
      </Screen>

      <Caption>CleVis VMI 기능 검증 · 검증 환경 개념도 (원본 일러스트)</Caption>
    </Frame>
  );
}
