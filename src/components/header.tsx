import { PrintButton, ThemeToggle } from "@/components/document-actions";
import { ExternalLink } from "@/components/external-link";
import { profile } from "@/data/cv";

const linkClass = "underline decoration-line underline-offset-4 hover:decoration-accent";

export function Header() {
  return (
    <header className="mx-auto max-w-5xl px-5 pt-8 sm:px-8 sm:pt-12 print:px-0 print:pt-0">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          Currículum vitae
        </p>
        <div className="no-print flex items-center gap-2">
          <ThemeToggle />
          <PrintButton />
        </div>
      </div>
      <h1 className="mt-6 max-w-4xl font-serif text-[2.55rem] leading-[1.05] tracking-tight text-ink sm:text-6xl print:mt-3 print:text-4xl">
        {profile.name}
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-snug text-muted sm:text-xl print:mt-2 print:text-base">
        {profile.title}
      </p>
      <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-4 print:mt-4">
        <div>
          <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Correo</dt>
          <dd className="mt-1">
            <ExternalLink href={`mailto:${profile.email}`} className={linkClass}>
              {profile.email}
            </ExternalLink>
          </dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            Ubicación
          </dt>
          <dd className="mt-1 text-ink">{profile.location}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            Portafolio
          </dt>
          <dd className="mt-1">
            <ExternalLink href={profile.portfolio.href} className={linkClass}>
              {profile.portfolio.label}
            </ExternalLink>
          </dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">GitHub</dt>
          <dd className="mt-1">
            <ExternalLink href={profile.github.href} className={linkClass}>
              {profile.github.label}
            </ExternalLink>
          </dd>
        </div>
      </dl>
    </header>
  );
}
