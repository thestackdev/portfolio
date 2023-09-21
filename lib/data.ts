import corpcommentImg from "@/public/discord.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
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
    title: "Bachelor of Technology Graduation",
    location: "Telanagana, India",
    description:
      "Graduated with a B.Tech degree in Electronics and Communication Engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2022",
  },
  {
    title: "Full-Stack Developer Intern",
    location: "Opencubicles, India",
    description:
      "Completed a one-year Fullstack Developer Internship at OpenCubicles Technologies. Collaborated with experienced developers, contributing to real-world projects and refining my skills.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Opencubicles, India",
    description:
      "Transitioned to a full-time role as a Fullstack Developer at OpenCubicles Technologies India. Continuing to apply my expertise and passion for development to create innovative solutions and make a meaningful impact within the company.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Discord Clone",
    description:
      "A recreation of the popular chat and voice platform for seamless real-time communication.",
    tags: [
      "Next.js",
      "Postrgesql",
      "Tailwind",
      "prisma",
      "Typescript",
      "socket.io",
    ],
    imageUrl: corpcommentImg,
  },
] as const;

export const skillsData = [
  "React",
  "TypeScript",
  "Git",
  "Tailwind",
  "DevOps",
  "Web development",
  "Database Administration",
  "Data Structures",
  "Microservices",
  "Linux Administration",
  "Cloud computing",
] as const;
