import React from "react";
import Hero from "../../components/sections/Hero/Hero";
import { homeHeroConfig } from "./config/homeHeroConfig";
import Services from "../../features/services/components/Services";
import TeamPromo from "../../features/team/components/TeamPromo";

export default function HomePage() {
  return (
    <div>
      <Hero data={homeHeroConfig} />
      <Services />
      <TeamPromo />
    </div>
  );
}
