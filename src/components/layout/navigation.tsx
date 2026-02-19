"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

import { Moon, Sun, Loader2 } from "lucide-react";
import Link from "next/link";

const SECTIONS = [
  "hero",
  "experience",
  "skills",
  "education",
  "contact",
] as const;
type SectionId = (typeof SECTIONS)[number];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>("hero");
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    document.cookie = `theme=${newTheme ? "dark" : "light"};path=/;max-age=31536000;SameSite=Lax`;
  };

  useEffect(() => {
    setIsNavigating(false);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") return;

    const observers: IntersectionObserver[] = [];

    SECTIONS.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(sectionId);
            }
          });
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [pathname]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (href: "/" | "/projects") => {
    if (pathname !== href) {
      setIsNavigating(true);
      setIsMobileMenuOpen(false);
      router.push(href);
      setTimeout(() => setIsNavigating(false), 500);
    }
  };

  const scrollToSection = (sectionId: SectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-white/10 shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <Link
              href="/"
              onClick={(e) => {
                if (pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              <div className="font-bold text-2xl cursor-pointer px-2 py-1 flex items-center gradient-text-primary tracking-tight hover:scale-105 transition-transform duration-200">
                DUYLANG
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-1 bg-background/50 p-1 rounded-xl border border-white/5 backdrop-blur-sm">
              <button
                onClick={() => handleNavigation("/")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  pathname === "/"
                    ? "gradient-text-primary font-bold bg-white/10 shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                } ${isNavigating ? "opacity-50" : ""}`}
                disabled={isNavigating}
              >
                Home
                {isNavigating && pathname !== "/" && (
                  <Loader2 className="h-3 w-3 animate-spin" />
                )}
              </button>
              <button
                onClick={() => handleNavigation("/projects")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  pathname === "/projects"
                    ? "gradient-text-primary font-bold bg-white/10 shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                } ${isNavigating ? "opacity-50" : ""}`}
                disabled={isNavigating}
              >
                Projects
                {isNavigating && pathname !== "/projects" && (
                  <Loader2 className="h-3 w-3 animate-spin" />
                )}
              </button>
            </div>

            {pathname === "/" && (
              <div className="hidden lg:flex gap-0.5 bg-background/30 p-1 rounded-xl border border-white/5 backdrop-blur-sm">
                {(
                  ["experience", "skills", "education", "contact"] as const
                ).map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`relative px-3 py-1.5 rounded-lg text-sm transition-all duration-300 capitalize ${
                      activeSection === section
                        ? "text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {activeSection === section && (
                      <span className="absolute inset-0 bg-gradient-primary/20 rounded-lg transition-all duration-300" />
                    )}
                    <span className="relative z-10">{section}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl hover:bg-white/10 hover:glow-primary transition-all duration-300 border border-transparent hover:border-white/10 group"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-5 w-5 gradient-text-accent group-hover:rotate-90 transition-transform duration-500" />
              ) : (
                <Moon className="h-5 w-5 gradient-text-primary group-hover:-rotate-12 transition-transform duration-500" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2.5 rounded-xl hover:bg-white/10 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-foreground rounded-full transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-foreground rounded-full transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-foreground rounded-full transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="py-4 space-y-2 bg-background/95 backdrop-blur-xl rounded-2xl border border-white/10 mt-2 p-4 shadow-xl">
            <button
              onClick={() => handleNavigation("/")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                pathname === "/"
                  ? "bg-gradient-primary/10 gradient-text-primary font-bold"
                  : "text-muted-foreground hover:bg-white/5"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation("/projects")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                pathname === "/projects"
                  ? "bg-gradient-primary/10 gradient-text-primary font-bold"
                  : "text-muted-foreground hover:bg-white/5"
              }`}
            >
              Projects
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
