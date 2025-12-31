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
    subtitle: "Objective guidance grounded in operational experience and practical analysis.",
    heroImage: "https://blog.hignellhoa.com/hubfs/An%20HOA%20board%20meeting%20at%20an%20outdoor%20table%20with%20laptops.jpg",
    serviceNav,
    cta: { label: "See vacancies", to: "/vacancies" },
  };

  // const cards = [
  //   {
  //     title: "Portfolio Strategy",
  //     text: "Analysis of hold/sell decisions, capital allocation, and long-term positioning.",
  //   },
  //   {
  //     title: "Acquisition Due Diligence",
  //     text: "Operational review, financial modeling, and risk assessment for potential purchases.",
  //   },
  //   {
  //     title: "Value-Add Planning",
  //     text: "Identification of improvement opportunities and execution roadmaps to increase asset performance.",
  //   },
  //   {
  //     title: "Transition Support",
  //     text: "Management handover planning, system setup, and team coordination during ownership changes.",
  //   },
  // ];

  return (
    <ServiceShell meta={meta}>
      <div className="space-y-8">
        <div className="rounded-3xl bg-white ring-1 ring-slate-200 p-6 sm:p-8">
          <p className="text-xs font-bold tracking-[0.22em] text-slate-500">OVERVIEW</p>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">Real Estate Advisory Services Focused on Clarity and Execution</h2>
          
          <p className="mt-4 text-slate-600 leading-relaxed">Real estate decisions are often made in environments where information is incomplete, timelines are compressed, and long-term implications are difficult to fully assess. In these situations, owners benefit from advisory support that is grounded in practical experience rather than theoretical modeling alone. Summit Real Estate Management provides real estate advisory services designed to bring clarity, structure, and informed perspective to complex decisions.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Summit’s advisory work is shaped by decades of hands-on property management and operational oversight across multiple asset types. This experience informs how recommendations are developed and evaluated. Rather than offering abstract strategies, Summit focuses on practical considerations that influence execution, risk, and long-term performance.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Advisory services may support owners during acquisition evaluation, operational restructuring, portfolio review, or strategic planning. Each engagement begins with a careful assessment of the asset’s operational condition, financial performance, and compliance posture. This foundational analysis allows recommendations to be grounded in current realities rather than assumptions.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Operational assessments focus on identifying inconsistencies, inefficiencies, or exposure points within existing management structures. Policies, workflows, vendor relationships, and reporting practices are reviewed to determine where systems can be strengthened or simplified. The goal is not to introduce unnecessary complexity, but to reinforce control and predictability.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Financial analysis within advisory engagements emphasizes clarity. Income trends, expense patterns, reserve planning, and capital requirements are evaluated to support informed decision-making. Summit places importance on aligning financial insights with operational capacity, ensuring that recommendations are achievable in practice.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Regulatory and compliance considerations are addressed as part of broader risk assessment. Advisory guidance includes identifying documentation gaps, procedural weaknesses, or regulatory exposure that may affect asset performance or transaction outcomes. Addressing these issues early helps reduce future disruption.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Summit’s advisory services are intentionally objective. Recommendations are developed to serve the owner’s long-term interests, not to drive transaction volume or short-term activity. This independence supports clearer decision-making and reduces pressure to act prematurely.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Communication throughout advisory engagements is structured and deliberate. Findings are presented clearly, supported by documentation and analysis that owners can evaluate with confidence. The emphasis remains on transparency and practical application.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Summit’s real estate advisory services are designed for owners seeking clarity in complex environments. By grounding advice in operational reality, Summit helps clients make decisions that are durable, defensible, and aligned with long-term objectives.</p>
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