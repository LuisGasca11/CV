import type { Metadata } from "next";
import { Geist, Newsreader } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import { profile } from "@/data/cv";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
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

const themeInit = `(function(){try{var stored=localStorage.getItem("cv-theme");var theme=stored==="light"||stored==="dark"?stored:(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.dataset.theme=theme;}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-MX"
      className={`${geistSans.variable} ${newsreader.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-paper font-sans text-ink">
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
