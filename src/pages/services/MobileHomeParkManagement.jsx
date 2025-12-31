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
    subtitle: "Structured operations that support compliance, infrastructure integrity, and long-term performance.",
    heroImage: "https://blog.hignellhoa.com/hubfs/An%20HOA%20board%20meeting%20at%20an%20outdoor%20table%20with%20laptops.jpg",
    serviceNav,
    cta: { label: "See vacancies", to: "/vacancies" },
  };

  // const cards = [
  //   {
  //     title: "Lot Rent Collection",
  //     text: "Streamlined billing, online payments, and consistent enforcement of rent policies.",
  //   },
  //   {
  //     title: "Community Maintenance",
  //     text: "Roads, common areas, utilities, and landscaping kept in good condition through scheduled upkeep.",
  //   },
  //   {
  //     title: "Rule Enforcement",
  //     text: "Fair, documented application of community guidelines to support resident satisfaction and property standards.",
  //   },
  //   {
  //     title: "Resident Communication",
  //     text: "Clear notices, portal access, and responsive support for day-to-day concerns.",
  //   },
  // ];

  return (
    <ServiceShell meta={meta}>
      <div className="space-y-8">
        <div className="rounded-3xl bg-white ring-1 ring-slate-200 p-6 sm:p-8">
          <p className="text-xs font-bold tracking-[0.22em] text-slate-500">OVERVIEW</p>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Mobile Home Park Management Grounded in Consistency and Control
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">Mobile home park ownership presents a distinct set of operational and regulatory challenges. Unlike other residential asset classes, mobile home parks often involve layered compliance requirements, aging infrastructure, and long-term tenancies that require careful coordination. When management lacks structure, these complexities can quickly create risk, inefficiency, and increased owner involvement.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Summit Real Estate Management provides mobile home park management services designed to bring clarity and predictability to this specialized asset type. The firm’s approach is built around disciplined systems that support compliance, infrastructure oversight, tenant relations, and financial transparency. The objective is steady execution that protects asset value and reduces operational uncertainty over time.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Regulatory compliance is a central consideration in mobile home park operations. Rent regulations, notice requirements, infrastructure standards, and documentation obligations must be addressed accurately and consistently. Summit manages these responsibilities through documented procedures that ensure compliance tasks are tracked, completed, and recorded. This reduces exposure and helps owners remain aligned with evolving regulatory expectations.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Infrastructure oversight is particularly critical in mobile home parks. Roads, utilities, drainage systems, and common areas require ongoing monitoring and maintenance. Summit coordinates inspections and maintenance activities through structured workflows designed to identify issues early and prevent escalation. Preventive maintenance is emphasized to reduce costly repairs and service disruptions.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Tenant communication and rent administration are handled with clarity and consistency. Policies are applied uniformly, expectations are documented, and communication follows established protocols. This approach helps reduce disputes and supports long-term tenancy stability while maintaining appropriate enforcement of park rules and agreements.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Maintenance coordination extends beyond individual homes to include shared infrastructure and community assets. Summit manages vendor relationships with defined scopes of work, performance expectations, and verification processes. This structure supports cost control, work quality, and reliable follow-through.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Financial management is integrated into operational oversight. Income tracking, expense monitoring, reconciliations, and reporting follow consistent schedules and formats. Owners receive dependable financial information that reflects actual operational conditions rather than estimates or delayed summaries.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Summit’s mobile home park management services are designed for owners seeking stability in a complex environment. By relying on systems rather than informal practices, operations remain steady even as regulatory conditions or tenancy patterns change.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Effective mobile home park management should not feel reactive. When processes are documented and execution is disciplined, ownership becomes more predictable and less time-consuming. Summit’s approach is focused on delivering that predictability through consistent, long-term management.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Less Stress. Better Managed.</p>
        </div>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
        </div> */}

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