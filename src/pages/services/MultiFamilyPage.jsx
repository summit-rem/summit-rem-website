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
      "Resident experience and owner performance should never compete. We run operations with service discipline, strong documentation, and reliable reporting.",
    heroImage:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1600&q=70",
    serviceNav,
    cta: { label: "See vacancies", to: "/vacancies" },
  };

  return (
    <ServiceShell meta={meta}>
      <div className="space-y-8">
        <div className="rounded-3xl bg-white ring-1 ring-slate-200 p-6 sm:p-8">
          <p className="text-xs font-bold tracking-[0.22em] text-slate-500">WHAT WE DO</p>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Strong leasing support + consistent property operations
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            We manage resident communication, maintenance coordination, vendor oversight, and
            documentation — while keeping owners informed with structured reporting and clear timelines.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
        </div>

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
