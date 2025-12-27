import { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { servicesConfig } from "../config/servicesConfig";

const BURGUNDY = "#7A1B2B";

export default function Services() {
  const services = useMemo(() => servicesConfig, []);
  const [active, setActive] = useState(services[0]);

  return (
    <section className="relative bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* LEFT – Services list */}
        <div className="lg:col-span-5">
          <p className="text-sm uppercase tracking-wide text-gray-500 mb-4">
            Our Services
          </p>

          <h2 className="text-4xl font-semibold mb-10">
            How We Support Property Ownership
          </h2>

          <div className="space-y-1">
            {services.map((service) => {
              const isActive = active.id === service.id;

              return (
                <button
                  key={service.id}
                  onClick={() => setActive(service)}
                  className={[
                    "group w-full text-left border-b pb-4 pt-4 transition",
                    isActive
                      ? "border-[#7A1B2B]"
                      : "border-gray-200 hover:border-gray-300",
                  ].join(" ")}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={[
                        "h-2 w-2 rounded-full transition",
                        isActive ? "bg-[#7A1B2B]" : "bg-transparent",
                      ].join(" ")}
                    />
                    <h3
                      className={[
                        "text-lg font-medium transition",
                        isActive
                          ? "text-[#7A1B2B]"
                          : "text-gray-500 group-hover:text-black",
                      ].join(" ")}
                    >
                      {service.title}
                    </h3>
                  </div>
                </button>
              );
            })}
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

          <h3 className="text-2xl font-semibold mb-4">{active.title}</h3>

          <p className="text-gray-600 mb-8 max-w-2xl">{active.description}</p>

          <NavLink
            to={active.to}
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium border transition"
            style={{
              borderColor: BURGUNDY,
              color: BURGUNDY,
            }}
          >
            {active.linkText || active.LinkText || "Know more"}
            <ArrowRight size={16} color={BURGUNDY} />
          </NavLink>
        </div>
      </div>
    </section>
  );
}
