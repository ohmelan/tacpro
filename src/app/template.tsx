"use client";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0, 0, 1] }}
    >
      {children}
    </motion.div>
  );
}
