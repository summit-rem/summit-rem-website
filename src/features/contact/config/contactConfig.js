export const contactConfig = {
  hero: {
    title: "Contact our friendly team",
    subtitle: "Let us know how we can help.",
    logo: "/src/assets/image/signature_logo2.jpg",
  },

  cards: [
    {
      title: "Chat to sales",
      description: "Speak to our sales team.",
      icon: "MessageCircle",
      action: { type: "email", label: "sales@summit-res.com", value: "sales@summit-res.com" },
    },
    {
      title: "Chat to support",
      description: "We’re here to help.",
      icon: "LifeBuoy",
      action: { type: "email", label: "francie@summit-res.com", value: "francie@summit-res.com" },
    },
    {
      title: "Visit us",
      description: "Visit our office HQ.",
      icon: "MapPin",
      action: {
        type: "link",
        label: "View on Google Maps",
        value: "https://www.google.com/maps/search/?api=1&query=7728+Warbler+Lane,+Rockville,+MD+20855",
      },
    },
    {
      title: "Call us",
      description: "Mon–Fri from 8am to 5pm.",
      icon: "Phone",
      action: { type: "phone", label: "301-670-0980", value: "3016700980" },
    },
  ],

  faqs: [
    { q: "Is there a free trial available?", a: "Yes — we can provide a short trial to evaluate fit. Contact support and we’ll set it up." },
    { q: "Can I change my plan later?", a: "Yes. You can upgrade or downgrade anytime based on your portfolio needs." },
  ],

  cta: {
    title: "Ready to level up your business?",
    subtitle: "Start improving operations with Summit. Cancel anytime.",
    primaryLabel: "Get started",
    primaryTo: "/contact#quote",
    secondaryLabel: "View demo",
    secondaryTo: "/about",
  },
};
