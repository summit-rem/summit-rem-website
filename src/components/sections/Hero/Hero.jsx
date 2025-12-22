import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Star,
  LogIn,
  Home as HomeIcon,
  Mail,
  Quote,
} from "lucide-react";

function StatCard({ className = "", children }) {
  return (
    <div
      className={[
        "rounded-2xl border border-[var(--color-border)] bg-white shadow-sm",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

export default function Hero({ data }) {
  const {
    pill,
    title,
    subtitle,
    primaryCta,
    cards,
    heroImage,
  } = data;

  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left */}
          <div className="lg:col-span-7">
            {/* pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-sm">
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: "var(--color-burgundy)" }}
              />
              <span className="text-[var(--color-ink)] font-medium">{pill}</span>
            </div>

            {/* heading */}
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[var(--color-ink)]">
              {title.before}{" "}
              <span className="relative inline-block">
                <span className="relative z-10">{title.highlight}</span>
                <span
                  className="absolute left-0 right-0 -bottom-2 h-1 rounded-full opacity-80"
                  style={{ background: "var(--color-burgundy)" }}
                />
              </span>{" "}
              {title.after}
            </h1>

            <p className="mt-5 max-w-2xl text-base sm:text-lg text-[var(--color-muted)]">
              {subtitle}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to={primaryCta.to}
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
                style={{ background: "var(--color-burgundy)" }}
              >
                <LogIn size={18} />
                {primaryCta.label}
              </Link>
            </div>

            {/* bottom cards */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* rating */}
              <StatCard className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-gray-500">
                      {cards.rating.kicker}
                    </div>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="text-4xl font-semibold text-[var(--color-ink)]">
                        {cards.rating.value}
                      </div>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            size={18}
                            style={{ color: "var(--color-burgundy)" }}
                            fill="currentColor"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-[var(--color-muted)]">
                      {cards.rating.caption}
                    </p>
                  </div>

                  <div
                    className="rounded-xl p-3"
                    style={{ background: "rgba(107,18,32,0.08)" }}
                  >
                    <Quote size={20} style={{ color: "var(--color-burgundy)" }} />
                  </div>
                </div>

                <Link
                  to={cards.rating.to}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold"
                  style={{ color: "var(--color-burgundy)" }}
                >
                  {cards.rating.cta}
                  <ArrowRight size={18} />
                </Link>
              </StatCard>

              {/* team */}
              <StatCard className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm font-semibold text-[var(--color-ink)]">
                      {cards.team.title}
                    </div>
                    <p className="mt-2 text-sm text-[var(--color-muted)]">
                      {cards.team.caption}
                    </p>
                  </div>
                  <div
                    className="rounded-xl p-3"
                    style={{ background: "rgba(107,18,32,0.08)" }}
                  >
                    <Users size={20} style={{ color: "var(--color-burgundy)" }} />
                  </div>
                </div>

                <Link
                  to={cards.team.to}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold"
                  style={{ color: "var(--color-burgundy)" }}
                >
                  {cards.team.cta}
                  <ArrowRight size={18} />
                </Link>
              </StatCard>
            </div>
          </div>

          {/* Right image */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div
                className="relative overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-white shadow-sm"
                style={{ minHeight: 650 }}
              >
                {/* Image */}
                <img
                  src={heroImage.src}
                  alt={heroImage.alt}
                  className="h-full w-full object-cover"
                  style={{ minHeight: 650 }}
                />

                {/* Subtle gradient for legibility */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

                {/* Story Card Overlay */}
                <div className="absolute left-5 right-5 bottom-5">
                  <div className="rounded-2xl border border-white/20 bg-white/90 backdrop-blur-md shadow-sm p-4 sm:p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-xs uppercase tracking-wider text-gray-500">
                          About Summit
                        </div>
                        <div className="mt-1 text-lg sm:text-xl font-semibold text-[var(--color-ink)] leading-snug">
                          {heroImage.title || "Our Story"}
                        </div>
                        <p className="mt-2 text-sm text-[var(--color-muted)] leading-6">
                          {heroImage.note}
                        </p>
                      </div>

                      <Link
                        to={heroImage.storyTo || "/about/story"}
                        className="shrink-0 inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
                        style={{ background: "var(--color-burgundy)" }}
                        aria-label="Go to Our Story"
                      >
                        {heroImage.storyLabel || "Read our story"}
                        <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
