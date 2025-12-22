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
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-black">
              Meet our team <br className="hidden md:block" />
                of property management experts.
            </h2>
          </div>

          {/* Right: copy + CTAs */}
          <div className="lg:col-span-5">
            <p className="text-gray-600 text-base leading-relaxed">
              A dedicated team focused on performance, service, and long-term
              value. Meet the professionals who manage your property with
              precision and care.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {/* Burgundy button */}
              <NavLink
                to="/about/team"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white bg-[var(--color-burgundy)] hover:opacity-90 transition"
              >
                Meet our team
                <ArrowRight size={16} />
              </NavLink>

              {/* Secondary button */}
              <NavLink
                to="/about"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium border border-gray-200 text-black hover:bg-gray-50 transition"
              >
                Know more
                <ArrowRight size={16} />
              </NavLink>
            </div>
          </div>
        </div>

        {/* Image collage */}
        <div className="relative mt-14">
          {/* Large image */}
          <div className="overflow-hidden rounded-3xl bg-gray-100">
            <img
              src="/src/assets/image/header_image.jpg"
              alt="About Summit"
              className="w-full h-[360px] md:h-[440px] object-cover"
            />
          </div>

          {/* Floating image */}
          <div className="hidden md:block absolute -bottom-14 right-6 w-[520px] max-w-[46%]">
            <div className="overflow-hidden rounded-3xl bg-white shadow-[0_18px_50px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
              <img
                src="/src/assets/image/not_found_image.jpg"
                alt="Summit team"
                className="w-full h-[280px] object-cover"
              />
            </div>
          </div>

          {/* Mobile second image stacked */}
          <div className="md:hidden mt-6 overflow-hidden rounded-3xl bg-white shadow-[0_18px_50px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
            <img
              src="/images/team/team-2.jpg"
              alt="Summit team"
              className="w-full h-[240px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
