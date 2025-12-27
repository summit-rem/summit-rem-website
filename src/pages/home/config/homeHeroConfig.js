import HeaderImage from '../../../assets/image/header_image.jpg';

export const homeHeroConfig = {
  pill: "Summit Real Estate Management",
  title: {
    before: "Less Stress. Better",
    highlight: "Managed",
    after: ".",
  },
  subtitle:
    'Professional Commercial & Multifamily Property Management Since 2000.',
  primaryCta: { label: "Login", to: "/account" },

  cards: {
    rating: {
      kicker: "Average Rating",
      value: "4.8",
      caption: "Trusted by owners & residents across our communities.",
      cta: "View testimonials",
      to: "#testimonials",
    },
    team: {
      title: "Meet our team",
      caption:
        "Experienced professionals focused on structured management, clear reporting, and long-term value.",
      cta: "See our team",
      to: "/about/team",
    },
  },

  heroImage: {
    src: HeaderImage,
    alt: "Featured property",
    badge: "Professional Property Management",
    note: "Since 2000, Summit has delivered structured, disciplined property management built to reduce friction and protect long-term value.",
    title: "Experience That Shows",
    storyTo: "/about/story",
    storyLabel: "Our story"
  },
};
