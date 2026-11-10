import { sectionClassName } from "@/components/section-class";
import { SectionHeading } from "@/components/section-heading";
import { about } from "@/data/cv";

export function About() {
  return (
    <section id="sobre-mi" aria-labelledby="sobre-mi-titulo" className={sectionClassName}>
      <SectionHeading id="sobre-mi-titulo">Sobre mí</SectionHeading>
      <p className="mt-5 max-w-3xl text-base leading-relaxed text-ink sm:text-lg print:mt-3 print:text-[11pt]">
        {about}
      </p>
    </section>
  );
}
