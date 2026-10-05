export type Status = "in-progress" | "done" | "planned";

const map: Record<Status, { label: string; cls: string; dot: string }> = {
  "in-progress": {
    label: "In Progress",
    cls: "border-accent-2/30 bg-accent-2-soft text-accent-2",
    dot: "bg-accent-2 animate-pulse",
  },
  done: {
    label: "Completed",
    cls: "border-accent/30 bg-accent-soft text-accent",
    dot: "bg-accent",
  },
  planned: {
    label: "Planned",
    cls: "border-line-strong bg-surface-2 text-muted",
    dot: "bg-muted",
  },
};

export function StatusBadge({ status, label }: { status: Status; label?: string }) {
  const m = map[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 font-mono text-[11px] tracking-wide ${m.cls}`}
    >
      <span className={`size-1.5 rounded-full ${m.dot}`} aria-hidden />
      {label ?? m.label}
    </span>
  );
}
