import { Hero } from "@/components/home/Hero";
import { StatementSection } from "@/components/home/StatementSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { BrandsSection } from "@/components/home/BrandsSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { InsightsSection } from "@/components/home/InsightsSection";
import { CtaSection } from "@/components/home/CtaSection";
import { SEO } from "@/components/shared/SEO";

const Index = () => {
  return (
    <>
      <SEO
        title="PRODUCTORA — Eventos que dejan huella"
        description="Productora de eventos en Buenos Aires. Diseñamos y producimos experiencias de marca, eventos corporativos, lanzamientos y activaciones en toda Latinoamérica."
        canonical="https://productora.com/"
      />
      <Hero />
      <StatementSection />
      <AboutSection />
      <ServicesSection />
      <BrandsSection />
      <ProjectsSection />
      <ServicesOverview />
      <InsightsSection />
      <CtaSection />
    </>
  );
};

export default Index;
