"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { SiLeetcode } from "react-icons/si";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-text-primary sm:text-5xl">
          Shanmukeshwar
        </h1>
        <div className="mt-2 h-0.5 w-16 bg-accent"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-6"
      >
        <p className="text-xl text-text-secondary">
          Senior Software Development Engineer
        </p>
        <p className="mt-2 flex items-center gap-2 text-text-muted">
          Rust <span className="text-accent">·</span> Distributed Systems{" "}
          <span className="text-accent">·</span> Backend Architecture
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8 max-w-xl leading-relaxed text-text-secondary"
      >
        Building distributed systems with Python and Rust. Designed 57 WASM
        plugins, multi-tenant platforms with hash-partitioned databases, and
        real-time AI pipelines.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8 flex items-center gap-4"
      >
        <a
          href="https://github.com/thestackdev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-text-muted transition-colors hover:text-text-primary"
        >
          <BsGithub className="text-xl" />
          <span className="text-sm">GitHub</span>
        </a>
        <a
          href="https://linkedin.com/in/shanmukeshwar"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-text-muted transition-colors hover:text-text-primary"
        >
          <BsLinkedin className="text-xl" />
          <span className="text-sm">LinkedIn</span>
        </a>
        <a
          href="https://leetcode.com/u/shanmukeshwar/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-text-muted transition-colors hover:text-text-primary"
        >
          <SiLeetcode className="text-xl" />
          <span className="text-sm">LeetCode</span>
        </a>
        <a
          href="mailto:shanmukeshwar03@gmail.com"
          className="flex items-center gap-2 text-text-muted transition-colors hover:text-text-primary"
        >
          <HiOutlineMail className="text-xl" />
          <span className="text-sm">Email</span>
        </a>
      </motion.div>
    </section>
  );
}
