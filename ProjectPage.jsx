import { describe } from "node:test";
import { getProjectBySlog } from "./getProjectBySlug";
export const generateMetadata = ({ params }) => {
  const project = getProjectBySlog(params.slug);

  if (!project) return {};

  return {
    title: `${project.title} | Portfolio`,
    description: project.summary,
    alternates: {
      canonical: `https://.../${params.slug}`,
    },
    openGraph: {
      title: project.title,
      describe: project.summary,
      image: [{ url: project.previewImage }],
    },
  };
};

const ProjectPage = async ({ params }) => {
  const project = await getProjectBySlog(params.slug);

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectPage;
