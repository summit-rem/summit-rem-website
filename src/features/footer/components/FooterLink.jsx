import React from "react";
import { NavLink } from "react-router-dom";
import * as Icons from "lucide-react";

function getIcon(name) {
  return Icons?.[name] ?? null;
}

const base =
  "inline-flex items-center gap-2 text-sm font-medium transition whitespace-nowrap";

const variants = {
  default: "text-gray-300 hover:text-white hover:underline underline-offset-4",
  primary:
    "px-3 h-9 rounded-md bg-[var(--color-burgundy)] text-white hover:opacity-90",
  softPrimary:
    "px-3 h-9 rounded-md bg-white text-[var(--color-burgundy)] hover:bg-white/95 border border-[var(--color-burgundy)]",
};

export default function FooterLink({
  to,
  children,
  variant = "default",
  className = "",
  icon,
  external = false,
  iconSize = 16,
}) {
  const Icon = icon ? getIcon(icon) : null;

  const content = (
    <>
      {Icon ? React.createElement(Icon, { size: iconSize }) : null}
      {children}
    </>
  );

  const isExternal =
    external || (typeof to === "string" && /^https?:\/\//i.test(to));

  if (isExternal) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${variants[variant]} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <NavLink to={to} className={`${base} ${variants[variant]} ${className}`}>
      {content}
    </NavLink>
  );
}
