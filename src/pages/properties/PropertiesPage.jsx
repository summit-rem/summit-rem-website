import { Link } from "react-router-dom";
import {
  Building2,
  Search,
  SlidersHorizontal,
  MapPin,
  Home,
  BedDouble,
  Bath,
  Square,
  ArrowRight,
  Info,
} from "lucide-react";

export default function PropertiesPage() {
  const highlights = [
    {
      title: "Commercial & Multi-Family Focus",
      desc: "Professional management and leasing support for investors and owners across the region.",
      icon: Building2,
    },
    {
      title: "Clear, Simple Process",
      desc: "Transparent communication, responsive support, and dependable operations from day one.",
      icon: Info,
    },
    {
      title: "Quality Listings Experience",
      desc: "Browse availability with clean filters, fast details, and straightforward next steps.",
      icon: Search,
    },
  ];

  const mockFeatured = [
    {
      id: "p-101",
      title: "Downtown Studio • Walkable Core",
      address: "Central District",
      beds: 0,
      baths: 1,
      sqft: 520,
      tag: "Featured",
    },
    {
      id: "p-102",
      title: "2 Bed Townhome • Private Entrance",
      address: "Westside Neighborhood",
      beds: 2,
      baths: 2,
      sqft: 1180,
      tag: "New",
    },
    {
      id: "p-103",
      title: "Retail Suite • High Visibility",
      address: "Main Street Corridor",
      beds: null,
      baths: 1,
      sqft: 1450,
      tag: "Commercial",
    },
  ];

  return (
    <main className="w-full">
      {/* Page header / hero */}
      <section className="w-full">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="pt-10 sm:pt-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700">
              <span className="inline-block h-2 w-2 rounded-full bg-[#7b0f1b]" />
              Listings & Availability
            </div>

            <div className="mt-5 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-7">
                <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  Find a place that fits—without the noise.
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-600">
                  Browse residential and commercial availability with a clean, modern experience.
                  Filters and results are designed to scale as we expand inventory and improve search.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link
                    to="/vacancies"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7b0f1b] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
                  >
                    View vacancies
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#7b0f1b] bg-white px-5 py-2.5 text-sm font-semibold text-[#7b0f1b] shadow-sm transition hover:bg-[#7b0f1b]/5"
                  >
                    Ask a question
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Search / filter shell (UI only for now) */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-gray-900">Search properties</div>
                    <div className="inline-flex items-center gap-2 text-xs text-gray-500">
                      <SlidersHorizontal className="h-4 w-4" />
                      Filters
                    </div>
                  </div>

                  <div className="mt-3 flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2">
                    <Search className="h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search by city, neighborhood, or keyword…"
                      className="w-full bg-transparent text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none"
                      disabled
                    />
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-gray-200 px-3 py-2">
                      <div className="text-[11px] font-medium text-gray-500">Type</div>
                      <div className="mt-1 text-sm font-semibold text-gray-800">All</div>
                    </div>
                    <div className="rounded-xl border border-gray-200 px-3 py-2">
                      <div className="text-[11px] font-medium text-gray-500">Beds</div>
                      <div className="mt-1 text-sm font-semibold text-gray-800">Any</div>
                    </div>
                    <div className="rounded-xl border border-gray-200 px-3 py-2">
                      <div className="text-[11px] font-medium text-gray-500">Price</div>
                      <div className="mt-1 text-sm font-semibold text-gray-800">Any</div>
                    </div>
                    <div className="rounded-xl border border-gray-200 px-3 py-2">
                      <div className="text-[11px] font-medium text-gray-500">Availability</div>
                      <div className="mt-1 text-sm font-semibold text-gray-800">Any</div>
                    </div>
                  </div>

                  <div className="mt-4 rounded-xl bg-gray-50 p-3 text-xs leading-relaxed text-gray-600">
                    <span className="font-semibold text-gray-800">Note:</span> This page is designed to
                    connect to your vacancies/listings feed. The search UI is intentionally staged for now.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-gray-100" />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="w-full">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="py-10 sm:py-12">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div
                    key={h.title}
                    className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#7b0f1b]/10 text-[#7b0f1b]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">{h.title}</div>
                        <div className="mt-1 text-sm leading-relaxed text-gray-600">{h.desc}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="border-t border-gray-100" />
        </div>
      </section>

      {/* Featured (mock cards) */}
      <section className="w-full">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="py-10 sm:py-12">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Properties
                </div>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                  Featured availability
                </h2>
              </div>

              <Link
                to="/vacancies"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#7b0f1b] hover:opacity-90"
              >
                See all vacancies
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              {mockFeatured.map((p) => (
                <div
                  key={p.id}
                  className="group rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="inline-flex items-center rounded-full bg-[#7b0f1b]/10 px-2.5 py-1 text-[11px] font-semibold text-[#7b0f1b]">
                        {p.tag}
                      </div>
                      <div className="mt-3 text-base font-semibold text-gray-900">
                        {p.title}
                      </div>
                      <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span className="truncate">{p.address}</span>
                      </div>
                    </div>
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gray-50 text-gray-700">
                      <Home className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <Stat icon={BedDouble} label="Beds" value={p.beds === null ? "—" : String(p.beds)} />
                    <Stat icon={Bath} label="Bath" value={String(p.baths ?? "—")} />
                    <Stat icon={Square} label="Sqft" value={String(p.sqft ?? "—")} />
                  </div>

                  <div className="mt-4">
                    <Link
                      to="/vacancies"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#7b0f1b] bg-white px-4 py-2 text-sm font-semibold text-[#7b0f1b] transition group-hover:bg-[#7b0f1b]/5"
                    >
                      View details
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <div className="text-sm font-semibold text-gray-900">Next step (when you’re ready)</div>
              <p className="mt-1 text-sm leading-relaxed text-gray-600">
                Connect this page to your vacancies/listings integration. We can replace these mock
                cards with live results and route to a real <span className="font-semibold">/properties/:id</span>{" "}
                detail view.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Stat({ icon: Icon, label, value }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white px-3 py-2">
      <div className="flex items-center gap-2 text-[11px] font-medium text-gray-500">
        <Icon className="h-4 w-4 text-gray-400" />
        {label}
      </div>
      <div className="mt-1 text-sm font-semibold text-gray-900">{value}</div>
    </div>
  );
}
