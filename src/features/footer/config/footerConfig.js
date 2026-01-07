import SignatureLogo from "../../../assets/image/signature_logo2.jpg";

const APPFOLIO_URL =
  import.meta?.env?.VITE_APPFOLIO_URL || "https://summitrem.appfolio.com";

const footerConfig = {
  brand: {
    logoSrc: SignatureLogo,
    logoAlt: "Summit Real Estate Management",
    title: "Summit Real Estate Management",
    tagline:
      "Professional property management services for commercial and multi-family properties since 2000.",
    addressLines: [
      "2205 Plaza Dr, Rocklin,",
      "CA, 95765, United States",
    ],
    phone: "(916) 960-5700",
    email: "marketing@summit-rem.com",
  },

  columns: [
    {
      title: "Company",
      links: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Vacancies", href: "/vacancies" },
        { label: "Contact Us", href: "/contact" },
        { label: "Resources", href: "/resources" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Commercial", href: "/services/commercial" },
        { label: "Multi-Family Residential", href: "/services/multi-family-residential" },
        { label: "Commercial Brokerage", href: "/services/commercial-brokerage" },
        { label: "Accounting & Financial Reporting", href: "/services/accounting-financial-reporting" },
        { label: "Lease Management", href: "/services/lease-management" },
        { label: "Real Estate Advisory Services", href: "/services/real-estate-advisory" },
        { label: "Maintenance & Capital Projects", href: "/services/maintenance-capital-projects" },
        { label: "Owner's Association Management", href: "/services/owners-association-management" },
        { label: "Mobile Home Park Management", href: "/services/mobile-home-park-management" },
      ],
    },
    {
      title: "Resources",
      links: [
        // Pay Rent button (ss1 style)
        {
          label: "Pay Rent",
          href: APPFOLIO_URL,
          external: true,
          icon: "CreditCard",
          variant: "softPrimary",
        },
        { label: "Resident Portal", href: APPFOLIO_URL, external: true },
        { label: "Owner Portal", href: APPFOLIO_URL, external: true },
        { label: "Client Remarks", href: APPFOLIO_URL, external: true },
      ],
    },
  ],

  bottom: {
    copyright:
      "© 2026 Summit Real Estate Management Services. All rights reserved.",
    legal: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "cookie-policy", href: "/cookie-policy" },
    ],
    social: [
      { label: "Facebook", href: "#" },
      { label: "TikTok", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "Instagram", href: "#" },
    ],
  },
};

export default footerConfig;
