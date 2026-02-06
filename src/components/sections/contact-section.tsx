"use client";

import { Badge } from "@/components/common/badge";
import { motion } from "framer-motion";
import { AnimationLottie } from "@/components/common/animation-lottie-lazy";
import { MapPin, Send } from "lucide-react";
import { SectionHeader } from "@/components/common/section-header";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/common/social-icons";

export function ContactSection() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/DUYLANG1",
      icon: GitHubIcon,
      description: "View my projects",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/vu-duy-lang/",
      icon: LinkedInIcon,
      description: "Professional profile",
    },
    {
      name: "Email",
      url: "https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRpccpFVcKfsBmqQGcxNvVwSMsPdLfhHfpzfHpGzvvMxCccrMJBlWMdcvLSWSBrvmRQPrlq",
      icon: MailIcon,
      description: "Get in touch",
    },
  ];

  return (
    <section
      id="contact"
      className="py-12 md:py-20 lg:py-20 bg-linear-to-b from-background via-muted/30 to-background scroll-mt-32"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            title="Get In Touch"
            icon={Send}
            description="I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to work together!"
            className="lg:mb-20"
          />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {socialLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="h-full card-enhanced group bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
                    <div className="px-6 p-6 text-center space-y-4 relative z-10">
                      <div className="p-3 rounded-full bg-gradient-primary/20 w-fit mx-auto group-hover:glow-primary transition-all duration-300">
                        <IconComponent className="h-6 w-6 gradient-text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg group-hover:gradient-text-primary transition-all duration-300">
                          {link.name}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {link.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 justify-center">
          <Badge
            variant="outline"
            className="text-base px-6 py-3 bg-gradient-secondary/20 border-primary/30 hover:glow-secondary transition-all duration-300"
          >
            <MapPin className="h-4 w-4 mr-2 gradient-text-accent" />
            <span className="gradient-text-primary font-medium">Vietnam</span>
          </Badge>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-105 order-1 md:order-2"
          >
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRpccpFVcKfsBmqQGcxNvVwSMsPdLfhHfpzfHpGzvvMxCccrMJBlWMdcvLSWSBrvmRQPrlq"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Compose Email"
            >
              <AnimationLottie
                src="/assets/lottie/contact.json"
                className="mx-auto"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
