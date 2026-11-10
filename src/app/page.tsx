import { About } from "@/components/about";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Projects } from "@/components/projects";
import { SiteNav } from "@/components/site-nav";
import { Skills } from "@/components/skills";

export default function Page() {
  return (
    <>
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <Header />
      <SiteNav />
      <main id="contenido">
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
