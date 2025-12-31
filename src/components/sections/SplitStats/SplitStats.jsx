// src/components/sections/SplitStats/SplitStats.jsx
import React from "react";

export default function SplitStats({ hero, image }) {
  return (
    <section className="relative bg-white py-12 lg:py-20">
      <div className="mx-auto max-w-[1680px] px-6 lg:px-10">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-3xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-snug">
            {hero.title}
          </h1>
        </div>

        <div className="mt-12 lg:mt-16">
          <div className="rounded-2xl overflow-hidden">
            <img
              src={image.src}
              alt={image.alt || "Summit Real Estate Management properties"}
              className="w-full h-[400px] lg:h-[550px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}