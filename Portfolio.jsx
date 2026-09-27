import { useState, useEffect } from "react";
import projectData from "./projects.json";

const Portfolio = (_) => {
  const [projects, setProjects] = useState([]);

  useEffect((_) => {
    const loadProjects = async (_) => {
      const response = await fetch("/projects.json");
      const data = await response.json();
      setProjects(data);
    };

    loadProjects();
  }, []);

  return projectData.map((p) => <h2 key={p.id}>{p.title}</h2>);
};

export default Portfolio;
