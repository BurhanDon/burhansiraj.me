import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section className="mb-8">
      <h2 className="text-base md:text-lg font-semibold text-primary mb-3">
        Skills
      </h2>
      <div className="space-y-1.5">
        {skills.map((skillGroup) => (
          <p key={skillGroup.id} className="text-sm leading-6 text-primary">
            {skillGroup.items.join(", ")}
          </p>
        ))}
      </div>
    </section>
  );
}
