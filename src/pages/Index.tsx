import { Hero } from "@/components/home/Hero";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { BrandsSection } from "@/components/home/BrandsSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { InsightsSection } from "@/components/home/InsightsSection";
import { CtaSection } from "@/components/home/CtaSection";

const Index = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <BrandsSection />
      <ProjectsSection />
      <ServicesOverview />
      <TestimonialsSection />
      <InsightsSection />
      <CtaSection />
    </>
  );
};

export default Index;
