const sections = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#educacion", label: "Educación" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#proyectos", label: "Proyectos" },
] as const;

export function SiteNav() {
  return (
    <nav
      aria-label="Secciones del currículum"
      className="no-print sticky top-0 z-20 mt-8 border-y border-line bg-paper/90 backdrop-blur"
    >
      <ul className="mx-auto flex max-w-5xl gap-1 overflow-x-auto px-5 py-2 sm:px-8">
        {sections.map((section) => (
          <li key={section.href}>
            <a
              href={section.href}
              className="inline-flex rounded-full px-3 py-1.5 text-sm text-muted hover:bg-chip hover:text-ink"
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
