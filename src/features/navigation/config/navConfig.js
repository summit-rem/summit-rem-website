export const navConfig = {
  brand: {
    // label: "Summit Real Estate Management",
    to: "/",
    logo: "/src/assets/image/signature-block.jpg",
  },

  primary: [
    { label: "Home", to: "/" },
    {
      label: "Listings",
      to: "/properties",
      mega: {
        title: "Listings",
        description:
          "Explore available properties and vacancies across our managed portfolio.",
        cta: { label: "View all listings", to: "/properties" },
      },
      children: [
        {
          label: "View Properties",
          to: "/properties",
          children: [
            { label: "Commercial", to: "/properties?type=commercial" },
            { label: "Multi-Family Residential", to: "/properties?type=multi-family" },
            { label: "Retail", to: "/properties?type=retail" },
          ],
        },
        { label: "View Vacancies", to: "/vacancies" },
      ],
    },
    {
      label: "Services",
      children: [
        { label: "COMMERCIAL", to: "/commercial" },
        { label: "MULTI-FAMILY RESIDENTIAL", to: "/multi-family" },
        { label: "COMMERCIAL BROKERAGE", to: "/commercial-brokerage" },
        { label: "ACCOUNTING & FINANCIAL REPORTING", to: "/commercial-brokerage" },
        { label: "LEASE MANAGEMENT", to: "/lease-management" },
        { label: "TENANT SERVICES & SAFETY", to: "/tenant-services-and-safety" },
        { label: "TRANSITION STRATEGY", to: "/transition-strategy" },
      ],
    },
    {
      label: "About Us",
      children: [
        { label: "Our Story", to: "/about" },
        { label: "Our Team", to: "/about/team" },
      ],
    },
    { label: "Contact Us", to: "/contact" },
    { label: "Resources", to: "/Resources" },
  ],

  actions: [
    { label: "Pay Rent", to: "/pay-rent", icon: "CreditCard", variant: "primary" },
    {
      label: "Account",
      icon: "User",
      mega: {
        title: "Account",
        description: "Access portals and account tools.",
        hideView: true, // NEW: removes the "View →" link in right panel
      },
      children: [
        {
          label: "Online Portal",
          // remove to to avoid "View" even if hideView isn't applied
          children: [
            { label: "Resident Portal", to: "/account#resident" },
            { label: "Pay Rent", to: "/pay-rent" },
          ],
        },
        {
          label: "Owner Portal",
          children: [
            { label: "Owner Login", to: "/account#owner" },
            { label: "Statements & Reports", to: "/account#statements" },
          ],
        },
      ],
    },
  ],
};
