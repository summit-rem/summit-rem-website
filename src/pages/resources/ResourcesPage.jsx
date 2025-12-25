import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, Headphones, Tv, Newspaper, ArrowRight } from "lucide-react";

import {
  RESOURCE_TABS,
  getResourcesByType,
  getFeaturedResources,
  slugify,
} from "../../features/resources/config/resourcesData";

const ICONS = {
  articles: BookOpen,
  podcast: Headphones,
  videos: Tv,
  news: Newspaper,
};

function ResourcePill({ label, active, onClick, icon: Icon }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition",
        active
          ? "bg-[#6b0f1a] text-white shadow-sm"
          : "bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50",
      ].join(" ")}
    >
      {Icon ? (
        <Icon
          size={16}
          className={active ? "text-white" : "text-[#6b0f1a]"}
        />
      ) : null}
      {label}
    </button>
  );
}

function ResourceCard({ item, kind, onOpen }) {
  const Icon = ICONS[kind];
  const ctaLabel =
    kind === "podcast" ? "Listen" : kind === "videos" ? "View" : "Read";

  return (
    <article className="group overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm transition hover:shadow-md">
      <div className="relative h-44 w-full overflow-hidden">
        {/* media */}
        <img
          src={item.media}
          alt={item.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
          loading="lazy"
        />
        {/* tag */}
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 ring-1 ring-white/60 backdrop-blur">
          {item.tag}
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-base font-extrabold text-slate-900 leading-snug">
            {item.title}
          </h3>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#6b0f1a]/10">
            {Icon ? <Icon size={18} className="text-[#6b0f1a]" /> : null}
          </span>
        </div>

        <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-2">
          {item.subtitle}
        </p>

        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <img
              src={item.uploaderPhotoURL}
              alt={item.uploaderName}
              className="h-8 w-8 rounded-full object-cover ring-1 ring-slate-200"
              loading="lazy"
            />
            <div className="leading-tight">
              <p className="text-sm font-semibold text-slate-900">
                {item.uploaderName}
              </p>
              <p className="text-xs text-slate-500">{item.dateOfUpload}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpen}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#6b0f1a] ring-1 ring-[#6b0f1a]/30 hover:bg-[#6b0f1a]/5 transition"
          >
            {ctaLabel}
            <ArrowRight size={16} className="text-[#6b0f1a]" />
          </button>
        </div>
      </div>
    </article>
  );
}

function FeaturedHeroCard({ item, kind, onOpen, variant = "light" }) {
  const Icon = ICONS[kind];
  const ctaLabel =
    kind === "podcast" ? "Listen" : kind === "videos" ? "View" : "Read";

  const base =
    variant === "dark"
      ? "bg-slate-900 text-white"
      : variant === "burgundy"
      ? "bg-[#6b0f1a] text-white"
      : "bg-white text-slate-900 ring-1 ring-slate-200";

  const tagBg =
    variant === "light"
      ? "bg-white/90 text-slate-900"
      : "bg-white/15 text-white";

  const buttonStyle =
    variant === "light"
      ? "bg-white text-[#6b0f1a] ring-1 ring-[#6b0f1a]/25 hover:bg-[#6b0f1a]/5"
      : "bg-white text-slate-900 hover:bg-white/90";

  return (
    <div
      className={[
        "group relative overflow-hidden rounded-2xl shadow-sm transition hover:shadow-md",
        base,
      ].join(" ")}
    >
      <div className="absolute inset-0">
        <img
          src={item.media}
          alt={item.title}
          className={[
            "h-full w-full object-cover",
            variant === "light" ? "opacity-90" : "opacity-35",
          ].join(" ")}
          loading="lazy"
        />
      </div>

      <div className="relative p-6">
        <div className="flex items-center justify-between gap-4">
          <div className={["rounded-full px-3 py-1 text-xs font-semibold", tagBg].join(" ")}>
            {item.tag}
          </div>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
            {Icon ? <Icon size={18} className="text-white" /> : null}
          </span>
        </div>

        <h3 className="mt-4 text-xl font-extrabold leading-snug max-w-[22ch]">
          {item.title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed opacity-90 max-w-[42ch] line-clamp-3">
          {item.subtitle}
        </p>

        <button
          type="button"
          onClick={onOpen}
          className={[
            "mt-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition",
            buttonStyle,
          ].join(" ")}
        >
          {ctaLabel}
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

export default function ResourcesPage() {
  const navigate = useNavigate();
  const [active, setActive] = useState("featured");

  const featured = useMemo(() => getFeaturedResources(), []);
  const list = useMemo(() => getResourcesByType(active), [active]);

  const openItem = (kind, item) => {
    const slug = slugify(item.title);
    navigate(`/${kind}/${item.id}/${slug}`);
  };

  return (
    <section className="relative">
      {/* Top spacing consistent with app sections */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: title */}
          <div className="lg:col-span-5">
            <p className="text-xs font-bold tracking-[0.22em] text-slate-500">
              RESOURCES
            </p>

            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Resource Center
            </h1>

            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 max-w-xl">
              Practical insights for owners, residents, and investors — articles,
              podcasts, news, and videos designed to help you make confident
              property decisions.
            </p>
          </div>

          {/* Right: featured hero cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <FeaturedHeroCard
                item={featured[0]}
                kind={featured[0].type}
                variant="burgundy"
                onOpen={() => openItem(featured[0].type, featured[0])}
              />
              <FeaturedHeroCard
                item={featured[1]}
                kind={featured[1].type}
                variant="dark"
                onOpen={() => openItem(featured[1].type, featured[1])}
              />
              <FeaturedHeroCard
                item={featured[2]}
                kind={featured[2].type}
                variant="light"
                onOpen={() => openItem(featured[2].type, featured[2])}
              />
            </div>

            {/* Tabs */}
            <div className="mt-6 rounded-2xl bg-white ring-1 ring-slate-200 px-4 py-3">
              <div className="flex flex-wrap gap-2">
                {RESOURCE_TABS.map((t) => {
                  const Icon = t.key === "featured" ? null : ICONS[t.key];
                  return (
                    <ResourcePill
                      key={t.key}
                      label={t.label}
                      icon={Icon}
                      active={active === t.key}
                      onClick={() => setActive(t.key)}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Listing */}
        <div className="mt-10">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold tracking-[0.22em] text-slate-500">
                {active === "featured" ? "FEATURED" : "BROWSE"}
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
                {active === "featured"
                  ? "Featured resources"
                  : `Latest ${RESOURCE_TABS.find((t) => t.key === active)?.label}`}
              </h2>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-sm font-semibold text-[#6b0f1a]">
              <span className="inline-flex h-2 w-2 rounded-full bg-[#6b0f1a]" />
              Updated weekly
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map((item) => (
              <ResourceCard
                key={`${item.type}-${item.id}`}
                item={item}
                kind={item.type}
                onOpen={() => openItem(item.type, item)}
              />
            ))}
          </div>

          <div className="mt-12 pb-10" />
        </div>
      </div>
    </section>
  );
}
