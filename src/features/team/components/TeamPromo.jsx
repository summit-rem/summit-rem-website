import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function TeamPromo() {
  return (
    <section className="relative bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: heading */}
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.18em] text-gray-500 uppercase">
              Our Team
            </p>

            {/* NOTE: keeping same text + color as requested */}
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-black">
              Meet our team <br className="hidden md:block" />
              of property management experts.
            </h2>
          </div>

          {/* Right: copy + CTA */}
          <div className="lg:col-span-5">
            {/* Longer copy (same tone), constrained to feel ~half image length */}
            <p className="max-w-xl text-gray-600 text-base leading-relaxed">
              A dedicated team focused on performance, service, and long-term
              value. Meet the professionals who manage your property with
              precision and care—bringing responsive communication, reliable
              oversight, and thoughtful solutions that protect your investment.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <NavLink
                to="/about/team"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white bg-[var(--color-burgundy)] hover:opacity-90 transition"
              >
                Meet our team
                <ArrowRight size={16} />
              </NavLink>
            </div>
          </div>
        </div>

        {/* Image collage (two images like reference) */}
        <div className="mt-14">
          {/* Desktop/tablet overlap */}
          <div className="relative hidden md:block">
            {/* Left image ~50% */}
            <div className="w-[56%] overflow-hidden rounded-3xl bg-gray-100 ring-1 ring-black/5">
              <img
                src="/src/assets/image/header_image.jpg"
                alt="Summit team"
                className="h-[360px] w-full object-cover"
              />
            </div>

            {/* Right overlapping image ~50% */}
            <div className="absolute right-0 top-1/2 w-[56%] -translate-y-1/2">
              <div className="overflow-hidden rounded-3xl bg-white shadow-[0_18px_50px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
                <img
                  src="/src/assets/image/not_found_image.jpg"
                  alt="Summit staff"
                  className="h-[320px] w-full object-cover"
                />
              </div>
            </div>

            {/* Spacer to prevent overlap clipping */}
            <div className="h-[120px]" />
          </div>

          {/* Mobile stacked (still shows both images) */}
          <div className="md:hidden grid gap-6">
            <div className="overflow-hidden rounded-3xl bg-gray-100 ring-1 ring-black/5">
              <img
                src="/src/assets/image/header_image.jpg"
                alt="Summit team"
                className="h-[260px] w-full object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-3xl bg-white shadow-[0_18px_50px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
              <img
                src="/src/assets/image/not_found_image.jpg"
                alt="Summit staff"
                className="h-[240px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
