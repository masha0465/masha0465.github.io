import { Award, GraduationCap } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/layout/Section";
import { certs, education } from "@/data/certs";
import { sections } from "@/data/nav";

export function Certs() {
  return (
    <Section
      id={sections.certs.id}
      index={sections.certs.index}
      label="Certifications & Education"
      title="자격과 학력"
      wide
    >
      <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <ul className="grid gap-3 sm:grid-cols-2" aria-label="자격사항">
          {certs.map((c, i) => (
            <Reveal
              as="li"
              key={c.name}
              delay={i * 70}
              className={`flex gap-4 rounded-xl border bg-surface p-5 shadow-card ${c.highlight ? "border-accent/40" : "border-line"}`}
            >
              <span className={`mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-md border ${c.highlight ? "border-accent/40 bg-accent-soft text-accent" : "border-line bg-surface-2 text-muted"}`} aria-hidden>
                <Award className="size-4" />
              </span>
              <div>
                <p className="font-semibold leading-snug">{c.name}</p>
                <p className="mt-1 text-sm text-muted">{c.issuer}</p>
                <p className="mt-2 font-mono text-xs tracking-wider text-muted">{c.date}</p>
              </div>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={300} className="flex gap-4 rounded-xl border border-line bg-surface p-5 shadow-card">
          <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-md border border-line bg-surface-2 text-muted" aria-hidden>
            <GraduationCap className="size-4" />
          </span>
          <div>
            <p className="eyebrow">Education</p>
            <p className="mt-1.5 font-semibold leading-snug">{education.school}</p>
            <p className="mt-1 text-sm text-muted">{education.major}</p>
            <p className="mt-2 font-mono text-xs tracking-wider text-muted">{education.period}</p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
