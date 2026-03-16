import { educations } from "@/data/education";

export default function Education() {
  return (
    <section className="mb-8">
      <h2 className="text-xs uppercase tracking-widest font-semibold text-secondary mb-4">
        Education
      </h2>
      <div className="space-y-4">
        {educations.map((edu) => (
          <div key={edu.id} className="border-l-2 border-accent pl-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-1">
              <h3 className="font-semibold text-primary">{edu.degree}</h3>
              <span className="text-sm text-secondary">{edu.year}</span>
            </div>
            <p className="text-sm text-secondary">{edu.institution}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
