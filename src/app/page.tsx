import { About } from "@/components/about/About";
import { AiQa } from "@/components/ai/AiQa";
import { Timeline } from "@/components/career/Timeline";
import { Certs } from "@/components/certs/Certs";
import { Featured } from "@/components/featured/Featured";
import { Hero } from "@/components/hero/Hero";
import { Metrics } from "@/components/metrics/Metrics";
import { ProjectDrawerProvider } from "@/components/project/ProjectDrawer";
import { Skills } from "@/components/skills/Skills";

export default function Home() {
  return (
    <ProjectDrawerProvider>
      <Hero />
      <About />
      <Metrics />
      <Timeline />
      <Featured />
      <AiQa />
      <Skills />
      <Certs />
    </ProjectDrawerProvider>
  );
}
