import React from "react";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import ServiceShell from "./components/ServiceShell";
import { serviceNav } from "./serviceNav";

export default function TransitionStrategyPage() {
  const meta = {
    title: "Transition Strategy",
    subtitle:
      "Bringing a property under new management requires more than a handoff. We run transitions with documentation, timelines, and operational stabilization in mind.",
    heroImage:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=70",
    serviceNav,
    cta: { label: "Contact us", to: "/contact" },
  };

  return (
    <ServiceShell meta={meta}>
      <div className="space-y-8">
        <div className="rounded-3xl bg-white ring-1 ring-slate-200 p-6 sm:p-8">
          <p className="text-xs font-bold tracking-[0.22em] text-slate-500">TRANSITION</p>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Stabilize operations fast — without chaos
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            We focus on documentation, vendor continuity, resident communication, and reporting setup so the property stabilizes quickly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            ["Document & Vendor Intake", "Gather contracts, contacts, insurance, and critical vendor details."],
            ["Operational Setup", "Set up communication rhythm, maintenance tracking, and reporting structure."],
            ["Resident Communication", "Clear transition messaging to reduce confusion and increase trust."],
            ["Stabilization Plan", "Prioritized action list to address top risk + operational gaps."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-3xl bg-white ring-1 ring-slate-200 p-6">
              <h3 className="text-lg font-extrabold text-slate-900">{t}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl bg-[#6b0f1a] text-white p-6 sm:p-8">
          <h3 className="text-2xl font-extrabold tracking-tight">
            Transitioning a property soon?
          </h3>
          <p className="mt-3 text-white/85 leading-relaxed max-w-2xl">
            Share your timeline and we’ll outline a transition plan built to stabilize operations quickly.
          </p>

          <NavLink
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-extrabold text-[#6b0f1a] hover:bg-white/90 transition"
          >
            Plan the transition
            <ArrowRight size={16} className="text-[#6b0f1a]" />
          </NavLink>
        </div>
      </div>
    </ServiceShell>
  );
}
