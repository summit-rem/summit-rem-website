// src/pages/services/advisory/RealEstateAdvisoryServices.jsx
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

export default function RealEstateAdvisoryServices() {
  const meta = {
    title: "Real Estate Advisory Services",
    description: "Strategic guidance for property owners and investors.",
    heroImage: "https://weaver.com/wp-content/uploads/2025/10/Two-business-professionals-engage-in-discussion-during-a-meeting_AdobeStock_982130690.jpg",
    serviceNav,
    cta: { label: "See vacancies", to: "/vacancies" },
  };

  const cards = [
    {
      title: "Portfolio Strategy",
      text: "Analysis of hold/sell decisions, capital allocation, and long-term positioning.",
    },
    {
      title: "Acquisition Due Diligence",
      text: "Operational review, financial modeling, and risk assessment for potential purchases.",
    },
    {
      title: "Value-Add Planning",
      text: "Identification of improvement opportunities and execution roadmaps to increase asset performance.",
    },
    {
      title: "Transition Support",
      text: "Management handover planning, system setup, and team coordination during ownership changes.",
    },
  ];

  return (
    <ServiceShell meta={meta} navItems={serviceNav}>
      <div className="mt-16 lg:mt-24">
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
          Real Estate Advisory Services
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-gray-700 max-w-3xl">
          Summit provides objective, experience-based guidance to owners and investors navigating acquisitions, dispositions, repositioning, or management transitions. We focus on practical strategies that protect and enhance value.
        </p>
      </div>

      <div className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((card, i) => (
          <Card key={i} title={card.title} text={card.text} />
        ))}
      </div>

      <div className="mt-20 lg:mt-28 rounded-3xl bg-[#7a1f2b]/5 p-10 lg:p-16 text-center">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
          Need strategic advice on your real estate?
        </h2>
        <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
          Tell us about your goals and we’ll outline how our advisory experience can help.
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