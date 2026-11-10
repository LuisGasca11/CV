import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-full max-w-lg flex-col justify-center px-6 py-24">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">404</p>
      <h1 className="mt-3 font-serif text-4xl text-ink">Página no encontrada</h1>
      <p className="mt-3 text-muted">Esta dirección no forma parte del currículum.</p>
      <Link href="/" className="mt-6 text-accent underline underline-offset-4">
        Volver al currículum
      </Link>
    </main>
  );
}
