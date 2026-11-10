import { ExternalLink } from "@/components/external-link";
import { profile } from "@/data/cv";

export function Footer() {
  return (
    <footer className="mt-4 border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-1 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8 print:px-0 print:py-4">
        <p>{profile.name}</p>
        <p>{profile.location}</p>
        <ExternalLink
          href={`mailto:${profile.email}`}
          className="underline decoration-line underline-offset-4 hover:decoration-accent"
        >
          {profile.email}
        </ExternalLink>
      </div>
    </footer>
  );
}
