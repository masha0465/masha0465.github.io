import { About } from "@/components/about/About";
import { Timeline } from "@/components/career/Timeline";
import { Hero } from "@/components/hero/Hero";
import { Metrics } from "@/components/metrics/Metrics";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Metrics />
      <Timeline />
      {/* Phase 5: Featured Systems · Phase 6: AI-assisted QA · Phase 7: Skills, Certs */}
    </>
  );
}
