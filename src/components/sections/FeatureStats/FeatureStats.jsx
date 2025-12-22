import React from "react";

export default function FeatureStats({ stats }) {
  return (
    // <section className="bg-[#f6f1e6]">
    <section>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-semibold tracking-tight text-gray-900">
                {s.value}
              </div>
              <div className="mt-2 text-sm font-semibold text-gray-900">
                {s.label}
              </div>
              <p className="mt-4 text-sm text-gray-700 leading-6">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
