#import "@preview/basic-resume:0.2.9": *

#show: resume.with(
  author: "Danaboina Shanmukeshwar",
  email: "shanmukeshwar03@gmail.com",
  github: "github.com/thestackdev",
  linkedin: "linkedin.com/in/shanmukeshwar",
  phone: "+91 7995235525",
  personal-site: "thestackdev.github.io/portfolio",
  accent-color: "#0066cc",
  font: "New Computer Modern",
)

== Summary

Backend and distributed-systems engineer working primarily in Rust. Built production Rust WASM plugins (Extism), a real-time voice AI pipeline, and multi-tenant platforms on hash-partitioned PostgreSQL within a cell-based, multi-region architecture. Comfortable at the systems level with async runtimes (Tokio), WebAssembly, columnar data (Apache Arrow, Parquet, DataFusion), and object-storage-backed query engines.

== Skills

- *Languages:* Rust, Python, TypeScript, SQL
- *Rust & Systems:* Tokio, Multithreading & Concurrency, WebAssembly (Extism), Apache Arrow, DataFusion, Zero-Copy Parsing, Cargo Workspaces
- *Data & Storage:* Parquet, Columnar Analytics, PostgreSQL, Redis, Kafka, Elasticsearch, Object Storage
- *Cloud & Observability:* AWS, Kubernetes, Terraform, Terragrunt, Docker, OpenTelemetry, VictoriaLogs/Grafana
- *Architecture:* Distributed Systems, System Design, Microservices, WAL / Columnar Storage, Bi-Temporal Modeling, LiteLLM

== Experience

#work(
  title: "Senior Software Development Engineer",
  company: "Arrowhead",
  dates: "Mar 2025 - Present",
  location: "Bangalore, India",
)
- Designed 10+ production Rust WASM plugins (Extism PDK) for a multi-tenant voice AI platform, powering pre-call data enrichment, live LLM tool-calling, and post-call processing hooks
- Architected a cell-based, multi-region platform inspired by AWS cell-based architecture, isolating tenant workloads into 10+ independent cells for blast-radius containment and horizontal scaling; provisioned each cell from scratch with Terraform/Terragrunt (Kubernetes, PostgreSQL, Redis, container registry)
- Raised the heartbeat-driven scheduler's sustained throughput roughly 10x (to 10,000 concurrent outbound executions) by redesigning the async task queue and sharding hot-path state to remove lock contention across Tokio's multithreaded runtime
- Built the multi-tenant data layer on hash-partitioned PostgreSQL with HMAC-SHA256 request signing (nonce-based replay prevention) and JWT blacklisting, plus a bi-temporal billing system tracking valid-time and transaction-time for audit-safe, retroactively correctable charge history
- Built a Rust CLI toolchain (Tokio, Clap) for infrastructure operations, including a multi-region Kubernetes proxy for centralized access to logs, metrics, and traces across the observability stack; drove multi-region cost optimization through right-sizing, autoscaling, and spot/reserved capacity
- Built a real-time voice pipeline (streaming STT/TTS, smart turn detection, LLM-based PII redaction) orchestrating 10+ LLM providers via LiteLLM and 5 telephony integrations via Temporal workflows; fine-tuned open-source models for predictive response caching to cut perceived latency

#work(
  title: "Founding Engineer & Head of Technology",
  company: "AroundMe (Closed)",
  dates: "Jun 2024 - Mar 2025",
  location: "Hyderabad, India",
)
- Founded and led team of 10 building location-based social app (65K+ downloads across Play Store and App Store)
- Architected distributed backend: FastAPI, PostgreSQL, Redis cluster (master + 3 slaves), Elasticsearch, Neo4j
- Implemented ML-powered recommendations and AI content moderation
- Kubernetes deployment with GitOps (ArgoCD) and GitHub Actions CI/CD

#work(
  title: "Software Development Engineer",
  company: "OpenCubicles Technologies",
  dates: "Aug 2022 - May 2023",
  location: "Hyderabad, India",
)
- Built smart AC maintenance system with camera feeds, custom FTP server, and AWS Lambda pipeline for automated fault detection
- Implemented Kafka event processing and Redis caching for real-time analytics

#work(
  title: "Software Development Engineer Intern",
  company: "OpenCubicles Technologies",
  dates: "Jun 2021 - Aug 2022",
  location: "Hyderabad, India",
)
- Built backend services (Django, Next.js) with CI/CD pipelines and offline-first data sync for field applications

== Education

#edu(
  institution: "JNTUH, Hyderabad, India",
  degree: "Bachelor of Technology, Electronics and Communication Engineering",
  dates: "2018 - 2022",
)

== Certifications

- #link("https://www.credly.com/badges/ef599cbf-bd2b-4217-87d2-608ba9da1b52")[GitHub Foundations], GitHub (Mar 2025)

== Projects

#project(
  name: "Columnar Observability Query Engine",
  dates: "2025",
)
- Log-analytics engine in Rust: ingests structured logs over HTTP with zero-copy JSON parsing, buffers through a write-ahead log, and flushes time-partitioned Apache Parquet to object storage. Exposes SQL over the columnar store via a custom Apache Arrow DataFusion `TableProvider` with predicate and projection pushdown to the Parquet scan layer. Achieves 40x compression over raw JSON and sub-second aggregation across millions of rows.

#project(
  name: "Distributed Raft Key-Value Store",
  dates: "2025",
)
- Distributed key-value store in Rust built on Raft consensus for leader election and a replicated log across a cluster. Writes are durably appended to a write-ahead log and applied to a log-structured (LSM) storage engine with background compaction; periodic snapshots bound log growth and speed recovery. Provides linearizable reads and automatic failover under node crashes and network partitions.