"use client";

import { motion } from "framer-motion";
import { AnimationLottie } from "../common/animation-lottie-lazy";
import Marquee from "react-fast-marquee";
import Image from "next/image";

import { SectionHeader } from "@/components/common/section-header";

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
  { name: "NoSQL", icon: "mongodb.svg" },
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

export function SkillsSection() {
  return (
    <section id="skills" className="py-12 md:pb-16 lg:pb-20 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <AnimationLottie
            src="/assets/lottie/skills.json"
            className="w-full max-w-xs md:max-w-xl mx-auto"
            width="10%"
            loop
          />
          <SectionHeader title="Skills" />
        </motion.div>

        <Marquee
          speed={100}
          gradient={true}
          gradientColor="hsl(var(--muted))"
          gradientWidth={50}
          pauseOnHover={true}
          className="mb-12 md:mb-16"
        >
          {SKILLS.map((skill, index) => (
            <div
              key={index}
              className="mx-3 md:mx-4 min-w-35 md:min-w-40 card-enhanced group border-none bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm"
            >
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
          ))}
        </Marquee>
      </div>
    </section>
  );
}
