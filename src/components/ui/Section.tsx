import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
type Register = "light" | "dark";
const registerClasses: Record<Register, string> = {
  light: "bg-canvas text-canvas-fg",
  dark: "bg-ink text-ink-fg",
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
