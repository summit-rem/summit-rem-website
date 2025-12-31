import SignatureLogo from "../../../assets/image/signature_logo2.jpg";

export const footerConfig = {
  brand: {
    title: "Summit Real Estate Management",
    logo: SignatureLogo,
    description:
      "Professional property management services for commercial and multi-family properties since 2000.",
    addressLines: ["2205 Plaza Dr, Rocklin,", "CA, 95765, United States"],
    phone: "(916) 960-5700",
    email: "marketing@summit-rem.com",
  },

  columns: [
    {
      title: "Company",
      links: [
        { label: "Home", to: "/" },
        { label: "About Us", to: "/about" },
        { label: "Vacancies", to: "/vacancies" },
        // { label: "Our Staff", to: "/about" },
        // { label: "Careers", to: "/about" },
        { label: "Contact Us", to: "/contact" },
        { label: "Resources", to: "/resources" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Commercial", to: "/commercial" },
        { label: "Multi-Family Residential", to: "/multi-family" },
        { label: "Commercial Brokerage", to: "/commercial-brokerage" },
        { label: "Accounting & Financial Reporting", to: "/accounting-financial-reporting" }, // Note: same 'to' as above – adjust if needed
        { label: "Lease Management", to: "/lease-management" },
        { label: "Real Estate Advisory Services", to: "/real-estate-advisory-services" },
        { label: "Maintenance & Capital Projects", to: "/maintenance-and-capital-projects" },
        { label: "Owner's Association Management", to: "/owners-association-management" },
        { label: "Mobile Home Park Management", to: "/mobile-Home-park-management" },
        // { label: "Tenant Services & Safety", to: "/tenant-services-and-safety" },
        // { label: "Transition Strategy", to: "/transition-strategy" },
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
    copyright: `© ${new Date().getFullYear()} Summit Real Estate Management Services. All rights reserved.`,
    legal: [
      { label: "Privacy Policy", to: "/privacy-policy" },
      { label: "Terms of Service", to: "/terms-and-conditions" },
      { label: "cookie-policy", to: "/cookie-policy" },
    ],
    socials: [
      { label: "Facebook", href: "https://www.facebook.com/summitrem", icon: "" },
      { label: "TickTok", href: "https://www.tiktok.com/@summitrem", icon: "ticktok" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/summitrem", icon: "LinkedIn" },
      { label: "Instagram", href: "https://www.instagram.com/summitrem", icon: "" },
    ],
  },
};
