import { profile } from "@/data/cv";

export function SiteFooter() {
  return (
    <footer className="px-5 py-8 print:px-0">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>{profile.name}</p>
        <p>{profile.location}</p>
        <p>{profile.email}</p>
      </div>
    </footer>
  );
}
