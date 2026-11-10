import { sectionClassName } from "@/components/section-class";
import { SectionHeading } from "@/components/section-heading";
import { education } from "@/data/cv";

export function Education() {
  return (
    <section id="educacion" aria-labelledby="educacion-titulo" className={sectionClassName}>
      <SectionHeading id="educacion-titulo">Educación</SectionHeading>
      <ol className="mt-6 grid gap-4 sm:grid-cols-2">
        {education.map((item) => (
          <li
            key={item.institution}
            className="rounded-2xl border border-line bg-card p-5 print:break-inside-avoid print:rounded-none print:p-3"
          >
            <p className="text-sm font-medium text-accent">{item.period}</p>
            <h3 className="mt-2 text-lg font-semibold text-ink">{item.program ?? item.institution}</h3>
            {item.program ? <p className="mt-1 text-muted">{item.institution}</p> : null}
          </li>
        ))}
      </ol>
    </section>
  );
}
