export type Stat = {
  value: number;
  suffix: string;
  label: string;
};
export const stats: Stat[] = [
  { value: 7, suffix: "+", label: "Years in practice" },
  { value: 5000, suffix: "+", label: "Filings completed" },
  { value: 99, suffix: "%", label: "On-time compliance rate" },
  { value: 48, suffix: "", label: "Service lines" },
];
