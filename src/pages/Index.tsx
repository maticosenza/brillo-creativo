import { Hero } from "@/components/home/Hero";
import { StatementSection } from "@/components/home/StatementSection";
import { AboutSection } from "@/components/home/AboutSection";
import { BrandsSection } from "@/components/home/BrandsSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { SEO } from "@/components/shared/SEO";

const Index = () => {
  return (
    <>
      <SEO
        title="CARACTER — Eventos que dejan huella"
        description="Productora de eventos en Buenos Aires. Diseñamos y producimos experiencias de marca, eventos corporativos, lanzamientos y activaciones en toda Latinoamérica."
        canonical="https://productora.com/"
      />
      <Hero />
      <StatementSection />
      <AboutSection />
      <BrandsSection />
      <ProjectsSection />
      <ServicesOverview />
    </>
  );
};

export default Index;
