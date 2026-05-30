"use client";

import { motion, Variants } from "framer-motion";
import { Flame, Zap, Trophy } from "lucide-react";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

export function HeroTile() {
  return (
    <motion.section
      variants={itemVariants}
      className="relative col-span-1 md:col-span-2 lg:col-span-3 overflow-hidden rounded-3xl p-8 min-h-[200px] flex flex-col justify-between"
      style={{
        background: "linear-gradient(135deg, #0f0f1a 0%, #1a0a2e 50%, #0d1117 100%)",
        border: "1px solid rgba(139,92,246,0.2)",
      }}
    >
      <div className="pointer-events-none absolute -top-16 -left-16 h-64 w-64 rounded-full bg-violet-600/20 blur-[80px]" />
      <div className="pointer-events-none absolute -bottom-16 right-32 h-48 w-48 rounded-full bg-purple-500/15 blur-[60px]" />
      <div className="pointer-events-none absolute top-4 right-4 h-32 w-32 rounded-full bg-indigo-500/10 blur-[40px]" />

      <div className="relative z-10 flex items-start justify-between flex-wrap gap-4">
        <div>
          <p className="text-sm font-medium text-violet-400 mb-1 tracking-widest uppercase">Student Dashboard</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Welcome back,{" "}
            <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">
              Abhijeet
            </span>{" "}
            👋
          </h1>
          <p className="mt-2 text-gray-400 text-base">
            You&apos;re on a roll! Keep pushing your limits today.
          </p>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex items-center gap-3 rounded-2xl px-5 py-3 cursor-default"
            style={{ background: "rgba(251,146,60,0.1)", border: "1px solid rgba(251,146,60,0.2)" }}
          >
            <Flame size={22} className="text-orange-400" />
            <div>
              <div className="text-xl font-bold text-white">14</div>
              <div className="text-xs text-orange-400">Day Streak</div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex items-center gap-3 rounded-2xl px-5 py-3 cursor-default"
            style={{ background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.2)" }}
          >
            <Zap size={22} className="text-violet-400" />
            <div>
              <div className="text-xl font-bold text-white">4</div>
              <div className="text-xs text-violet-400">Active Courses</div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex items-center gap-3 rounded-2xl px-5 py-3 cursor-default"
            style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)" }}
          >
            <Trophy size={22} className="text-green-400" />
            <div>
              <div className="text-xl font-bold text-white">3</div>
              <div className="text-xs text-green-400">Completed</div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
