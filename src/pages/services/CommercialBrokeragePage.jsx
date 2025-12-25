import React from "react";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import ServiceShell from "./components/ServiceShell";
import { serviceNav } from "./serviceNav";

export default function CommercialBrokeragePage() {
  const meta = {
    title: "Commercial Brokerage",
    subtitle:
      "Leasing and transaction support designed to reduce vacancy time, improve tenant quality, and protect long-term asset performance.",
    heroImage:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=70",
    serviceNav,
    cta: { label: "Talk to us", to: "/contact" },
  };

  return (
    <ServiceShell meta={meta}>
      <div className="space-y-8">
        <div className="rounded-3xl bg-white ring-1 ring-slate-200 p-6 sm:p-8">
          <p className="text-xs font-bold tracking-[0.22em] text-slate-500">FOCUS</p>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Leasing strategy built around your asset
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            We support pricing strategy, tenant positioning, listing visibility, and negotiation so you
            can move faster with better information.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            ["Leasing Support", "Tenant sourcing, marketing, showings, and screening coordination."],
            ["Market Positioning", "Pricing guidance, competitive analysis, and asset presentation."],
            ["Negotiation & Documentation", "Offer management, coordination, and documentation discipline."],
            ["Owner Alignment", "Clear options presented simply: risk, upside, timing, and recommendation."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-3xl bg-white ring-1 ring-slate-200 p-6">
              <h3 className="text-lg font-extrabold text-slate-900">{t}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl bg-[#6b0f1a] text-white p-6 sm:p-8">
          <h3 className="text-2xl font-extrabold tracking-tight">Need leasing help now?</h3>
          <p className="mt-3 text-white/85 leading-relaxed max-w-2xl">
            If you have an upcoming vacancy or want to reposition a space, we’ll help you build the plan.
          </p>

          <NavLink
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-extrabold text-[#6b0f1a] hover:bg-white/90 transition"
          >
            Start a conversation
            <ArrowRight size={16} className="text-[#6b0f1a]" />
          </NavLink>
        </div>
      </div>
    </ServiceShell>
  );
}
