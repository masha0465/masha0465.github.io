import type { CompanyId, Project } from "../types";
import { cleoroboticsProjects } from "./cleorobotics";
import { nhntsProjects } from "./nhnts";
import { pnpsecureProjects } from "./pnpsecure";
import { tmaxsoftProjects } from "./tmaxsoft";

export const projects: Project[] = [
  ...cleoroboticsProjects,
  ...pnpsecureProjects,
  ...tmaxsoftProjects,
  ...nhntsProjects,
];

export const projectBySlug = Object.fromEntries(projects.map((p) => [p.slug, p])) as Record<
  string,
  Project
>;

export function projectsByCompany(id: CompanyId): Project[] {
  return projects.filter((p) => p.company === id);
}

export const featuredProjects = projects.filter((p) => p.tier === 1);

/** Project images live under /public/projects/<slug>/ and are listed in each project's `images`. */
export function projectImageDir(slug: string) {
  return `/projects/${slug}`;
}
