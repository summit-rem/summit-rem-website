export const navConfig = {
  brand: {
    // label: "Summit Real Estate Management",
    to: "/",
    // After renaming file:
    logo: "/src/assets/image/signature-block.jpg",
  },

  primary: [
    { label: "Home", to: "/" },
    {
      label: "Properties & Vacancies",
      to: "/properties",
      children: [
        { label: "Properties", to: "/properties" },
        { label: "Vacancies", to: "/vacancies" },
      ],
    },
    {
      label: "Management Services",
      to: "/management",
      children: [
        { label: "Overview", to: "/management" },
        { label: "Tenant Placement", to: "/management#tenant-placement" },
        { label: "Full Service", to: "/management#full-service" },
      ],
    },
    {
      label: "About Us",
      to: "/about",
      children: [
        { label: "Our Story", to: "/about#story" },
        { label: "Team", to: "/about#team" },
      ],
    },
    { label: "Contact Us", to: "/contact" },
  ],

  actions: [
    { label: "Pay Rent", to: "/pay-rent", icon: "CreditCard", variant: "primary" },
    {
      label: "Account",
      to: "/account",
      icon: "User",
      children: [
        { label: "Dashboard", to: "/account" },
        { label: "Profile", to: "/account#profile" },
        { label: "Sign out", to: "/account#signout" },
      ],
    },
  ],
};
