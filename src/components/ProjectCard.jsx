import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

function ProjectCard({ project }) {
  return (
    <div
      className="
        group
        bg-card
        border
        border-border
        rounded-card
        overflow-hidden
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-primary
        hover:shadow-[0_0_30px_var(--color-primary)]
      "
    >
      {/* Project Image */}

      <div className="overflow-hidden">

        <img
          src={project.image}
          alt={project.title}
          className="
            w-full
            h-56
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />

      </div>

      {/* Content */}

      <div className="p-6">

        {/* Title */}

        <h3 className="text-2xl font-bold text-heading">
          {project.title}
        </h3>

        {/* Description */}

        <p className="text-muted mt-4 leading-7 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}

        <div className="flex flex-wrap gap-2 mt-6">

          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="
                px-3
                py-1
                rounded-full
                bg-primary/10
                text-primary
                text-sm
                font-medium
              "
            >
              {tech}
            </span>
          ))}

        </div>

        {/* Buttons */}

        <div className="flex gap-4 mt-8">

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex-1
              flex
              items-center
              justify-center
              gap-2
              bg-primary
              text-heading
              py-3
              rounded-card
              font-semibold
              transition-all
              duration-300
              hover:bg-secondary
              hover:scale-105
            "
          >
            <FaGithub />

            GitHub
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex-1
              flex
              items-center
              justify-center
              gap-2
              border
              border-primary
              text-primary
              py-3
              rounded-card
              font-semibold
              transition-all
              duration-300
              hover:bg-primary
              hover:text-heading
              hover:scale-105
            "
          >
            <FiExternalLink />

            Live Demo
          </a>

        </div>

      </div>

    </div>
  );
}

export default ProjectCard;