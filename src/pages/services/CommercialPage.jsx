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
      "Structured oversight that protects asset value, supports tenant stability, and reduces owner involvement.",
    heroImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=70",
    serviceNav,
    cta: { label: "Contact us", to: "/contact" },
  };

  return (
    <ServiceShell meta={meta}>
      <div className="space-y-8">
        <Section eyebrow="OVERVIEW" title="Commercial Property Management Built on Operational Discipline">
          <p> Commercial property ownership has become increasingly operational. Compliance requirements continue to expand, tenant expectations have risen, and financial performance is now shaped as much by execution and efficiency as it is by location and rent roll. In this environment, commercial property management is most effective when the fundamentals are handled consistently and the details are managed through systems rather than personal intervention. </p> <br />
          <p> Summit Real Estate Management provides commercial property management services grounded in repeatable processes and clear accountability. The objective is straightforward: stable operations, predictable reporting, and disciplined follow-through so ownership can remain informed without being pulled into daily decision-making. Whether the asset is office, retail, industrial, or mixed-use, Summit’s approach centers on structure, documented standards that guide how work is performed and how outcomes are measured. </p> <br />
          <p> Commercial operations require reliable cadence. Routine inspections, tenant communication, vendor coordination, and lease administration are not occasional tasks, they are operational rhythms that determine whether a property feels controlled or reactive. Summit’s management framework is designed to make performance repeatable. Work orders, vendor scope, response timelines, and documentation are handled through established procedures so that service quality remains consistent across changing conditions. </p> <br />
          <p> Lease administration is handled with precision, because small inconsistencies create long-term friction. Key lease obligations, renewal timelines, notice requirements, and tenant responsibilities are monitored and managed through defined workflows. This reduces avoidable disputes and supports clarity between tenants and ownership. When expectations are documented and consistently applied, tenant relationships tend to be more stable and issues are resolved with less disruption. </p> <br />
          <p> Vendor oversight is treated as an extension of risk management. Commercial assets depend on reliable service partners, maintenance trades, janitorial, landscaping, life-safety vendors, and specialized contractors. Summit coordinates vendor relationships through clear scopes of work, documentation expectations, and performance tracking. The goal is not simply to assign tasks, but to ensure work is completed properly, verified, and aligned with budget parameters. When vendor activity is managed consistently, costs are more controllable and maintenance issues are less likely to escalate. </p> <br />
          <p> Maintenance coordination is approached with a bias toward prevention. Reactive maintenance typically costs more, not only in direct expense, but in tenant disruption and deferred performance. Summit emphasizes routine oversight, early identification of issues, and structured follow-up. Requests are triaged, scheduled, documented, and closed with verification so that maintenance outcomes do not depend on informal communication or memory. This approach supports tenant satisfaction while protecting building systems and long-term asset condition. </p> <br />
          <p> Financial management is integrated into operations rather than treated as separate reporting. Income tracking, expense coding, reconciliations, and periodic statements follow consistent schedules, with the intention of giving owners dependable visibility into performance. Reporting is designed to be clear and functional, consistent formats, dependable delivery, and alignment with actual operational activity. When reporting is predictable and understandable, ownership can make better decisions with less time and effort. </p> <br />
          <p> Risk and compliance are treated as ongoing responsibilities, not occasional checklists. Commercial properties involve regulatory obligations, insurance requirements, safety standards, and documentation expectations that vary by building type and use. Summit’s operational model emphasizes documentation and process adherence to support compliance and reduce exposure. The objective is not complexity, but control, ensuring that required steps are consistently performed, recorded, and retrievable. </p> <br />
          <p> Summit’s commercial property management service is designed for owners who value stability over improvisation. The work is structured so that outcomes remain consistent regardless of market shifts, tenant turnover, or portfolio growth. The property should not feel unpredictable simply because ownership is not present. When management systems are durable, ownership becomes easier, not because issues disappear, but because oversight is consistent and information is reliable. </p>
          <p> Effective commercial property management should feel uneventful in the best possible way. When systems run properly, communication is clear, and execution is disciplined, owners spend less time managing the manager, and more time focusing on strategy. That is the practical purpose behind Summit’s approach. </p>
    </Section>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
        </div> */}

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
