import React from "react";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import ServiceShell from "./components/ServiceShell";
import { serviceNav } from "./serviceNav";

export default function AccountingFinancialReportingPage() {
  const meta = {
    title: "Accounting & Financial Reporting",
    subtitle:
      "Reliable reporting isn’t a bonus — it’s the foundation. We provide structured statements and clear reporting that supports owner decisions.",
    heroImage:
      "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&w=1600&q=70",
    serviceNav,
    cta: { label: "Contact us", to: "/contact" },
  };

  return (
    <ServiceShell meta={meta}>
      <div className="space-y-8">
        <div className="rounded-3xl bg-white ring-1 ring-slate-200 p-6 sm:p-8">
          <p className="text-xs font-bold tracking-[0.22em] text-slate-500">CLARITY</p>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Statements that answer “what happened” — and “what’s next”
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            We focus on consistent categorization, clean documentation, and a reporting rhythm owners can trust.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            ["Monthly Owner Statements", "Clear summaries with predictable structure month to month."],
            ["Expense Documentation", "Vendor invoices and documentation organized for review."],
            ["Budget Support", "Simple forecasting and planning support when needed."],
            ["Reporting Discipline", "Reliable delivery and cleaner communication around variances."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-3xl bg-white ring-1 ring-slate-200 p-6">
              <h3 className="text-lg font-extrabold text-slate-900">{t}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl bg-[#6b0f1a]/5 ring-1 ring-[#6b0f1a]/15 p-6 sm:p-8">
          <h3 className="text-xl font-extrabold text-slate-900">
            Want cleaner reporting on your portfolio?
          </h3>
          <p className="mt-2 text-slate-600 leading-relaxed max-w-2xl">
            We can show you exactly what the owner statement cadence looks like and how exceptions are handled.
          </p>

          <NavLink
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-extrabold text-[#6b0f1a] ring-1 ring-[#6b0f1a]/30 hover:bg-[#6b0f1a]/5 transition"
          >
            Talk to us
            <ArrowRight size={16} className="text-[#6b0f1a]" />
          </NavLink>
        </div>
      </div>
    </ServiceShell>
  );
}
