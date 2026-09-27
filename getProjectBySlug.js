import projects from "./projects";

export const getProjectBySlog = (slug) => {
  return projects.find((project) => project.slug === slug);
};
