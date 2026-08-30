import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
type Register = "light" | "dark" | "brand";
const registerClasses: Record<Register, string> = {
  light: "bg-canvas text-canvas-fg",
  dark: "bg-ink text-ink-fg",
  brand: "bg-brand-deep text-white",
};
export function Section({
  children,
  register = "light",
  className,
  id,
}: {
  children: ReactNode;
  register?: Register;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn("py-16 sm:py-24 lg:py-32", registerClasses[register], className)}
    >
      {children}
    </section>
  );
}
