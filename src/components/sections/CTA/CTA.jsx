import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";

export default function CTA({
  title,
  subtitle,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
}) {
  return (
    <section className="mt-16">
      <div className="rounded-2xl border border-gray-200 bg-white px-8 py-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
        {subtitle ? <p className="mt-2 text-sm text-gray-600">{subtitle}</p> : null}

        <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
          {secondaryTo ? (
            <Link
              to={secondaryTo}
              className="inline-flex items-center gap-2 h-10 px-4 rounded-md border border-gray-300 text-gray-900 hover:bg-gray-50 transition cursor-pointer"
            >
              <Play size={16} />
              {secondaryLabel ?? "Learn more"}
            </Link>
          ) : null}

          {primaryTo ? (
            <Link
              to={primaryTo}
              className="inline-flex items-center gap-2 h-10 px-4 rounded-md bg-[var(--color-burgundy)] text-white hover:opacity-90 transition cursor-pointer"
            >
              {primaryLabel ?? "Get started"}
              <ArrowRight size={16} />
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
