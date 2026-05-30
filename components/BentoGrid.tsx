"use client";

import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export function BentoGrid({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="flex-1 overflow-y-auto p-4 md:p-6"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {children}
        </div>
      </div>
    </motion.main>
  );
}
