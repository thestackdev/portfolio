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
      "Architecting conversational AI platform with 57 WASM plugins in Rust (Extism), 7 Rust CLI tools with Tokio, real-time voice processing, multi-LLM orchestration (10+ providers), and multi-region AWS infrastructure with Kubernetes.",
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
    title: "Enterprise Conversational AI Platform",
    description:
      "Multi-tenant voice AI platform with HMAC authentication, hash-partitioned PostgreSQL, 57 WASM plugins in Rust (Extism), real-time voice pipeline (Deepgram + ElevenLabs), and multi-LLM orchestration across 10+ providers.",
    tags: [
      "Python",
      "Rust",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Kubernetes",
      "System Design",
    ],
  },
  {
    title: "AroundMe - Location-Based Social Platform",
    description:
      "Founded and architected distributed backend with FastAPI, PostgreSQL, Redis cluster (master + 3 slaves), Elasticsearch for geospatial queries, Neo4j for social graph, and ML-powered recommendations. Led team of 10. Scaled to 65K+ downloads.",
    tags: [
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Elasticsearch",
      "Neo4j",
      "Kafka",
      "Kubernetes",
    ],
  },
  {
    title: "Memli - AI-Powered Flashcard App",
    description:
      "React Native learning app with ML-generated mnemonics and YOLO computer vision to detect and explain textbook images. Built intelligent quiz system with personalized assessments and spaced repetition.",
    tags: [
      "React Native",
      "YOLO",
      "Machine Learning",
      "Computer Vision",
      "Mobile",
    ],
  },
  {
    title: "Rust CLI Tooling",
    description:
      "Cargo workspace with 7 CLI tools for deployment automation and plugin management. Features Tokio async runtime, Google OAuth2 with token persistence, builder-pattern HTTP client, and unified error handling across the workspace.",
    tags: ["Rust", "Tokio", "OAuth2", "CLI", "Async", "Cargo Workspace"],
  },
] as const;

export const skillsData = {
  Languages: ["Rust", "Python", "TypeScript"],
  "Rust Ecosystem": ["Tokio", "WebAssembly", "Extism", "Cargo"],
  Backend: ["FastAPI", "SQLAlchemy", "Temporal"],
  Databases: ["PostgreSQL", "Redis", "Elasticsearch", "Neo4j"],
  Infrastructure: ["AWS", "Kubernetes", "Terraform", "Docker"],
  Architecture: ["System Design", "Distributed Systems", "Microservices", "Bitemporality"],
} as const;
