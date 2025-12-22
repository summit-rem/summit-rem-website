import React, { createElement } from "react";
import * as Icons from "lucide-react";

/**
 * items: [{ title, description, icon }]
 * icon: string name from lucide-react, e.g. "UserSearch", "Users", "PieChart", "UsersRound"
 */
export default function FeatureCards({
  title = "Your Trusted Real Estate Partner",
  items = [],
  background = "dark", // "dark" | "light"
}) {
  const isDark = background === "dark";

  return (
    <section className={isDark ? "bg-[var(--color-footer-bg)]" : "bg-white"}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <h2 className="text-center text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--color-burgundy)]">
          {title}
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => {
            const IconCmp = Icons?.[item.icon];

            return (
              <div
                key={item.title}
                className={[
                  "rounded-2xl border p-7 shadow-sm",
                  isDark
                    ? "bg-white border-white/10"
                    : "bg-white border-gray-200",
                ].join(" ")}
              >
                <div className="mb-6">
                  {IconCmp ? (
                    createElement(IconCmp, {
                      size: 34,
                      className: "text-[var(--color-burgundy)]",
                    })
                  ) : (
                    <div className="h-[34px] w-[34px]" />
                  )}
                </div>

                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
