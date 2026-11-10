import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Page() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </>
  );
}
