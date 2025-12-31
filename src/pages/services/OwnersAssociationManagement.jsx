// src/pages/services/hoa/OwnersAssociationManagement.jsx
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

export default function OwnersAssociationManagement() {
  const meta = {
    title: "Owners’ Association Management",
    description: "Disciplined administrative support that strengthens governance and reduces operational risk.",
    heroImage: "https://blog.hignellhoa.com/hubfs/An%20HOA%20board%20meeting%20at%20an%20outdoor%20table%20with%20laptops.jpg",
    serviceNav,
    cta: { label: "See vacancies", to: "/vacancies" },
  };

  const cards = [
    {
      title: "Governance & Compliance",
      text: "We enforce rules, manage board meetings, and ensure adherence to governing documents and local laws.",
    },
    {
      title: "Financial Management",
      text: "Budget preparation, dues collection, reserve planning, and transparent monthly financial reports.",
    },
    {
      title: "Community Communication",
      text: "Regular updates, violation notices, and resident portal access to reduce friction and improve satisfaction.",
    },
    {
      title: "Vendor & Project Oversight",
      text: "Coordinated maintenance, competitive bidding, and supervision of common-area projects.",
    },
  ];

  return (
      <ServiceShell meta={meta}>
        <div className="space-y-8">
          <div className="rounded-3xl bg-white ring-1 ring-slate-200 p-6 sm:p-8">
            <p className="text-xs font-bold tracking-[0.22em] text-slate-500">OVERVIEW</p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">Owners’ Association Management Built on Structure and Accountability</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">Owners’ associations operate within a uniquely demanding environment. Boards are responsible for legal compliance, financial stewardship, vendor oversight, and the long-term maintenance of shared assets, often while relying on volunteer leadership that changes over time. Without structured management, these responsibilities can quickly become fragmented, creating uncertainty, exposure, and unnecessary strain on board members.</p>
            <p className="mt-4 text-slate-600 leading-relaxed">Summit Real Estate Management provides owners’ association management services designed to bring clarity and continuity to this complexity. The firm’s approach emphasizes documented procedures, consistent communication, and reliable financial oversight so that associations can function smoothly regardless of board turnover or external pressures.</p>
            <p className="mt-4 text-slate-600 leading-relaxed">At the foundation of Summit’s association management model is governance support. Meetings, elections, records, and decision-making processes are coordinated through established workflows that ensure compliance with governing documents and applicable regulations. By maintaining accurate records and consistent administrative practices, boards are better positioned to make informed decisions without being overwhelmed by operational detail.</p>
            <p className="mt-4 text-slate-600 leading-relaxed">Financial management is a critical responsibility for any owners’ association. Summit manages budgeting, assessments, reconciliations, reserve coordination, and financial reporting with accuracy and consistency. Reporting is structured to provide clear visibility into association finances, supporting transparency for both board members and owners. When financial information is reliable and timely, confidence in governance increases.</p>
            <p className="mt-4 text-slate-600 leading-relaxed">Vendor coordination is handled with an emphasis on accountability and documentation. Associations depend on a range of service providers for maintenance, landscaping, repairs, and capital improvements. Summit coordinates vendor relationships through defined scopes of work, performance expectations, and verification procedures. This reduces ambiguity, helps control costs, and ensures work aligns with board directives.</p>
            <p className="mt-4 text-slate-600 leading-relaxed">Maintenance oversight is approached systematically. Routine maintenance, inspections, and repair coordination are tracked and documented to support consistency and long-term planning. Issues are addressed within defined processes, reducing the likelihood of deferred maintenance or reactive decision-making that can strain budgets and community relations.</p>
            <p className="mt-4 text-slate-600 leading-relaxed">Communication is a frequent challenge within owners’ associations. Summit establishes structured communication protocols that balance responsiveness with professionalism and documentation. Notices, updates, and inquiries are handled consistently, reducing misunderstandings and ensuring that information is distributed fairly and accurately.</p>
            <p className="mt-4 text-slate-600 leading-relaxed">Rule enforcement and compliance are managed with clarity and impartiality. Governing documents and policies are applied consistently to support fairness and reduce conflict. When enforcement follows documented standards rather than individual discretion, associations are better able to maintain community standards while limiting escalation.</p>
            <p className="mt-4 text-slate-600 leading-relaxed">Summit’s owners’ association management services are designed to reduce operational burden on volunteer boards. By handling administrative execution through established systems, Summit allows board members to focus on governance rather than day-to-day management tasks.</p>
            <p className="mt-4 text-slate-600 leading-relaxed">The objective is not to introduce complexity, but to remove it. When systems are clear and responsibilities are defined, associations operate with greater stability and fewer disruptions. Ownership confidence increases, governance improves, and long-term planning becomes more achievable.</p>
            <p className="mt-4 text-slate-600 leading-relaxed">This structured approach reflects Summit’s long-term view of association management: steady execution, clear documentation, and disciplined oversight that supports communities over time.</p>
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