import { useParams } from "react-router-dom";
import SEO from "./seo";
import portfolioData from "./data/projects";
import { getProjectBySlog } from "./getProjectBySlug";
const PortfolioDetails = (_) => {
  const { slug } = useParams();
  const project = getProjectBySlog(slug);

  if (!project) {
    return <div className="error-not-found">project not found</div>;
  }
  return (
    <main>
      <SEO
        title={project.title}
        description={project.summary}
        slug={project.slug}
        image={project.previewImage}
      />
      <article>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <a href={project.repoUrl} target="_blank" rel="noreferrer">
          View repository
        </a>
      </article>
    </main>
  );
};

export default PortfolioDetails;
