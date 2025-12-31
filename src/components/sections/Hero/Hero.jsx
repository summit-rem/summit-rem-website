import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Quote, Users } from "lucide-react";
import { homeHeroConfig } from "../../../pages/home/config/homeHeroConfig";
import HeaderImage from "../../../assets/image/headerImage.jpg";

function Stars({ count = 5 }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: Number(count) }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="h-5 w-5 fill-[#7a1f2b]" // Exact burgundy fill
          aria-hidden="true"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

export default function Hero({ data = homeHeroConfig }) {
  const cfg = data ?? homeHeroConfig;

  const badge = cfg.badge ?? "";
  const headline = cfg.headline ?? "";
  const description = cfg.description ?? "";
  const image = cfg.image ?? {};
  const rating = cfg.cards?.rating ?? {};
  const story = cfg.cards?.story ?? {};

  return (
    <section className="relative bg-white">
      <div className="mx-auto w-full max-w-[1680px] px-4 sm:px-6 lg:px-10 pt-10 pb-12 lg:pt-12 lg:pb-20">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Badge Pill */}
            {badge ? (
              <div className="inline-flex w-fit items-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
                {badge}
              </div>
            ) : null}

            {/* Headline */}
            <h3 className="mt-6 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl leading-tight">
              {String(headline)
                .split("\n")
                .map((line, idx) => (
                  <span key={idx} className="block">
                    {line}
                  </span>
                ))}
            </h3>

            {/* Burgundy Underline */}
            <div className="mt-6 h-1 w-36 rounded-full bg-[#7a1f2b]" />

            {/* Description */}
            {description ? (
              <p className="my-8 max-w-3xl text-lg leading-7 text-gray-700">
                {description}
              </p>
            ) : null}

            {/* Cards Row */}
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {/* Rating Card */}
              <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {rating.title ?? "Average Rating"}
                    </p>

                    <div className="mt-4 flex items-center gap-4">
                      <div className="text-5xl font-extrabold text-gray-900">
                        {rating.value ?? "4.8"}
                      </div>
                      <Stars count={rating.stars ?? 5} />
                    </div>

                    {rating.body ? (
                      <p className="mt-5 text-base leading-6 text-gray-700">
                        {rating.body}
                      </p>
                    ) : null}

                    {/* {rating?.cta?.to ? (
                      <Link
                        to={rating.cta.to}
                        className="mt-8 inline-flex items-center gap-2 text-base font-semibold text-[#7a1f2b] hover:opacity-80"
                      >
                        {rating.cta.label ?? "View testimonials"}
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    ) : null} */}
                  </div>

                  {/* Icon top-right */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f6eef0]">
                    <Quote className="h-6 w-6 text-[#7a1f2b]" />
                  </div>
                </div>
              </div>

              {/* Story Card */}
              <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {story.title ?? "Experience That Shows"}
                    </p>

                    {story.body ? (
                      <p className="mt-5 text-base leading-6 text-gray-700">
                        {story.body}
                      </p>
                    ) : null}

                    {story?.cta?.to ? (
                      <Link
                        to={story.cta.to}
                        className="mt-8 inline-flex items-center gap-2 text-base font-semibold text-[#7a1f2b] hover:opacity-80"
                      >
                        {story.cta.label ?? "Our Story"}
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    ) : null}
                  </div>

                  {/* Icon top-right */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f6eef0]">
                    <Users className="h-6 w-6 text-[#7a1f2b]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:col-span-5">
            <div className="h-full min-h-[500px] lg:min-h-[680px]">
              <img
                src={HeaderImage}
                alt={image?.alt ?? "Professional property management city view"}
                className="h-full w-full rounded-3xl object-cover shadow-lg"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}