import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaServer } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

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
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor of Technology",
    location: "Telangana, India",
    description:
      "Graduated with a B.Tech degree in Electronics and Communication Engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2022",
  },
  {
    title: "Full-Stack Developer",
    location: "OpenCubicles Technologies",
    description:
      "Developed a Shopify upsell/downsell plugin with a React-based drag-and-drop Builder to optimize post-checkout recommendations. Built web applications with React, Node.js, and cloud technologies.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2021 - May 2024",
  },
  {
    title: "Head of Technology",
    location: "AroundMe",
    description:
      "Led development of AroundMe app tech stack using React Native and FastAPI. Architected distributed system with PostgreSQL, Redis cluster, Elasticsearch, Neo4j, and ML pipelines. Scaled to 65K+ downloads across Play Store and App Store.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2024 - Mar 2025",
  },
  {
    title: "Senior Software Development Engineer",
    location: "Arrowhead",
    description:
      "Architecting conversational AI platform with real-time voice processing, multi-LLM orchestration (10+ providers), WASM plugin system in Rust, and multi-region AWS infrastructure with Kubernetes.",
    icon: React.createElement(FaServer),
    date: "Mar 2025 - Present",
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
      "Distributed backend with FastAPI, PostgreSQL, Redis cluster (master + 3 slaves), Elasticsearch for geospatial queries, Neo4j for social graph, and ML-powered recommendations. Kubernetes deployment with GitOps. 65K+ downloads.",
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
    title: "Rust CLI Tooling",
    description:
      "Cargo workspace with 7 CLI tools for deployment automation and plugin management. Features Tokio async runtime, Google OAuth2 with token persistence, builder-pattern HTTP client, and unified error handling across the workspace.",
    tags: ["Rust", "Tokio", "OAuth2", "CLI", "Async", "Cargo Workspace"],
  },
] as const;

export const skillsData = [
  "Rust",
  "WebAssembly (WASM)",
  "Tokio",
  "Extism",
  "System Design",
  "Distributed Systems",
  "Microservices",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "Redis",
  "Kafka",
  "Elasticsearch",
  "AWS",
  "Kubernetes",
  "Terraform",
  "HMAC Authentication",
  "JWT",
] as const;
