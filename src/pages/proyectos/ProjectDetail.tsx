import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { getProject } from "@/data/projects";
import { ProjectBanner } from "@/components/project/ProjectBanner";
import { ProjectIntro } from "@/components/project/ProjectIntro";
import { ProjectServices } from "@/components/project/ProjectServices";
import { ProjectGallery } from "@/components/project/ProjectGallery";
import { ProjectStats } from "@/components/project/ProjectStats";
import { RelatedProjects } from "@/components/project/RelatedProjects";
import { SEO } from "@/components/shared/SEO";

const ProjectDetail = () => {
  const { slug = "" } = useParams();
  const project = getProject(slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!project) return <Navigate to="/proyectos" replace />;

  return (
    <>
      <SEO
        title={`${project.title} — ${project.client} | Productora`}
        description={project.shortDescription}
        canonical={`https://productora.com/proyectos/${project.slug}`}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.title,
          author: { "@type": "Organization", name: "Productora" },
          about: project.category,
          locationCreated: project.location,
          dateCreated: String(project.year),
          image: project.gallery[0],
          description: project.shortDescription,
        }}
      />
      <ProjectBanner p={project} />
      <ProjectIntro p={project} />
      <ProjectServices p={project} />
      <ProjectGallery p={project} />
      <ProjectStats p={project} />
      <RelatedProjects p={project} />
    </>
  );
};

export default ProjectDetail;
