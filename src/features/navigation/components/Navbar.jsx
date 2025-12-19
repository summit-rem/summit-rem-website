import React, { useMemo, useState } from "react";
import * as Icons from "lucide-react";
import { Menu, X } from "lucide-react";
import { navConfig } from "../config/navConfig";
import NavDropdown from "./NavDropdown";
import NavLinkItem from "./NavLinkItem";
import MobileNav from "./MobileNav";

function getIcon(name) {
  return Icons?.[name] ?? null;
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const { brand, primary, actions } = navConfig;

  const rightActions = useMemo(
    () =>
      actions.map((a) => ({
        ...a,
        Icon: a.icon ? getIcon(a.icon) : null,
      })),
    [actions]
  );

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Brand (logo + label) */}
          <NavLinkItem
            to={brand.to}
            className="text-base font-semibold text-gray-900 gap-3"
          >
            {brand.logo ? (
              <img
                src={brand.logo}
                alt={brand.label}
                className="h-9 w-auto object-contain"
              />
            ) : null}
            <span className="hidden sm:inline">{brand.label}</span>
          </NavLinkItem>

          {/* Desktop center nav (bottom border hover) */}
          <div className="hidden md:flex items-center gap-1">
            {primary.map((item) =>
              item.children?.length ? (
                <NavDropdown
                  key={item.label}
                  label={item.label}
                  to={item.to}
                  items={item.children}
                  variant="center"
                />
              ) : (
                <NavLinkItem key={item.label} to={item.to} variant="center">
                  {item.label}
                </NavLinkItem>
              )
            )}
          </div>

          {/* Desktop right actions */}
          <div className="hidden md:flex items-center gap-2">
            {rightActions.map((item) => {
              const Icon = item.Icon;
              const hasChildren = item.children?.length;

              // Pay Rent as a button
              if (item.variant === "primary") {
                return (
                  <NavLinkItem
                    key={item.label}
                    to={item.to}
                    variant="primary"
                    className="px-4"
                  >
                    {Icon ? <Icon size={18} /> : null}
                    <span>{item.label}</span>
                  </NavLinkItem>
                );
              }

              if (hasChildren) {
                return (
                  <NavDropdown
                    key={item.label}
                    label={
                      <span className="inline-flex items-center gap-2">
                        {Icon ? <Icon size={18} /> : null}
                        <span>{item.label}</span>
                      </span>
                    }
                    to={item.to}
                    items={item.children}
                    align="right"
                  />
                );
              }

              return (
                <NavLinkItem key={item.label} to={item.to}>
                  {Icon ? <Icon size={18} /> : null}
                  <span>{item.label}</span>
                </NavLinkItem>
              );
            })}
          </div>

          {/* Mobile toggle (cursor already implied but we force it) */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <MobileNav
          primary={primary}
          actions={actions}
          onNavigate={() => setMobileOpen(false)}
        />
      )}
    </header>
  );
}
