// src/pages/services/mobile/MobileHomeParkManagement.jsx
import React from "react";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import ServiceShell from "./components/ServiceShell";
import { serviceNav } from "./serviceNav";

function Card({ title, text }) {
  return (
    <div className="rounded-3xl bg-white ring-1 ring-slate-200 p-6">
      <h3 className="text-lg font-extrabold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{text}</p>
    </div>
  );
}

export default function MobileHomeParkManagement() {
  const meta = {
    title: "Mobile Home Park Management",
    description: "Professional operations for manufactured home communities.",
    heroImage: "https://blog.hignellhoa.com/hubfs/An%20HOA%20board%20meeting%20at%20an%20outdoor%20table%20with%20laptops.jpg",
    serviceNav,
    cta: { label: "See vacancies", to: "/vacancies" },
  };

  const cards = [
    {
      title: "Lot Rent Collection",
      text: "Streamlined billing, online payments, and consistent enforcement of rent policies.",
    },
    {
      title: "Community Maintenance",
      text: "Roads, common areas, utilities, and landscaping kept in good condition through scheduled upkeep.",
    },
    {
      title: "Rule Enforcement",
      text: "Fair, documented application of community guidelines to support resident satisfaction and property standards.",
    },
    {
      title: "Resident Communication",
      text: "Clear notices, portal access, and responsive support for day-to-day concerns.",
    },
  ];

  return (
    <ServiceShell meta={meta} navItems={serviceNav}>
      <div className="mt-16 lg:mt-24">
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
          Mobile Home Park Management
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-gray-700 max-w-3xl">
          Summit manages mobile and manufactured home communities with structured operations, fair rule enforcement, and proactive maintenance. We help owners maintain stable occupancy, protect asset value, and deliver a well-run community.
        </p>
      </div>

      <div className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((card, i) => (
          <Card key={i} title={card.title} text={card.text} />
        ))}
      </div>

      <div className="mt-20 lg:mt-28 rounded-3xl bg-[#7a1f2b]/5 p-10 lg:p-16 text-center">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
          Looking to improve your mobile home community?
        </h2>
        <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
          Share details about your park and we’ll explain how our approach can support better operations and resident experience.
        </p>

        <NavLink
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-4 text-base font-extrabold text-[#7a1f2b] ring-2 ring-[#7a1f2b] hover:bg-[#7a1f2b]/5 transition"
        >
          Contact us
          <ArrowRight size={18} className="text-[#7a1f2b]" />
        </NavLink>
      </div>
    </ServiceShell>
  );
}