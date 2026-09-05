export type OfferingItem = string | {
  name: string;
  price?: string;
  priceDetail?: string;
  features?: string[];
  notes?: string[];
};

export type PackageItem = {
  badge: string;
  title: string;
  subtitle: string;
  bestFor: string;
  price: string;
  period: string;
  features: string[];
};

export type Service = {
  slug: string;
  number: string;
  title: string;
  summary: string;
  intro: string;
  offerings: OfferingItem[];
  packages?: PackageItem[];
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
      {
        name: "Private Limited Registration",
        price: "₹12,999",
        priceDetail: "2 Partners",
        features: [
          "MOA & AOA",
          "GST Registration",
          "PAN & TAN",
          "Digital Signature Certificate (DSC)",
          "Director Identification Number (DIN)",
          "Incorporation Certificate",
          "Delivery Time: 8 to 20 working days"
        ],
        notes: [
          "GST Registration will be complimentary only if upcoming return filing is with us."
        ]
      },
      {
        name: "LLP Registration",
        price: "₹9,999",
        priceDetail: "2 Fresh Partners",
        features: [
          "Stamp paper of ₹1,000 included",
          "GST Registration",
          "Deed Creation",
          "PAN & TAN",
          "Digital Signature Certificate (DSC)",
          "Director Identification Number (DIN)",
          "Incorporation Certificate",
          "Delivery Time: 8 to 15 working days"
        ],
        notes: [
          "GST Registration is complimentary only if upcoming three return filings are with us."
        ]
      },
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
      {
        name: "GST Registration",
        price: "₹999",
        priceDetail: "Starting price"
      },
      {
        name: "GST Return Filing",
        packages: [
          {
            badge: "GST PACKAGE 1",
            title: "Package 1",
            subtitle: "Basic Returns",
            bestFor: "Small volume & NIL filers",
            price: "₹500",
            period: "/ month",
            features: [
              "B2C Sales upto 1 Lakh",
              "OR",
              "NIL Filing Return",
              "OR",
              "B2B Sales upto 3 Bills"
            ]
          },
          {
            badge: "GST PACKAGE 2",
            title: "Package 2",
            subtitle: "Moderate Returns",
            bestFor: "Growing retail & small B2B",
            price: "₹1,000",
            period: "/ month",
            features: [
              "B2C Sales upto 5 Lakhs",
              "OR",
              "B2B Sales upto 15 Bills"
            ]
          },
          {
            badge: "GST PACKAGE 3",
            title: "Package 3",
            subtitle: "Advanced Returns",
            bestFor: "High retail & moderate B2B",
            price: "₹2,000",
            period: "/ month",
            features: [
              "B2C Sales upto 10 Lakhs",
              "OR",
              "B2B Sales upto 30 Bills"
            ]
          },
          {
            badge: "GROWTH",
            title: "Standard Package 4",
            subtitle: "Growth Support",
            bestFor: "Growing Businesses with Moderate Transactions",
            price: "₹3,000",
            period: "/ month",
            features: [
              "Complete GST Filing",
              "Detailed Summaries",
              "Priority Support"
            ]
          },
          {
            badge: "PREMIUM",
            title: "Premium Package 5",
            subtitle: "Full Compliance",
            bestFor: "Established Businesses, High Volume & Compliance-Focused",
            price: "₹5,000",
            period: "/ month",
            features: [
              "End-to-End GST Filings",
              "Full Purchase Verification (ITC)",
              "Priority Doubt Clearing"
            ]
          },
          {
            badge: "ENTERPRISE",
            title: "Enterprise Package 6",
            subtitle: "Complex Operations",
            bestFor: "Large Enterprises with Complex Operations",
            price: "₹10,000",
            period: "/ month",
            features: [
              "Customized Compliance Solutions",
              "Dedicated Account Manager",
              "Strategic Tax Planning"
            ]
          }
        ]
      },
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
      {
        name: "Accounting & Bookkeeping",
        packages: [
          {
            badge: "STARTER",
            title: "Basic Package",
            subtitle: "Starter Compliance",
            bestFor: "Small businesses, startups & low transaction volume",
            price: "₹3,000",
            period: "/ month",
            features: [
              "Accounting & Bookkeeping (basic entries)",
              "Monthly Sales & Purchase Summary Reports",
              "GST Filing — GSTR-1 & 3B",
              "Purchase Cross Check (basic level)",
              "Bank Reconciliation (monthly)",
              "Doubt Clearing — limited via WhatsApp / Call"
            ]
          },
          {
            badge: "GROWTH",
            title: "Standard Package",
            subtitle: "Growth Support",
            bestFor: "Growing businesses with moderate transactions",
            price: "₹5,000",
            period: "/ month",
            features: [
              "Complete Accounting & Bookkeeping",
              "Detailed Sales & Purchase Reports",
              "GST Filing + Purchase Reconciliation (advanced)",
              "Bank Reconciliation (monthly)",
              "2 Visits per Month (optional)",
              "Priority Doubt Clearing — Call & WhatsApp"
            ]
          },
          {
            badge: "PREMIUM",
            title: "Premium Package",
            subtitle: "Full Business Control",
            bestFor: "Established businesses, high volume & compliance-focused clients",
            price: "₹10,000",
            period: "/ month",
            features: [
              "End-to-End Accounting & Bookkeeping",
              "Advanced Sales, Purchase & Profitability Reports",
              "GST Filing + Full Purchase Cross Verification (ITC optimisation)",
              "Bank Reconciliation — weekly / real-time optional",
              "TDS Filing + Advisory",
              "3 Visits per Month",
              "Unlimited Priority Doubt Clearing",
              "Monthly Financial Review Meeting"
            ]
          }
        ]
      },
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
      {
        name: "Trademark Registration",
        price: "₹6,400",
        priceDetail: "Including gov and professional fee"
      },
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
