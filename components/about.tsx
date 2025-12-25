"use client";

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
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-heading">About</h2>

      <div className="space-y-4 leading-relaxed">
        <p>
          After graduating in Electronics Engineering, I've spent{" "}
          <span className="text-text-primary">4+ years</span> building systems
          at scale with <span className="text-text-primary">Python</span> and{" "}
          <span className="text-text-primary">Rust</span>.
        </p>

        <p>
          At AroundMe (Head of Technology), I architected a distributed backend
          with PostgreSQL, Redis cluster (master + 3 replicas), Elasticsearch
          for geospatial queries, and Neo4j for social graph. Scaled to{" "}
          <span className="text-text-primary">65K+ users</span> with ML-powered
          recommendations and Kubernetes deployment via GitOps.
        </p>

        <p>
          Currently at Arrowhead, I design enterprise AI infrastructure:
          multi-tenant APIs with hash-partitioned PostgreSQL, HMAC
          authentication with replay attack prevention, and{" "}
          <span className="text-text-primary">57 WASM plugins in Rust</span>{" "}
          (Extism framework) enabling hot-swappable business logic. Also built{" "}
          <span className="text-text-primary">7 Rust CLI tools</span> for
          deployment and plugin management using Tokio async runtime.
        </p>

        <p className="text-text-muted">
          Focused on Rust, system design, distributed systems, and backends that
          scale.
        </p>
      </div>
    </motion.section>
  );
}
