import type { Transition, Variants } from "framer-motion";
export const revealTransition: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
};
export const pressTransition: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 25,
};
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: revealTransition },
};
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};
export const inViewProps = {
  initial: "hidden" as const,
  whileInView: "visible" as const,
  viewport: { once: true, margin: "-80px" },
};
