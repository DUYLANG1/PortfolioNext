"use client";
import Image from "next/image";

import { SectionHeader } from "@/components/common/section-header";
import { User } from "lucide-react";

export function IntroductionSection() {
  return (
    <section className="py-12 md:py-20 lg:py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24 items-center">
        <div className="flex-1 space-y-4 md:space-y-5 text-center md:text-left">
          <SectionHeader
            title="About Me"
            icon={User}
            align="responsive"
            className="mb-6 md:mb-8"
          />
          <div className="space-y-4 text-base md:text-lg leading-relaxed text-muted-foreground">
            <p>
              <span className="hidden sm:block">
                Crafting seamless digital experiences with the modern JavaScript
                ecosystem.
              </span>
              I specialize in building responsive frontends with{" "}
              <strong className="text-foreground">React</strong> &{" "}
              <strong className="text-foreground">Next.js</strong> and robust
              backend architectures using{" "}
              <strong className="text-foreground">NestJS</strong> & Cloud
              services (<strong className="text-foreground">AWS</strong>/
              <strong className="text-foreground">Firebase</strong>). I love
              exploring new technologies to deliver optimized,
              performance-driven solutions.
            </p>
          </div>
        </div>

        <div className="shrink-0">
          <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 group">
            <Image
              src="/assets/utilSvg/avatar.svg"
              alt="Avatar"
              fill
              className="object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
