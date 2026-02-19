import { cn } from "@/lib/utils";
import React from "react";

interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export const GlowCard = React.forwardRef<HTMLDivElement, GlowCardProps>(
  ({ className, hover = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative rounded-xl card-enhanced group overflow-hidden",
          "before:absolute before:inset-0 before:bg-linear-to-r before:from-primary/20 before:via-accent/10 before:to-secondary/20 before:opacity-0 group-hover:before:opacity-100 before:transition-all before:duration-500 before:pointer-events-none",
          "after:absolute after:inset-0 after:bg-linear-to-br after:from-transparent after:via-primary/5 after:to-transparent after:opacity-0 group-hover:after:opacity-100 after:transition-all after:duration-300 after:pointer-events-none",
          hover &&
            "transition-[transform] duration-300 ease-out hover:scale-[1.02] hover:-translate-y-1",
          className,
        )}
        {...props}
      />
    );
  },
);
GlowCard.displayName = "GlowCard";
