import Logo from "../../../assets/image/signature-block.jpg";

const APPFOLIO_URL =
  "https://account.appfolio.com/realms/foliospace/protocol/openid-connect/auth?activation_state&client_id=client-8dad6c3d7c1270dc69fd987720422a89d0affc33&portfolio_uuid&redirect_uri=https%3A%2F%2Fsummitrem.appfolio.com%2Fconnect%2Fusers%2Foauth%2Fcallback&response_type=code&scope=openid+offline_access&session_timed_out=false&state";

export const navConfig = {
  brand: {
    to: "/",
    logo: Logo,
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
        // {
        //   label: "View Properties",
        //   to: "/properties",
        //   children: [
        //     { label: "Commercial", to: "/properties?type=commercial" },
        //     { label: "Multi-Family Residential", to: "/properties?type=multi-family" },
        //     { label: "Retail", to: "/properties?type=retail" },
        //   ],
        // },
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
    // { label: "Resources", to: "/resources" },
  ],

  actions: [
    {
      label: "Pay Rent",
      href: APPFOLIO_URL,
      external: true,
      icon: "CreditCard",
      variant: "primary",
    },
    {
      label: "Account",
      icon: "User",
      mega: {
        title: "Account",
        description: "Access portals and account tools.",
        hideView: false,
        cta: {
          label: "Open Account Portal",
          href: APPFOLIO_URL,
          external: true,
        },
      },
      children: [
        {
          label: "Online Portal",
          children: [
            { label: "Resident Portal", href: APPFOLIO_URL, external: true },
            { label: "Pay Rent", href: APPFOLIO_URL, external: true },
          ],
        },
        {
          label: "Owner Portal",
          children: [
            { label: "Owner Login", href: APPFOLIO_URL, external: true },
            // { label: "Statements & Reports", to: "/account#statements" },
          ],
        },
      ],
    },
  ],
};
