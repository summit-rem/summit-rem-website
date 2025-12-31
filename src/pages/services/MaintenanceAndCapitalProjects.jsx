// src/pages/services/maintenance/MaintenanceAndCapitalProjects.jsx
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

export default function MaintenanceAndCapitalProjects() {
  const meta = {
    title: "Maintenance & Capital Projects",
    subtitle: "Structured oversight that protects asset condition, controls costs, and supports long-term planning.",
    heroImage: "https://www.solutionsgc.com/wp-content/uploads/commercial-engineers-pointing-at-blueprint-sketch-scaled.jpg",
    serviceNav,
    cta: { label: "See vacancies", to: "/vacancies" },
  };

  // const cards = [
  //   {
  //     title: "Preventative Maintenance Programs",
  //     text: "Scheduled inspections and service plans designed to extend asset life and prevent costly emergency repairs.",
  //   },
  //   {
  //     title: "Vendor Management & Coordination",
  //     text: "Competitive bidding, qualified vendor selection, and ongoing oversight to ensure quality work at fair pricing.",
  //   },
  //   {
  //     title: "Capital Project Planning",
  //     text: "Detailed scoping, budgeting, timeline development, and execution oversight for major improvements and replacements.",
  //   },
  //   {
  //     title: "Quality Control & Documentation",
  //     text: "On-site supervision, punch lists, warranty tracking, and full project records for long-term accountability.",
  //   },
  // ];

  return (
    <ServiceShell meta={meta}>
      <div className="space-y-8">
        <div className="rounded-3xl bg-white ring-1 ring-slate-200 p-6 sm:p-8">
          <p className="text-xs font-bold tracking-[0.22em] text-slate-500">OVERVIEW</p>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">Maintenance & Capital Projects Managed with Discipline and Foresight</h2>
          
          <p className="mt-4 text-slate-600 leading-relaxed">Maintenance and capital planning are central to preserving asset value and ensuring operational stability. When maintenance is reactive or capital projects are approached without structure, costs increase, disruptions escalate, and long-term performance suffers. Summit Real Estate Management provides maintenance and capital project oversight designed to bring predictability and control to these essential functions.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Summit’s approach emphasizes planning, documentation, and accountability. Routine maintenance, preventive care, and capital improvements are managed through clearly defined processes that support consistency and transparency. The objective is not simply to complete work, but to ensure that work is coordinated, verified, and aligned with broader asset strategy.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Routine maintenance is handled through structured workflows that govern intake, prioritization, scheduling, and follow-through. Requests are documented, assigned appropriately, and tracked through completion. This reduces repeated issues, limits deferred maintenance, and ensures that problems are addressed before they escalate into larger disruptions.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Preventive maintenance plays a key role in Summit’s management framework. Regular inspections and scheduled servicing are coordinated to protect building systems and infrastructure. By identifying issues early, Summit helps reduce emergency repairs and extend the useful life of critical components. Preventive planning supports both cost control and operational reliability.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Capital projects are approached with careful coordination and clear scope definition. From planning and budgeting through execution and closeout, Summit manages capital improvements with attention to timelines, cost alignment, and documentation. Projects are monitored to ensure work progresses as intended and aligns with approved objectives.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Vendor oversight is treated as a core component of maintenance and capital execution. Contractors and service providers are engaged through defined scopes of work, performance expectations, and verification processes. This structure supports quality control and reduces variability in outcomes.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Financial oversight is integrated into maintenance and capital planning. Budgets, expenditures, and forecasts are tracked consistently, allowing owners to evaluate cost impact and long-term implications. Clear reporting supports informed decision-making without requiring constant involvement.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Communication throughout maintenance and capital activities is deliberate and structured. Owners receive updates aligned with established reporting practices, providing visibility into progress without unnecessary detail. When expectations and information are clear, projects move forward with fewer disruptions.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Summit’s maintenance and capital project services are designed for owners who prioritize asset longevity and operational stability. By relying on disciplined systems rather than reactive responses, Summit helps properties remain functional, compliant, and well-positioned over time.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Effective maintenance and capital planning should support predictability, not introduce uncertainty. When work is managed with foresight and consistency, ownership becomes less demanding and outcomes become more reliable.</p>
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