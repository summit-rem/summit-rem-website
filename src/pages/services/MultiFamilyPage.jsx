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

export default function MultiFamilyPage() {
  const meta = {
    title: "Multi-Family Residential Management",
    subtitle:
      "Disciplined systems that support occupancy, compliance, and predictable performance.",
    heroImage:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1600&q=70",
    serviceNav,
    cta: { label: "See vacancies", to: "/vacancies" },
  };

  return (
    <ServiceShell meta={meta}>
      <div className="space-y-8">
        <div className="rounded-3xl bg-white ring-1 ring-slate-200 p-6 sm:p-8">
          <p className="text-xs font-bold tracking-[0.22em] text-slate-500">OVERVIEW</p>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">Multifamily Property Management Focused on Operational Stability</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">Multifamily property management is defined by volume, repetition, and regulation. Each unit represents a combination of resident expectations, legal obligations, financial performance, and physical upkeep. When these elements are managed inconsistently, small issues compound quickly, creating operational noise, increased owner involvement, and unnecessary risk.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Summit Real Estate Management provides multifamily property management services designed to bring order and predictability to this complexity. The firm’s approach is built around structured processes that guide daily operations, reinforce compliance, and maintain consistency across properties and portfolios. The goal is not constant reaction, but steady execution that allows assets to perform reliably over time.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">At the core of Summit’s multifamily management philosophy is the belief that outcomes should not depend on individual intervention. Leasing activity, rent administration, maintenance coordination, and resident communication are managed through documented procedures that establish clear expectations and accountability. This structure ensures continuity even as staffing, market conditions, or resident turnover change.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Leasing oversight is approached with long-term performance in mind. Tenant placement, screening standards, lease documentation, and move-in coordination follow established guidelines designed to reduce early turnover and support community stability. Clear documentation and consistent enforcement help align resident expectations from the outset, minimizing friction later in the tenancy.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Rent administration and collections are managed with accuracy and consistency. Billing schedules, notices, and reconciliations are handled through standardized workflows to reduce errors and delays. When rent processes are predictable and transparent, both residents and owners benefit from fewer disputes and clearer financial visibility.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Maintenance coordination plays a critical role in resident satisfaction and asset preservation. Summit emphasizes structured intake, prioritization, scheduling, and verification of maintenance requests. Issues are tracked from initiation through completion, with documentation that supports accountability and follow-through. This reduces repeated service requests, limits deferred maintenance, and helps protect building systems over time.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Preventive maintenance is treated as an operational priority rather than an afterthought. Routine inspections and planned maintenance activities are scheduled and documented to identify issues early and control long-term costs. This approach helps reduce emergency repairs, extend asset life, and support predictable budgeting.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Regulatory compliance is a constant consideration in multifamily operations. Housing standards, safety requirements, notice periods, and documentation obligations require consistent attention. Summit manages compliance through repeatable processes that support proper recordkeeping, timely actions, and audit readiness. Rather than reacting to compliance issues after they arise, the focus remains on structured prevention.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Financial oversight is fully integrated into the management framework. Expense tracking, income reporting, reconciliations, and periodic financial statements follow consistent formats and schedules. Owners receive reporting designed to be clear, reliable, and aligned with operational activity. This allows performance to be evaluated without excessive explanation or interpretation.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Resident communication is handled through defined protocols that emphasize professionalism and consistency. Clear communication reduces misunderstandings and supports community standards. By relying on structured channels rather than informal responses, Summit helps maintain fairness and documentation while limiting escalation.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Vendor oversight is managed with the same discipline applied to internal operations. Service providers are coordinated through defined scopes of work, performance expectations, and documentation requirements. This ensures that work quality, timelines, and costs remain controlled as portfolios scale.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Summit’s multifamily property management services are designed for owners who prioritize stability over short-term fixes. The focus is on reducing operational noise, maintaining compliance, and creating predictable performance across market cycles. When systems are consistent, ownership becomes less demanding, even as complexity increases.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Effective multifamily management should not require constant oversight from ownership. When execution is disciplined and information is reliable, owners gain confidence that operations are under control. That confidence allows for better long-term planning and fewer day-to-day distractions.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">This systems-based approach has guided Summit’s multifamily management work for decades. It continues to shape how properties are operated today, quietly, consistently, and with intention.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Less Stress. Better Managed.</p>
        </div>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Card
            title="Resident Communication"
            text="Clear, documented communication that reduces escalation and improves response time."
          />
          <Card
            title="Maintenance Coordination"
            text="Work order process + vendor coordination with accountability and follow-through."
          />
          <Card
            title="Turn & Make-ready Oversight"
            text="Cleaner turns, better timelines, and fewer surprises before a unit returns to market."
          />
          <Card
            title="Owner Reporting"
            text="Simple reporting structure that answers the question: what happened, what’s next, and why."
          />
        </div> */}

        <div className="rounded-3xl bg-[#6b0f1a]/5 ring-1 ring-[#6b0f1a]/15 p-6 sm:p-8">
          <h3 className="text-xl font-extrabold text-slate-900">Ready to evaluate your property?</h3>
          <p className="mt-2 text-slate-600 leading-relaxed max-w-2xl">
            Share basic details and we’ll outline how we’d run operations, reporting, and service response.
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
