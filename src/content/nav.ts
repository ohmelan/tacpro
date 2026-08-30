export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Business Services", href: "/services" },
  { 
    label: "Virtual Workspaces", 
    href: "/virtual-workspaces",
    items: [
      { label: "Kozhikode", href: "/virtual-workspaces/kozhikode" },
      { label: "Kochi", href: "/virtual-workspaces/kochi" },
      { label: "Pathanamthitta", href: "/virtual-workspaces/pathanamthitta" },
    ]
  },
  { label: "About", href: "/about" },
];
export const siteConfig = {
  name: "TAC",
  fullName: "TAC Professionals India LLP",
  email: "connect.tacpro@gmail.com",
  addresses: [
    {
      title: "Main Corporate Office",
      lines: [
        "43/2684-A2, First Floor",
        "Kolathara Road, Rahiman Bazaar",
        "Kozhikode, Kerala, 673655"
      ]
    },
    {
      title: "Other Branches",
      lines: [
        "66/1150",
        "Kalabhavan Road, Near Kochi Town Hall",
        "Kaloor, Ernakulam, 682018"
      ]
    }
  ],
  url: "https://tacprofessionals.com",
  whatsappNumber: "918848266969",
  contactNumbers: [
    { location: "Kochi", number: "+91 6282 46 6969", href: "tel:+916282466969" },
    { location: "Calicut", number: "+91 9778 46 6969", href: "tel:+919778466969" },
    { location: "Pandalam", number: "+91 8848 26 6969", href: "tel:+918848266969" },
  ]
};
