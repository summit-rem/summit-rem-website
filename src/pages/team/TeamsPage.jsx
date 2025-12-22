import React, { useMemo, useState } from "react";
import { teamPageConfig } from "../../features/team/config/teamConfig";
import TeamSection from "../../components/sections/Team/TeamSection";
import TeamMemberDrawer from "../../components/sections/Team/TeamMemberDrawer";

export default function TeamsPage() {
  const { hero, sections } = teamPageConfig;

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const orderedSections = useMemo(() => sections, [sections]);

  function openMember(member) {
    setActive(member);
    setOpen(true);
  }

  function closeDrawer() {
    setOpen(false);
    setActive(null);
  }

  return (
    <div className="relative">
      {/* subtle background grid (optional) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Hero */}
      <section className="pt-12 pb-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <img
            src={hero.logo}
            alt="Summit"
            className="mx-auto h-12 w-auto object-contain"
          />

          <p className="mt-6 text-xs font-semibold tracking-widest text-[#6b1620] uppercase">
            {hero.kicker}
          </p>

          <h1 className="mt-3 text-3xl sm:text-4xl font-semibold text-gray-900">
            {hero.title}
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-gray-600">
            {hero.subtitle}
          </p>
        </div>
      </section>

      {/* Sections */}
      <div className="pb-14">
        {orderedSections.map((s) => (
          <TeamSection
            key={s.id}
            heading={s.heading}
            items={s.items}
            onOpen={openMember}
          />
        ))}
      </div>

      <TeamMemberDrawer open={open} member={active} onClose={closeDrawer} />
    </div>
  );
}
