// src/components/sections/FeatureCards/FeatureCards.jsx
import React, { createElement } from "react";
import * as Icons from "lucide-react";

export default function FeatureCards({
  title = "Why owners work with Summit",
  items = [],
}) {
  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1680px] px-6 lg:px-10">
        {/* Centered Heading */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-[#7a1f2b]">
            {title}
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => {
            const IconCmp = Icons[item.icon];

            return (
              <div
                key={index}
                className="rounded-3xl bg-white p-10 shadow-md border border-gray-100 flex flex-col items-start"
              >
                {/* Large Burgundy Icon */}
                <div className="mb-8">
                  {IconCmp ? (
                    createElement(IconCmp, {
                      size: 56,
                      className: "text-[#7a1f2b]",
                      strokeWidth: 1.5,
                    })
                  ) : null}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-base leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}