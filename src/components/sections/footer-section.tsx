import { AnimateIn } from "../common/animate-in";

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="py-12 px-4 border-t border-primary/20 bg-linear-to-r from-muted/30 via-background to-muted/30"
    >
      <div className="max-w-4xl mx-auto text-center">
        <AnimateIn>
          <div className="mb-6">
            <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full glow-primary mb-4" />
            <p className="text-muted-foreground mb-2">
              &copy; {currentYear}{" "}
              <span className="gradient-text-primary font-semibold">
                DUYLANG
              </span>
            </p>
            <p className="text-sm text-muted-foreground/80">
              Built with{" "}
              <span className="gradient-text-secondary">Next.js</span>,{" "}
              <span className="gradient-text-accent">React</span>, and{" "}
              <span className="gradient-text-primary">Tailwind CSS</span>
            </p>
          </div>
        </AnimateIn>
        <AnimateIn delay={200} animation="fade-in">
          <div className="text-xs text-muted-foreground/60">
            Crafted with passion for beautiful, accessible web experiences
          </div>
        </AnimateIn>
      </div>
    </footer>
  );
}
