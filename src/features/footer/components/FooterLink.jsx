import React from "react";
import { NavLink } from "react-router-dom";
import * as Icons from "lucide-react";

function getIcon(name) {
  return Icons?.[name] ?? null;
}
const base =
  "inline-flex items-center gap-2 text-sm font-medium transition cursor-pointer whitespace-nowrap";

const variants = {
  default: "text-gray-300 hover:text-white hover:underline underline-offset-4",
  primary:
    "px-3 h-9 rounded-md bg-[var(--color-burgundy)] text-white hover:opacity-90",
  softPrimary:
    "px-3 h-9 rounded-md bg-white text-[var(--color-burgundy)] hover:bg-white/95 border border-white",
};

export default function FooterLink({ to, children, variant = "default", className = "", icon, }) {
  const Icon = icon ? getIcon(icon) : null;
  return (
    <NavLink to={to} className={`${base} ${variants[variant]} ${className}`}>
      {Icon ? React.createElement(Icon, { size: 16 }) : null}
      {children}
    </NavLink>
  );
}
