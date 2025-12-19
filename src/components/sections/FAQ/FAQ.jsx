import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

function Row({ item, open, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="w-full text-left rounded-2xl border border-gray-200 bg-white px-5 py-4 flex items-start justify-between gap-4 hover:border-gray-300 transition cursor-pointer"
    >
      <div>
        <div className="font-semibold text-gray-900">{item.q}</div>
        {open ? (
          <div className="mt-2 text-sm text-gray-600 leading-6">{item.a}</div>
        ) : null}
      </div>

      <ChevronDown
        size={18}
        className={`mt-1 shrink-0 transition ${open ? "rotate-180" : ""}`}
      />
    </button>
  );
}

export default function FAQ({ title = "Frequently asked questions", items = [] }) {
  const [openIndex, setOpenIndex] = useState(items.length ? 0 : -1);

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold text-gray-900 text-center">
        {title}
      </h2>

      <div className="mt-8 mx-auto max-w-3xl space-y-3">
        {items.map((item, idx) => (
          <Row
            key={item.q}
            item={item}
            open={openIndex === idx}
            onToggle={() => setOpenIndex(openIndex === idx ? -1 : idx)}
          />
        ))}
      </div>
    </section>
  );
}
