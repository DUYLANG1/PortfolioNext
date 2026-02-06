export interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
  current?: boolean;
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  github?: string;
  demo?: string;
  image?: string;
  tags?: string[];
}

export interface EducationItem {
  id: number;
  school: string;
  degree: string;
  period: string;
  focus?: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "DNSE Securities JSC",
    period: "August 2025 - February 2026",
    // current: true,
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "FPT Software",
    period: "December 2023 - June 2025",
  },
];

export const projects: ProjectItem[] = [
  {
    id: 1,
    title: "My Local Swapping Skills",
    description: "A platform for people to swap skills with each other.",
    github: "https://github.com/DUYLANG1/LSS-FRONTEND",
    demo: "#",
    image: "/assets/skillsSvg/nextjs.svg",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: 2,
    title: "Portfolio (This Site)",
    description:
      "Modern portfolio built with Next.js App Router, Tailwind & shadcn style components.",
    github: "https://github.com/DUYLANG1/portfolioNext",
    demo: "#",
    image: "/assets/skillsSvg/react.svg",
    tags: ["Next.js", "Framer Motion", "Lottie"],
  },
];

export const education: EducationItem[] = [
  {
    id: 1,
    school: "Self Learning & Certifications",
    degree: "Online Courses / Workshops (Udemy, Coursera, etc.)",
    period: "Ongoing",
    focus: "Advanced React, Distributed Systems, Cloud Architecture",
  },
  {
    id: 2,
    school: "National Economics University - Vietnam",
    degree: "Computer Science",
    period: "2020 - 2024",
    focus: "Software Engineering, Computer Theory",
  },
];
