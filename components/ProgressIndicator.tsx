"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ProgressIndicator({ progress }: { progress: number }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setValue(progress);
    }, 100);
    return () => clearTimeout(timeout);
  }, [progress]);

  return (
    <div className="mt-4 flex flex-col gap-2">
      <div className="flex justify-between text-xs font-medium text-gray-400">
        <span>Progress</span>
        <span>{value}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-border">
        <motion.div
          className="h-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
