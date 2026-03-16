import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section className="mb-8">
      <h2 className="text-xs uppercase tracking-widest font-semibold text-secondary mb-4">
        Experience
      </h2>
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div key={exp.id} className="border-l-2 border-accent pl-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
              <h3 className="font-semibold text-primary">{exp.position}</h3>
              <span className="text-sm text-secondary">{exp.duration}</span>
            </div>
            <p className="text-sm text-secondary mb-2">{exp.company}</p>
            <p className="text-sm text-primary leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
