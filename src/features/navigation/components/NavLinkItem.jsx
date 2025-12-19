import React from "react";
import { NavLink } from "react-router-dom";

const base =
  "inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 cursor-pointer";

const variants = {
  // For middle nav items: bottom border on hover
  center:
    "border-b-2 border-transparent hover:border-[var(--color-burgundy)]",

  // For primary action button (Pay Rent)
  primary:
    "rounded-md bg-[var(--color-burgundy)] text-white hover:text-white hover:opacity-90 border-b-0",
};

export default function NavLinkItem({
  to,
  children,
  className = "",
  onClick,
  variant,
}) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) => {
        const activeClass =
          variant === "center"
            ? "border-[(--color-burgundy)] text-gray-900"
            : "text-gray-900";

        return `${base} ${variants[variant] ?? ""} ${isActive ? activeClass : ""} ${className}`;
      }}
    >
      {children}
    </NavLink>
  );
}
