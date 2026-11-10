import { ProjectCard } from "@/components/project-card";
import { sectionClassName } from "@/components/section-class";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/cv";

export function Projects() {
  return (
    <section id="proyectos" aria-labelledby="proyectos-titulo" className={sectionClassName}>
      <SectionHeading id="proyectos-titulo">Proyectos destacados</SectionHeading>
      <ul className="mt-6 grid gap-4 md:grid-cols-2 print:mt-3 print:grid-cols-1">
        {projects.map((project) => (
          <li key={project.name} className="h-full">
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
