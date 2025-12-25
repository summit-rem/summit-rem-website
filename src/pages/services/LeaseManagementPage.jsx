import React from "react";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import ServiceShell from "./components/ServiceShell";
import { serviceNav } from "./serviceNav";

export default function LeaseManagementPage() {
  const meta = {
    title: "Lease Management",
    subtitle:
      "Better lease discipline reduces friction. We coordinate documentation, timelines, renewals, and service alignment so leasing doesn’t turn into operational chaos.",
    heroImage:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=70",
    serviceNav,
    cta: { label: "Contact us", to: "/contact" },
  };

  return (
    <ServiceShell meta={meta}>
      <div className="space-y-8">
        <div className="rounded-3xl bg-white ring-1 ring-slate-200 p-6 sm:p-8">
          <p className="text-xs font-bold tracking-[0.22em] text-slate-500">PROCESS</p>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Timelines, documentation, and renewals handled cleanly
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            We keep lease items organized so owners, tenants, and vendors operate from the same information.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            ["Renewal Coordination", "Structured communication and timelines to reduce last-minute issues."],
            ["Documentation Discipline", "Keep files, notices, and key terms organized and accessible."],
            ["Move-in / Move-out Alignment", "Ensure operational steps match leasing timelines."],
            ["Issue Tracking", "Track key action items so nothing gets lost between parties."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-3xl bg-white ring-1 ring-slate-200 p-6">
              <h3 className="text-lg font-extrabold text-slate-900">{t}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl bg-[#6b0f1a] text-white p-6 sm:p-8">
          <h3 className="text-2xl font-extrabold tracking-tight">Need help tightening lease ops?</h3>
          <p className="mt-3 text-white/85 leading-relaxed max-w-2xl">
            We’ll map your current process and show where timelines and documentation can be cleaned up fast.
          </p>

          <NavLink
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-extrabold text-[#6b0f1a] hover:bg-white/90 transition"
          >
            Get started
            <ArrowRight size={16} className="text-[#6b0f1a]" />
          </NavLink>
        </div>
      </div>
    </ServiceShell>
  );
}
