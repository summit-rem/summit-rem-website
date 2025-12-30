import React from "react";
import { aboutConfig } from "../../features/about/config/aboutConfig";
import SplitStats from "../../components/sections/SplitStats/SplitStats";
import FeatureStats from "../../components/sections/FeatureStats/FeatureStats";
import FeatureCards from "../../components/sections/FeatureCards/FeatureCards";
import FAQ from "../../components/sections/FAQ/FAQ";
import { contactConfig } from "../../features/contact/config/contactConfig";
// import TestimonialsGrid from "../../components/sections/TestimonialsGrid/TestimonialsGrid";
// import { testimonialsConfig } from "../../features/testimonials/config/testimonialsConfig";
// import ContactRedirectCTA from "../../components/sections/ContactRedirectCTA/ContactRedirectCTA";
import CompanyStory from "../../components/sections/CompanyStory/CompanyStory";
import ResourcesPromo from "../../components/sections/ResourcesPromo/ResourcesPromo";


export default function AboutPage() {
  const { hero, missionVision, image, midSection, featureCards } = aboutConfig;
  const {faqs} = contactConfig

  return (
    <div className="w-full">
      <SplitStats
        hero={hero}
        missionVision={missionVision}
        image={image}
        midSection={midSection}
      />
      <FeatureCards
        title={featureCards.title}
        items={featureCards.items}
        background={featureCards.background}
      />
      <CompanyStory />
      <ResourcesPromo />
      {/* 
        <FeatureStats stats={stats} /> 
        
        <TestimonialsGrid
          heading={testimonialsConfig.heading}
          subheading={testimonialsConfig.subheading}
          testimonials={testimonialsConfig.testimonials}
        />
        <ContactRedirectCTA /> 
      */}
      <FAQ items={faqs} />
    </div>
  );
}
