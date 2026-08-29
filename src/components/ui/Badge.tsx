import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "text-brand-deep inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase",
        className,
      )}
    >
      <span className="bg-brand h-2 w-2 rounded-full" aria-hidden />
      {children}
    </span>
  );
}
type Status = "success" | "attention" | "neutral";
const statusClasses: Record<Status, string> = {
  success: "bg-success-soft text-success",
  attention: "bg-attention-soft text-attention",
  neutral: "bg-brand-soft text-brand-deep",
};
export function Badge({
  children,
  status = "neutral",
  className,
}: {
  children: ReactNode;
  status?: Status;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase",
        statusClasses[status],
        className,
      )}
    >
      {children}
    </span>
  );
}
