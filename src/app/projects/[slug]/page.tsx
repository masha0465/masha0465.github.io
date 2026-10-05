import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ProjectDetail } from "@/components/project/ProjectDetail";
import { companyById } from "@/data/companies";
import { profile } from "@/data/profile";
import { projectBySlug, projects } from "@/data/projects";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projectBySlug[slug];
  if (!p) return {};
  const title = `${p.title} | ${profile.nameKo} QA Engineer`;
  return {
    title,
    description: p.summary,
    openGraph: { title, description: p.summary, type: "article" },
  };
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const p = projectBySlug[slug];
  if (!p) notFound();

  const idx = projects.findIndex((x) => x.slug === slug);
  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx < projects.length - 1 ? projects[idx + 1] : null;
  const company = companyById[p.company];

  return (
    <div className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <nav aria-label="브레드크럼" className="flex flex-wrap items-center gap-2 font-mono text-xs text-muted">
        <Link href="/#experience" className="inline-flex items-center gap-1.5 hover:text-fg">
          <ArrowLeft className="size-3.5" aria-hidden />
          Experience
        </Link>
        <span aria-hidden>/</span>
        <span>{company.nameEn}</span>
        <span aria-hidden>/</span>
        <span className="text-fg">{p.titleEn}</span>
      </nav>

      <div className="mt-8">
        <ProjectDetail project={p} />
      </div>

      <nav aria-label="다른 프로젝트" className="mt-16 grid gap-3 border-t border-line pt-8 sm:grid-cols-2">
        {prev ? (
          <Link
            href={`/projects/${prev.slug}/`}
            className="group rounded-xl border border-line bg-surface p-4 transition-colors hover:border-line-strong"
          >
            <span className="inline-flex items-center gap-1 font-mono text-[11px] tracking-wider text-muted">
              <ArrowLeft className="size-3" aria-hidden /> Newer
            </span>
            <span className="mt-1.5 block text-sm font-medium leading-snug">{prev.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/projects/${next.slug}/`}
            className="group rounded-xl border border-line bg-surface p-4 text-right transition-colors hover:border-line-strong"
          >
            <span className="inline-flex items-center gap-1 font-mono text-[11px] tracking-wider text-muted">
              Older <ArrowRight className="size-3" aria-hidden />
            </span>
            <span className="mt-1.5 block text-sm font-medium leading-snug">{next.title}</span>
          </Link>
        ) : null}
      </nav>
    </div>
  );
}
