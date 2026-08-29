export type Service = {
  slug: string;
  number: string;
  title: string;
  summary: string;
  intro: string;
  offerings: string[];
};
export const services: Service[] = [
  {
    slug: "business-registrations",
    number: "01",
    title: "Business & Company Registrations",
    summary:
      "End-to-end assistance for private limited, LLP, partnership, and proprietorship registrations.",
    intro:
      "Starting or restructuring a business means paperwork that has to be right the first time. We handle the registrations end to end, so you're trading legally from day one.",
    offerings: [
      "Private Limited Incorporation",
      "LLP Incorporation",
      "Partnership Registration",
      "Proprietorship Registration",
      "Digital Signature Certificate (DSC)",
    ],
  },
  {
    slug: "tax-gst",
    number: "02",
    title: "Income Tax & GST Services",
    summary:
      "Complete solutions for GST filing, registration, TDS/TCS, EPF filing, and appeal cases.",
    intro:
      "GST and income tax deadlines don't move for anyone. We keep your filings current, your registrations correct, and your appeals in capable hands — so a missed date never becomes a bigger problem.",
    offerings: [
      "Income Tax Returns (ITR Filing)",
      "TDS & TCS Filing",
      "Startup India Exemption Filing (Sec 80 IAC Filing)",
      "GST Registration",
      "GST Return Filing",
      "GST Refund Filing",
      "GST LUT Filing",
      "Appeal Cases & Notices",
      "EPF Filing",
    ],
  },
  {
    slug: "accounting-financial-management",
    number: "03",
    title: "Accounting & Financial Management",
    summary: "Comprehensive accounting and financial management for businesses and individuals.",
    intro:
      "Books that are current and accurate are the foundation everything else depends on — filings, audits, and decisions alike. We keep yours that way, year-round.",
    offerings: [
      "Accounting & Bookkeeping",
      "Financial Statements Preparation",
      "Budgeting & Cash Flow Management",
      "Financial Management",
      "Payroll Preparation",
    ],
  },
  {
    slug: "compliance-certifications",
    number: "04",
    title: "Registrations & Certifications",
    summary:
      "Fast, reliable service for FSSAI registration, ISO certification, and trademark registration.",
    intro:
      "Certifications open doors — to contracts, to markets, to trust. We manage the application and inspection process so the certificate lands without the back-and-forth.",
    offerings: [
      "Startup India Registration (DPIIT)",
      "Startup Kerala Registration (KSUM)",
      "MSME Registration (Udyam)",
      "FSSAI Registration",
      "Digital Signature Certificate (DSC)",
      "Import & Export Code (IEC)",
      "Trademark Registration",
      "ISO Certification",
      "KSWIFT Registration",
      "APEDA Registration",
      "Spice Board Registration",
      "AD Code & ICEGATE Registration",
    ],
  },
  {
    slug: "audit-assurance",
    number: "05",
    title: "Audit & Assurance",
    summary:
      "Professional company, individual, trust, and school audit with complete compliance support.",
    intro:
      "An audit should give you confidence, not anxiety. Our audits are thorough, documented, and delivered with enough lead time to act on what we find.",
    offerings: [
      "Statutory Audit (Company & Firm Audit)",
      "Internal Audit (Business or Non-profit organisation Audit)",
      "Trust & Society Audit",
      "Individual & Firm Audit",
      "Stock Audit",
      "Tax Audit",
    ],
  },
  {
    slug: "trust-ngo",
    number: "06",
    title: "Trust & NGO Services",
    summary:
      "Dedicated services for trust registration and ongoing compliance, including trust audits.",
    intro:
      "Trusts and NGOs carry their own compliance calendar — registration, renewals, and audits that differ from a standard business. We know the difference and file accordingly.",
    offerings: [
      "Trust Registration",
      "Society Registration",
      "Section 8 Company Registration",
      "12A & 80G Registration",
      "FCRA Registration & Compliance",
      "FEMA Compliance",
    ],
  },
  {
    slug: "compliances-support",
    number: "07",
    title: "Compliances & Support",
    summary:
      "Comprehensive compliance and support services including ROC, trademark, taxation, and import/export compliance.",
    intro:
      "Navigating the regulatory landscape requires constant vigilance. We offer end-to-end compliance and consultation services to keep your business operating smoothly and legally.",
    offerings: [
      "ROC Compliances (Corporate)",
      "Trademark Compliances",
      "Taxation Compliances",
      "Import & Export Compliances",
      "Business Support Services",
      "Consultation Services",
    ],
  },
];
