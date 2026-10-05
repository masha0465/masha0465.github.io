import { Section } from "@/components/layout/Section";
import { sections } from "@/data/nav";
import { projects } from "@/data/projects";
import { skillCategories, type Skill } from "@/data/skills";
import { SkillTabs, type CategoryView } from "./SkillTabs";

function haystack(p: (typeof projects)[number]) {
  return [p.title, p.titleEn, ...p.tech, ...p.tags].join(" | ").toLowerCase();
}

function projectsFor(skill: Skill) {
  if (!skill.match?.length) return [];
  const needles = skill.match.map((m) => m.toLowerCase());
  return projects
    .filter((p) => {
      const h = haystack(p);
      return needles.some((n) => h.includes(n));
    })
    .map((p) => ({ slug: p.slug, title: p.title }));
}

/** Server component: resolves skill → project links from the data, then hands plain data to the client tabs. */
export function Skills() {
  const categories: CategoryView[] = skillCategories.map((c) => {
    const skills = c.skills.map((s) => ({ name: s.name, note: s.note, projects: projectsFor(s) }));
    const seen = new Set<string>();
    const related = skills
      .flatMap((s) => s.projects)
      .filter((p) => (seen.has(p.slug) ? false : (seen.add(p.slug), true)))
      // keep career order (projects array is most-recent-first)
      .sort((a, b) => projects.findIndex((p) => p.slug === a.slug) - projects.findIndex((p) => p.slug === b.slug));
    return { id: c.id, label: c.label, labelKo: c.labelKo, description: c.description, skills, related };
  });

  return (
    <Section
      id={sections.skills.id}
      index={sections.skills.index}
      label="Tech Stack"
      title="실무에서 사용한 기술"
      description="아이콘 나열이 아니라 어디에 썼는지로 보여줍니다. 기술을 누르면 실제로 사용한 프로젝트가 아래에 표시됩니다. 숫자는 해당 기술이 등장하는 프로젝트 수입니다."
      wide
    >
      <SkillTabs categories={categories} />
    </Section>
  );
}
