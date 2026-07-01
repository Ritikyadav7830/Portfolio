import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";

import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-bg py-28"
    >
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          subtitle="Portfolio"
          title="Featured Projects"
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;