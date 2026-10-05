export type NavItem = { id: string; label: string; index: string };

// Section order on the home page. `index` is the visible section number.
export const sections = {
  hero: { id: "hero", label: "Hero", index: "01" },
  about: { id: "about", label: "About", index: "02" },
  metrics: { id: "metrics", label: "Numbers", index: "03" },
  experience: { id: "experience", label: "Experience", index: "04" },
  featured: { id: "featured", label: "Systems", index: "05" },
  aiQa: { id: "ai-qa", label: "AI-assisted QA", index: "06" },
  skills: { id: "skills", label: "Skills", index: "07" },
  certs: { id: "certs", label: "Certifications", index: "08" },
  contact: { id: "contact", label: "Contact", index: "09" },
} as const satisfies Record<string, NavItem>;

export const navItems: NavItem[] = [
  sections.about,
  sections.experience,
  sections.featured,
  sections.aiQa,
  sections.skills,
  sections.contact,
];
