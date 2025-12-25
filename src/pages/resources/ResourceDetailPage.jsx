import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { ArrowLeft, BookOpen, Headphones, Tv, Newspaper } from "lucide-react";

import { findResourceById } from "../../features/resources/config/resourcesData";

const ICONS = {
  articles: BookOpen,
  podcast: Headphones,
  videos: Tv,
  news: Newspaper,
};

export default function ResourceDetailPage() {
  const { id } = useParams();
  const location = useLocation();

  // ✅ infer type from URL: /articles/:id/:slug -> "articles"
  const type = (location.pathname.split("/")[1] || "").toLowerCase();

  const item = findResourceById(type, id);
  const Icon = ICONS[type];

  if (!item) {
    return (
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-sm font-semibold text-slate-600">
          Resource not found.
        </p>

        <Link
          to="/resources"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#6b0f1a] ring-1 ring-[#6b0f1a]/30 hover:bg-[#6b0f1a]/5 transition"
        >
          <ArrowLeft size={16} />
          Back to resources
        </Link>
      </div>
    );
  }

  const cta =
    type === "podcast" ? "Listen" : type === "videos" ? "View" : "Read";

  return (
    <section className="relative">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        <Link
          to="/resources"
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-[#6b0f1a] transition"
        >
          <ArrowLeft size={16} />
          Back to Resources
        </Link>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-white">
              <img
                src={item.media}
                alt={item.title}
                className="h-[320px] w-full object-cover"
              />

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold tracking-[0.22em] text-slate-500">
                      {type.toUpperCase()}
                    </p>

                    <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                      {item.title}
                    </h1>

                    <p className="mt-3 text-base text-slate-600 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>

                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6b0f1a]/10">
                    {Icon ? <Icon size={20} className="text-[#6b0f1a]" /> : null}
                  </span>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <img
                    src={item.uploaderPhotoURL}
                    alt={item.uploaderName}
                    className="h-10 w-10 rounded-full object-cover ring-1 ring-slate-200"
                  />
                  <div className="leading-tight">
                    <p className="text-sm font-semibold text-slate-900">
                      {item.uploaderName}
                    </p>
                    <p className="text-xs text-slate-500">{item.dateOfUpload}</p>
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-200 pt-6">
                  <h2 className="text-lg font-extrabold text-slate-900">
                    Overview
                  </h2>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-white ring-1 ring-slate-200 p-6">
              <p className="text-xs font-bold tracking-[0.22em] text-slate-500">
                {item.tag}
              </p>

              <h3 className="mt-2 text-xl font-extrabold text-slate-900">
                {cta} this resource
              </h3>

              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                This is mock content for now. When you connect your CMS/API, you
                can render long-form content, an embedded player, or video here.
              </p>

              <button
                type="button"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#6b0f1a] ring-1 ring-[#6b0f1a]/30 hover:bg-[#6b0f1a]/5 transition"
              >
                {Icon ? <Icon size={18} /> : null}
                {cta}
              </button>

              <div className="mt-6 border-t border-slate-200 pt-6">
                <h4 className="text-sm font-extrabold text-slate-900">
                  Details
                </h4>

                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li>
                    <span className="font-semibold text-slate-800">ID:</span>{" "}
                    {item.id}
                  </li>
                  <li>
                    <span className="font-semibold text-slate-800">Type:</span>{" "}
                    {type}
                  </li>
                  <li>
                    <span className="font-semibold text-slate-800">
                      Uploaded:
                    </span>{" "}
                    {item.dateOfUpload}
                  </li>
                  {item.duration ? (
                    <li>
                      <span className="font-semibold text-slate-800">
                        Duration:
                      </span>{" "}
                      {item.duration}
                    </li>
                  ) : null}
                </ul>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-[#6b0f1a] p-6 text-white shadow-sm">
              <h4 className="text-lg font-extrabold">Need help right away?</h4>
              <p className="mt-2 text-sm opacity-90">
                Reach out to our team — we’ll point you to the right resource or
                assist directly.
              </p>
              <Link
                to="/contact"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-extrabold text-slate-900 hover:bg-white/90 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
