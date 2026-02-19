import { Metadata } from "next";
import { ProjectsGrid } from "@/components/projects/projects-grid";

export const metadata: Metadata = {
  title: "Projects — DUYLANG Portfolio",
  description:
    "A curated selection of projects built by DUYLANG — Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies.",
  openGraph: {
    title: "Projects — DUYLANG Portfolio",
    description:
      "A curated selection of projects built by DUYLANG — Full Stack Developer.",
  },
};

export default function ProjectsPage() {
  return <ProjectsGrid />;
}
