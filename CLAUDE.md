# Shanmukeshwar - Portfolio & Resume

## Owner
**Danaboina Shanmukeshwar** - Senior Software Development Engineer at Arrowhead

**Contact:**
- Email: shanmukeshwar03@gmail.com
- Phone: 7995235525
- Location: Bangalore, India (Open to Relocate)
- Portfolio: https://shanmukeshwar.dev
- LinkedIn: https://linkedin.com/in/shanmukeshwar
- GitHub: https://github.com/thestackdev

---

## Target Positioning

**Role:** Senior Software Development Engineer / Senior Backend Engineer

**Primary Focus:**
- Rust (WASM plugins, CLI tools, systems programming)
- System Design & Distributed Systems
- Backend Architecture at Scale

**Languages:** Rust (primary), Python (secondary), TypeScript

**Future Goal:** Rust-focused roles

---

## Technical Achievements

### Arrowhead (Current - Mar 2025 to Present)

| Achievement | Details |
|-------------|---------|
| WASM Plugins | 57 domain-specific plugins in Rust using Extism framework |
| Rust CLI Tools | 7 CLI tools with Tokio async runtime, OAuth2, builder-pattern HTTP client |
| Multi-Tenant API | Hash-partitioned PostgreSQL, composite primary keys for tenant isolation |
| Authentication | HMAC-SHA256 with replay attack prevention (nonce store), JWT blacklisting |
| Voice Pipeline | Real-time with Deepgram STT, ElevenLabs TTS |
| LLM Orchestration | 10+ providers via LiteLLM |
| Infrastructure | Multi-region AWS, Kubernetes deployment |

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
- Quantified achievements (65K users, 57 plugins, 10+ providers)
- Security implementations (HMAC, JWT, replay prevention)

### DO NOT Include
- Frontend work (React UI, CSS) - focus is backend
- Client/company names in project descriptions
- Percentage improvements (e.g., "improved by 50%")
- Time estimates or deadlines
- Emojis

### Skills Order (Rust First)
1. Rust, WebAssembly (WASM), Tokio, Extism
2. System Design, Distributed Systems, Microservices
3. Python, FastAPI, PostgreSQL, Redis, Kafka
4. AWS, Kubernetes, Terraform, Docker
5. Security (HMAC, JWT)

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
1. **Enterprise Conversational AI Platform** - Current Arrowhead work
2. **AroundMe** - Location-based social platform (65K+ users)
3. **Memli** - AI-powered flashcard app with YOLO computer vision
4. **Rust CLI Tooling** - 7 CLI tools, Tokio, OAuth2

### Theme
- Dark theme only (no light/dark toggle)
- Minimal, clean design

### Run Locally
```bash
npm run dev
```

---

## Resume (LaTeX)

### Files
```
resume/resume.tex    # LaTeX source (edit this)
resume/resume.md     # Markdown version
resume/resume.pdf    # Generated PDF (gitignored)
```

### Compile PDF
```bash
cd resume
pdflatex -interaction=nonstopmode resume.tex
```

Or with full path:
```bash
/usr/local/texlive/2025/bin/universal-darwin/pdflatex -interaction=nonstopmode resume/resume.tex
```

### Formatting Specs
| Element | Value |
|---------|-------|
| Margins | 0.75 inches all sides |
| Font | Helvetica (sans-serif) |
| Bullet spacing | 8pt |
| Section spacing | 20pt before, 12pt after |
| Job entry spacing | 14pt |
| Project spacing | 12pt |
| Section headers | Bold, ALL CAPS, with underline |

### Resume Sections
1. Header (name, title, contact info)
2. Summary (4+ years, Rust, distributed systems)
3. Skills (categorized: Languages, Rust Ecosystem, Backend, Cloud, Architecture)
4. Experience (4 entries)
5. Education (JNTUH, B.Tech ECE, 2018-2022)
6. Certifications (GitHub Foundations, Microsoft AI, IBM Cloud, Stanford IoT)
7. Projects (4 entries, matching portfolio)

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
- GitHub Foundations - GitHub (Mar 2025)
- Microsoft AI - Microsoft (Jan 2021)
- IBM Cloud Essentials - IBM (May 2021)
- Stanford Internet of Things - Stanford (Jan 2021)
