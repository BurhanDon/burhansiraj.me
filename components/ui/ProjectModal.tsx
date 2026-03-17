"use client";

import { Project } from "@/types";

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  if (!isOpen) return null;
  const sourceLabel = project.githubUrl?.includes("github.com")
    ? "View on GitHub"
    : "View Source";

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold text-primary">{project.title}</h2>
          <button
            onClick={onClose}
            className="text-2xl text-secondary hover:text-primary"
          >
            ×
          </button>
        </div>

        {/* Full Description */}
        {project.fullDescription && (
          <div className="mb-6">
            <p className="text-primary whitespace-pre-line leading-relaxed text-sm">
              {project.fullDescription}
            </p>
          </div>
        )}

        {/* Tech Stack */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-secondary mb-2 uppercase">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="inline-block px-2 py-1 text-xs bg-border text-primary rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Concepts Demonstrated */}
        {project.conceptsDemonstrated && (
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-secondary mb-2 uppercase">
              Concepts Demonstrated
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.conceptsDemonstrated.map((concept, idx) => (
                <span
                  key={idx}
                  className="inline-block px-2 py-1 text-xs border border-accent text-accent rounded"
                >
                  {concept}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Links */}
        <div className="flex gap-4 border-t border-border pt-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-semibold"
            >
              View Live ↗
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-semibold"
            >
              {sourceLabel} ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
