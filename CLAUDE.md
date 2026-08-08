# Shanmukeshwar - Portfolio & Resume

## Owner
**Danaboina Shanmukeshwar** - Senior Software Development Engineer at Arrowhead

**Contact:**
- Email: shanmukeshwar03@gmail.com
- Phone: 7995235525
- Location: Bangalore, India (Open to Relocate)
- Portfolio: https://thestackdev.github.io/portfolio
- LinkedIn: https://linkedin.com/in/shanmukeshwar
- GitHub: https://github.com/thestackdev

---

## Target Positioning

**Role:** Senior Software Development Engineer / Senior Backend Engineer

**Primary Focus:**
- Rust (WASM plugins, CLI tools, systems programming)
- System Design & Distributed Systems
- Backend Architecture at Scale
- Data-intensive & observability systems (columnar storage, Apache Arrow/DataFusion, Parquet)

**Languages:** Rust (primary), Python (secondary), TypeScript

**Future Goal:** Rust-focused roles

---

## Technical Achievements

### Arrowhead (Current - Mar 2025 to Present)

| Achievement | Details |
|-------------|---------|
| WASM Plugins | 10+ domain-specific plugins in Rust using Extism framework |
| Rust CLI Tools | 7 CLI tools with Tokio async runtime, OAuth2, builder-pattern HTTP client |
| Scheduler Scaling | Heartbeat-driven scheduler that picks and executes calls; scaled from 1,000 to 10,000 concurrent executions |
| Bi-Temporal Billing | Billing system with bi-temporal data modeling (valid-time + transaction-time) |
| Cell-Based Multi-Tenancy | Cell-based, multi-region architecture (inspired by AWS cell-based architecture) isolating tenant workloads into 10+ independent cells for blast-radius containment and horizontal scaling |
| Multi-Tenant API | Hash-partitioned PostgreSQL, composite primary keys for tenant isolation |
| Authentication | HMAC-SHA256 with replay attack prevention (nonce store), JWT blacklisting |
| Voice Pipeline | Real-time with Deepgram STT, ElevenLabs TTS |
| LLM Orchestration | 10+ providers via LiteLLM |
| Infrastructure | Multi-region AWS across 10+ regions/cells, Kubernetes, Terraform/Terragrunt |
| Observability | Multi-region VictoriaLogs/VictoriaMetrics stack; Rust CLI proxy for centralized log/metric/trace access across US and India |
| Cost Optimization | Instance right-sizing, cluster autoscaling, spot/reserved instances, predictive LLM response caching to eliminate redundant inference calls |

### AroundMe (Closed - Jun 2024 to Mar 2025)

| Achievement | Details |
|-------------|---------|
| Role | Founding Engineer & Head of Technology |
| Team | Led team of 10 engineers |
| Scale | 65K+ downloads across Play Store and App Store |
| Backend | FastAPI, PostgreSQL, Redis cluster (master + 3 slaves) |
| Search | Elasticsearch for geospatial queries |
| Graph | Neo4j for social graph + collaborative filtering |
| ML | ML-powered recommendations, AI content moderation |
| DevOps | Kubernetes with GitOps (ArgoCD), GitHub Actions CI/CD |

### OpenCubicles (Aug 2022 to May 2023)
- Smart AC maintenance: Camera feeds, custom FTP server, AWS Lambda pipeline
- Shopify Builder Plugin: React drag-and-drop, bidirectional iframe communication
- Real-time analytics: Kafka event processing, Redis caching

### OpenCubicles Intern (Jun 2021 to Aug 2022)
- Offline-first React Native app: WatermelonDB, facial recognition, barcode scanning
- Oil industry CRM with eSign integration
- Backend services: Django, Next.js with CI/CD

---

## Content Rules (Apply to Both Portfolio & Resume)

### DO Include
- Backend technologies (databases, queues, caches)
- System design patterns (partitioning, replication, clustering)
- Rust-specific details (Tokio, WASM, Extism, Cargo workspaces)
- Infrastructure (Kubernetes, Terraform, AWS)
- Quantified achievements (65K users, 10+ plugins, 10+ providers)
- Security implementations (HMAC, JWT, replay prevention)

### DO NOT Include
- Frontend work (React UI, CSS) - focus is backend
- Client/company names in project descriptions
- Percentage improvements (e.g., "improved by 50%")
- Time estimates or deadlines
- Emojis

### Skills Structure (5 Categories, Rust First)
Condensed to 5 strong categories for visibility (not 6+). Keep this structure synced across `resume.typ`, `resume.md`, and `lib/data.ts`:
1. **Languages:** Rust, Python, TypeScript, SQL
2. **Rust & Systems:** Tokio, Multithreading & Concurrency, WebAssembly (Extism), Apache Arrow, DataFusion, Zero-Copy Parsing, Cargo Workspaces
3. **Data & Storage:** Parquet, Columnar Analytics, PostgreSQL, Redis, Kafka, Elasticsearch, Object Storage4. **Cloud & Observability:** AWS, Kubernetes, Terraform, Terragrunt, Docker, OpenTelemetry, VictoriaLogs/Grafana
5. **Architecture:** Distributed Systems, System Design, Microservices, WAL / Columnar Storage, Bi-Temporal Modeling, LiteLLM

---

## Portfolio (Next.js)

### File Structure
```
lib/data.ts            # Projects, skills, experience data
components/intro.tsx   # Hero section
components/about.tsx   # Bio section
components/project.tsx # Project card component
components/skills.tsx  # Skills section
components/experience.tsx # Experience timeline
```

### Projects in Portfolio
1. **Columnar Observability Query Engine** - Rust log-analytics engine on Apache Arrow/DataFusion + Parquet + object storage
2. **Distributed Raft Key-Value Store** - Replicated KV store in Rust with Raft consensus, WAL, and LSM storage engine

Note: Projects are standalone/side projects, kept distinct from the Experience section. Do not re-list current or past employers (e.g., Arrowhead voice AI platform, AroundMe) as projects.

### Theme
- Dark theme only (no light/dark toggle)
- Minimal, clean design

### Run Locally
```bash
npm run dev
```

---

## Resume (Typst)

### Files
```
resume/resume.typ    # Typst source (edit this)
resume/resume.md     # Markdown version
public/resume.pdf    # Generated PDF (served by portfolio)
```

### Template
Uses `@preview/basic-resume:0.2.9` from Typst Universe - ATS-friendly, clean design.

### Compile PDF
```bash
typst compile resume/resume.typ public/resume.pdf
```

### Watch Mode (auto-recompile on save)
```bash
typst watch resume/resume.typ public/resume.pdf
```

### Resume Sections
1. Header (name, title, contact info)
2. Summary (Rust, distributed systems; no years-of-experience count — lead with concrete work)
3. Skills (categorized: Languages, Rust Ecosystem, Backend, Cloud, Architecture)
4. Experience (4 entries using `#work()`)
5. Education (JNTUH, B.Tech ECE, 2018-2022 using `#edu()`)
6. Certifications (GitHub Foundations only; 2021 intro MOOCs omitted from the systems-targeted résumé)
7. Projects (2 entries using `#project()`, no URLs - private projects)

### Keep Resume & Portfolio in Sync
- Same projects in both
- Same skills order (Rust first)
- Same achievements and metrics
- Same content rules

---

## Education
**JNTUH, Hyderabad, India**
Bachelor of Technology, Electronics and Communication Engineering (2018-2022)

## Certifications
Held (for reference): GitHub Foundations (Mar 2025), Microsoft AI (Jan 2021), IBM Cloud Essentials (May 2021), Stanford Internet of Things (Jan 2021).

On the systems-targeted résumé/portfolio, list ONLY GitHub Foundations. The three 2021 intro MOOCs are omitted: on a senior systems resume they read as padding and lower perceived seniority.
