import { HeroSection } from "@/components/sections/hero-section";
import { ShowcaseSection } from "@/components/sections/showcase-section";
import { WorkStripSection } from "@/components/sections/work-strip-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { ServicesSection } from "@/components/sections/services-section";
import { WorksSection } from "@/components/sections/works-section";
import { TeamSection } from "@/components/sections/team-section";
import { CtaSection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ShowcaseSection />
      <WorkStripSection />
      <PhilosophySection />
      <ServicesSection />
      <WorksSection />
      <TeamSection />
      <CtaSection />
    </>
  );
}
