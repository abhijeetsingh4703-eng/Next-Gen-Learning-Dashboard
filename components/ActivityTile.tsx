"use client";

import { motion, Variants } from "framer-motion";

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

export function ActivityTile() {
  const days = [
    1, 0, 2, 3, 1, 0, 0, 2, 1, 3, 0, 0, 1, 2, 3, 2, 1, 0, 1, 3, 2, 1, 0, 0, 1, 2, 3, 3, 2, 1, 0, 1, 2, 3, 0, 1, 2, 3, 1, 0, 2, 1, 3, 2, 1, 0, 1, 2, 3
  ];

  const getColor = (level: number) => {
    switch (level) {
      case 1:
        return "bg-primary/30";
      case 2:
        return "bg-primary/60";
      case 3:
        return "bg-primary";
      default:
        return "bg-accent";
    }
  };

  return (
    <motion.section
      variants={itemVariants}
      className="col-span-1 flex flex-col rounded-3xl bg-card p-6 md:col-span-2 lg:col-span-3 border border-border/50"
    >
      <h3 className="mb-4 font-semibold text-foreground">Learning Activity</h3>
      <div className="flex-1 flex flex-col justify-center items-center py-4">
        <div className="grid grid-cols-7 gap-3">
          {days.map((level, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.3, zIndex: 10 }}
              transition={{ delay: i * 0.01 }}
              className={`h-8 w-8 md:h-10 md:w-10 rounded-md ${getColor(level)} cursor-pointer`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
