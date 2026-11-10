import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import { MotionEffects } from "@/components/motion-effects";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SmoothScroll } from "@/components/smooth-scroll";
import { profile } from "@/data/cv";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const description =
  "Currículum de Luis Alberto Aguilar Gasca, ingeniero en Tecnologías de la Información y la Comunicación. Desarrollo web full stack y mobile. Ecatepec de Morelos.";

export const metadata: Metadata = {
  title: "Luis Alberto Aguilar Gasca | Currículum",
  description,
  applicationName: "Currículum de Luis Alberto Aguilar Gasca",
  authors: [{ name: profile.name, url: profile.github.href }],
  creator: profile.name,
  keywords: [
    "Luis Alberto Aguilar Gasca",
    "currículum",
    "ingeniero en TIC",
    "desarrollador full stack",
    "Next.js",
    "React",
    "Ecatepec de Morelos",
  ],
  robots: {
    index: true,
    follow: true,
  },
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    title: "Luis Alberto Aguilar Gasca | Currículum",
    description,
    locale: "es_MX",
    type: "profile",
    firstName: "Luis Alberto",
    lastName: "Aguilar Gasca",
    username: "LuisGasca11",
  },
  twitter: {
    card: "summary",
    title: "Luis Alberto Aguilar Gasca | Currículum",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0908",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-MX" className={`${inter.variable} ${display.variable} h-full antialiased`}>
      <body className="min-h-full bg-canvas text-ink">
        <JsonLd />
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-on-accent"
        >
          Saltar al contenido
        </a>
        <SmoothScroll>
          <SiteHeader />
          <main id="contenido">{children}</main>
          <SiteFooter />
          <MotionEffects />
        </SmoothScroll>
      </body>
    </html>
  );
}
