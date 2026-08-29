import type {
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import { cn } from "@/lib/utils";
const inputBase =
  "w-full rounded-xl border border-brand/25 bg-ink-raised/40 px-4 py-3 text-ink-fg placeholder:text-ink-fg-dim focus:outline-none focus:border-brand transition-colors duration-200";
function Label({ htmlFor, children }: { htmlFor: string; children: ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="text-ink-fg-secondary text-sm font-semibold">
      {children}
    </label>
  );
}
export function TextField({
  label,
  id,
  className,
  ...props
}: { label: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Label htmlFor={id!}>{label}</Label>
      <input id={id} className={inputBase} {...props} />
    </div>
  );
}
export function PhoneField({
  label,
  id,
  className,
  ...props
}: { label: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Label htmlFor={id!}>{label}</Label>
      <div className="flex">
        <select
          name={`${props.name}_code`}
          className="rounded-l-xl border border-brand/25 bg-ink-raised/40 px-3 py-3 text-ink-fg focus:outline-none focus:border-brand border-r-0 cursor-pointer transition-colors duration-200 text-sm"
          defaultValue="+91"
        >
          <option value="+91">🇮🇳 +91</option>
          <option value="+971">🇦🇪 +971</option>
          <option value="+1">🇺🇸 +1</option>
          <option value="+44">🇬🇧 +44</option>
          <option value="+61">🇦🇺 +61</option>
        </select>
        <input 
          id={id} 
          className="w-full rounded-r-xl border border-brand/25 bg-ink-raised/40 px-4 py-3 text-ink-fg placeholder:text-ink-fg-dim focus:outline-none focus:border-brand transition-colors duration-200" 
          {...props} 
        />
      </div>
    </div>
  );
}
export function TextareaField({
  label,
  id,
  className,
  ...props
}: { label: string } & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Label htmlFor={id!}>{label}</Label>
      <textarea id={id} className={cn(inputBase, "resize-none")} {...props} />
    </div>
  );
}
export function SelectField({
  label,
  id,
  className,
  children,
  ...props
}: { label: string; children: ReactNode } & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Label htmlFor={id!}>{label}</Label>
      <select id={id} className={cn(inputBase, "cursor-pointer")} {...props}>
        {children}
      </select>
    </div>
  );
}
export function CheckboxField({
  label,
  id,
  className,
  ...props
}: { label: ReactNode; id: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label htmlFor={id} className={cn("flex cursor-pointer items-start gap-3", className)}>
      <input
        id={id}
        type="checkbox"
        className="accent-brand mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded-md"
        {...props}
      />
      <span className="text-ink-fg-dim text-sm leading-relaxed">{label}</span>
    </label>
  );
}
