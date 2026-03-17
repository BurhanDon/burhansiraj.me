"use client";

import { useState } from "react";
import { Project } from "@/types";
import ProjectModal from "@/components/ui/ProjectModal";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sourceLabel = project.githubUrl?.includes("github.com")
    ? "GitHub"
    : "Source";

  return (
    <>
      <div
        className="border border-border rounded p-4 hover:shadow-md transition-shadow cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <h3 className="font-semibold text-primary mb-2">{project.title}</h3>
        <p className="text-sm text-secondary mb-3">{project.description}</p>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 3).map((tech, idx) => (
            <span
              key={idx}
              className="inline-block px-2 py-1 text-xs bg-border text-primary rounded"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="inline-block px-2 py-1 text-xs text-secondary">
              +{project.techStack.length - 3} more
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-accent hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              Live →
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-accent hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              {sourceLabel} →
            </a>
          )}
          <button
            className="text-xs text-accent hover:underline ml-auto"
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpen(true);
            }}
          >
            Details →
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <ProjectModal
          project={project}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
