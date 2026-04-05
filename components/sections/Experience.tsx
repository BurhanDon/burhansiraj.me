import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section className="mb-8">
      <h2 className="text-base md:text-lg font-semibold text-primary mb-3 pb-1 border-b border-border">
        Experience
      </h2>
      <div className="space-y-5">
        {experiences.map((exp) => (
          <div key={exp.id} className="border-l-2 border-accent pl-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1 mb-1">
              <h3 className="font-semibold text-primary">{exp.position}</h3>
              <span className="text-sm text-secondary">{exp.duration}</span>
            </div>
            <p className="text-sm text-secondary">{exp.company}</p>
            {exp.location && (
              <p className="text-xs text-secondary mb-2">{exp.location}</p>
            )}
            <p className="text-sm text-primary leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
