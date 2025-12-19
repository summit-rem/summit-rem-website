export const footerConfig = {
  brand: {
    title: "Summit Real Estate Management",
    logo: "/src/assets/image/signature_logo2.jpg",
    description:
      "Professional property management services for commercial and multi-family properties since 2000.",
    addressLines: ["123 Main Street, Suite 100", "Los Angeles, CA 90012"],
    phone: "(555) 123-4567",
    email: "info@summitrealestate.com",
  },

  columns: [
    {
      title: "Company",
      links: [
        { label: "About Us", to: "/about" },
        { label: "Our Staff", to: "/about#team" },
        { label: "Careers", to: "/about#careers" },
        { label: "Contact Us", to: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Property Management", to: "/management" },
        { label: "Leasing & Brokerage", to: "/management#leasing" },
        { label: "Advisory Services", to: "/management#advisory" },
        { label: "Get a Quote", to: "/contact#quote" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Pay Rent", to: "/pay-rent", variant: "softPrimary", icon: "CreditCard" },
        { label: "Resident Portal", to: "/account#resident" },
        { label: "Owner Portal", to: "/account#owner" },
        { label: "Client Remarks", to: "/account#remarks" },
      ],
    },
  ],

  bottom: {
    copyright:
      "© 2025 Summit Real Estate Management Services. All rights reserved. | License #01049566",
    legal: [
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Service", to: "/terms" },
    ],
    socials: [
      { label: "Facebook", href: "#", icon: "Facebook" },
      { label: "Twitter", href: "#", icon: "Twitter" },
      { label: "LinkedIn", href: "#", icon: "LinkedIn" },
      { label: "Instagram", href: "#", icon: "Instagram" },
    ],
  },
};
