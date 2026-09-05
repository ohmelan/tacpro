export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Business Services", href: "/services" },
  { 
    label: "Virtual Workspaces", 
    href: "/virtual-workspaces",
    items: [
      { label: "Calicut", href: "/virtual-workspaces/calicut" },
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
      title: "Corporate Office",
      lines: [
        "2nd Floor, Door No: 66/1150",
        "Kalabhavan Road, Near Kochi Town Hall",
        "North Kaloor, Ernakulam, 682018"
      ],
      email: "tacauditskochi@gmail.com"
    },
    {
      title: "Branches",
      locations: [
        {
          name: "Calicut",
          lines: [
            "43/2684-A2, First Floor",
            "Kolathara Road, Rahiman Bazaar",
            "Calicut, Kerala, 673655"
          ],
          email: "tacauditsclt@gmail.com"
        },
        {
          name: "Pandalam",
          lines: [
            "7/49A, First Floor, Al Bushra Complex",
            "Near Central Jn, Pandalam P.O",
            "Pathanamthitta, Kerala, 689501"
          ],
          email: "tacaudits@gmail.com"
        }
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
