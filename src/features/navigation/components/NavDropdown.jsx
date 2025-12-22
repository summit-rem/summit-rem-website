import React, { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";
import NavLinkItem from "./NavLinkItem";
import NavMegaMenu from "./NavMegaMenu";

export default function NavDropdown({
  label,
  to,
  items = [],
  align = "left",
  triggerClassName = "",
  onNavigate,
  variant, // "center" = mega menu
  mega,    // optional mega config object
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => setOpen(false), open);

  const alignment = align === "right" ? "right-0" : "left-0";

  const isMega = variant === "center" || variant === "mega-right";
  const triggerBase =
    "inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 cursor-pointer";
  const triggerVariant = isMega ? "group" : "";

  return (
    <div
      className="relative"
      ref={ref}
      onMouseEnter={isMega ? () => setOpen(true) : undefined}
      onMouseLeave={isMega ? () => setOpen(false) : undefined}
    >
      <button
        type="button"
        className={`${triggerBase} ${triggerVariant} ${triggerClassName}`}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={isMega ? undefined : () => setOpen((v) => !v)}
      >
        <span className="relative">
          {label}
          {/* Underline hover like ss5 */}
          {isMega ? (
            <span className="absolute left-0 -bottom-2 h-[2px] w-full bg-[var(--color-burgundy)] opacity-0 group-hover:opacity-100 transition" />
          ) : null}
        </span>

        <ChevronDown
          size={16}
          className={`mt-px transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Mega menu */}
      {open && isMega ? (
        <NavMegaMenu
          item={{ label: typeof label === "string" ? label : "Menu", to, children: items, mega }}
          align={variant === "mega-right" ? "right" : "center"}
          width={variant === "mega-right" ? "w-[640px]" : "w-[980px]"}
          onNavigate={() => {
            setOpen(false);
            onNavigate?.();
          }}
        />
      ) : null}

      {/* Old dropdown list (right actions etc.) */}
      {open && !isMega ? (
        <div
          role="menu"
          className={`absolute z-50 mt-2 min-w-55 rounded-md border border-gray-200 bg-white shadow-lg ${alignment}`}
        >
          <div className="py-2">
            {to && (
              <NavLinkItem
                to={to}
                onClick={() => {
                  setOpen(false);
                  onNavigate?.();
                }}
                className="w-full justify-start px-4"
              >
                {label}
              </NavLinkItem>
            )}

            {to && items.length > 0 && <div className="my-2 border-t" />}

            {items.map((item) => (
              <NavLinkItem
                key={`${item.label}-${item.to}`}
                to={item.to}
                onClick={() => {
                  setOpen(false);
                  onNavigate?.();
                }}
                className="w-full justify-start px-4"
              >
                {item.label}
              </NavLinkItem>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
