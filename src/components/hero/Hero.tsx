import { ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/common/BrandIcons";
import { Chip } from "@/components/common/Chip";
import { sections } from "@/data/nav";
import { profile } from "@/data/profile";
import { HeroGraph } from "./HeroGraph";

export function Hero() {
  const [line1, line2] = profile.tagline.en.split("\n");
  return (
    <section id={sections.hero.id} className="relative overflow-hidden" aria-labelledby="hero-title">
      <div className="grid-bg pointer-events-none absolute inset-0 -z-10" aria-hidden />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:pb-28 lg:pt-28">
        <div>
          <div className="rise">
            <p className="eyebrow">
              {sections.hero.index} <span aria-hidden>—</span> {profile.title} · {profile.yearsLabel}
            </p>
          </div>
          <div className="rise" style={{ ["--rise-delay" as string]: "80ms" } as React.CSSProperties}>
            <h1
              id="hero-title"
              className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
            >
              {line1}
              <br />
              <span className="text-muted">{line2}</span>
            </h1>
          </div>
          <div className="rise" style={{ ["--rise-delay" as string]: "160ms" } as React.CSSProperties}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
              {profile.tagline.ko}
            </p>
          </div>
          <div className="rise" style={{ ["--rise-delay" as string]: "220ms" } as React.CSSProperties}>
            <p className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="text-2xl font-semibold tracking-tight">{profile.nameKo}</span>
              <span className="font-mono text-sm text-muted">{profile.nameEn}</span>
              <span className="text-sm text-muted">· {profile.title}</span>
            </p>
          </div>
          <div className="rise" style={{ ["--rise-delay" as string]: "280ms" } as React.CSSProperties}>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="핵심 영역">
              {profile.focus.map((f) => (
                <li key={f}>
                  <Chip mono>{f}</Chip>
                </li>
              ))}
            </ul>
          </div>
          <div className="rise" style={{ ["--rise-delay" as string]: "340ms" } as React.CSSProperties}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={`#${sections.featured.id}`}
                className="inline-flex items-center gap-2 rounded-md bg-fg px-4 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
              >
                Featured Systems
                <ArrowDown className="size-4" aria-hidden />
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-line bg-surface px-4 py-2.5 text-sm font-medium transition-colors hover:border-line-strong"
              >
                <GithubIcon className="size-4 text-muted" />
                GitHub
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-line bg-surface px-4 py-2.5 text-sm font-medium transition-colors hover:border-line-strong"
              >
                <LinkedinIcon className="size-4 text-muted" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <HeroGraph />
        </div>
      </div>
    </section>
  );
}
