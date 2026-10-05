export type Tier = 1 | 2 | 3;
export type ProjectStatus = "in-progress" | "done";
export type CompanyId = "cleorobotics" | "pnpsecure" | "tmaxsoft" | "nhnts";

export type Company = {
  id: CompanyId;
  name: string;
  nameEn: string;
  period: { start: string; end?: string };
  role: string;
  keyFocus: string[];
  summary: string;
};

export type ProjectImage = {
  /** Path under /public, e.g. "/projects/evo-w-olt-test-simulator/01-node-graph.png" */
  src: string;
  alt: string;
  caption?: string;
};

export type ProjectMetric = { value: string; label: string };

export type Project = {
  slug: string;
  tier: Tier;
  company: CompanyId;
  title: string;
  titleEn: string;
  period: { start: string; end?: string };
  status: ProjectStatus;
  /** Human-readable status note shown next to the badge, e.g. "MVP 기반 확보 · 확장 진행 중" */
  statusNote?: string;
  role: string;
  contribution: string;
  tech: string[];
  /** Key-focus chips shown on the card (2–4). */
  tags: string[];
  /** One or two sentences for the card. */
  summary: string;
  /** Card bullets (max 3). */
  highlights: string[];

  // Detail sections — only filled where the career document provides evidence.
  problem?: string[];
  approach?: string[];
  architecture?: string[];
  testStrategy?: string[];
  implementation?: string[];
  result: string[];
  learned?: string[];
  /** Future/planned items. Always rendered with a "Planned" label. */
  plan?: string[];

  metrics?: ProjectMetric[];
  images?: ProjectImage[];
};

export type Metric = {
  value: string;
  unit?: string;
  label: string;
  /** Project slug the number comes from (for traceability). */
  source: string;
  sourceLabel: string;
};
