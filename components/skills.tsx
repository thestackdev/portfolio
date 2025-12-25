"use client";

import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mx-auto max-w-3xl scroll-mt-28 py-20"
    >
      <h2 className="section-heading">Skills</h2>
      <div className="grid gap-8 sm:grid-cols-2">
        {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
          >
            <h3 className="mb-3 text-sm font-medium text-text-muted">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border-subtle px-3 py-1 text-sm text-text-secondary transition-colors hover:border-border-hover hover:text-text-primary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
