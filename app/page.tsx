import About from "@/components/about";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

// Section order mirrors resume/resume.md.
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
    </main>
  );
}
