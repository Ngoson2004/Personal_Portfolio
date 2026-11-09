import starbound from "@/assets/logos/starbound.png";
import csiro from "@/assets/logos/csiro.png";
import fpt from "@/assets/logos/fpt.png";
import unibuz from "@/assets/logos/unibuz.png";
import aetosky from "@/assets/logos/aetosky.png";
import type { ImageMetadata } from "astro";

export type Role = {
  title: string;
  org: string;
  url?: string;
  logo?: ImageMetadata;
  /** Show the logo on a white tile (for logos that need a light backdrop). */
  logoTile?: boolean;
  /** Show the logo on a white tile in dark mode only. */
  logoTileDark?: boolean;
  start: string;
  end: string;
  /** One line for the experience table. */
  summary: string;
  points: string[];
  stack?: string[];
};

// Newest first. Content mirrors the DSAI resume.
export const experience: Role[] = [
  {
    title: "Applied AI Scientist",
    org: "Starbound Space Solutions",
    summary: "AI-assisted requirements derivation from space mission briefs and ECSS standards.",
    logo: starbound,
    logoTileDark: true,
    start: "Jul 2026",
    end: "Present",
    points: [
      "Developed AI-assisted requirements derivation for space mission briefs and ECSS regulations and standards, capturing 98% of engineering implications and contributing to a team-wide 40% reduction in documentation time.",
      "Implemented ReqIF 1.2 exports and attribute-gap reports that turn extracted requirements into structured, traceable outputs for engineering review and exchange.",
      "Deployed on-premises LLM services and strengthened backend reliability, with CI/CD pipelines covering Docker-based verification and automated schema, round-trip and integration tests.",
    ],
    stack: ["TypeScript", "NestJS", "Prisma", "PostgreSQL", "Docker"],
  },
  {
    title: "Machine Learning Engineer",
    org: "CSIRO Manufacturing",
    summary: "Graph neural networks that predict pharmacokinetic properties for drug discovery.",
    url: "https://www.csiro.au",
    logo: csiro,
    logoTileDark: true,
    start: "Feb 2025",
    end: "Feb 2026",
    points: [
      "Developed and evaluated an AI application for drug discovery that predicts molecular pharmacokinetic properties to support faster, cheaper drug screening.",
      "Engineered Graph Neural Network representations and trained multi-task models on HPC with SLURM, placing Top 13 of 370+ global participants in an AI-for-drug-discovery challenge (macro-averaged RAE 0.588).",
      "Worked across AI, chemistry and bioengineering teams to assess practical applicability and report findings to stakeholders.",
    ],
    stack: ["PyTorch", "Chemprop", "RDKit", "SLURM"],
  },
  {
    title: "Multi-modal AI Engineer Intern",
    org: "FPT Software",
    summary: "Fine-tuned the BLIP multimodal model to read meters on a factory floor.",
    url: "https://fptsoftware.com",
    logo: fpt,
    logoTileDark: true,
    start: "Jul 2024",
    end: "Jan 2025",
    points: [
      "Fine-tuned the BLIP multimodal model for meter reading in a factory setting using labelled images and question-answer pairs.",
      "Reached 87% meter-reading accuracy on 500 held-out factory images, 35 percentage points above the pretrained BLIP baseline.",
    ],
    stack: ["PyTorch", "BLIP", "Hugging Face"],
  },
  {
    title: "Founding Full-stack Developer",
    org: "Unibuz",
    summary: "Shipped a microservice social platform connecting students across universities.",
    logo: unibuz,
    start: "Sept 2024",
    end: "Jan 2025",
    points: [
      "Shipped a microservice-based social platform connecting students across universities: groups, events, news feed, chat and marketplace.",
      "Built the interface in React, TailwindCSS and TypeScript, designed the MySQL database and developed REST APIs with Supabase.",
    ],
    stack: ["React", "TypeScript", "MySQL", "Supabase"],
  },
  {
    title: "Computer Vision Intern",
    org: "Aetosky",
    summary: "Mask R-CNN segmentation of satellite imagery for infrastructure planning.",
    url: "https://aetosky.com",
    logo: aetosky,
    logoTile: true,
    start: "Nov 2023",
    end: "Mar 2024",
    points: [
      "Labelled satellite imagery in QGIS and configured Mask R-CNN to segment buildings, roads, trees and pools for infrastructure planning.",
      "Improved model accuracy by 15% by tuning the ROI ratio to 0.5 and the RPN confidence threshold to 0.9.",
    ],
    stack: ["Mask R-CNN", "QGIS", "Python"],
  },
];
