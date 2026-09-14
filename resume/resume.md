# Danaboina Shanmukeshwar

+91 7995235525 | shanmukeshwar03@gmail.com | Bangalore, India (Open to Relocate)

[Portfolio](https://thestackdev.github.io/portfolio) | [LinkedIn](https://linkedin.com/in/shanmukeshwar) | [GitHub](https://github.com/thestackdev)

---

## Summary

Senior software engineer working in Rust and Python on backend and distributed systems. At Arrowhead, built the WASM plugin system on Extism, scaled the call scheduler from 1,000 to 10,000 concurrent executions (~1M calls/day), and split the platform across 10+ AWS cells.

---

## Skills

| Category | Skills |
|----------|-------------|
| **Languages** | Rust, Python, TypeScript, SQL |
| **Rust & Systems** | Tokio, Multithreading & Concurrency, WebAssembly (Extism), Streaming / Out-of-Core Processing, Cargo Workspaces |
| **Data & Storage** | PostgreSQL / Aurora, Redshift, Redis, Kafka, Neo4j, PostGIS, Sharding & Partitioning, Query Tuning |
| **Cloud & Observability** | AWS, Kubernetes, Istio, Terraform / Terragrunt, Temporal, Docker, OpenTelemetry, VictoriaLogs/Grafana |
| **Architecture & Protocols** | Distributed Systems, System Design, Cell-Based Architecture, Multi-Tenancy, Bi-Temporal Modeling, WebRTC, WebSockets, RBAC |

---

## Experience

### Senior Software Development Engineer
**Arrowhead** | Mar 2025 - Present

- Scaled the heartbeat-driven call scheduler from 1,000 to 10,000 concurrent call executions, processing ~1M calls/day: sharded hot-path state to reduce lock contention across Tokio worker threads
- Built the billing system on a bi-temporal model
- Built the WASM plugin system on Extism: 10+ hot-swappable plugins in Rust for pre-call enrichment, live LLM tool-calling, and post-call hooks
- Split the platform into 10+ cells across AWS regions, provisioned with Terraform and Terragrunt. Istio routed each tenant to its own cell
- Built the WebRTC voice layer and the streaming STT/TTS pipeline with turn detection and PII redaction
- Integrated 5 telephony providers and 10+ LLM providers via LiteLLM, and ran post-call processing on Temporal workflows
- Wrote the customer and billing report jobs: streamed Redshift aggregates and Aurora rows through a fixed-size buffer and aggregated into a temporary file, keeping memory bounded on multi-hour runs
- Sharded the database for the largest multi-tenant accounts and partitioned the mid-size ones. Tuned query plans for index usage and reduced write amplification from over-indexing
- Built 7 Rust CLI tools (Tokio, Clap) for infrastructure operations, including a multi-region Kubernetes proxy for centralized access to logs, metrics, and traces
- Implemented envelope encryption for customer data at rest: AWS KMS-wrapped data keys with AES-GCM
- Designed the multi-tenant RBAC model: users, roles, and policies, scoped per tenant
- Implemented HMAC-SHA256 request signing with a nonce store and JWT blacklisting

### Founding Engineer & Head of Technology
**AroundMe (Closed)** | Jun 2024 - Mar 2025

- Led a team of 10 on a proximity-based social app; 65K+ downloads across the App Store and Play Store
- Built the chat server as a separate WebSocket service, with Redis pub/sub for cross-instance fanout
- Routed notifications through Kafka: in-app when the recipient was connected, APNs or FCM otherwise
- Served proximity queries from PostgreSQL with PostGIS and GiST indexes
- Built the FastAPI backend, with Redis (one primary, 3 replicas) and Neo4j for the social graph
- Ran the backend as microservices on Kubernetes with ArgoCD GitOps

### Software Development Engineer
**OpenCubicles Technologies** | Aug 2022 - May 2023

- Built the Django backend and image pipeline for a warehouse maintenance system: camera FTP uploads synced incrementally to S3, with S3-triggered Lambdas indexing them for the review dashboard
- Led front-end work on Shopify apps: a drag-and-drop store builder with a bidirectional iframe bridge, storefront widgets, and a pre- and post-purchase recommendations app
- Processed store events through a Kafka consumer with a Redis cache

### Software Development Engineer Intern
**OpenCubicles Technologies** | Jun 2021 - Aug 2022

- Built an offline-first mobile app for solar installers on WatermelonDB and Firebase, with on-device facial recognition and install-sequence guidance
- Backed the barcode scanner with local WatermelonDB writes and asynchronous S3 sync
- Delivered a CRM with Kanban lead tracking
- Wrote Django backend services and Next.js applications

---

## Projects

### Roaring Bitmaps (Rust)
Roaring bitmap implementation in Rust: 65,536-element blocks, switching between sorted-array and dense-bitmap storage at the 4,096-element threshold. Within ~10% of croaring on union/intersection benchmarks. Criterion benchmarks.

**Tech:** Rust, Data Structures, Compressed Bitmaps, Criterion Benchmarks

### Lox Interpreter (Rust)
Lox interpreter in Rust, no external crates: lexer, recursive-descent parser with precedence climbing, tree-walking evaluator with lexical scoping, closures, and class inheritance.

**Tech:** Rust, Interpreter Design, Recursive Descent

---

## Education

**JNTUH, Hyderabad, India**
Bachelor of Technology, Electronics and Communication Engineering | 2018 - 2022

---

## Certifications

- **GitHub Foundations** - GitHub (Mar 2025)
- **IBM Cloud Essentials** - IBM (May 2021)
- **Microsoft AI Classroom Series** - Microsoft (Jan 2021)
- **Introduction to Internet of Things** - Stanford Center for Professional Development (Jan 2021)
