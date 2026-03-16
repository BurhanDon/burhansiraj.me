import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section className="mb-8">
      <h2 className="text-xs uppercase tracking-widest font-semibold text-secondary mb-4">
        Skills
      </h2>
      <div className="space-y-4">
        {skills.map((skillGroup) => (
          <div key={skillGroup.id}>
            <h3 className="text-sm font-semibold text-primary mb-2">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((item, idx) => (
                <span
                  key={idx}
                  className="inline-block px-3 py-1 text-xs bg-border text-primary rounded border border-border"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
