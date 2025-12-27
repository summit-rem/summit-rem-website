import SignatureLogo from "../../../assets/image/signature_logo2.jpg";

export const footerConfig = {
  brand: {
    title: "Summit Real Estate Management",
    logo: SignatureLogo,
    description:
      "Professional property management services for commercial and multi-family properties since 2000.",
    addressLines: ["Summit Real Estate Management Services Inc", "2205 Plaza Drive, Suite 100 Rocklin, CA 95765 ", "Los Angeles, CA 90012"],
    phone: "916.960.5700",
    email: "hello@summit-rem.com",
  },

  columns: [
    {
      title: "Company",
      links: [
        { label: "About Us", to: "/about" },
        { label: "Our Staff", to: "/about" },
        { label: "Careers", to: "/about" },
        { label: "Contact Us", to: "/contact" },
        { label: "Resources", to: "/resources" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "COMMERCIAL", to: "/commercial" },
        { label: "MULTI-FAMILY RESIDENTIAL", to: "/multi-family" },
        { label: "COMMERCIAL BROKERAGE", to: "/commercial-brokerage" },
        { label: "ACCOUNTING", to: "/commercial-brokerage" },
        { label: "LEASE MANAGEMENT", to: "/lease-management" },
        { label: "TENANT SERVICES & SAFETY", to: "/tenant-services-and-safety" },
        { label: "TRANSITION STRATEGY", to: "/transition-strategy" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Pay Rent", to: "/pay-rent", variant: "softPrimary", icon: "CreditCard" },
        { label: "Resident Portal", to: "/account" },
        { label: "Owner Portal", to: "/account" },
        { label: "Client Remarks", to: "/account" },
      ],
    },
  ],

  bottom: {
    copyright:
      "© 2025 Summit Real Estate Management Services. All rights reserved. | License #01049566",
    legal: [
      { label: "Privacy Policy", to: "/privacy-policy" },
      { label: "Terms of Service", to: "/terms-and-conditions" },
      { label: "cookie-policy", to: "/cookie-policy" },
    ],
    socials: [
      { label: "Facebook", href: "#", icon: "Facebook" },
      { label: "Twitter", href: "#", icon: "Twitter" },
      { label: "LinkedIn", href: "#", icon: "LinkedIn" },
      { label: "Instagram", href: "#", icon: "Instagram" },
    ],
  },
};
