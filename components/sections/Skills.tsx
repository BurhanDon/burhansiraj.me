import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section className="mb-8">
      <h2 className="text-xs uppercase tracking-widest font-semibold text-secondary mb-4">
        Skills
      </h2>
      <div className="space-y-3">
        {skills.map((skillGroup) => (
          <div key={skillGroup.id}>
            <h3 className="text-xs font-semibold text-primary mb-1.5">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {skillGroup.items.map((item, idx) => (
                <span
                  key={idx}
                  className="inline-block px-2.5 py-0.5 text-[11px] bg-border text-primary rounded border border-border"
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
