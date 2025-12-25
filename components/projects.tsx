"use client";

import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Project from "./project";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section
      ref={ref}
      id="projects"
      className="mx-auto max-w-3xl scroll-mt-28 py-20"
    >
      <h2 className="section-heading">Projects</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
