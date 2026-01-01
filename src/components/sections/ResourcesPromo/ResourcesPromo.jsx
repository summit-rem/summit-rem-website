// src/components/sections/ResourcesPromo/ResourcesPromo.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight, BookOpen, Mic, Play, Newspaper } from "lucide-react";
import { getFeaturedResources } from "../../../features/resources/config/resourcesData";

const BURGUNDY = "#7a1f2b";

// Simple reading speed estimate: ~250 words per minute
// For podcasts/videos: use duration if provided
const getReadTime = (resource) => {
  if (resource.type === "podcast" || resource.type === "videos") {
    return resource.duration || "—";
  }

  // Rough estimate based on subtitle length (fallback)
  const wordCount = (resource.subtitle || "").split(" ").length;
  const minutes = Math.max(1, Math.round(wordCount / 250));
  return `${minutes} min read`;
};

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
  const resources = getFeaturedResources(); // Top 3 featured

  return (
    <section className="relative bg-gray-50 py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1680px] px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
            Practical Insights for Property Owners
          </h2>
          <p className="mt-6 text-lg lg:text-xl text-gray-600 leading-relaxed">
            Explore resources designed to help owners better understand property management,
            operations, and long-term ownership considerations — grounded in real-world experience,
            not theory.
          </p>
        </div>

        {/* Grid: 3 Cards + CTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Featured Resource Cards */}
          {resources.map((resource) => (
            <NavLink
              key={resource.id}
              to={`/${resource.type}/${resource.id}/${slugify(resource.title)}`}
              className="group block rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={resource.media}
                  alt={resource.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />

                {/* Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-800 shadow-md backdrop-blur-sm">
                  {getTypeIcon(resource.type)}
                  <span>{getBadgeLabel(resource.type, resource.tag)}</span>
                </div>
              </div>

              <div className="flex-1 p-3 lg:p-8 flex flex-col justify-between">
                {/* Title + Description */}
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-[#7a1f2b] transition-colors line-clamp-3">
                    {resource.title}
                  </h3>
                  <p className="mt-4 text-base text-gray-600 line-clamp-3 leading-relaxed pb-6">
                    {resource.subtitle}
                  </p>
                </div>

                {/* Middle Section: Author & Read Time */}
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src={resource.uploaderPhotoURL}
                      alt={resource.uploaderName}
                      className="h-10 w-10 rounded-full object-cover ring-2 ring-gray-200"
                    />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {resource.uploaderName}
                      </p>
                      <p className="text-sm text-gray-500">
                        {resource.dateOfUpload}
                      </p>
                    </div>
                  </div>

                  <div className="text-sm font-medium text-gray-600">
                    {getReadTime(resource)}
                  </div>
                </div>

                {/* Fixed Button at Bottom */}
                <div className="mt-8 flex items-center gap-3 text-[#7a1f2b] font-semibold text-sm uppercase tracking-wider group-hover:gap-4 transition-all">
                  {getButtonText(resource.type)}
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition" />
                </div>
              </div>
            </NavLink>
          ))}

          {/* Large CTA Card */}
          <div className="rounded-3xl bg-gradient-to-br from-[#7a1f2b] to-[#9c2a3a] p-10 lg:p-14 flex flex-col justify-between text-white shadow-2xl min-h-full">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold leading-tight">
                Discover More Resources
              </h3>
              <p className="mt-6 text-lg lg:text-xl text-white/90 leading-relaxed max-w-md">
                Articles, podcasts, and insights to help you make confident, informed decisions about your properties.
              </p>
            </div>

            <NavLink
              to="/resources"
              className="mt-12 inline-flex items-center gap-4 text-lg font-bold hover:gap-6 transition-all"
            >
              View all resources
              <ArrowRight className="h-6 w-6" />
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

// Slugify helper
function slugify(str) {
  return String(str || "")
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}