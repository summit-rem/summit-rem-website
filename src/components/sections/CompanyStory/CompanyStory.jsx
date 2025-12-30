// src/components/sections/CompanyStory/CompanyStory.jsx
import React from "react";

export default function CompanyStory() {
  return (
    <section className="relative bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-[1680px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* LEFT - Image */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1680&q=80"
                alt="Modern city skyline representing Summit's local expertise and managed properties"
                className="w-full h-[500px] lg:h-[620px] object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* RIGHT - Text Content */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
              A Company Rooted in Local Experience
            </h2>

            {/* Subheading / Lead Paragraph */}
            <p className="text-xl lg:text-2xl leading-relaxed text-gray-700 mb-10">
              Summit was founded with a strong understanding of the markets we serve and the practical realities property owners face. Over time, we have grown alongside our communities, adapting to regulatory changes, market cycles, and evolving ownership structures.
            </p>

            {/* Body Paragraphs */}
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                Property management works best when it feels steady and predictable. When communication is clear, systems are in place, and oversight is consistent, ownership becomes easier. Summit Real Estate Management was built around that principle.
              </p>

              <p>
                Since 2000, Summit has provided professional property management services for commercial, multifamily, owners’ association, and mobile home park properties. Our approach is grounded in disciplined operations, documented standards, and long-term thinking.
              </p>

              <p>
                Today, we manage millions of square feet of office, retail, and industrial properties, along with thousands of apartment units and mobile home park spaces. Our clients include private owners, trusts, syndications, institutional investors, banks, and court-appointed receivers.
              </p>

              <p>
                Growth has never changed our focus: manage every property with care, clarity, and accountability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}