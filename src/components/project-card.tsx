import { ExternalLink } from "@/components/external-link";
import type { Project } from "@/data/cv";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-line bg-card p-5 print:break-inside-avoid print:rounded-none print:border-line print:p-3">
      <h3 className="font-serif text-2xl leading-tight text-ink print:text-xl">{project.name}</h3>
      <p className="mt-2 text-sm text-accent">
        {project.organization}
        {project.detail ? <span className="text-muted"> · {project.detail}</span> : null}
      </p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink">{project.description}</p>
      {project.stack.length > 0 ? (
        <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Tecnologías de ${project.name}`}>
          {project.stack.map((tag) => (
            <li key={tag} className="rounded-full bg-chip px-2.5 py-1 text-xs font-medium text-ink">
              {tag}
            </li>
          ))}
        </ul>
      ) : null}
      {project.href ? (
        <p className="mt-4 text-sm">
          <span className="text-muted">En producción: </span>
          <ExternalLink
            href={project.href}
            className="font-medium text-accent underline decoration-line underline-offset-4 hover:decoration-accent"
          >
            {project.href.replace(/^https:\/\//, "")}
          </ExternalLink>
        </p>
      ) : null}
    </article>
  );
}
