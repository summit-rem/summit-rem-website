import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const burgundy = "#6b0f1a";

function cx(...c) {
  return c.filter(Boolean).join(" ");
}

export default function ServiceShell({ meta, children }) {
  const {
    eyebrow = "OUR SERVICES",
    title,
    subtitle,
    heroImage,
    serviceNav = [],
    cta,
  } = meta;

  return (
    <section className="relative bg-white">
      {/* HERO */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left */}
          <div className="lg:col-span-5">
            <p className="text-xs font-bold tracking-[0.22em] text-slate-500">
              {eyebrow}
            </p>

            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              {title}
            </h1>

            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 max-w-xl">
              {subtitle}
            </p>

            {cta?.to ? (
              <NavLink
                to={cta.to}
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold ring-1 ring-[#6b0f1a]/30 text-[#6b0f1a] hover:bg-[#6b0f1a]/5 transition"
              >
                {cta.label}
                <ArrowRight size={16} />
              </NavLink>
            ) : null}
          </div>

          {/* Right */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl ring-1 ring-slate-200 bg-slate-100">
              <img
                src={heroImage}
                alt={title}
                className="h-[280px] sm:h-[360px] lg:h-[380px] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/15 via-black/5 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 pt-10 sm:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="rounded-3xl bg-white ring-1 ring-slate-200 overflow-hidden">
              <div className="p-6">
                <p className="text-sm font-extrabold text-slate-900">Services</p>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Explore our core service lines — designed for owners, investors, and residents.
                </p>
              </div>

              <div className="border-t border-slate-200">
                {serviceNav.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      cx(
                        "flex items-center justify-between gap-3 px-6 py-4 text-sm font-bold transition",
                        isActive
                          ? "bg-[#6b0f1a]/5 text-slate-900"
                          : "text-slate-700 hover:bg-slate-50"
                      )
                    }
                  >
                    <span className="tracking-wide">{item.label}</span>
                    <span
                      className={cx(
                        "h-6 w-6 rounded-full grid place-items-center ring-1",
                        "ring-slate-200 bg-white"
                      )}
                    >
                      <ArrowRight size={14} style={{ color: burgundy }} />
                    </span>
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Quick value card */}
            <div className="mt-6 rounded-3xl bg-slate-900 text-white p-6 shadow-sm">
              <p className="text-xs font-bold tracking-[0.22em] text-white/70">
                SUMMIT STANDARD
              </p>
              <p className="mt-3 text-lg font-extrabold">
                Operational precision. Owner-first reporting. Resident-ready service.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {[
                  "Clear monthly reporting",
                  "Proactive maintenance oversight",
                  "Compliance and vendor coordination",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="mt-0.5 text-white/80" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main */}
          <main className="lg:col-span-8">{children}</main>
        </div>
      </div>
    </section>
  );
}
