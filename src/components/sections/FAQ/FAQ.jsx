// src/components/sections/FAQ/FAQ.jsx
import React, { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ({
  title = "Frequently asked questions",
  items = [], // Will use fallback if none provided
  className = "",
}) {
  const fallbackItems = useMemo(
    () => [
      {
        q: "How do you support commercial property owners?",
        a: "We provide structured management, clear reporting, and proactive oversight, allowing owners to reduce involvement, maintain compliance, and achieve stable performance across their commercial and multifamily properties.",
      },
      {
        q: "Do you manage both commercial and residential properties?",
        a: "Yes. Summit manages commercial, multifamily, owners’ association, and mobile home park properties, applying consistent systems and documented standards across each property type we support.",
      },
      {
        q: "What reporting will owners receive regularly?",
        a: "Owners receive monthly financial reports, operational summaries, and performance reviews on a consistent schedule. Reports are clear, documented, and designed to provide visibility without requiring daily follow-up.",
      },
      {
        q: "Who will be my primary point of contact?",
        a: "Each owner is assigned a dedicated property manager as their primary contact. This individual oversees day-to-day operations, coordinates with teams, and serves as the main point for communication and decision-making.",
      },
      {
        q: "How quickly can a new property onboard?",
        a: "Onboarding timelines vary by property type and complexity, but our structured onboarding process allows for an efficient transition while ensuring records, systems, and responsibilities are properly transferred and documented.",
      },
      {
        q: "How are maintenance issues handled and tracked?",
        a: "Maintenance requests are tracked through a centralized system with defined response protocols. Preventative schedules, vendor coordination, and quality checks ensure issues are addressed promptly and documented for long-term visibility.",
      },
    ],
    []
  );

  const faqs = items.length > 0 ? items : fallbackItems;

  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  const Card = ({ item, idx }) => {
    const isOpen = openIndex === idx;

    return (
      <div
        className="rounded-2xl bg-white shadow-sm border border-gray-100 overflow-hidden cursor-pointer"
        onClick={() => toggle(idx)}
      >
        <div className="px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition">
          <h3 className="text-lg font-semibold text-gray-900 pr-4">
            {item.q}
          </h3>
          <ChevronDown
            className={[
              "h-5 w-5 text-gray-400 transition-transform duration-300",
              isOpen ? "rotate-180" : "",
            ].join(" ")}
          />
        </div>

        <div
          className={[
            "grid transition-all duration-300 ease-out",
            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          ].join(" ")}
        >
          <div className="overflow-hidden">
            <div className="px-6 pb-6 pt-2 text-base text-gray-600 leading-relaxed">
              {item.a}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Split into two columns
  const mid = Math.ceil(faqs.length / 2);
  const left = faqs.slice(0, mid).map((item, i) => ({ ...item, idx: i }));
  const right = faqs.slice(mid).map((item, i) => ({ ...item, idx: i + mid }));

  return (
    <section className={`relative bg-gray-50 py-20 lg:py-28 ${className}`}>
      <div className="mx-auto max-w-[1680px] px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
            {title}
          </h2>
          <p className="mt-5 py-2">Check out how Summit works, what to expect, and how we support consistent, well-managed properties.</p>
        </div>

        {/* FAQ Grid - Two independent columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-6">
            {left.map((item) => (
              <Card key={item.idx} item={item} idx={item.idx} />
            ))}
          </div>

          <div className="space-y-6">
            {right.map((item) => (
              <Card key={item.idx} item={item} idx={item.idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}