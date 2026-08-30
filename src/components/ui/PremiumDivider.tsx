import { cn } from "@/lib/utils";

export function PremiumDivider({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-full h-px", className)}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-line to-transparent opacity-70" />
    </div>
  );
}
