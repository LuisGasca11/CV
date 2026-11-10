import { ExternalLink } from "@/components/external-link";
import { sectionClassName } from "@/components/section-class";
import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/data/cv";

const linkClass = "underline decoration-line underline-offset-4 hover:decoration-accent";

export function Experience() {
  return (
    <section id="experiencia" aria-labelledby="experiencia-titulo" className={sectionClassName}>
      <SectionHeading id="experiencia-titulo">Experiencia laboral</SectionHeading>
      <ol className="mt-6 border-l border-line pl-6 print:mt-3">
        {experience.map((job) => (
          <li
            key={`${job.role}-${job.organization}`}
            className="relative pb-8 last:pb-0 print:break-inside-avoid print:pb-4"
          >
            <span
              aria-hidden="true"
              className="absolute top-1.5 -left-[1.68rem] size-2.5 rounded-full border-2 border-paper bg-accent"
            />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold text-ink">{job.role}</h3>
              {job.period ? (
                <p className="text-sm font-medium text-accent">{job.period}</p>
              ) : null}
            </div>
            <p className="text-muted">{job.organization}</p>
            {job.website ? (
              <p className="mt-1 text-sm">
                <ExternalLink href={job.website.href} className={linkClass}>
                  {job.website.label}
                </ExternalLink>
              </p>
            ) : null}
            {job.description ? (
              <p className="mt-3 max-w-3xl leading-relaxed text-ink print:mt-1">{job.description}</p>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  );
}
