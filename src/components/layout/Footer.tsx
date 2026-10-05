import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/common/BrandIcons";
import { profile } from "@/data/profile";
import { sections } from "@/data/nav";

export function Footer() {
  return (
    <footer
      id={sections.contact.id}
      className="scroll-mt-20 border-t border-line bg-surface-2/60"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="eyebrow">
          {sections.contact.index} <span aria-hidden>—</span> Contact
        </p>
        <h2 id="contact-title" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          테스트 가능한 시스템을 함께 만들 팀을 찾고 있습니다.
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          Senior QA Engineer · QA Automation Engineer · QA Lead · Quality Engineering 포지션에
          관심이 있습니다.
        </p>

        <ul className="mt-8 flex flex-wrap gap-3">
          <li>
            <a
              href={`mailto:${profile.links.email}`}
              className="inline-flex items-center gap-2 rounded-md border border-line bg-surface px-4 py-2.5 text-sm font-medium transition-colors hover:border-line-strong"
            >
              <Mail className="size-4 text-muted" aria-hidden />
              {profile.links.email}
            </a>
          </li>
          <li>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-line bg-surface px-4 py-2.5 text-sm font-medium transition-colors hover:border-line-strong"
            >
              <LinkedinIcon className="size-4 text-muted" />
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-line bg-surface px-4 py-2.5 text-sm font-medium transition-colors hover:border-line-strong"
            >
              <GithubIcon className="size-4 text-muted" />
              GitHub
            </a>
          </li>
        </ul>

        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.nameEn} · {profile.title}
          </p>
          <p>Quality is a system you build, not a step you pass.</p>
        </div>
      </div>
    </footer>
  );
}
