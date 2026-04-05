import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  return (
    <section className="mb-8">
      <h2 className="text-base md:text-lg font-semibold text-primary mb-3 pb-1 border-b border-border">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
