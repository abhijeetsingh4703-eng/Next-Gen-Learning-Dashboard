"use client";

import { motion, Variants } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { ProgressIndicator } from "./ProgressIndicator";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
};

type CourseTileProps = {
  title: string;
  progress: number;
  iconName: string;
};

export function CourseTile({ title, progress, iconName }: CourseTileProps) {
  const IconComponent = (LucideIcons as unknown as Record<string, React.ElementType>)[iconName] || LucideIcons.BookOpen;

  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-card p-6 border border-border/50 cursor-pointer min-h-[220px]"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
        />
      </div>

      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <IconComponent size={24} />
      </div>

      <div className="relative z-10 mt-6 flex-1">
        <h3 className="font-semibold text-foreground line-clamp-2">{title}</h3>
      </div>

      <div className="relative z-10">
        <ProgressIndicator progress={progress} />
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-3xl border border-primary/0 transition-colors duration-300 group-hover:border-primary/50" />
    </motion.article>
  );
}
