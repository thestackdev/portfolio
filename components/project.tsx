"use client";

import { projectsData } from "@/lib/data";
import { motion } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({ title, description, tags }: ProjectProps) {
  return (
    <motion.article
      className="rounded-lg border border-border-subtle bg-bg-secondary p-6 transition-colors hover:border-border-hover"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-text-secondary">
        {description}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <li
            key={index}
            className="rounded-full border border-border-subtle px-3 py-1 text-xs text-text-muted"
          >
            {tag}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
