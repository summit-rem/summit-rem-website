import React, { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import NavLinkItem from "./NavLinkItem";

export default function NavMegaMenu({ item, onNavigate, align = "center", width = "w-[980px]" }) {
  const children = item?.children || [];
  const defaultActive = useMemo(() => children[0] || null, [children]);
  const [active, setActive] = useState(defaultActive);

  const mega = item?.mega || {};
  const rightItems = active?.children || [];

  // alignment for desktop mega menu
  const alignClass =
    align === "right"
      ? "right-0"
      : align === "left"
      ? "left-0"
      : "left-1/2 -translate-x-1/2";

  return (
    <div className={`absolute top-full z-50 ${alignClass} ${width} pt-3`}>
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
        <div className="grid grid-cols-12">
          {/* Column 1: Heading + content */}
          <div className="col-span-4 p-8">
            <p className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
              {item.label}
            </p>

            <h3 className="mt-3 text-2xl font-semibold text-black leading-tight">
              {mega.title || item.label}
            </h3>

            {mega.description ? (
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {mega.description}
              </p>
            ) : null}

            {mega.cta?.to ? (
              <NavLinkItem
                to={mega.cta?.to}
                href={mega.cta?.href}
                external={mega.cta?.external}
                className="mt-6 inline-flex ..."
              >
                {mega.cta.label || "Learn more"}
                <ArrowRight size={16} />
              </NavLinkItem>
            ) : null}
          </div>

          {/* Column 2: List */}
          <div className="col-span-4 border-l border-gray-100 p-6">
            <ul className="space-y-1">
              {children.map((c) => {
                const isActive = active?.label === c.label;
                return (
                  <li key={`${c.label}-${c.to}`}>
                    <NavLink
                      to={c.to}
                      onMouseEnter={() => setActive(c)}
                      onFocus={() => setActive(c)}
                      onClick={onNavigate}
                      className={`group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition
                        ${isActive ? "bg-gray-50 text-black" : "text-gray-700 hover:bg-gray-50"}
                      `}
                    >
                      <span className="relative">
                        {c.label}
                        {/* underline like ss5 hover */}
                        <span
                          className={`absolute left-0 -bottom-1 h-[2px] w-full bg-[var(--color-burgundy)] transition
                            ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
                          `}
                        />
                      </span>

                      <ChevronRight
                        size={18}
                        className={`transition ${
                          isActive
                            ? "text-[var(--color-burgundy)]"
                            : "text-gray-400 group-hover:text-[var(--color-burgundy)]"
                        }`}
                      />
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: More options */}
          <div className="col-span-4 border-l border-gray-100 bg-gray-50 p-6">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold text-black">
                {active?.label || "Overview"}
              </h4>

              {!mega?.hideView && active?.to ? (
                <NavLink
                    to={active.to}
                    onClick={onNavigate}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-burgundy)] hover:underline"
                >
                    View
                    <ArrowRight size={16} />
                </NavLink>
                ) : null}
            </div>

            <div className="mt-4 border-t border-gray-200 pt-4">
              {rightItems.length ? (
                <ul className="space-y-2">
                  {rightItems.map((r) => (
                    <li key={`${r.label}-${r.to}`}>
                      <NavLinkItem
                        to={r.to}
                        href={r.href}
                        external={r.external}
                        onClick={onNavigate}
                        className="group flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-white transition"
                      >
                        <span className="group-hover:text-black">{r.label}</span>
                        <ArrowRight size={16} className="..." />
                      </NavLinkItem>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-600 leading-relaxed">
                  Select an option to explore more details.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
