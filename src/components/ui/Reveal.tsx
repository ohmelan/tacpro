"use client";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp, inViewProps, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";
export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={fadeUp} {...inViewProps}>
      {children}
    </motion.div>
  );
}
export function RevealGroup({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={cn(className)} variants={staggerContainer} {...inViewProps}>
      {children}
    </motion.div>
  );
}
