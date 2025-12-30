// src/pages/home/config/ourStoryConfig.js
import HeaderImage from "../../../assets/image/header_image.jpg"; // Reuse hero image or replace with better city skyline

export const ourStoryConfig = {
  title: "Trusted by property owners and investors\nfor over two decades.",
  description:
    "Since 2000, Summit Real Estate Management has supported commercial and multifamily property owners through disciplined operations and clear systems. We manage millions of square feet and thousands of units for private owners, institutions, and associations who value steady execution, transparency, and long-term thinking. Our approach is grounded in documented standards, experienced teams, and management practices designed to reduce friction and create predictability in day-to-day operations.",

  features: [
    {
      title: "Defined Operating Standards",
      description:
        "We manage properties using documented procedures that guide daily operations, compliance, communication & reporting, ensuring consistency.",
    },
    {
      title: "Proactive Oversight",
      description:
        "Regular inspections, structured reviews, and ongoing coordination help identify issues early and address them before they escalate or disrupt operations.",
    },
    {
      title: "Clear Communication & Reporting",
      description:
        "Owners receive clear financial and operational updates on a consistent schedule, reducing follow-ups and providing confidence in day-to-day management.",
    },
  ],

  cta: {
    label: "Our Story",
    to: "/about",
  },

  image: {
    src: HeaderImage,
    alt: "City skyline representing Summit's managed properties",
  },
};