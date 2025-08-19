// src/components/Projects/Projects.jsx
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projectsData";
import "./Projects.css";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const technologies = ["All", ...new Set(projects.flatMap(p => p.tech))];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(p => p.tech.includes(filter));

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>

      <div className="filter-buttons">
        {technologies.map((tech, i) => (
          <button
            key={i}
            className={filter === tech ? "active" : ""}
            onClick={() => setFilter(tech)}
          >
            {tech}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
