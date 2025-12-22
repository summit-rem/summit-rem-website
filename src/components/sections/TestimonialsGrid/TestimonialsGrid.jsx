import React from "react";
import { Star } from "lucide-react";

function Stars({ count = 5 }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className="text-[var(--color-burgundy)] fill-[var(--color-burgundy)]"
        />
      ))}
    </div>
  );
}

function Card({ t }) {
  const isHighlight = t.accent === "highlight";

  return (
    <div
      className={[
        "relative rounded-2xl border bg-white p-7 shadow-sm",
        "border-black/10",
        isHighlight ? "lg:rotate-[-2deg] lg:translate-y-1" : "",
      ].join(" ")}
    >
      {/* top row */}
      <div className="flex items-start justify-between gap-4">
        <div className="text-sm font-semibold text-gray-900">{t.brand}</div>

        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-gray-900">
            {Number(t.rating).toFixed(1)}
          </span>
          <Stars count={Math.round(t.rating)} />
        </div>
      </div>

      {/* quote */}
      <p className="mt-5 text-sm leading-6 text-gray-700">
        “{t.quote}”
      </p>

      {/* footer */}
      <div className="mt-8 border-t border-black/10 pt-5">
        <div className="text-base font-semibold text-gray-900">{t.name}</div>
        <div className="text-sm text-gray-600">{t.location}</div>
      </div>
    </div>
  );
}

export default function TestimonialsGrid({
  heading,
  subheading,
  testimonials = [],
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
            {heading}
          </h2>
          {subheading ? (
            <p className="mt-3 text-sm sm:text-base text-gray-600 leading-7">
              {subheading}
            </p>
          ) : null}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <Card key={`${t.name}-${idx}`} t={t} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
