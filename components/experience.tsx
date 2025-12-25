"use client";

import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section
      id="experience"
      ref={ref}
      className="mx-auto max-w-3xl scroll-mt-28 py-20"
    >
      <h2 className="section-heading">Experience</h2>
      <div className="space-y-8">
        {experiencesData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="font-semibold text-text-primary">{item.title}</h3>
                <p className="text-sm text-accent">{item.location}</p>
              </div>
              <span className="text-sm text-text-muted">{item.date}</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
