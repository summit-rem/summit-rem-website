import React from "react";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import ServiceShell from "./components/ServiceShell";
import { serviceNav } from "./serviceNav";

export default function CommercialBrokeragePage() {
  const meta = {
    title: "Commercial Brokerage",
    subtitle:
      "Transaction support informed by long-term asset performance, not short-term activity.",
    heroImage:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=70",
    serviceNav,
    cta: { label: "Talk to us", to: "/contact" },
  };

  return (
    <ServiceShell meta={meta}>
      <div className="space-y-8">
        <div className="rounded-3xl bg-white ring-1 ring-slate-200 p-6 sm:p-8">
          <p className="text-xs font-bold tracking-[0.22em] text-slate-500">OVERVIEW</p>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">Commercial Brokerage Guided by Operational Perspective</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">Commercial real estate transactions carry long-term consequences that extend well beyond the closing date. Acquisition and disposition decisions affect operational complexity, risk exposure, capital requirements, and long-term performance. When brokerage services focus solely on pricing or speed, important operational considerations are often overlooked.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Summit Real Estate Management provides commercial brokerage services grounded in practical, operational understanding. The firm approaches transactions with the perspective of an owner and manager, evaluating opportunities through the lens of execution, stability, and long-term viability. This approach supports informed decision-making rather than transactional momentum.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Market analysis is a central component of Summit’s brokerage services. Comparable transactions, market trends, lease structures, and demand drivers are evaluated to provide realistic context. Rather than relying on broad assumptions, Summit emphasizes grounded analysis that reflects actual operating conditions and asset-specific factors.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">For acquisitions, Summit evaluates not only market positioning, but also operational readiness. Lease structures, tenant quality, maintenance history, capital requirements, and compliance considerations are reviewed to identify risks that may not be immediately visible. This allows clients to assess potential obligations alongside projected returns.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Disposition services are approached with equal discipline. Property positioning, financial presentation, and documentation are coordinated to support clarity and credibility in the marketplace. Summit emphasizes accuracy and transparency to reduce friction during due diligence and negotiation.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Tenant representation is informed by an understanding of long-term occupancy dynamics. Lease terms are evaluated not only for immediate benefit, but for operational impact over time. This perspective supports clearer expectations and smoother lease administration following execution.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Throughout the transaction process, communication remains structured and consistent. Milestones, documentation, and timelines are managed through defined workflows to reduce uncertainty and maintain momentum without unnecessary pressure.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Summit’s commercial brokerage services are designed for clients who value clarity, risk awareness, and disciplined execution. The goal is not transaction volume, but alignment between market activity and long-term ownership objectives.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Effective brokerage should support stability rather than introduce complexity. When transactions are evaluated through an operational lens, outcomes tend to be more durable and predictable. Summit’s approach reflects this long-term view.</p>
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
