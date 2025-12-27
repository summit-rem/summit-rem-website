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
  {
    q: "How do you support commercial property owners?",
    a: "We provide structured management, clear reporting, and proactive oversight, allowing owners to reduce involvement, maintain compliance, and achieve stable performance across their commercial and multifamily properties.",
    openByDefault: true,
  },
  {
    q: "Do you manage both commercial and residential properties?",
    a: "Yes. Summit manages commercial, multifamily, owners’ association, and mobile home park properties, applying consistent systems and documented standards across each property type we support.",
  },
  {
    q: "How quickly can a new property onboard?",
    a: "Onboarding timelines vary by property type and complexity, but our structured onboarding process allows for an efficient transition while ensuring records, systems, and responsibilities are properly established.",
  },
  {
    q: "What reporting will owners receive regularly?",
    a: "Owners receive clear financial statements, operational updates, and supporting documentation on a consistent schedule, providing transparency into property performance without unnecessary complexity or frequent follow-ups.",
  },
  {
    q: "How are maintenance issues handled and tracked?",
    a: "Maintenance requests are managed through defined procedures, vendor coordination, and documented tracking, allowing issues to be addressed promptly while maintaining oversight, quality control, and cost accountability.",
  },
  {
    q: "Who will be my primary point contact?",
    a: "Each property is assigned a dedicated management contact responsible for communication, coordination, and oversight, ensuring owners know who to reach and receive consistent, reliable responses.",
  },
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
