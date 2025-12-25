# Portfolio - Claude Code Instructions

## Owner
**Shanmukeshwar** - Senior Software Development Engineer

## Target Positioning
- **Primary Focus**: Rust, System Design, Distributed Systems, Backend Architecture
- **Future Goal**: Rust-focused roles
- **Languages**: Rust (primary), Python (secondary)

---

## Rules

### DO Include
- Backend technologies (databases, queues, caches)
- System design patterns (partitioning, replication, consistency)
- Rust-specific details (Tokio, WASM, Extism, Cargo workspaces)
- Infrastructure (Kubernetes, Terraform, AWS)
- Quantified achievements (65K users, 57 plugins, 10+ providers)
- Security implementations (HMAC, JWT, replay prevention)

### DO NOT Include
- Frontend work (React, TypeScript UI, CSS) - I didn't work on frontend
- Client/company names in project descriptions - keep generic
- Time estimates or deadlines
- Emojis in content

---

## File Structure

```
lib/data.ts          # Projects, skills, experience data
components/intro.tsx # Hero section (name, title, headline)
components/about.tsx # Bio/about section
components/project.tsx # Project card component
```

---

## Adding a New Project

### 1. Edit `lib/data.ts`

Add to `projectsData` array:

```typescript
{
  title: "Project Name",
  description: "Technical description focusing on backend architecture, system design patterns, and Rust usage. Include specific technologies and scale metrics.",
  tags: ["Rust", "Technology2", "Technology3", ...], // 5-7 tags, Rust first if applicable
}
```

### 2. Description Guidelines

**Good description pattern:**
"[Architecture type] with [key technologies]. Features [Rust-specific work], [system design pattern], and [scale metric]."

**Example:**
"Multi-tenant voice AI platform with HMAC authentication, hash-partitioned PostgreSQL, 57 WASM plugins in Rust (Extism), real-time voice pipeline (Deepgram + ElevenLabs), and multi-LLM orchestration across 10+ providers."

**Highlight these if present:**
- Rust usage (WASM, Tokio, CLI tools)
- System design (partitioning, clustering, replication)
- Scale (users, requests, data volume)
- Security (auth patterns, encryption)

### 3. Tag Priority Order
1. Rust / Rust-specific (Tokio, WASM, Extism)
2. Primary backend framework (FastAPI)
3. Databases (PostgreSQL, Redis)
4. Infrastructure (Kubernetes, AWS)
5. Architecture pattern (System Design, Microservices)

---

## Skills Order (in lib/data.ts)

Keep Rust-related skills first:
1. Rust, WebAssembly (WASM), Tokio, Extism
2. System Design, Distributed Systems, Microservices
3. Python, FastAPI, PostgreSQL, Redis, Kafka
4. AWS, Kubernetes, Terraform
5. Security (HMAC, JWT)

---

## Experience Guidelines

When adding new experience to `experiencesData`:
- Focus on backend/infrastructure achievements
- Use quantified metrics where possible
- Mention Rust work prominently
- Keep descriptions to 2-3 sentences
- Use `FaServer` icon for backend roles, `CgWorkAlt` for general

---

## Updating Hero/About

### Hero (intro.tsx)
Keep concise. Pattern:
"[Role] at [Company], building [focus area] with [languages]. [Key achievement with Rust]. Passionate about [interests]."

### About (about.tsx)
Three paragraphs:
1. Background + years experience + languages
2. Previous role achievements (AroundMe)
3. Current role achievements (Arrowhead) + Rust focus

---

## Technical Achievements Reference

Use these details when describing projects:

### Arrowhead (Current)
- 57 WASM plugins in Rust (Extism framework)
- 7 Rust CLI tools (Tokio, OAuth2)
- HMAC-SHA256 with replay attack prevention
- Hash-partitioned PostgreSQL
- Multi-LLM orchestration (10+ providers)
- Real-time voice pipeline (Deepgram, ElevenLabs)

### AroundMe (Previous)
- Redis cluster (master + 3 slaves)
- Elasticsearch for geospatial
- Neo4j for social graph
- 65K+ users
- GitOps with ArgoCD
