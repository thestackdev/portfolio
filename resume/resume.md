# Danaboina Shanmukeshwar

**Senior Software Development Engineer**

7995235525 | shanmukeshwar03@gmail.com | Bangalore, India | Open to Relocate

[Portfolio](https://thestackdev.github.io/portfolio) | [LinkedIn](https://linkedin.com/in/shanmukeshwar) | [GitHub](https://github.com/thestackdev)

---

## Summary

Backend and distributed-systems engineer working primarily in Rust. Built production Rust WASM plugins (Extism), a real-time voice AI pipeline, and multi-tenant platforms on hash-partitioned PostgreSQL within a cell-based, multi-region architecture. Comfortable at the systems level with async runtimes (Tokio), WebAssembly, columnar data (Apache Arrow, Parquet, DataFusion), and object-storage-backed query engines.

---

## Skills

| Category | Technologies |
|----------|-------------|
| **Languages** | Rust, Python, TypeScript, SQL |
| **Rust & Systems** | Tokio, Multithreading & Concurrency, WebAssembly (Extism), Apache Arrow, DataFusion, Zero-Copy Parsing, Cargo Workspaces |
| **Data & Storage** | Parquet, Columnar Analytics, PostgreSQL, Redis, Kafka, Elasticsearch, Object Storage |
| **Cloud & Observability** | AWS, Kubernetes, Terraform, Terragrunt, Docker, OpenTelemetry, VictoriaLogs/Grafana |
| **Architecture** | Distributed Systems, System Design, Microservices, WAL / Columnar Storage, Bi-Temporal Modeling, LiteLLM |

---

## Experience

### Senior Software Development Engineer
**Arrowhead** | Mar 2025 - Present

- Designed 10+ production Rust WASM plugins (Extism) for a multi-tenant voice AI platform, powering pre-call enrichment, live LLM tool-calling, and post-call processing
- Architected a cell-based, multi-region platform inspired by AWS cell-based architecture, isolating tenant workloads into 10+ independent cells for blast-radius containment and horizontal scaling; provisioned each cell with Terraform/Terragrunt (Kubernetes, PostgreSQL, Redis, container registry)
- Raised the heartbeat-driven scheduler's sustained throughput roughly 10x (to 10,000 concurrent outbound executions) by redesigning the async task queue and sharding hot-path state to remove lock contention across Tokio's multithreaded runtime
- Built the multi-tenant data layer on hash-partitioned PostgreSQL with HMAC-SHA256 request signing (nonce-based replay prevention) and JWT blacklisting, plus a bi-temporal billing system (valid-time + transaction-time) for audit-safe, retroactively correctable charge history
- Built a Rust CLI toolchain (Tokio, Clap) for infrastructure operations, including a multi-region Kubernetes proxy for centralized access to logs, metrics, and traces; drove multi-region cost optimization via right-sizing, autoscaling, and spot/reserved capacity
- Built a real-time voice pipeline (streaming STT/TTS, smart turn detection, LLM-based PII redaction) orchestrating 10+ LLM providers via LiteLLM and 5 telephony integrations via Temporal workflows; fine-tuned open-source models for predictive response caching

### Founding Engineer & Head of Technology
**AroundMe (Closed)** | Jun 2024 - Mar 2025

- Founded and led team of 10 building location-based social app (65K+ downloads across Play Store and App Store)
- Architected distributed backend: FastAPI, PostgreSQL, Redis cluster (master + 3 slaves), Elasticsearch, Neo4j
- Implemented ML-powered recommendations and AI content moderation
- Kubernetes deployment with GitOps (ArgoCD) and GitHub Actions CI/CD

### Software Development Engineer
**OpenCubicles Technologies** | Aug 2022 - May 2023

- Built smart AC maintenance system with camera feeds, custom FTP server, and AWS Lambda pipeline for automated fault detection
- Implemented Kafka event processing and Redis caching for real-time analytics

### Software Development Engineer Intern
**OpenCubicles Technologies** | Jun 2021 - Aug 2022

- Built backend services (Django, Next.js) with CI/CD pipelines and offline-first data sync for field applications

---

## Projects

### Columnar Observability Query Engine
Log-analytics engine in Rust: ingests structured logs over HTTP with zero-copy JSON parsing, buffers through a write-ahead log, and flushes time-partitioned Apache Parquet to object storage. Exposes SQL over the columnar store via a custom Apache Arrow DataFusion `TableProvider` with predicate and projection pushdown to the Parquet scan layer. Achieves 40x compression over raw JSON and sub-second aggregation across millions of rows.

**Tech:** Rust, Apache Arrow, DataFusion, Parquet, Object Storage, Tokio

### Distributed Raft Key-Value Store
Distributed key-value store in Rust built on Raft consensus for leader election and a replicated log across a cluster. Writes are durably appended to a write-ahead log and applied to a log-structured (LSM) storage engine with background compaction; periodic snapshots bound log growth and speed recovery. Provides linearizable reads and automatic failover under node crashes and network partitions.

**Tech:** Rust, Raft, Distributed Systems, WAL, LSM Storage, Tokio

---

## Education

**JNTUH, Hyderabad, India**
Bachelor of Technology, Electronics and Communication Engineering | 2018 - 2022

---

## Certifications

- **GitHub Foundations** - GitHub (Mar 2025)
