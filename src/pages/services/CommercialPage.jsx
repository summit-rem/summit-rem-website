import React from "react";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import ServiceShell from "./components/ServiceShell";
import { serviceNav } from "./serviceNav";

const burgundy = "#6b0f1a";

function Section({ eyebrow, title, children }) {
  return (
    <section className="rounded-3xl bg-white ring-1 ring-slate-200 p-6 sm:p-8">
      <p className="text-xs font-bold tracking-[0.22em] text-slate-500">{eyebrow}</p>
      <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
        {title}
      </h2>
      <div className="mt-4 text-slate-600 leading-relaxed">{children}</div>
    </section>
  );
}

export default function CommercialPage() {
  const meta = {
    eyebrow: "OUR SERVICES",
    title: "Commercial Property Management",
    subtitle:
      "Full-service commercial management focused on performance, tenant stability, and clean financial visibility — built for owners who expect disciplined execution.",
    heroImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=70",
    serviceNav,
    cta: { label: "Contact us", to: "/contact" },
  };

  return (
    <ServiceShell meta={meta}>
      <div className="space-y-8">
        <Section eyebrow="OVERVIEW" title="Owner-first operations, tenant-ready service">
          <p>
            We coordinate day-to-day operations, vendor oversight, maintenance planning, and tenant
            communication while keeping owners informed with consistent reporting and clear timelines.
          </p>
        </Section>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              title: "Operational Management",
              text: "Work orders, inspections, vendor coordination, and proactive upkeep to protect asset condition.",
            },
            {
              title: "Financial Visibility",
              text: "Structured statements, reconciliations, and reporting built for decision-making — not confusion.",
            },
            {
              title: "Tenant Relations",
              text: "Clear communication, service response, and documentation to support retention and compliance.",
            },
            {
              title: "Compliance & Risk",
              text: "Documentation, vendor insurance tracking, and process discipline that reduces preventable issues.",
            },
          ].map((f) => (
            <div key={f.title} className="rounded-3xl bg-white ring-1 ring-slate-200 p-6">
              <h3 className="text-lg font-extrabold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl bg-[#6b0f1a] text-white p-6 sm:p-8 overflow-hidden relative">
          <div className="relative">
            <p className="text-xs font-bold tracking-[0.22em] text-white/70">NEXT STEP</p>
            <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight">
              Talk to our management team
            </h3>
            <p className="mt-3 text-white/85 max-w-2xl leading-relaxed">
              Tell us what you own (or plan to acquire). We’ll outline a clean operating plan and the
              reporting structure you’ll receive.
            </p>

            <NavLink
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-extrabold text-[#6b0f1a] hover:bg-white/90 transition"
            >
              Get in touch
              <ArrowRight size={16} style={{ color: burgundy }} />
            </NavLink>
          </div>
        </div>
      </div>
    </ServiceShell>
  );
}
