import React from "react";
import Hero from "../../components/sections/Hero/Hero";
import { homeHeroConfig } from "./config/homeHeroConfig";
import Services from "../../features/services/components/Services";
import TeamPromo from "../../features/team/components/TeamPromo";
import FAQ from "../../components/sections/FAQ/FAQ";
import TestimonialsGrid from "../../components/sections/TestimonialsGrid/TestimonialsGrid";
import { contactConfig } from "../../features/contact/config/contactConfig";
import { testimonialsConfig } from "../../features/testimonials/config/testimonialsConfig";


export default function HomePage() {
  const {faqs} = contactConfig
  return (
    <div>
      <Hero data={homeHeroConfig} />
      <Services />
      <TeamPromo />
      <TestimonialsGrid
              heading={testimonialsConfig.heading}
              subheading={testimonialsConfig.subheading}
              testimonials={testimonialsConfig.testimonials}
            />
      <FAQ items={faqs} />
    </div>
  );
}
