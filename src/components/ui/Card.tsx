"use client";
import type { MouseEvent as ReactMouseEvent, ReactNode } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
export function Card({ children, className }: { children: ReactNode; className?: string }) {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const spotlight = useMotionTemplate`radial-gradient(280px circle at calc(${mouseX} * 100%) calc(${mouseY} * 100%), var(--color-brand-soft), transparent 70%)`;
  function onMouseMove(event: ReactMouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    mouseX.set(px);
    mouseY.set(py);
    rotateY.set((px - 0.5) * 8);
    rotateX.set((py - 0.5) * -8);
  }
  function onMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }
  return (
    <motion.div
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={cn(
        "border-brand-line bg-canvas-raised group hover:border-brand relative h-full overflow-hidden rounded-3xl border transition-[border-color,box-shadow] duration-300 hover:shadow-[0_20px_50px_-15px_rgba(213,175,84,0.35)]",
        className,
      )}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: spotlight }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}
