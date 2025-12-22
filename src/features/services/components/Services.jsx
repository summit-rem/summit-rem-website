import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { servicesConfig } from "../config/servicesConfig";

export default function Services() {
  const [active, setActive] = useState(servicesConfig[0]);

  return (
    <section className="relative bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16">

        {/* LEFT – Accordion */}
        <div className="lg:col-span-5">
          <p className="text-sm uppercase tracking-wide text-gray-500 mb-4">
            Our Services
          </p>

          <h2 className="text-4xl font-semibold mb-10">
            Expert Care for Every Asset Type
          </h2>

          <div className="space-y-6">
            {servicesConfig.map((service) => (
              <button
                key={service.id}
                onClick={() => setActive(service)}
                className={`w-full text-left border-b pb-4 transition ${
                  active.id === service.id
                    ? "text-black border-black"
                    : "text-gray-400 border-gray-200 hover:text-black"
                }`}
              >
                <h3 className="text-lg font-medium">
                  {service.title}
                </h3>
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT – Content */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl overflow-hidden bg-gray-100 mb-8">
            <img
              src={active.image}
              alt={active.title}
              className="w-full h-[360px] object-cover"
            />
          </div>

          <h3 className="text-2xl font-semibold mb-4">
            {active.title}
          </h3>

          <p className="text-gray-600 mb-8 max-w-2xl">
            {active.description}
          </p>

          <NavLink
            to={active.to}
            className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-white text-sm font-medium hover:opacity-90 transition"
          >
            {active.LinkText}
            <ArrowRight size={16} />
          </NavLink>
        </div>
      </div>
    </section>
  );
}
