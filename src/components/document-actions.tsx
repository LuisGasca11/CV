"use client";

const buttonClass =
  "rounded-full border border-line bg-card px-3.5 py-1.5 text-sm font-medium text-ink hover:border-accent";

function applyTheme(theme: "light" | "dark") {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("cv-theme", theme);
}

function toggleTheme() {
  const current = document.documentElement.dataset.theme;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = current === "dark" || (current !== "light" && prefersDark);
  applyTheme(isDark ? "light" : "dark");
}

export function ThemeToggle() {
  return (
    <button type="button" className={buttonClass} onClick={toggleTheme}>
      <span className="when-light">Tema oscuro</span>
      <span className="when-dark">Tema claro</span>
    </button>
  );
}

export function PrintButton() {
  return (
    <button type="button" className={buttonClass} onClick={() => window.print()}>
      Imprimir CV
    </button>
  );
}
