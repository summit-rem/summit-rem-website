import React from "react";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import ServiceShell from "./components/ServiceShell";
import { serviceNav } from "./serviceNav";

export default function TenantServicesSafetyPage() {
  const meta = {
    title: "Tenant Services & Safety",
    subtitle:
      "Strong service response and safety coordination protect the resident experience and the asset. We focus on accountability, documentation, and follow-through.",
    heroImage:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1600&q=70",
    serviceNav,
    cta: { label: "Contact us", to: "/contact" },
  };

  return (
    <ServiceShell meta={meta}>
      <div className="space-y-8">
        <div className="rounded-3xl bg-white ring-1 ring-slate-200 p-6 sm:p-8">
          <p className="text-xs font-bold tracking-[0.22em] text-slate-500">SERVICE</p>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Fast response, clean documentation, and safer properties
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            We coordinate maintenance requests, vendor follow-up, and safety-related issues with clearer tracking and accountability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            ["Maintenance Request Handling", "Structured intake and tracking so tenants know what’s happening."],
            ["Vendor Coordination", "Scheduling, follow-up, and documentation for completed work."],
            ["Safety & Risk Items", "Track urgent issues and keep documentation aligned."],
            ["Resident Communication", "Reduce friction with consistent, clear updates."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-3xl bg-white ring-1 ring-slate-200 p-6">
              <h3 className="text-lg font-extrabold text-slate-900">{t}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl bg-[#6b0f1a]/5 ring-1 ring-[#6b0f1a]/15 p-6 sm:p-8">
          <h3 className="text-xl font-extrabold text-slate-900">
            Want more consistent service response?
          </h3>
          <p className="mt-2 text-slate-600 leading-relaxed max-w-2xl">
            We can outline how requests are tracked, escalated, and closed — with a clear owner reporting rhythm.
          </p>

          <NavLink
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-extrabold text-[#6b0f1a] ring-1 ring-[#6b0f1a]/30 hover:bg-[#6b0f1a]/5 transition"
          >
            Contact us
            <ArrowRight size={16} className="text-[#6b0f1a]" />
          </NavLink>
        </div>
      </div>
    </ServiceShell>
  );
}
