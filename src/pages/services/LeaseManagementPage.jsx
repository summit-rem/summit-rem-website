import React from "react";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import ServiceShell from "./components/ServiceShell";
import { serviceNav } from "./serviceNav";

export default function LeaseManagementPage() {
  const meta = {
    title: "Lease Management",
    subtitle:
      "Structured leasing execution that supports long-term property performance.",
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
            Leasing & Brokerage Built on Process and Market Discipline
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">Leasing decisions shape the operational and financial trajectory of a property long after a transaction is complete. Tenant quality, lease structure, and alignment with asset strategy all influence stability, cash flow, and future flexibility. When leasing is approached as a short-term transaction rather than an integrated operational function, inconsistencies and avoidable challenges often follow.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Summit Real Estate Management provides leasing and brokerage services designed to support property performance through disciplined execution and market awareness. Leasing activity is treated as an extension of ongoing management rather than a standalone event. This approach ensures that tenant placement and lease terms align with the operational realities of the property and the long-term objectives of ownership.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Market analysis forms the foundation of Summit’s leasing strategy. Rental positioning, competitive conditions, and demand dynamics are evaluated to inform pricing and marketing decisions. Rather than relying on speculative assumptions, Summit emphasizes realistic market alignment that supports sustainable occupancy and reduces prolonged vacancy risk.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Marketing efforts are coordinated with clear objectives and timelines. Listings, exposure strategies, and inquiry management follow structured workflows to ensure consistent representation and timely response. This approach helps maintain professionalism in the marketplace while providing owners with visibility into leasing activity without unnecessary involvement.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Tenant screening is approached with care and consistency. Financial qualifications, use compatibility, and lease obligations are evaluated against defined standards. This reduces the likelihood of future disputes and supports longer-term tenancy stability. Proper documentation and verification ensure that leasing decisions are defensible and aligned with property requirements.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Lease negotiation and documentation are handled with attention to detail. Key terms, responsibilities, and timelines are clearly defined to minimize ambiguity. Summit emphasizes clarity in lease structure to support smooth administration throughout the tenancy. When leases are properly constructed, ongoing management becomes more predictable and less reactive.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Coordination between leasing and property management is a critical element of Summit’s approach. Move-ins, tenant transitions, and operational handoffs are managed through defined procedures to ensure continuity. This reduces friction between transaction execution and daily operations, supporting a seamless tenant experience.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Financial implications of leasing decisions are considered throughout the process. Rent structures, escalations, concessions, and operating expense responsibilities are evaluated in the context of overall property performance. This integrated perspective helps owners understand not only immediate leasing outcomes, but long-term financial impact.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Summit’s leasing and brokerage services are designed for owners who value disciplined execution over volume-driven activity. The focus remains on placing appropriate tenants, structuring clear agreements, and supporting stable operations rather than maximizing short-term transactions.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Effective leasing should contribute to predictability rather than disruption. When processes are structured and aligned with management systems, leasing becomes a stabilizing component of asset performance. Summit’s approach reflects this long-term perspective.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Less Stress. Better Managed.</p>
        </div>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
        </div> */}

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
