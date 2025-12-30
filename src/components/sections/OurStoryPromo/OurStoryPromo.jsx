// src/components/sections/OurStoryPromo/OurStoryPromo.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ourStoryConfig } from "../../../pages/home/config/ourStoryConfig";

const BURGUNDY = "#7a1f2b";

export default function OurStoryPromo() {
  const { title, description, features, cta, image } = ourStoryConfig;

  return (
    <section className="relative bg-gray-50 py-16 lg:py-20">
      <div className="mx-auto max-w-[1680px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* LEFT - Image */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* RIGHT - Content */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            {/* Eyebrow - Matches "OUR SERVICES" exactly */}
            <p className="text-sm uppercase tracking-wide text-gray-500 mb-4">
              Our Story
            </p>

            {/* Heading - EXACT match to Services: text-4xl font-semibold */}
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 leading-tight">
              {title.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h2>

            {/* Description */}
            <p className="mt-6 text-base leading-relaxed text-gray-600 max-w-xl">
              {description}
            </p>

            {/* Features */}
            <div className="mt-8 space-y-8">
              {features.map((feature, index) => (
                <div key={index}>
                  <h3 className="text-lg font-medium text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-gray-600">
                    {feature.description}
                  </p>
                  {index < features.length - 1 && (
                    <div className="mt-4 h-px bg-gray-200" />
                  )}
                </div>
              ))}
            </div>

            {/* CTA - EXACT compact pill match to Services: px-6 py-3 text-sm, but with burgundy bg/white text */}
            <NavLink
              to={cta.to}
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#7a1f2b] rounded-full hover:bg-[#5e1621] transition"
            >
              {cta.label}
              <ArrowRight className="h-4 w-4" />
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}