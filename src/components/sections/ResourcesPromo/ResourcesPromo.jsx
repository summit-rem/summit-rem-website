// src/components/sections/ResourcesPromo/ResourcesPromo.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight, BookOpen, Mic, Play, Newspaper } from "lucide-react";
import { getFeaturedResources } from "../../../features/resources/config/resourcesData";

const BURGUNDY = "#7a1f2b";

const getTypeIcon = (type) => {
  switch (type?.toLowerCase()) {
    case "articles":
    case "news":
      return <BookOpen className="h-4 w-4" />;
    case "podcast":
      return <Mic className="h-4 w-4" />;
    case "videos":
      return <Play className="h-4 w-4" />;
    default:
      return null;
  }
};

const getBadgeLabel = (type, tag) => {
  if (type === "podcast") return "Featured Podcast";
  if (type === "videos") return "Featured Video";
  return tag || "Featured Article";
};

const getButtonText = (type) => {
  if (type === "podcast") return "Listen";
  if (type === "videos") return "View";
  return "Read";
};

export default function ResourcesPromo() {
  const resources = getFeaturedResources(); // Top 3 featured from data

  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1680px] px-6 lg:px-10">
        {/* Heading - Centered, matches Services style */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900">
            Practical insights for property owners.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore resources designed to help owners better understand property management,
            operations, and long-term ownership considerations, grounded in real-world experience,
            not theory.
          </p>
        </div>

        {/* 4-Item Grid: 3 Cards + 1 Large CTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 3 Featured Resource Cards */}
          {resources.map((resource) => (
            <NavLink
              key={resource.id}
              to={`/${resource.type}/${resource.id}/${slugify(resource.title)}`}
              className="group block rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all bg-white"
            >
              <div className="relative">
                <img
                  src={resource.media}
                  alt={resource.title}
                  className="w-full h-64 object-cover"
                />
                {/* Badge - Top Left */}
                <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-white/95 backdrop-blur px-4 py-2 text-sm font-medium text-gray-800 shadow-sm">
                  {getTypeIcon(resource.type)}
                  <span>{getBadgeLabel(resource.type, resource.tag)}</span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#7a1f2b] transition">
                  {resource.title}
                </h3>
                <p className="mt-3 text-base text-gray-600 line-clamp-3">
                  {resource.subtitle || resource.description}
                </p>

                {/* Author + Date */}
                <div className="mt-6 flex items-center gap-3">
                  <img
                    src={resource.uploaderPhotoURL}
                    alt={resource.uploaderName}
                    className="h-9 w-9 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {resource.uploaderName}
                    </p>
                    <p className="text-sm text-gray-500">
                      {resource.dateOfUpload}
                    </p>
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-8 inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#7a1f2b] border border-[#7a1f2b] rounded-full hover:bg-[#7a1f2b] hover:text-white transition">
                  {getButtonText(resource.type)}
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </NavLink>
          ))}

          {/* Large CTA Card - Full Height & Width */}
          <div className="rounded-3xl bg-[#7a1f2b] flex flex-col justify-between p-10 lg:p-12 text-white shadow-xl min-h-full">
            <div>
              <h3 className="text-4xl lg:text-5xl font-bold leading-tight">
                Practical insights for property owners.
              </h3>
              <p className="mt-6 text-lg text-white/90 max-w-md">
                Access in-depth articles, podcasts, videos, and market updates — all designed to support informed ownership decisions.
              </p>
            </div>

            <NavLink
              to="/resources"
              className="mt-12 inline-flex items-center gap-3 text-lg font-semibold hover:opacity-80 transition"
            >
              View resources
              <ArrowRight className="h-5 w-5" />
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

// Slugify helper (same as in resourcesData.js)
function slugify(str) {
  return String(str || "")
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}