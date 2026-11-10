"use client";

import { useEffect, useId, useState, useSyncExternalStore } from "react";
import { PrintButton } from "@/components/print-button";
import { profile } from "@/data/cv";

const navItems = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#educacion", label: "Educación" },
  { href: "#contacto", label: "Contacto" },
] as const;

function subscribeToScroll(onStoreChange: () => void) {
  window.addEventListener("scroll", onStoreChange, { passive: true });
  return () => {
    window.removeEventListener("scroll", onStoreChange);
  };
}

function getScrolledSnapshot() {
  return window.scrollY > 8;
}

function getServerScrolledSnapshot() {
  return false;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const scrolled = useSyncExternalStore(subscribeToScroll, getScrolledSnapshot, getServerScrolledSnapshot);

  useEffect(() => {
    if (!open) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      className={`no-print fixed inset-x-0 top-0 z-50 border-b transition-colors ${
        scrolled || open ? "border-line bg-canvas/80 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <a href="#inicio" className="truncate font-display text-lg tracking-tight">
          <span className="sm:hidden">Luis Gasca</span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>
        <nav aria-label="Secciones" className="hidden lg:block">
          <ul className="flex items-center gap-5 text-sm text-white/70">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-accent-hot">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <PrintButton className="btn-accent hidden h-10 items-center rounded-full px-4 text-sm font-semibold sm:inline-flex" />
          <button
            type="button"
            className="inline-flex h-10 items-center rounded-full border border-line px-4 text-sm lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => {
              setOpen((current) => !current);
            }}
          >
            {open ? "Cerrar" : "Menú"}
          </button>
        </div>
      </div>
      {open ? (
        <nav id={menuId} className="border-t border-line bg-canvas px-5 py-4 lg:hidden">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block py-3 font-display text-3xl tracking-tight"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <PrintButton className="btn-accent mt-3 inline-flex h-12 items-center rounded-full px-5 text-sm font-semibold" />
        </nav>
      ) : null}
    </header>
  );
}
