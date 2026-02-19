import dynamic from "next/dynamic";
import { Navigation } from "@/components/layout/navigation";
import { HeaderSection } from "@/components/sections/header-section";
import { IntroductionSection } from "@/components/sections/introduction-section";
import { CodeProfileSection } from "@/components/sections/code-profile-section";

// Lazy-load below-fold sections to reduce initial JS and main-thread work
const ExperienceSection = dynamic(
  () =>
    import("@/components/sections/experience-section").then((m) => ({
      default: m.ExperienceSection,
    })),
  { ssr: true },
);
const SkillsSection = dynamic(
  () =>
    import("@/components/sections/skills-section").then((m) => ({
      default: m.SkillsSection,
    })),
  { ssr: true },
);
const EducationSection = dynamic(
  () =>
    import("@/components/sections/education-section").then((m) => ({
      default: m.EducationSection,
    })),
  { ssr: true },
);
const HobbiesSection = dynamic(
  () =>
    import("@/components/sections/hobbies-section").then((m) => ({
      default: m.HobbiesSection,
    })),
  { ssr: true },
);
const ContactSection = dynamic(
  () =>
    import("@/components/sections/contact-section").then((m) => ({
      default: m.ContactSection,
    })),
  { ssr: true },
);

export default function Home() {
  return (
    <div className="w-full max-w-280 mx-auto min-h-screen bg-linear-to-br from-background via-background to-muted/20">
      <Navigation />

      <main id="main-content">
        <HeaderSection />
        <CodeProfileSection />
        <IntroductionSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <HobbiesSection />
        <ContactSection />
      </main>
    </div>
  );
}
