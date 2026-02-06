"use client";
import { motion } from "framer-motion";
import { education } from "@/lib/data";
import { GlowCard } from "@/components/common/glow-card";
import { GraduationCap } from "lucide-react";
import { AnimationLottie } from "@/components/common/animation-lottie-lazy";

import { SectionHeader } from "@/components/common/section-header";

export function EducationSection() {
  return (
    <section className="py-12 md:py-20 lg:py-20 bg-muted/30" id="education">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <SectionHeader
          title="Education"
          icon={GraduationCap}
          className="max-w-3xl mx-auto"
        />
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        <div className="order-1 md:order-1 flex justify-center">
          <AnimationLottie
            src={"/assets/lottie/education.json"}
            className="w-full max-w-sm md:max-w-md lg:max-w-lg"
            width="63%"
          />
        </div>
        <div className="order-2 md:order-2">
          <div className="flex flex-col gap-4 md:gap-6">
            {education.map((education, index) => (
              <GlowCard
                key={education.id}
                className="p-5 md:p-6 relative overflow-hidden"
              >
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <p className="text-xs md:text-sm gradient-text-primary font-semibold mb-2">
                    {education.period}
                  </p>
                  <h3 className="text-base md:text-lg font-semibold leading-snug mb-1 group-hover:gradient-text-primary transition-all duration-300">
                    {education.degree}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    {education.school}
                  </p>
                  {education.focus && (
                    <p className="text-xs text-muted-foreground/80">
                      <span className="gradient-text-accent font-medium">
                        Focus:
                      </span>{" "}
                      {education.focus}
                    </p>
                  )}
                </motion.div>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
