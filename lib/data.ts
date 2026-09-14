import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaServer } from "react-icons/fa";

// This file mirrors resume/resume.md section for section. Keep the two in sync:
// summary, skills, experience bullets, projects, education, certifications.

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Projects", hash: "#projects" },
  { name: "Education", hash: "#education" },
] as const;

export const summary =
  "Senior software engineer working in Rust and Python on backend and distributed systems. At Arrowhead, built the WASM plugin system on Extism, scaled the call scheduler from 1,000 to 10,000 concurrent executions (~1M calls/day), and split the platform across 10+ AWS cells.";

export const experiencesData = [
  {
    title: "Senior Software Development Engineer",
    location: "Arrowhead",
    date: "Mar 2025 - Present",
    icon: React.createElement(FaServer),
    bullets: [
      "Scaled the heartbeat-driven call scheduler from 1,000 to 10,000 concurrent call executions, processing ~1M calls/day: sharded hot-path state to reduce lock contention across Tokio worker threads",
      "Built the billing system on a bi-temporal model",
      "Built the WASM plugin system on Extism: 10+ hot-swappable plugins in Rust for pre-call enrichment, live LLM tool-calling, and post-call hooks",
      "Split the platform into 10+ cells across AWS regions, provisioned with Terraform and Terragrunt. Istio handled routing across the cell fleet",
      "Built the WebRTC voice layer and the streaming STT/TTS pipeline with turn detection and PII redaction",
      "Integrated 5 telephony providers and 10+ LLM providers via LiteLLM, and ran post-call processing on Temporal workflows",
      "Wrote the customer and billing report jobs: streamed Redshift aggregates and Aurora rows through a fixed-size buffer and aggregated into a temporary file, keeping memory bounded on multi-hour runs",
      "Sharded the database for the largest multi-tenant accounts and partitioned the mid-size ones. Tuned query plans for index usage and reduced write amplification from over-indexing",
      "Built 7 Rust CLI tools (Tokio, Clap) for infrastructure operations, including a multi-region Kubernetes proxy for centralized access to logs, metrics, and traces",
      "Implemented envelope encryption for customer data at rest: AWS KMS-wrapped data keys with AES-GCM",
      "Designed the multi-tenant RBAC model: users, roles, and policies, scoped per tenant",
      "Implemented HMAC-SHA256 request signing with a nonce store and JWT blacklisting",
    ],
  },
  {
    title: "Founding Engineer & Head of Technology",
    location: "AroundMe (Closed)",
    date: "Jun 2024 - Mar 2025",
    icon: React.createElement(CgWorkAlt),
    bullets: [
      "Led a team of 10 on a proximity-based social app; 65K+ downloads across the App Store and Play Store",
      "Built the chat server as a separate WebSocket service, with Redis pub/sub for cross-instance fanout",
      "Routed notifications through Kafka: in-app when the recipient was connected, APNs or FCM otherwise",
      "Served proximity queries from PostgreSQL with PostGIS and GiST indexes",
      "Built the FastAPI backend, with Redis (1 primary, 3 replicas) and Neo4j for the social graph",
      "Ran the backend as microservices on Kubernetes with ArgoCD GitOps",
    ],
  },
  {
    title: "Software Development Engineer",
    location: "OpenCubicles Technologies",
    date: "Aug 2022 - May 2023",
    icon: React.createElement(CgWorkAlt),
    bullets: [
      "Built the Django backend and image pipeline for a warehouse maintenance system: camera FTP uploads synced incrementally to S3, with S3-triggered Lambdas indexing them for the review dashboard",
      "Led front-end work on Shopify apps: a drag-and-drop store builder with a bidirectional iframe bridge, storefront widgets, and a pre- and post-purchase recommendations app",
      "Processed store events through a Kafka consumer with a Redis cache",
    ],
  },
  {
    title: "Software Development Engineer Intern",
    location: "OpenCubicles Technologies",
    date: "Jun 2021 - Aug 2022",
    icon: React.createElement(CgWorkAlt),
    bullets: [
      "Built an offline-first mobile app for solar installers on WatermelonDB and Firebase, with on-device facial recognition and install-sequence guidance",
      "Backed the barcode scanner with local WatermelonDB writes and asynchronous S3 sync",
      "Delivered a CRM with Kanban lead tracking",
      "Wrote Django backend services and Next.js applications",
    ],
  },
] as const;

export const projectsData = [
  {
    title: "Roaring Bitmaps (Rust)",
    description:
      "Roaring bitmap implementation in Rust for set-membership checks over large datasets, part of a columnar-storage optimization path. 65,536-element blocks, switching between sorted-array and dense-bitmap storage at the 4,096-element threshold.",
    tags: ["Rust", "Data Structures", "Compressed Bitmaps", "Criterion Benchmarks"],
  },
  {
    title: "Lox Interpreter (Rust)",
    description:
      "Lox interpreter in Rust, no external crates: hand-written lexer, recursive-descent parser with precedence climbing, tree-walking evaluator with lexical scoping.",
    tags: ["Rust", "Interpreter Design", "Recursive Descent"],
  },
] as const;

export const skillsData = {
  Languages: ["Rust", "Python", "TypeScript", "SQL"],
  "Rust & Systems": [
    "Tokio",
    "Multithreading & Concurrency",
    "WebAssembly (Extism)",
    "Streaming / Out-of-Core Processing",
    "Cargo Workspaces",
  ],
  "Data & Storage": [
    "PostgreSQL / Aurora",
    "Redshift",
    "Redis",
    "Kafka",
    "Neo4j",
    "PostGIS",
    "Sharding & Partitioning",
    "Query Tuning",
  ],
  "Cloud & Observability": [
    "AWS",
    "Kubernetes",
    "Istio",
    "Terraform / Terragrunt",
    "Temporal",
    "Docker",
    "OpenTelemetry",
    "VictoriaLogs/Grafana",
  ],
  "Architecture & Protocols": [
    "Distributed Systems",
    "System Design",
    "Cell-Based Architecture",
    "Multi-Tenancy",
    "Bi-Temporal Modeling",
    "WebRTC",
    "WebSockets",
    "RBAC",
  ],
} as const;

export const educationData = {
  institution: "JNTUH, Hyderabad, India",
  degree: "Bachelor of Technology, Electronics and Communication Engineering",
  dates: "2018 - 2022",
} as const;

export const certificationsData = [
  { name: "GitHub Foundations", issuer: "GitHub", date: "Mar 2025" },
  { name: "IBM Cloud Essentials", issuer: "IBM", date: "May 2021" },
  { name: "Microsoft AI Classroom Series", issuer: "Microsoft", date: "Jan 2021" },
  {
    name: "Introduction to Internet of Things",
    issuer: "Stanford Center for Professional Development",
    date: "Jan 2021",
  },
] as const;
