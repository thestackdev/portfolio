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
- Real-time media & voice infrastructure (WebRTC, STUN/TURN)
- Data-intensive systems across OLTP and OLAP (PostgreSQL/Aurora, Redshift, sharding & partitioning)

**Languages:** Rust and Python are BOTH lead languages - the summary must name both, not Rust alone (owner instruction, 2026-09-14). TypeScript and SQL follow.

**Future Goal:** Rust-focused roles

---

## Technical Achievements

### Arrowhead (Current - Mar 2025 to Present)

| Achievement | Details |
|-------------|---------|
| WASM Plugins | 10+ domain-specific plugins in Rust using Extism: pre-call enrichment, live LLM tool-calling, post-call hooks; hot-swappable without redeploying. MUST appear as an Arrowhead bullet - the summary claims it, so the body has to back it |
| Rust CLI Tools | 7 CLI tools with Tokio async runtime, Clap, OAuth2, builder-pattern HTTP client; includes a multi-region Kubernetes proxy for centralized logs/metrics/traces. MUST appear as an Arrowhead bullet - it was dropped once in a reorder and left components/about.tsx claiming it while the résumé did not |
| Scheduler Scaling | Heartbeat-driven scheduler that picks and executes calls; scaled from 1,000 to 10,000 concurrent executions, processing ~1M calls/day. NOTE: 10,000 is the CONCURRENCY ceiling and ~1M/day is THROUGHPUT - two different metrics, never merge them into one figure |
| Bi-Temporal Billing | Billing system with bi-temporal data modeling (valid-time + transaction-time) |
| Cell-Based Multi-Tenancy | Cell-based, multi-region architecture (inspired by AWS cell-based architecture) isolating tenant workloads into 10+ independent cells for blast-radius containment and horizontal scaling |
| Multi-Tenant Data Layer | Sharding for large tenants, hash partitioning for mid-size; composite primary keys for tenant isolation |
| Query Performance | Index-aware query plans, avoiding write amplification across secondary indexes |
| Cross-DB Reporting | Customer/billing report jobs running for hours; pulls Redshift aggregates and Aurora rows through a fixed-size buffer and aggregates into a temporary file, holding a bounded memory footprint. This is streaming with spill-to-disk, NOT zero-copy - do not use the term "zero-copy" for this work |
| Encryption | Production envelope encryption for customer data at rest: AWS KMS-wrapped data keys, AES-GCM |
| Authentication | HMAC-SHA256 with replay attack prevention (nonce store), JWT blacklisting |
| WebRTC | Real-time audio transport layer with STUN and TURN servers for connectivity behind symmetric NATs |
| Voice Pipeline | Real-time with Deepgram STT, ElevenLabs TTS, turn detection, LLM-based PII redaction |
| LLM Orchestration | 10+ providers via LiteLLM |
| Post-Call Processing | Temporal Cloud workflows run after a call ends. Temporal is NOT part of the telephony integrations or the live call path |
| Infrastructure | Multi-region AWS across 10+ regions/cells, Kubernetes-heavy, Terraform/Terragrunt, Temporal Cloud |
| Fleet Routing | Istio service mesh for smart routing across the cell fleet |
| RBAC | Multi-tenant RBAC model: users, roles, and policies, scoped per tenant. Its own resume bullet - not folded into the auth/signing bullet |
| Security & Compliance | Cloud security work supporting SOC 2 Type II and HIPAA certification - tightened infrastructure to close audit findings. Did NOT run or own the audits; contributed the cloud/infra security side |
| Observability | Multi-region VictoriaLogs/VictoriaMetrics stack; Rust CLI proxy for centralized log/metric/trace access across US and India |
| Cost Optimization | Instance right-sizing, cluster autoscaling, spot/reserved instances, predictive LLM response caching to eliminate redundant inference calls |

### AroundMe (Closed - Jun 2024 to Mar 2025)

| Achievement | Details |
|-------------|---------|
| Role | Founding Engineer & Head of Technology |
| Team | Led team of 10 engineers |
| Scale | 65K+ downloads across Play Store and App Store |
| Product | Proximity-based social app: real-time location matched users to nearby groups and discussions |
| Backend | FastAPI API layer, PostgreSQL, Redis cluster (master + 3 replicas); microservices on Kubernetes |
| Geo | PostgreSQL with PostGIS and GiST indexes for proximity queries |
| Chat | Real-time WebSockets, Redis pub/sub fan-out across server instances; the chat server ran as its own dedicated microservice (NOT pinned to dedicated nodes - that was a misreading of the dictation) |
| Notifications | Kafka-routed: in-app when the recipient is connected, otherwise push via APNs (iOS) or FCM (Android) |
| Graph | Neo4j for social graph |
| Client | React Native |
| DevOps | Kubernetes with GitOps (ArgoCD) |

Removed as unsupported claims - do NOT reintroduce:
- **Elasticsearch for geospatial search.** The geo work was Postgres/PostGIS. Elasticsearch was also dropped from the skills lists, since AroundMe was the only thing backing it.
- **ML-powered recommendations / AI content moderation.** Overstated. The "suggestions" feature was location-driven matching, not an ML pipeline - describe it that way.
- **GitHub Actions CI/CD.** Cut as deployment trivia; it weakened the bullet it sat in.

### OpenCubicles (Aug 2022 to May 2023) - full-time SDE
- Warehouse maintenance (Australian client, "Smart Maintenance"): Django backend. Warehouse cameras capture images -> FTP server -> incremental sync to S3 -> S3 upload trigger -> Lambda -> DB records -> review dashboard for warehouse health. There is NO automatic fault detection in this pipeline
- Shopify apps, front-end lead: drag-and-drop store builder (React, bidirectional iframe communication); storefront widgets ("Perk Clothing"); pre- and post-purchase recommendations app ("CardScaler")
- Real-time analytics: Kafka event processing, Redis caching
- Mobile: React Native and Flutter

### OpenCubicles Intern (Jun 2021 to Aug 2022)
- Solar installer field app ("Green Forms Trading", Australian client): offline-first, WatermelonDB + Firebase, on-device facial recognition (real human facial recognition - confirmed, not panel/object recognition), step-by-step install-sequence guidance
- Barcode scanner in the same app: writes straight to WatermelonDB locally, then syncs asynchronously to S3
- CRM with Kanban lead tracking ("Helpsell", US client)
- Backend services: Django, Next.js with CI/CD

Client names above are INTERNAL REFERENCE ONLY. The resume describes this work generically - see the client-names rule under Content Rules.

Removed as wrong - do NOT reintroduce:
- **"Smart AC maintenance."** It was a warehouse, not AC.
- **"Lambda pipeline that flagged faults."** No fault detection existed. The Lambda wrote DB records; humans reviewed warehouse health on the dashboard.
- **"Oil-industry CRM with eSign integration."** No oil industry and no eSign. It was a US-based CRM with Kanban lead tracking.

Still unresolved: the "Shipped mobile apps in React Native and Flutter" bullet has no named app, count, or user number. Two independent review passes ranked it a worst-three bullet. Ask for a concrete detail or cut it - do not invent one.

---

## Content Rules (Apply to Both Portfolio & Resume)

### DO Include
- Backend technologies (databases, queues, caches)
- System design patterns (partitioning, replication, clustering)
- Rust-specific details (Tokio, WASM, Extism, Cargo workspaces)
- Infrastructure (Kubernetes, Terraform, AWS)
- Quantified achievements (65K users, 10+ plugins, 10+ providers)
- Security implementations (HMAC, JWT, replay prevention)

### Voice
Write like a person, not a resume generator. Plain verbs (Built, Scaled, Wrote, Tuned), not "Architected"/"Spearheaded"/"Leveraged". Avoid semicolon-stacked clauses and three-item parallel lists. Arrowhead bullets are ordered hardest-first, not chronologically.

Performed casualness is also slop, and harder to spot than corporate jargon: "one tenant's bad day", "was the easy half", "without anyone watching", "wired in", "landing on", "X behind Y". Do not explain to the reader what a technology is for - a senior reviewer already knows.

### MANDATORY: Review Pass
After ANY substantive content change to `resume/resume.typ`, `resume/resume.md`, or the copy in `lib/data.ts` / `components/about.tsx`, run the adversarial reviewer in `REVIEWER.md` before reporting the work as done.

- Spawn a `general-purpose` subagent with the prompt in `REVIEWER.md`, verbatim. Do not soften it.
- Apply findings with judgment, not mechanically. `REVIEWER.md` lists the judgment calls that must survive the reviewer (the scheduler number leads; quantified claims and named technologies stay).
- Whoever wrote the copy cannot see its own tells. This pass is not optional and not a formality.

### DO NOT Include
- Web frontend styling work (React UI, CSS) - focus is backend. EXCEPTION: the OpenCubicles mobile and Shopify app work (React Native, Flutter, Shopify apps) stays in - it is shipped product experience, not styling, and the owner asked for it explicitly
- Client/company names in project descriptions
- Percentage improvements (e.g., "improved by 50%")
- Time estimates or deadlines
- Emojis

### Skills Structure (5 Categories, Rust First)
Condensed to 5 strong categories for visibility (not 6+). Keep this structure synced across `resume.typ`, `resume.md`, and `lib/data.ts`:
1. **Languages:** Rust, Python, TypeScript, SQL
2. **Rust & Systems:** Tokio, Multithreading & Concurrency, WebAssembly (Extism), Streaming / Out-of-Core Processing, Cargo Workspaces
3. **Data & Storage:** PostgreSQL / Aurora, Redshift, Redis, Kafka, Neo4j, PostGIS, Sharding & Partitioning, Query Tuning
4. **Cloud & Observability:** AWS, Kubernetes, Istio, Terraform / Terragrunt, Temporal, Docker, OpenTelemetry, VictoriaLogs/Grafana
5. **Architecture & Protocols:** Distributed Systems, System Design, Cell-Based Architecture, Multi-Tenancy, Bi-Temporal Modeling, WebRTC, WebSockets, RBAC

Category 5 was renamed from "Architecture" - WebRTC, WebSockets and RBAC are protocols and access control, not architecture, and were being swept into that row for lack of anywhere else. `Elasticsearch` and `LiteLLM` were dropped: Elasticsearch as an unsupported claim (see AroundMe), LiteLLM because a client library is not a skill.

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
1. **Roaring Bitmaps** - Rust implementation of the compressed bitmap structure (adaptive array/bitmap containers, 4096-element threshold). 262 lines, 13 tests, no runtime deps, criterion benches. Public repo: https://github.com/thestackdev/roaring-bitmaps
   - Do NOT add performance comparisons against croaring or other libraries. A croaring benchmark claim was dictated and then pulled the same day (2026-09-14) - it is not on the resume and should not come back without the owner saying so.
   - NEVER list what a project does not implement on the résumé. Omitting an unbuilt feature is correct; advertising the omission ("no run containers or set operations yet") is not. Describe what was built; say nothing about the rest.
2. **Lox Language Interpreter** - Tree-walking Lox interpreter in Rust, no external crates (hand-written lexer, recursive-descent parser with precedence climbing, AST evaluator over a scope stack). Public repo: https://github.com/thestackdev/lox-rs
   - Closures and class inheritance were added to the copy and then pulled the same day (2026-09-14). Do not reintroduce without the owner saying so.

Accuracy note: the LEXER is hand-written; the PARSER is recursive-descent. Never write "recursive-descent lexer" - recursive descent is a parsing technique and a specialist catches the error instantly.

### STAGED - Distributed Task Scheduler (not yet on the résumé)

Pulled on 2026-09-14: the first draft was written from a checkbox list, not from code, and read as a vague pile of mechanism names. The owner is implementing it the weekend of 2026-09-19. Restore ONLY once the code does what this says.

Target entry, ready to drop in verbatim:

> **Distributed Task Scheduler** (2026)
> Distributed job scheduler in Rust on Tokio. Workers claim tasks from Postgres with `SELECT ... FOR UPDATE SKIP LOCKED`; claims carry a renewable lease, so a task held by a crashed worker returns to the queue when its lease expires. Leader elected by a lease in the same table.
>
> **Tech:** Rust, Tokio, PostgreSQL, Distributed Systems, Leader Election, At-Least-Once Delivery

What has to exist before that line is true:
- a task table in Postgres with a state column
- claim via `SELECT ... FOR UPDATE SKIP LOCKED`, so concurrent workers never take the same row
- a lease/visibility-timeout column the holder renews on a heartbeat
- a reaper that returns expired-lease tasks to the queue (this is what makes it at-least-once)
- leader election via a lease row or advisory lock in the same table

Do NOT restore with claims that were not built: Raft, consistent hashing, work stealing, exactly-once, or zero-copy. Each one is a whiteboard question the owner would have to answer live, and the repo is private so the interview is the only verification.

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
2. Summary (opens with the title "Senior software engineer", then Rust AND Python / distributed systems; no years-of-experience count - lead with concrete work. The template has no title field, so the summary carries it)
3. Skills (categorized: Languages, Rust & Systems, Data & Storage, Cloud & Observability, Architecture)
4. Experience (4 entries using `#work()`)
5. Education (JNTUH, B.Tech ECE, 2018-2022 using `#edu()`)
6. Certifications (all four: GitHub Foundations, IBM Cloud Essentials, Microsoft AI Classroom Series, Stanford CPD Introduction to Internet of Things)
7. Projects (2 entries using `#project()`, no URLs in the résumé)

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
Held (all four are listed):
- GitHub Foundations, GitHub (Mar 2025)
- IBM Cloud Essentials, IBM (30 May 2021)
- Microsoft AI Classroom Series, Microsoft (28 Jan 2021)
- Introduction to Internet of Things, Stanford Center for Professional Development (completed 16 Jan 2021, record issued 19 Jan 2021; course XEE100-017, Winter 2020-21)

Issuer precision: the Stanford one is **Stanford Center for Professional Development**, Stanford's professional-education arm - NOT a Stanford University course or degree. Write the full issuer name; shortening it to "Stanford University" overstates what it is.

List ALL FOUR on the résumé/portfolio. The owner asked for these on 2026-09-14, reversing the earlier decision to omit the 2021 MOOCs - do NOT strip any of them back out.
