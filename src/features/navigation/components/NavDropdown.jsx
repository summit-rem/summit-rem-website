import React, { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";
import NavLinkItem from "./NavLinkItem";

export default function NavDropdown({
  label,
  to,
  items = [],
  align = "left",
  triggerClassName = "",
  onNavigate,
  variant, // NEW: allow "center"
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => setOpen(false), open);

  const alignment = align === "right" ? "right-0" : "left-0";

  const triggerBase =
    "inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 cursor-pointer";
  const triggerVariant =
    variant === "center"
      ? "border-b-2 border-transparent hover:border-[var(--color-burgundy)]"
      : "";

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        className={`${triggerBase} ${triggerVariant} ${triggerClassName}`}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{label}</span>
        <ChevronDown size={16} className="mt-px" />
      </button>

      {open && (
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
      )}
    </div>
  );
}
