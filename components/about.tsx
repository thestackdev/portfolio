"use client";

import { summary } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mx-auto max-w-3xl scroll-mt-28 py-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="section-heading">Summary</h2>
      <p className="leading-relaxed text-text-secondary">{summary}</p>
    </motion.section>
  );
}
