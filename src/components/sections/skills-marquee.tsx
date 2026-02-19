"use client";

import Image from "next/image";
import { useRef, useState } from "react";

interface Skill {
  name: string;
  icon: string;
}

const SKILLS: Skill[] = [
  { name: "HTML", icon: "html.svg" },
  { name: "CSS", icon: "css.svg" },
  { name: "Javascript", icon: "javascript.svg" },
  { name: "Typescript", icon: "typescript.svg" },
  { name: "React", icon: "react.svg" },
  { name: "Nextjs", icon: "nextjs.svg" },
  { name: "Expressjs", icon: "expressjs.svg" },
  { name: "Nestjs", icon: "nestjs.svg" },
  { name: "SQL", icon: "mysql.svg" },
  { name: "NoSQL", icon: "mongoDB.svg" },
  { name: "Git", icon: "git.svg" },
  { name: "Docker", icon: "docker.svg" },
  { name: "Tailwind", icon: "tailwind.svg" },
  { name: "MaterialUI", icon: "mui.svg" },
  { name: "Antd", icon: "antd.svg" },
  { name: "AWS", icon: "aws.svg" },
  { name: "Firebase", icon: "firebase.svg" },
  { name: "Figma", icon: "figma.svg" },
  { name: "Jira", icon: "jira.svg" },
  { name: "Directus", icon: "directus.svg" },
];

const getSkillIcon = (iconFile: string) => `/assets/skillsSvg/${iconFile}`;

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="mx-3 md:mx-4 min-w-35 md:min-w-40 card-enhanced group border-none bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
      <div className="px-6 p-4 md:p-6 flex flex-col items-center gap-3 md:gap-4">
        <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center p-2 rounded-xl bg-background/50 group-hover:bg-background/80 transition-colors duration-300">
          <Image
            src={getSkillIcon(skill.icon)}
            alt={`${skill.name} logo`}
            fill
            className="object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 relative! w-full! h-full!"
            unoptimized
          />
        </div>
        <span className="text-xs md:text-sm font-bold tracking-wide group-hover:gradient-text-primary transition-all duration-300">
          {skill.name.replace(/JS$/, " JS")}
        </span>
      </div>
    </div>
  );
}

export function SkillsMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      ref={containerRef}
      className="mb-12 md:mb-16 overflow-hidden relative"
      role="region"
      aria-label="Technical skills"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Gradient edges */}
      <div className="absolute left-0 top-0 bottom-0 w-12 z-10 bg-linear-to-r from-muted/30 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 z-10 bg-linear-to-l from-muted/30 to-transparent pointer-events-none" />

      <div
        className="flex w-max"
        style={{
          animation: "marquee-scroll 30s linear infinite",
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {/* Render skills twice for seamless loop */}
        {SKILLS.map((skill, i) => (
          <SkillCard key={`a-${i}`} skill={skill} />
        ))}
        {SKILLS.map((skill, i) => (
          <SkillCard key={`b-${i}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}
