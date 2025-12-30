// src/components/sections/FeatureStats/FeatureStats.jsx
import React from "react";

export default function FeatureStats() {
  const stats = [
    {
      value: "4.0M+",
      label: "Square Feet Managed",
      description: "Office, retail, industrial, and owners’ association properties managed with consistent oversight.",
    },
    {
      value: "2,000+",
      label: "Residential Units Managed",
      description: "Apartment communities and mobile home park spaces supported through structured operations.",
    },
    {
      value: "Since 2000",
      label: "Years of Experience",
      description: "More than two decades managing properties through changing markets and regulations.",
    },
    {
      value: "Long-Term Clients",
      label: "Trusted Relationships",
      description: "Many clients have partnered with Summit for years through stable, dependable management.",
    },
  ];

  return (
    <section className="bg-[#7a1f2b] py-20 lg:py-32">
      <div className="mx-auto max-w-[1680px] px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center text-white"
              data-aos="fade-up" // Optional: add AOS later if you install it
              data-aos-delay={index * 100}
            >
              {/* Value - dominant but refined */}
              <div className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight leading-none">
                {stat.value}
              </div>

              {/* Label - strong presence, slightly smaller */}
              <div className="mt-4 text-xl sm:text-2xl font-bold leading-snug">
                {stat.label}
              </div>

              {/* Description - subtle, readable, not competing */}
              <p className="mt-6 text-base lg:text-sm leading-relaxed text-white/85 max-w-sm mx-auto">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}