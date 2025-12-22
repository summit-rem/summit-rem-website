import React from "react";
import { Link } from "react-router-dom";
import { Handshake, ArrowRight } from "lucide-react";

export default function ContactRedirectCTA({
  to = "/contact",
  kicker = "Ready when you are",
  titleLeft = "Find Your Home",
  titleRight = "Get Started",
  subtitle = "Talk to our team and get answers fast — leasing, management, or general inquiries.",
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Link
          to={to}
          className={[
            "group relative block overflow-hidden rounded-2xl",
            "bg-[var(--color-burgundy)] text-white",
            "ring-1 ring-black/10",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70",
          ].join(" ")}
          aria-label="Go to Contact page"
        >
          {/* subtle gradient + watermark */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
            <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-black/20 blur-3xl" />
          </div>

          <div className="absolute right-8 top-6 opacity-[0.18]">
            <Handshake className="h-20 w-20 text-white" />
          </div>

          <div className="relative px-8 py-10 sm:py-12">
            <div className="flex items-start gap-4">
              <div className="mt-1 hidden sm:flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
                <Handshake className="h-6 w-6 text-white" />
              </div>

              <div className="flex-1">
                <p className="text-xs font-semibold tracking-wide text-white/80 uppercase">
                  {kicker}
                </p>

                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:gap-5">
                  <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                    {titleLeft}
                  </h3>

                  <div className="flex items-center gap-4">
                    <span className="h-[2px] w-16 bg-white/70 sm:w-24" />
                    <div className="inline-flex items-end gap-2">
                      <span className="text-3xl sm:text-4xl font-semibold tracking-tight underline underline-offset-8 decoration-white/70">
                        {titleRight}
                      </span>
                      <ArrowRight className="h-6 w-6 text-white/90 transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>

                <p className="mt-4 max-w-2xl text-sm sm:text-base text-white/85 leading-7">
                  {subtitle}
                </p>

                {/* micro CTA pill */}
                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm ring-1 ring-white/15">
                  <span className="font-semibold">Contact Us</span>
                  <span className="text-white/80">•</span>
                  <span className="text-white/80">Response within hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* hover affordance */}
          <div className="absolute inset-0 transition duration-200 group-hover:bg-black/10" />
        </Link>
      </div>
    </section>
  );
}
