import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { getProject } from "@/data/projects";
import { ProjectBanner } from "@/components/project/ProjectBanner";
import { ProjectIntro } from "@/components/project/ProjectIntro";
import { ProjectServices } from "@/components/project/ProjectServices";
import { ProjectGallery } from "@/components/project/ProjectGallery";
import { ProjectStats } from "@/components/project/ProjectStats";
import { ProjectQuote } from "@/components/project/ProjectQuote";
import { RelatedProjects } from "@/components/project/RelatedProjects";
import { CtaSection } from "@/components/home/CtaSection";

const ProjectDetail = () => {
  const { slug = "" } = useParams();
  const project = getProject(slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!project) return <Navigate to="/proyectos" replace />;

  return (
    <>
      <ProjectBanner p={project} />
      <ProjectIntro p={project} />
      <ProjectServices p={project} />
      <ProjectGallery p={project} />
      <ProjectStats p={project} />
      <ProjectQuote p={project} />
      <RelatedProjects p={project} />
      <CtaSection lines={[["¿TENÉS", "UN"], ["PROYECTO?"]]} />
    </>
  );
};

export default ProjectDetail;
