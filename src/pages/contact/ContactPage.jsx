import React from "react";
import { contactConfig } from "../../features/contact/config/contactConfig";
import InfoCards from "../../components/sections/InfoCards/InfoCards";
import FAQ from "../../components/sections/FAQ/FAQ";
import CTA from "../../components/sections/CTA/CTA";
import SectionBackground from "../../components/ui/SectionBackground";

export default function ContactPage() {
  const { hero, cards, faqs, cta } = contactConfig;

  return (
    <div className="relative bg-white overflow-hidden">
      <SectionBackground />

      <section className="relative z-10 pt-16">
        <div className="text-center">
          <img
            src={hero.logo}
            alt="Summit"
            className="mx-auto h-12 w-auto"
          />

          <h1 className="mt-6 text-3xl sm:text-4xl font-semibold text-gray-900">
            {hero.title}
          </h1>

          <p className="mt-2 text-sm text-gray-600">
            {hero.subtitle}
          </p>
        </div>

        <div className="mt-12">
          <InfoCards cards={cards} />
        </div>
      </section>

      <FAQ items={faqs} />
      <CTA {...cta} />
    </div>
  );
}
