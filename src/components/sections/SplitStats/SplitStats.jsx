import React from "react";

export default function SplitStats({ hero, missionVision, image, midSection }) {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14">
        {/* HERO */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-gray-700">{hero.eyebrow}</p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
            {hero.title}
          </h1>
          <p className="mt-5 text-sm sm:text-base text-gray-700 leading-7">
            {hero.description}
          </p>
        </div>

        {/* Mission/Vision */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-6" />
          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold text-gray-900">
              {missionVision.mission.title}
            </h3>
            <p className="mt-2 text-sm text-gray-700 leading-6">
              {missionVision.mission.text}
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold text-gray-900">
              {missionVision.vision.title}
            </h3>
            <p className="mt-2 text-sm text-gray-700 leading-6">
              {missionVision.vision.text}
            </p>
          </div>
        </div>

        {/* Big Image */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-black/10">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-[280px] sm:h-[360px] lg:h-[440px] object-cover"
          />
        </div>

        {/* Mid section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
              {midSection.title}
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-sm sm:text-base text-gray-700 leading-7">
              {midSection.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
