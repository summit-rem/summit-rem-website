import HeaderImage from "../../../assets/image/header_image.jpg";

export const homeHeroConfig = {
  badge: "Less Stress. Better Managed.",
  headline: "Professional Commercial & Multifamily\nProperty Management Since 2000.",
  description:
    "Summit Real Estate Management delivers structured commercial and multifamily property management built on consistency, clarity, and long-term experience, so ownership feels simpler and more predictable.",

  image: {
    src: HeaderImage,
    alt: "Professional property management city view",
  },

  cards: {
    rating: {
      title: "Average Rating",
      value: "4.8",
      stars: 5,
      body: "Trusted by owners and residents across the communities we manage.",
      cta: { label: "View testimonials", to: "#testimonials" },
    },
    story: {
      title: "Experience That Shows",
      body:
        "Since 2000, Summit has delivered structured, disciplined property management built to reduce friction and protect long-term value.",
      cta: { label: "Our Story", to: "/about" },
    },
  },
};
