// src/pages/services/hoa/OwnersAssociationManagement.jsx
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

export default function OwnersAssociationManagement() {
  const meta = {
    title: "Owners’ Association Management",
    description: "Professional administration for HOAs and condo associations.",
    heroImage: "https://blog.hignellhoa.com/hubfs/An%20HOA%20board%20meeting%20at%20an%20outdoor%20table%20with%20laptops.jpg",
    serviceNav,
    cta: { label: "See vacancies", to: "/vacancies" },
  };

  const cards = [
    {
      title: "Governance & Compliance",
      text: "We enforce rules, manage board meetings, and ensure adherence to governing documents and local laws.",
    },
    {
      title: "Financial Management",
      text: "Budget preparation, dues collection, reserve planning, and transparent monthly financial reports.",
    },
    {
      title: "Community Communication",
      text: "Regular updates, violation notices, and resident portal access to reduce friction and improve satisfaction.",
    },
    {
      title: "Vendor & Project Oversight",
      text: "Coordinated maintenance, competitive bidding, and supervision of common-area projects.",
    },
  ];

  return (
    <ServiceShell meta={meta} navItems={serviceNav}>
      <div className="mt-16 lg:mt-24">
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
          Owners’ Association Management
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-gray-700 max-w-3xl">
          Summit provides full-service administration for homeowners’ associations and condominium communities. We handle governance, finances, communication, and maintenance so boards can focus on community vision rather than day-to-day operations.
        </p>
      </div>

      <div className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((card, i) => (
          <Card key={i} title={card.title} text={card.text} />
        ))}
      </div>

      <div className="mt-20 lg:mt-28 rounded-3xl bg-[#7a1f2b]/5 p-10 lg:p-16 text-center">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
          Interested in professional HOA management?
        </h2>
        <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
          Let’s discuss how we can support your association with clear administration and responsive service.
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