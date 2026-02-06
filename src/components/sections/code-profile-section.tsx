"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const codeLines = [
  { node: 1, code: "const", cls: "text-blue-400" },
  { node: 1, code: " me", cls: "text-pink-400" },
  { node: 1, code: " = {" },
  { node: 2, code: "  name:" },
  { node: 2, code: ' "DUYLANG",', cls: "text-yellow-500" },
  { node: 3, code: "  role:" },
  { node: 3, code: ' "Web Developer",', cls: "text-yellow-500" },
  { node: 4, code: "  skills:" },
  { node: 4, code: " [", cls: "text-pink-200" },
  {
    node: 5,
    code: '    "React", "TypeScript", "Node.js",',
    cls: "text-yellow-500",
  },
  {
    node: 6,
    code: '    "Next.js", "Express", "NestJS",',
    cls: "text-yellow-500",
  },
  { node: 7, code: '    "SQL", "NoSQL", "AWS"', cls: "text-yellow-500" },
  { node: 8, code: "  ],", cls: "text-pink-200" },
  { node: 9, code: "  hardWorker:" },
  { node: 9, code: " true,", cls: "text-red-500" },
  { node: 10, code: "  quickLearner:" },
  { node: 10, code: " true,", cls: "text-red-500" },
  { node: 11, code: "  problemSolver:" },
  { node: 11, code: " true,", cls: "text-red-500" },
  { node: 12, code: "  hireable:", cls: "text-green-700" },
  { node: 12, code: " function() {" },
  {
    node: 13,
    code: "    // Reach out via email or LinkedIn",
    cls: "text-muted-foreground",
  },
  { node: 14, code: "    return", cls: "text-blue-100" },
  { node: 14, code: " true;", cls: "text-red-500" },
  { node: 15, code: "  }" },
  { node: 16, code: "};" },
];

export function CodeProfileSection() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <section className="hidden md:block py-12 md:py-20 lg:py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-3xl mx-auto rounded-xl border bg-background/60 backdrop-blur-sm shadow-lg p-6 md:p-8 font-mono text-sm overflow-x-auto"
        >
          <div className="absolute inset-0 pointer-events-none bg-linear-to-br from-primary/5 via-transparent to-primary/5 rounded-xl" />
          <div className="flex items-center mb-4 gap-2">
            <div className="flex gap-1.5">
              <span className="size-3 rounded-full bg-red-500" />
              <span className="size-3 rounded-full bg-yellow-500" />
              <span className="size-3 rounded-full bg-green-500" />
            </div>
            <span className="text-xs text-muted-foreground">portfolio.ts</span>
          </div>
          <pre className="m-0 leading-6 relative z-10">
            {codeLines.map((line, index) => (
              <div key={index} className="code-line flex">
                <span className="w-8 pr-3 text-right select-none text-muted-foreground/60">
                  {line.node}
                </span>
                <span className={line.cls}>{line.code}</span>
                {index === codeLines.length - 1 && (
                  <span className="text-primary font-semibold animate-pulse ml-0.5">
                    |
                  </span>
                )}
                {index < codeLines.length - 1 &&
                  codeLines[index + 1].node !== line.node && <span />}
              </div>
            ))}
          </pre>
        </motion.div>
      </div>
    </section>
  );
}
