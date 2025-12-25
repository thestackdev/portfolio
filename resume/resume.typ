#import "@preview/basic-resume:0.2.9": *

#show: resume.with(
  author: "Danaboina Shanmukeshwar",
  email: "shanmukeshwar03@gmail.com",
  github: "github.com/thestackdev",
  linkedin: "linkedin.com/in/shanmukeshwar",
  phone: "+91 7995235525",
  personal-site: "shanmukeshwar.dev",
  accent-color: "#0066cc",
  font: "New Computer Modern",
)

== Summary

Senior Software Development Engineer with 4+ years building distributed systems with Python and Rust. Designed 57 WASM plugins in Rust (Extism), multi-tenant platforms with hash-partitioned PostgreSQL, and real-time AI pipelines. Specialized in backend architecture, system design, and infrastructure at scale.

== Skills

- *Languages:* Rust, Python, TypeScript, SQL
- *Rust Ecosystem:* Tokio, WebAssembly, Extism, Cargo Workspaces
- *Backend & Databases:* FastAPI, PostgreSQL, Redis, Elasticsearch, Neo4j, Kafka
- *Cloud & DevOps:* AWS, Kubernetes, Terraform, Docker, GitHub Actions
- *Architecture:* System Design, Distributed Systems, Microservices

== Experience

#work(
  title: "Senior Software Development Engineer",
  company: "Arrowhead",
  dates: "Mar 2025 - Present",
  location: "Bangalore, India",
)
- Architecting conversational AI platform with 57 WASM plugins in Rust (Extism framework)
- Built 7 Rust CLI tools with Tokio async runtime for deployment automation and plugin management
- Designed multi-tenant API with hash-partitioned PostgreSQL and HMAC authentication with replay attack prevention
- Real-time voice pipeline with Deepgram STT, ElevenLabs TTS, multi-LLM orchestration (10+ providers)
- Multi-region AWS infrastructure with Kubernetes deployment

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
- Developed Shopify Builder Plugin with React drag-and-drop interface and bidirectional cross-iframe communication
- Implemented Kafka event processing and Redis caching for real-time analytics

#work(
  title: "Software Development Engineer Intern",
  company: "OpenCubicles Technologies",
  dates: "Jun 2021 - Aug 2022",
  location: "Hyderabad, India",
)
- Built offline-first React Native app for solar installations with WatermelonDB, facial recognition, and barcode scanning
- Developed oil industry CRM with integrated eSign and collaboration tools
- Created backend services with Django and Next.js with CI/CD pipelines

== Education

#edu(
  institution: "JNTUH, Hyderabad, India",
  degree: "Bachelor of Technology, Electronics and Communication Engineering",
  dates: "2018 - 2022",
)

== Certifications

- #link("https://www.credly.com/badges/ef599cbf-bd2b-4217-87d2-608ba9da1b52")[GitHub Foundations], GitHub (Mar 2025)
- #link("https://cdn.shanmukeshwar.dev/Microsoft_AI.pdf")[Microsoft AI], Microsoft (Jan 2021)
- #link("https://courses.cognitiveclass.ai/certificates/b9cb5c2a1225406696cd2dc01c1003a9")[IBM Cloud Essentials], IBM (May 2021)
- #link("https://cdn.shanmukeshwar.dev/STANFORD_IOT.pdf")[Stanford Internet of Things], Stanford (Jan 2021)

== Projects

#project(
  name: "Enterprise Conversational AI Platform",
  dates: "2025",
)
- Multi-tenant voice AI platform with HMAC authentication, hash-partitioned PostgreSQL, 57 WASM plugins in Rust (Extism), real-time voice pipeline (Deepgram + ElevenLabs), and multi-LLM orchestration across 10+ providers.

#project(
  name: "AroundMe - Location-Based Social Platform",
  dates: "2024",
)
- Founded and architected distributed backend with FastAPI, PostgreSQL, Redis cluster, Elasticsearch for geospatial queries, Neo4j for social graph, and ML-powered recommendations. Led team of 10. Scaled to 65K+ downloads.

#project(
  name: "Memli - AI-Powered Flashcard App",
  dates: "2023",
)
- React Native learning app with ML-generated mnemonics and YOLO computer vision to detect and explain textbook images. Built intelligent quiz system with personalized assessments and spaced repetition.

#project(
  name: "Rust CLI Tooling",
  dates: "2025",
)
- Cargo workspace with 7 CLI tools for deployment automation and plugin management. Features Tokio async runtime, Google OAuth2 with token persistence, builder-pattern HTTP client, and unified error handling.
