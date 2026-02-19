import { BookOpen, Dumbbell, Globe2, Heart } from "lucide-react";
import { AnimationLottie } from "../common/animation-lottie-lazy";
import { AnimateIn } from "../common/animate-in";

import { SectionHeader } from "@/components/common/section-header";

const hobbies = [
  {
    icon: BookOpen,
    title: "Reading Books",
    desc: "Exploring technology, psychology & personal growth titles.",
  },
  {
    icon: Dumbbell,
    title: "Exercising",
    desc: "Staying active to keep mind sharp and energy high.",
  },
  {
    icon: Globe2,
    title: "Travelling",
    desc: "Discovering culture, food and perspectives from new places.",
  },
];

export function HobbiesSection() {
  return (
    <section id="hobbies" className="py-12 md:py-20 lg:py-20">
      <AnimateIn>
        <SectionHeader
          title="Hobbies & Interests"
          icon={Heart}
          description="Apart from coding, some other activities that I love to do!"
        />
      </AnimateIn>
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row gap-8 md:gap-12">
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-4xl flex-1">
          {hobbies.map((hobby, index) => (
            <AnimateIn key={hobby.title} delay={index * 100}>
              <div
                className={`p-5 md:p-6 rounded-2xl border bg-background hover:shadow-lg transition-all duration-500 min-h-52 md:h-64 group hover:-rotate-1 hover:bg-primary/5 hover:border-primary/30 ${
                  index === 0
                    ? "lg:mt-0"
                    : index === 1
                      ? "lg:mt-12"
                      : "lg:mt-24"
                }`}
              >
                <div className="flex flex-col gap-3 md:gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:rotate-12">
                    <hobby.icon className="h-5 w-5 md:h-6 md:w-6 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-semibold text-base md:text-lg group-hover:text-primary transition-colors duration-300">
                    {hobby.title}
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {hobby.desc}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
        <div className="flex justify-center items-center shrink-0">
          <AnimationLottie
            src="/assets/lottie/hobbies.json"
            className="w-full max-w-xs md:max-w-sm lg:max-w-md"
            width="60%"
            loop
          />
        </div>
      </div>
    </section>
  );
}
