"use client";
import { useEffect, useRef } from "react";
import { animate, useInView, useMotionValue, useReducedMotion } from "framer-motion";
export function Counter({
  value,
  suffix = "",
  className,
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const reducedMotion = useReducedMotion();
  useEffect(() => {
    if (!inView) return;
    if (reducedMotion) {
      if (ref.current) ref.current.textContent = `${value}${suffix}`;
      return;
    }
    const controls = animate(motionValue, value, {
      duration: 1.4,
      ease: [0.25, 0, 0, 1],
      onUpdate(latest) {
        if (ref.current) ref.current.textContent = `${Math.round(latest)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, motionValue, reducedMotion, suffix, value]);
  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
