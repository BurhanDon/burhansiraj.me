import { earlierWork } from "@/data/earlierWork";
import Link from "next/link";

export default function EarlierWork() {
  return (
    <section className="pt-8 mt-8 border-t border-border opacity-75">
      <h2 className="text-xs uppercase tracking-widest font-semibold text-secondary mb-4">
        Earlier Work
      </h2>
      <p className="text-xs text-secondary mb-4">
        A selection of projects from my early learning journey.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {earlierWork.map((project) => (
          <div key={project.id} className="border border-border rounded p-3">
            <p className="font-semibold text-sm text-primary mb-1">
              {project.title}
            </p>
            <p className="text-xs text-secondary mb-2">{project.description}</p>
            <div className="flex gap-3">
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-accent hover:underline"
                >
                  Live
                </Link>
              )}
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-accent hover:underline"
                >
                  GitHub
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
