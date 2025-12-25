import React, { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";

/**
 * FAQ
 * - Desktop: 2 independent columns (prevents "row height" gaps when one item is expanded)
 * - Mobile: 1 column
 * - First item open by default
 * - Single-open behavior (opening one closes others)
 */
export default function FAQ({
  title = "Frequently asked questions",
  items,
  className = "",
}) {
  const fallbackItems = useMemo(
    () => [
      {
        q: "Is there a free trial available?",
        a: "Yes — we can provide a short trial to evaluate fit. Contact support and we’ll set it up.",
      },
      {
        q: "Can I change my plan later?",
        a: "Yes. You can upgrade or downgrade anytime based on your portfolio needs.",
      },
      {
        q: "How quickly can you onboard a new property?",
        a: "Most properties can be onboarded within 7–14 days depending on documentation, inspections, and access setup.",
      },
      {
        q: "Do you manage both commercial and residential?",
        a: "Yes. We manage commercial assets and multi-family residential properties with dedicated teams and reporting.",
      },
      {
        q: "What reports will I receive as an owner?",
        a: "You’ll receive monthly financial statements, rent roll summaries, maintenance updates, and year-end reporting as needed.",
      },
      {
        q: "How do I pay rent or request maintenance?",
        a: "Residents can use the online portal to pay rent securely and submit maintenance requests with status updates.",
      },
    ],
    []
  );

  const data = (items?.length ? items : fallbackItems).slice(0, 6);

  // First one open by default
  const [openIndex, setOpenIndex] = useState(0);

  // Split into two independent columns to avoid grid row-height gaps
  const left = [];
  const right = [];
  data.forEach((item, idx) => {
    const payload = { ...item, idx };
    if (idx % 2 === 0) left.push(payload);
    else right.push(payload);
  });

  const Card = ({ item }) => {
    const isOpen = openIndex === item.idx;

    return (
      <div
        className={[
          "rounded-2xl border border-gray-200 bg-white shadow-sm",
          "transition-shadow duration-200 hover:shadow-md",
        ].join(" ")}
      >
        <button
          type="button"
          onClick={() => setOpenIndex((prev) => (prev === item.idx ? -1 : item.idx))}
          className={[
            "w-full flex items-center justify-between gap-4",
            "px-6 py-5 text-left",
          ].join(" ")}
          aria-expanded={isOpen}
        >
          <span className="text-[15px] sm:text-base font-semibold text-slate-900">
            {item.q}
          </span>

          <span
            className={[
              "flex h-9 w-9 items-center justify-center rounded-full",
              "border border-gray-200 bg-white",
              "transition-transform duration-200",
              isOpen ? "rotate-180" : "rotate-0",
            ].join(" ")}
            aria-hidden="true"
          >
            <ChevronDown className="h-4 w-4 text-slate-700" />
          </span>
        </button>

        <div
          className={[
            "grid transition-[grid-template-rows] duration-200 ease-out",
            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          ].join(" ")}
        >
          <div className="overflow-hidden">
            <div className="px-6 pb-5 text-sm sm:text-[15px] text-slate-600 leading-relaxed">
              {item.a}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className={["w-full", className].join(" ")}>
      <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-8 xl:px-0 py-14 sm:py-16">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold text-slate-900">
          {title}
        </h2>

        <div className="mt-10">
          {/* Mobile: single column | Desktop: two independent columns (no gap issue) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-7 items-start">
            <div className="flex flex-col gap-6 lg:gap-7">
              {left.map((item) => (
                <Card key={item.idx} item={item} />
              ))}
            </div>

            <div className="flex flex-col gap-6 lg:gap-7">
              {right.map((item) => (
                <Card key={item.idx} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
