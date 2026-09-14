"use client";

import { certificationsData, educationData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Education() {
  const { ref } = useSectionInView("Education", 0.4);

  return (
    <motion.section
      ref={ref}
      id="education"
      className="mx-auto max-w-3xl scroll-mt-28 py-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="section-heading">Education</h2>
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <h3 className="font-semibold text-text-primary">
            {educationData.institution}
          </h3>
          <p className="text-sm text-text-secondary">{educationData.degree}</p>
        </div>
        <span className="text-sm text-text-muted">{educationData.dates}</span>
      </div>

      <h2 className="section-heading mt-16">Certifications</h2>
      <ul className="space-y-2">
        {certificationsData.map((cert) => (
          <li
            key={cert.name}
            className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between"
          >
            <span className="text-sm text-text-secondary">
              <span className="font-medium text-text-primary">{cert.name}</span>
              {" — "}
              {cert.issuer}
            </span>
            <span className="text-sm text-text-muted">{cert.date}</span>
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
