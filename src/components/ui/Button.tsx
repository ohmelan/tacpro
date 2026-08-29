"use client";
import { useState, type MouseEvent as ReactMouseEvent, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { pressTransition } from "@/lib/motion";
type Variant = "brand" | "outline" | "ghost";
const base =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-4 text-[15px] font-semibold tracking-tight";
const variantClasses: Record<Variant, string> = {
  brand: "bg-brand text-ink",
  outline: "border-[1.5px] border-ink text-ink bg-transparent",
  ghost: "border border-brand-line text-current bg-transparent",
};
const fillClasses: Record<Variant, string> = {
  brand: "bg-ink",
  outline: "bg-ink",
  ghost: "bg-brand-soft",
};
const textColorVariants: Record<Variant, { rest: string; hover: string }> = {
  brand: { rest: "#12130F", hover: "#D5AF54" },
  outline: { rest: "#12130F", hover: "#FAFAF7" },
  ghost: { rest: "currentColor", hover: "currentColor" },
};
function useMagnetic() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 });
  function onMouseMove(event: ReactMouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.25);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.25);
  }
  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }
  return { x: springX, y: springY, onMouseMove, onMouseLeave };
}
function Fill({ variant, hovered }: { variant: Variant; hovered: boolean }) {
  return (
    <motion.span
      aria-hidden
      className={cn("absolute inset-0 origin-left rounded-full", fillClasses[variant])}
      animate={{ scaleX: hovered ? 1 : 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}
function Label({
  variant,
  hovered,
  children,
}: {
  variant: Variant;
  hovered: boolean;
  children: ReactNode;
}) {
  const colors = textColorVariants[variant];
  return (
    <span
      className="relative z-10 transition-colors duration-150"
      style={{ color: hovered ? colors.hover : colors.rest }}
    >
      {children}
    </span>
  );
}
export function Button({
  variant = "brand",
  className,
  children,
  ...props
}: {
  variant?: Variant;
  className?: string;
  children: ReactNode;
} & HTMLMotionProps<"button">) {
  const magnetic = useMagnetic();
  const [hovered, setHovered] = useState(false);
  return (
    <motion.button
      className={cn(base, variantClasses[variant], className)}
      style={{ x: magnetic.x, y: magnetic.y }}
      onMouseMove={magnetic.onMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        magnetic.onMouseLeave();
        setHovered(false);
      }}
      whileTap={{ scale: 0.97 }}
      transition={pressTransition}
      {...props}
    >
      <Fill variant={variant} hovered={hovered} />
      <Label variant={variant} hovered={hovered}>
        {children}
      </Label>
    </motion.button>
  );
}
export function LinkButton({
  variant = "brand",
  className,
  children,
  ...props
}: {
  variant?: Variant;
  className?: string;
  children: ReactNode;
} & HTMLMotionProps<"a">) {
  const magnetic = useMagnetic();
  const [hovered, setHovered] = useState(false);
  return (
    <motion.a
      className={cn(base, variantClasses[variant], className)}
      style={{ x: magnetic.x, y: magnetic.y }}
      onMouseMove={magnetic.onMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        magnetic.onMouseLeave();
        setHovered(false);
      }}
      whileTap={{ scale: 0.97 }}
      transition={pressTransition}
      {...props}
    >
      <Fill variant={variant} hovered={hovered} />
      <Label variant={variant} hovered={hovered}>
        {children}
      </Label>
    </motion.a>
  );
}
