import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaServer } from "react-icons/fa";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
] as const;

export const experiencesData = [
  {
    title: "Senior Software Development Engineer",
    location: "Arrowhead",
    description:
      "Architecting a multi-tenant voice AI platform in Rust: 10+ WASM plugins (Extism), a cell-based multi-region architecture inspired by AWS spanning 10+ isolated cells, a heartbeat-driven scheduler with roughly 10x higher sustained throughput (10,000 concurrent executions) on Tokio's multithreaded runtime, hash-partitioned PostgreSQL with a bi-temporal billing system, a centralized logs/metrics/traces observability stack, and real-time voice processing orchestrating 10+ LLM providers via LiteLLM.",
    icon: React.createElement(FaServer),
    date: "Mar 2025 - Present",
  },
  {
    title: "Founding Engineer & Head of Technology",
    location: "AroundMe (Closed)",
    description:
      "Founded and led team of 10 building AroundMe app with React Native and FastAPI. Architected distributed system with PostgreSQL, Redis cluster, Elasticsearch, Neo4j, and ML pipelines. Scaled to 65K+ downloads across Play Store and App Store.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2024 - Mar 2025",
  },
  {
    title: "Software Development Engineer",
    location: "OpenCubicles Technologies",
    description:
      "Built smart AC maintenance system with camera feeds, custom FTP server, and AWS Lambda pipeline for automated fault detection. Developed Shopify Builder Plugin with React drag-and-drop and bidirectional cross-iframe communication. Implemented Kafka event processing and Redis caching for real-time analytics.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2022 - May 2023",
  },
  {
    title: "Software Development Engineer Intern",
    location: "OpenCubicles Technologies",
    description:
      "Built offline-first React Native app for solar installations with WatermelonDB, facial recognition, and barcode scanning. Developed oil industry CRM with integrated eSign and collaboration tools. Created backend services with Django and Next.js with CI/CD pipelines.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2021 - Aug 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Columnar Observability Query Engine",
    description:
      "Log-analytics engine in Rust: ingests structured logs over HTTP with zero-copy JSON parsing, buffers through a write-ahead log, and flushes time-partitioned Apache Parquet to object storage. Exposes SQL over the columnar store via a custom Apache Arrow DataFusion TableProvider with predicate and projection pushdown to the Parquet scan layer. Achieves 40x compression over raw JSON and sub-second aggregation across millions of rows.",
    tags: [
      "Rust",
      "Apache Arrow",
      "DataFusion",
      "Parquet",
      "Object Storage",
      "Tokio",
    ],
  },
  {
    title: "Distributed Raft Key-Value Store",
    description:
      "Distributed key-value store in Rust built on Raft consensus for leader election and a replicated log across a cluster. Writes are durably appended to a write-ahead log and applied to a log-structured (LSM) storage engine with background compaction; periodic snapshots bound log growth and speed recovery. Provides linearizable reads and automatic failover under node crashes and network partitions.",
    tags: [
      "Rust",
      "Raft",
      "Distributed Systems",
      "WAL",
      "LSM Storage",
      "Tokio",
    ],
  },
] as const;

export const skillsData = {
  Languages: ["Rust", "Python", "TypeScript", "SQL"],
  "Rust & Systems": ["Tokio", "Multithreading", "Concurrency", "WebAssembly", "Extism", "Apache Arrow", "DataFusion", "Zero-Copy Parsing", "Cargo Workspaces"],
  "Data & Storage": ["Parquet", "Columnar Analytics", "PostgreSQL", "Redis", "Kafka", "Elasticsearch", "Object Storage"],
  "Cloud & Observability": ["AWS", "Kubernetes", "Terraform", "Terragrunt", "Docker", "OpenTelemetry", "VictoriaLogs/Grafana"],
  Architecture: ["Distributed Systems", "System Design", "Microservices", "WAL / Columnar Storage", "Bi-Temporal Modeling", "LiteLLM"],
} as const;
