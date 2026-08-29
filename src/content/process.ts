export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};
export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Consult",
    description: "We review your filings, structure, and deadlines before recommending anything.",
  },
  {
    number: "02",
    title: "Assess",
    description: "A specialist maps exactly what's owed, what's due, and what's at risk.",
  },
  {
    number: "03",
    title: "File",
    description:
      "We prepare and submit — GST, ROC, Audits — with a paper trail you can audit yourself.",
  },
  {
    number: "04",
    title: "Support",
    description: "Ongoing compliance, reminders, and a direct line when questions come up.",
  },
];
