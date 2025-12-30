// src/components/sections/TestimonialsGrid/TestimonialsGrid.jsx
import React from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonialsConfig } from "../../../features/testimonials/config/testimonialsConfig";

const BURGUNDY = "#7a1f2b";

function Stars({ rating = 5 }) {
  const fullStars = Math.floor(rating);
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={20}
          className={i < fullStars ? "fill-[#7a1f2b] text-[#7a1f2b]" : "text-gray-300"}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ t }) {
  return (
    <div className="h-full rounded-3xl bg-white p-10 shadow-xl border border-gray-100 flex flex-col justify-between">
      {/* Top: Rating + Company */}
      <div>
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Stars rating={t.rating} />
              <span className="text-lg font-bold text-gray-900">
                {t.rating.toFixed(1)}
              </span>
            </div>
            <p className="text-lg font-semibold text-gray-900">{t.brand}</p>
          </div>
        </div>

        {/* Quote - Smaller text */}
        <blockquote className="flex-1">
          <p className="text-base leading-relaxed text-gray-700 italic">
            "{t.quote}"
          </p>
        </blockquote>
      </div>

      {/* Bottom: Author */}
      <div className="mt-10 pt-8 border-t border-gray-200">
        <p className="text-lg font-bold text-gray-900">{t.name}</p>
        {t.title && <p className="text-base text-gray-600 mt-1">{t.title}</p>}
      </div>
    </div>
  );
}

export default function TestimonialsGrid() {
  const testimonials = testimonialsConfig.testimonials;
  const heading = "Trusted by property owners and investors for over two decades.";
  const subheading =
    "Real feedback from property owners and investors who rely on Summit for consistent management, clear communication, and dependable results across commercial and multifamily properties.";

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const cardsToShow = 2;
  const totalSlides = Math.ceil(testimonials.length / cardsToShow);

  const next = () => setCurrentIndex((prev) => (prev + 1) % totalSlides);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

  const visibleTestimonials = testimonials.slice(
    currentIndex * cardsToShow,
    currentIndex * cardsToShow + cardsToShow
  );

  // Duplicate for seamless loop
  while (visibleTestimonials.length < cardsToShow) {
    visibleTestimonials.push(testimonials[visibleTestimonials.length % testimonials.length]);
  }

  return (
    <section className="relative bg-[#7a1f2b] py-20 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1680px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* LEFT: Heading (40%) */}
          <div className="lg:col-span-5 text-white">
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              {heading}
            </h2>
            <p className="mt-6 text-lg lg:text-xl leading-relaxed text-white/90">
              {subheading}
            </p>
          </div>

          {/* RIGHT: Slider (60%) */}
          <div className="lg:col-span-7 relative">
            {/* Cards - Fixed height, 2 visible */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
              {visibleTestimonials.map((t, idx) => (
                <div key={`${currentIndex}-${idx}`} className="h-full">
                  <TestimonialCard t={t} />
                </div>
              ))}
            </div>

            {/* Side Arrows - Aligned to card center */}
            {testimonials.length > cardsToShow && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 p-4 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur transition"
                  aria-label="Previous"
                >
                  <ChevronLeft className="h-8 w-8 text-white" />
                </button>
                <button
                  onClick={next}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 p-4 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur transition"
                  aria-label="Next"
                >
                  <ChevronRight className="h-8 w-8 text-white" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}