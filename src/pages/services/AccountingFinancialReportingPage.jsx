import React from "react";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import ServiceShell from "./components/ServiceShell";
import { serviceNav } from "./serviceNav";

export default function AccountingFinancialReportingPage() {
  const meta = {
    title: "Accounting & Financial Reporting",
    subtitle:
      "Reliable financial systems that support informed ownership and disciplined oversight.",
    heroImage:
      "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&w=1600&q=70",
    serviceNav,
    cta: { label: "Contact us", to: "/contact" },
  };

  return (
    <ServiceShell meta={meta}>
      <div className="space-y-8">
        <div className="rounded-3xl bg-white ring-1 ring-slate-200 p-6 sm:p-8">
          <p className="text-xs font-bold tracking-[0.22em] text-slate-500">OVERVIEW</p>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Accounting & Financial Reporting Built for Clarity and Control
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">Accurate financial information is essential to effective property ownership. Without clear, timely, and consistent reporting, even well-performing assets can become difficult to manage. Summit Real Estate Management provides accounting and financial reporting services designed to bring structure, transparency, and reliability to property finances across all asset types.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Income tracking and expense management are handled with care and precision. Rent collections, assessments, reimbursements, and other income sources are monitored consistently, while expenses are coded and reconciled according to established standards. This allows owners to understand not only totals, but underlying trends that influence performance.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Financial reporting follows defined schedules and formats. Monthly and periodic statements are delivered predictably, allowing owners to review performance without delays or uncertainty. Reports are designed to be clear and functional, supporting analysis rather than requiring interpretation. When reporting is consistent, comparisons across periods and properties become more meaningful.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Reconciliations and controls play a critical role in maintaining financial integrity. Summit emphasizes regular reconciliation of accounts and documentation to support accuracy and accountability. These controls help identify discrepancies early and reduce the likelihood of compounding issues.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Budgeting and forecasting are approached as practical planning tools. Historical data, current conditions, and operational requirements are evaluated to support realistic projections. Rather than aspirational targets, budgets are designed to align with actual operating capacity and maintenance needs.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Summit’s accounting services are integrated with property management operations. Financial data is aligned with maintenance activity, leasing performance, and vendor coordination, providing a more complete picture of asset health. This integration supports better decision-making and clearer communication with ownership.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Transparency is a central principle of Summit’s financial reporting. Owners receive information that is complete, consistent, and accessible. When financial systems are dependable, ownership can focus on strategy rather than verification.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Summit’s accounting and financial reporting services are designed for owners who value clarity over complexity. By emphasizing disciplined execution and reliable systems, Summit supports confident oversight and long-term planning.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Less Stress. Better Managed.</p>
        </div>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
        </div> */}

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
