import React, { useMemo, useState } from "react";
import * as Icons from "lucide-react";
import { Menu, X } from "lucide-react";
import { navConfig } from "../config/navConfig";
import NavDropdown from "./NavDropdown";
import NavLinkItem from "./NavLinkItem";
import MobileNav from "./MobileNav";
import Container from "../../../components/ui/Container";

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
      <Container className="h-16">
        <nav className="h-16 flex items-center justify-between gap-3">
          {/* Brand */}
          <div className="shrink-0">
            <NavLinkItem
              to={brand.to}
              className="text-base font-semibold text-gray-900 gap-3 !px-0"
            >
              {brand.logo ? (
                <img
                  src={brand.logo}
                  alt={brand.label}
                  className="h-10 w-auto object-contain shrink-0"
                />
              ) : null}
              {/* Hide label on small screens */}
              <span className="hidden lg:inline whitespace-nowrap">
                {brand.label}
              </span>
            </NavLinkItem>
          </div>

          <div className="hidden lg:flex items-center gap-1">
            {primary.map((item) =>
              item.children?.length ? (
                <NavDropdown
                  key={item.label}
                  label={item.label}
                  to={item.to}
                  items={item.children}
                  variant="center"
                  mega={item.mega}
                />
              ) : (
                <NavLinkItem key={item.label} to={item.to} variant="center">
                  {item.label}
                </NavLinkItem>
              )
            )}
          </div>

          {/* Desktop right actions */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            {rightActions.map((item) => {
              const Icon = item.Icon;
              const hasChildren = item.children?.length;

              if (item.variant === "primary") {
                return (
                  <NavLinkItem
                    key={item.label}
                    to={item.to}
                    variant="primary"
                    className="px-4"
                    href={item.href}
                    external={item.external}
                  >
                    {Icon ? <Icon size={18} /> : null}
                    <span>{item.label}</span>
                  </NavLinkItem>
                );
              }

              if (hasChildren) {
                return (
                  <NavDropdown
                    label="Account"
                    items={item.children}
                    variant="mega-right"
                    align="right"
                    mega={{
                      title: "Account",
                      description: "Access portals and account tools.",
                      // cta: { label: "Go to account", to: "/account" },
                    }}
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

          {/* Mobile toggle */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 cursor-pointer shrink-0"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </Container>

      {mobileOpen && (
        <MobileNav
          brand={brand}
          primary={primary}
          actions={actions}
          onNavigate={() => setMobileOpen(false)}
        />
      )}
    </header>
  );
}
