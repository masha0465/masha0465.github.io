import { About } from "@/components/about/About";
import { Timeline } from "@/components/career/Timeline";
import { Featured } from "@/components/featured/Featured";
import { Hero } from "@/components/hero/Hero";
import { Metrics } from "@/components/metrics/Metrics";
import { ProjectDrawerProvider } from "@/components/project/ProjectDrawer";

export default function Home() {
  return (
    <ProjectDrawerProvider>
      <Hero />
      <About />
      <Metrics />
      <Timeline />
      <Featured />
      {/* Phase 6: AI-assisted QA · Phase 7: Skills, Certs */}
    </ProjectDrawerProvider>
  );
}
