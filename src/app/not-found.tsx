import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-36">
      <p className="text-xs font-medium tracking-[0.22em] text-accent uppercase">404</p>
      <h1 className="mt-4 font-display text-5xl tracking-tight">Página no encontrada</h1>
      <p className="mt-4 max-w-xl text-muted">Esta dirección no forma parte del currículum.</p>
      <Link
        href="/"
        className="btn-accent mt-8 inline-flex h-12 items-center rounded-full px-5 text-sm font-semibold"
      >
        Volver al currículum
      </Link>
    </div>
  );
}
