import { useState } from "react";
import projectsData from "../../projects.json";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[] | string;
  link: string | string[];
}

function Projects() {
  const filters = [
    "All",
    "C",
    "C++",
    "C#",
    "Java",
    "Python",
    "Unity",
    "FullStack",
    "Frontend",
  ];

  const [filteredProjects, setFilteredProjects] =
    useState<Project[]>(projectsData);
  const [activeFilter, setActiveFilter] = useState("All");

  const handleFilter = (tech: string) => {
    setActiveFilter(tech);
    if (tech === "All") {
      setFilteredProjects(projectsData);
    } else {
      const filtered = projectsData.filter((project) =>
        Array.isArray(project.technologies)
          ? project.technologies.includes(tech)
          : project.technologies === tech
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    <div className="px-4 py-8 bg-[var(--color-bg)] min-h-screen">
      <div className="flex justify-end mb-6 flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => handleFilter(filter)}
            className={`px-4 py-2 rounded-full font-bold shadow transition-colors ${
              activeFilter === filter
                ? "bg-[var(--color-secondary)] text-white"
                : "bg-[var(--color-accent)] text-white hover:bg-[var(--color-secondary)]"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-[var(--color-accent)] hover:bg-[var(--color-secondary)] text-[var(--color-text)] p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1"
          >
            <h3 className="text-[var(--color-text)] font-bold text-xl mb-2">
              {project.title}
            </h3>
            <p className="font-semibold mb-2">{project.description}</p>
            <p className="mb-2">
              <strong>Technologies:</strong>{" "}
              {Array.isArray(project.technologies)
                ? project.technologies.join(", ")
                : project.technologies}
            </p>
            {Array.isArray(project.link) ? (
              project.link.map((link, idx) => (
                <a
                  key={idx}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-[var(--color-text-secondary)] font-bold hover:text-[var(--color-text)]"
                >
                  View Project {idx + 1}
                </a>
              ))
            ) : (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block mx-auto text-center text-[var(--color-text-secondary)] font-bold hover:text-[var(--color-text)] mt-2"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
