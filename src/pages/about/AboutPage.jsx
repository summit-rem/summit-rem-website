import React from "react";
import { aboutConfig } from "../../features/about/config/aboutConfig";
import SplitStats from "../../components/sections/SplitStats/SplitStats";
import FeatureStats from "../../components/sections/FeatureStats/FeatureStats";
import FeatureCards from "../../components/sections/FeatureCards/FeatureCards";
import FAQ from "../../components/sections/FAQ/FAQ";
import { contactConfig } from "../../features/contact/config/contactConfig";
import TestimonialsGrid from "../../components/sections/TestimonialsGrid/TestimonialsGrid";
import { testimonialsConfig } from "../../features/testimonials/config/testimonialsConfig";
import ContactRedirectCTA from "../../components/sections/ContactRedirectCTA/ContactRedirectCTA";


export default function AboutPage() {
  const { hero, missionVision, image, midSection, stats, featureCards } = aboutConfig;
  const {faqs} = contactConfig

  return (
    <div className="w-full">
      <SplitStats
        hero={hero}
        missionVision={missionVision}
        image={image}
        midSection={midSection}
      />

      <FeatureStats stats={stats} />

      <FeatureCards
        title={featureCards.title}
        items={featureCards.items}
        background={featureCards.background}
      />

      <TestimonialsGrid
        heading={testimonialsConfig.heading}
        subheading={testimonialsConfig.subheading}
        testimonials={testimonialsConfig.testimonials}
      />
      <ContactRedirectCTA />
      <FAQ items={faqs} />
    </div>
  );
}
