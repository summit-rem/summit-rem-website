// src/pages/about/config/aboutConfig.js
import AboutProperty from "../../../assets/image/aboutProperty.jpg";

export const aboutConfig = {
  hero: {
    eyebrow: "ABOUT SUMMIT",
    title: "Built to Bring Structure, Clarity, and Consistency to Property Management",
    description:
      "Property management works best when it feels steady and predictable. When communication is clear, systems are in place, and oversight is consistent, ownership becomes easier. Summit Real Estate Management was built around that principle.\n\nSince 2000, Summit has provided professional property management services for commercial, multifamily, owners’ association, and mobile home park properties. Our approach is grounded in disciplined operations, documented standards, and long-term thinking.",
  },

  missionVision: {
    mission: {
      title: "A Company Rooted in Local Experience",
      text:
        "Summit was founded with a strong understanding of the markets we serve and the practical realities property owners face. Over time, we have grown alongside our communities, adapting to regulatory changes, market cycles, and evolving ownership structures.\n\nToday, we manage millions of square feet of office, retail, and industrial properties, along with thousands of apartment units and mobile home park spaces. Our clients include private owners, trusts, syndications, institutional investors, banks, and court-appointed receivers.\n\nGrowth has never changed our focus: manage every property with care, clarity, and accountability.",
    },
    vision: {
      title: "Who We Work With",
      text:
        "Summit supports a wide range of ownership structures, including:\n• Private property owners and family offices\n• Trusts and syndications\n• Institutional owners and investors\n• Banks and court-appointed receivers\n• Owners’ associations and boards\n\nAcross every relationship, our responsibility is the same: support stable operations and long-term property performance.",
    },
  },

  image: {
    src: AboutProperty,
    alt: "Summit property management team and properties overview",
  },

  midSection: {
    title: "Property management built for long-term ownership.",
    description:
      "Summit delivers professional commercial and multifamily property management through disciplined operations, local market knowledge, and a focus on consistency that supports stable performance and confident ownership.",
  },

  stats: [
    {
      value: "4.0M+",
      label: "Square Feet Managed",
      description:
        "Office, retail, industrial, and owners’ association properties managed with consistent oversight.",
    },
    {
      value: "2,000+",
      label: "Residential Units Managed",
      description:
        "Apartment communities and mobile home park spaces supported through structured operations.",
    },
    {
      value: "Since 2000",
      label: "Years of Experience",
      description:
        "More than two decades managing properties through changing markets and regulations.",
    },
    {
      value: "Long-Term Clients",
      label: "Trusted Relationships",
      description:
        "Many clients have partnered with Summit for years through stable, dependable management.",
    },
  ],

  featureCards: {
    title: "Why owners work with Summit",
    background: "light",
    items: [
      {
        icon: "ClipboardList",
        title: "Structured Operations",
        description:
          "Documented procedures guide daily management, compliance, and reporting across all property types.",
      },
      {
        icon: "Users",
        title: "Experienced Teams",
        description:
          "Dedicated professionals with hands-on experience managing complex commercial and multifamily assets.",
      },
      {
        icon: "ShieldCheck",
        title: "Proven Oversight",
        description:
          "Consistent inspections, coordination, and follow-through support predictable operations and outcomes.",
      },
      {
        icon: "UserCheck",
        title: "Owner-Focused Approach",
        description:
          "Clear communication and accountability designed to reduce involvement without losing visibility.",
      },
    ],
  },
};
