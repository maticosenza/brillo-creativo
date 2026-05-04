import { Hero } from "@/components/home/Hero";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { BrandsSection } from "@/components/home/BrandsSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";

const Index = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <BrandsSection />
      <ProjectsSection />
      <ServicesOverview />
    </>
  );
};

export default Index;
