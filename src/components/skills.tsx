import { sectionClassName } from "@/components/section-class";
import { SectionHeading } from "@/components/section-heading";
import { softSkills, technicalSkills } from "@/data/cv";

export function Skills() {
  return (
    <section id="habilidades" aria-labelledby="habilidades-tecnicas" className={sectionClassName}>
      <div className="grid gap-12 lg:grid-cols-2 print:gap-6">
        <div>
          <SectionHeading id="habilidades-tecnicas">Habilidades técnicas</SectionHeading>
          <div className="mt-6 space-y-5 print:mt-3 print:space-y-3">
            {technicalSkills.map((group) => (
              <div key={group.label}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  {group.label}
                </h3>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="rounded-full bg-chip px-3 py-1 text-sm text-ink">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div>
          <SectionHeading id="habilidades-blandas">Habilidades blandas</SectionHeading>
          <ul className="mt-6 grid gap-2 print:mt-3">
            {softSkills.map((skill) => (
              <li
                key={skill}
                className="flex items-center gap-2 rounded-xl border border-line bg-card px-3 py-2 text-sm text-ink print:border-0 print:bg-transparent print:px-0 print:py-0.5"
              >
                <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-accent" />
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
