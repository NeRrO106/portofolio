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
          : project.technologies === tech,
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 py-20 px-6">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
            My <span className="text-purple-800">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-md mx-auto font-medium">
            A selection of applications and technical experiments.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all border ${
                activeFilter === filter
                  ? "bg-purple-500 border-purple-400 text-slate-900 shadow-lg shadow-purple-500/20"
                  : "bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-slate-900/50 border border-slate-800 rounded-3xl p-8 hover:bg-slate-900/80 hover:border-purple-500/30 transition-all duration-300 shadow-xl"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <div className="p-2 bg-slate-800 rounded-lg text-purple-400">
                  <span className="text-xs font-mono">#{project.id}</span>
                </div>
              </div>

              <p className="text-slate-400 mb-6 leading-relaxed text-sm italic">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {(Array.isArray(project.technologies)
                  ? project.technologies
                  : [project.technologies]
                ).map((tech, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter bg-slate-950 px-2 py-1 rounded-md border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 items-center">
                {Array.isArray(project.link) ? (
                  project.link.map((link, idx) => (
                    <a
                      key={idx}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold uppercase tracking-widest text-white hover:text-purple-500 transition-colors flex items-center gap-1"
                    >
                      Source {idx + 1} <span>→</span>
                      <br />
                    </a>
                  ))
                ) : (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-white text-slate-950 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-purple-400 transition-all"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
