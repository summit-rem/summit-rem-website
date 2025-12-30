// src/pages/services/maintenance/MaintenanceAndCapitalProjects.jsx
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

export default function MaintenanceAndCapitalProjects() {
  const meta = {
    title: "Maintenance & Capital Projects",
    description: "Structured planning and execution for property upkeep and improvements.",
    heroImage: "https://www.solutionsgc.com/wp-content/uploads/commercial-engineers-pointing-at-blueprint-sketch-scaled.jpg",
    serviceNav,
    cta: { label: "See vacancies", to: "/vacancies" },
  };

  const cards = [
    {
      title: "Preventative Maintenance Programs",
      text: "Scheduled inspections and service plans designed to extend asset life and prevent costly emergency repairs.",
    },
    {
      title: "Vendor Management & Coordination",
      text: "Competitive bidding, qualified vendor selection, and ongoing oversight to ensure quality work at fair pricing.",
    },
    {
      title: "Capital Project Planning",
      text: "Detailed scoping, budgeting, timeline development, and execution oversight for major improvements and replacements.",
    },
    {
      title: "Quality Control & Documentation",
      text: "On-site supervision, punch lists, warranty tracking, and full project records for long-term accountability.",
    },
  ];

  return (
    <ServiceShell meta={meta} navItems={serviceNav}>
      <div className="mt-16 lg:mt-24">
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
          Maintenance & Capital Projects
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-gray-700 max-w-3xl">
          Summit oversees day-to-day maintenance and large-scale capital improvements with structured planning, vendor coordination, and hands-on execution. Our goal is to protect property condition, control costs, and deliver projects on time and within budget.
        </p>
      </div>

      <div className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((card, i) => (
          <Card key={i} title={card.title} text={card.text} />
        ))}
      </div>

      <div className="mt-20 lg:mt-28 rounded-3xl bg-[#7a1f2b]/5 p-10 lg:p-16 text-center">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
          Planning maintenance or a capital improvement?
        </h2>
        <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
          Share your upcoming needs and we’ll explain how our structured approach can deliver reliable results.
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