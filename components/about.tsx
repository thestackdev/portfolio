"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating in{" "}
        <span className="font-semibold">Electronics Engineering</span>, I've
        spent <span className="font-semibold">4+ years</span> building systems
        at scale with <span className="font-semibold">Python</span> and{" "}
        <span className="font-semibold">Rust</span>.
      </p>

      <p className="mb-3">
        At AroundMe (Head of Technology), I architected a distributed backend
        with PostgreSQL, Redis cluster (master + 3 slaves), Elasticsearch for
        geospatial queries, and Neo4j for social graph. Scaled to{" "}
        <span className="font-semibold">65K+ users</span> with ML-powered
        recommendations and Kubernetes deployment via GitOps.
      </p>

      <p className="mb-3">
        Currently at Arrowhead, I design enterprise AI infrastructure:
        multi-tenant APIs with hash-partitioned PostgreSQL, HMAC authentication
        with replay attack prevention, and{" "}
        <span className="font-semibold">57 WASM plugins in Rust</span> (Extism
        framework) enabling hot-swappable business logic. Also built{" "}
        <span className="font-semibold">7 Rust CLI tools</span> for deployment
        and plugin management using Tokio async runtime.
      </p>

      <p>
        I focus on <span className="font-semibold">Rust</span>,{" "}
        <span className="font-semibold">system design</span>,{" "}
        <span className="font-semibold">distributed systems</span>, and building
        backends that scale.
      </p>
    </motion.section>
  );
}
