"use client";
import { projects } from "@/lib/data";
import { GlowCard } from "@/components/common/glow-card";
import { ExternalLink, X } from "lucide-react";
import { Badge } from "@/components/common/badge";
import { Navigation } from "@/components/layout/navigation";
import { ProjectsHeader } from "@/components/projects/projects-header";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";
import { GitHubIcon } from "@/components/common/social-icons";

export function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState<{
    title: string;
    message: string;
  } | null>(null);

  const handleDemoClick = (project: (typeof projects)[0]) => {
    if (project.title === "Portfolio (This Site)") {
      setSelectedProject({
        title: project.title,
        message: "You currently see this here! 🎉",
      });
    } else if (project.title === "My Local Swapping Skills") {
      setSelectedProject({
        title: project.title,
        message: "Project will be available soon! 🚀",
      });
    } else {
      window.open(project.demo, "_blank");
    }
  };

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.05),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(120,119,198,0.02)_50%,transparent_100%)] pointer-events-none" />

      <Navigation />
      <main className="relative pt-32 pb-24 px-4" id="main-content">
        <div className="max-w-6xl mx-auto">
          <ProjectsHeader
            title="Some Projects"
            description="A curated selection of things I've built, experimented with, and shipped. Each project represents a journey of learning and creativity."
            lottieIcon="/assets/lottie/projects.json"
            stats={{
              count: projects.length,
              label: "Projects",
              dateRange: "2024 - Present",
            }}
          />
          <div
            className={cn(
              "grid gap-8",
              projects.length === 1
                ? "grid-cols-1 max-w-xl mx-auto"
                : projects.length === 2
                  ? "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"
                  : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
            )}
          >
            {projects.map((project, index) => (
              <div
                key={`project-${index}`}
                className="group animate-base animate-fade-up-active"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <GlowCard className="p-0 overflow-hidden h-full flex flex-col bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-300">
                  {project.image && (
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-linear-to-r from-black/60 via-transparent to-transparent z-10" />
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        unoptimized
                      />
                      <div className="absolute top-4 left-4 z-20">
                        <Badge
                          variant="secondary"
                          className="bg-background/90 backdrop-blur-sm border-border/50 shadow-lg"
                        >
                          #{project.id}
                        </Badge>
                      </div>
                    </div>
                  )}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <h2 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h2>
                    </div>

                    <p className="text-muted-foreground flex-1 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    {project.tags && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex gap-3 mt-auto relative z-10">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                          <GitHubIcon className="h-4 w-4" />
                          <span>Code</span>
                        </a>
                      )}
                      {project.demo && (
                        <button
                          onClick={() => handleDemoClick(project)}
                          className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border bg-background/50 backdrop-blur-sm text-sm font-medium hover:bg-muted/80 hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span>Demo</span>
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="h-1 bg-linear-to-r from-primary/50 via-primary to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </GlowCard>
              </div>
            ))}
          </div>

          {/* My Github Repository Link */}
          <div
            className="mt-16 text-center animate-base animate-fade-up-active"
            style={{ transitionDelay: `${projects.length * 100 + 100}ms` }}
          >
            <a
              href="https://github.com/DUYLANG1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-lg font-medium text-muted-foreground hover:text-primary transition-all duration-300 group"
            >
              <GitHubIcon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="relative">
                My Github Repository
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-primary to-primary/50 group-hover:w-full transition-all duration-300" />
              </span>
            </a>
          </div>
        </div>
      </main>

      {selectedProject && (
        <ProjectDialog
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

function ProjectDialog({
  project,
  onClose,
}: {
  project: { title: string; message: string };
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-dialog-title"
    >
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-base animate-fade-in-active"
      />
      <div className="relative z-50 w-full max-w-lg p-6 bg-background border rounded-xl shadow-xl mx-4 animate-base animate-scale-in-active">
        <button
          ref={closeRef}
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>
        <h2 id="project-dialog-title" className="text-lg font-semibold mb-2">
          {project.title}
        </h2>
        <p className="text-muted-foreground">{project.message}</p>
      </div>
    </div>
  );
}
