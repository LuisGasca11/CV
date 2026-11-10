# Currículum — Luis Alberto Aguilar Gasca

Sitio estático del currículum, construido con Next.js (App Router), TypeScript y Tailwind CSS. Toda la interfaz está en componentes TSX. `npm run build` exporta el sitio a `out/` para publicarlo en Netlify.

## Requisitos

- Node.js 20 o superior
- npm

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Producción

```bash
npm run build
```

La carpeta `out/` contiene el HTML, CSS y JavaScript generados. `netlify.toml` usa `npm run build` y publica `out`.

## Impresión

El botón **Imprimir CV** (o Ctrl/Cmd+P) deja el currículum en negro sobre blanco, con acentos naranja. En impresión se apagan el scroll suave, las animaciones y el fondo WebGL.
