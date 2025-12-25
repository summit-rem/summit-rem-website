import React, { useMemo, useState } from "react";
import * as Icons from "lucide-react";
import { ChevronDown } from "lucide-react";
import NavLinkItem from "./NavLinkItem";

function getIcon(name) {
  return Icons?.[name] ?? null;
}

function MobileAccordionItem({ item, onNavigate }) {
  const [open, setOpen] = useState(false);
  const hasChildren = item.children?.length;

  if (!hasChildren) {
    return (
      <NavLinkItem
        to={item.to}
        onClick={onNavigate}
        className="w-full justify-start"
      >
        {item.label}
      </NavLinkItem>
    );
  }

  return (
    <div className="w-full">
      <button
        type="button"
        className="w-full inline-flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="text-left">{item.label}</span>
        <ChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="mt-1 pl-3 border-l border-gray-200">
          {/* optional "parent" link */}
          {item.to ? (
            <NavLinkItem
              to={item.to}
              onClick={onNavigate}
              className="w-full justify-start"
            >
              {item.label}
            </NavLinkItem>
          ) : null}

          {item.children.map((child) => (
            <NavLinkItem
              to={child.to}
              href={child.href}
              external={child.external}
              onClick={onNavigate}
              className="w-full justify-start"
            >
              {child.label}
            </NavLinkItem>
          ))}
        </div>
      )}
    </div>
  );
}

export default function MobileNav({
  // brand = null,
  primary = [],
  actions = [],
  onNavigate,
}) {
  const actionItems = useMemo(
    () =>
      actions.map((a) => ({
        ...a,
        Icon: a.icon ? getIcon(a.icon) : null,
      })),
    [actions]
  );

  return (
    <div className="lg:hidden border-t border-gray-200 bg-white">
      <div className="px-3 py-3 flex flex-col gap-1">
        {/* Brand (optional - helps context on mobile menu) */}
        {/* {brand?.to ? (
          <div className="pb-2">
            <NavLinkItem
              to={brand.to}
              onClick={onNavigate}
              className="w-full justify-start gap-3 !px-2"
            >
              {brand.logo ? (
                <img
                  src={brand.logo}
                  alt={brand.label}
                  className="h-9 w-auto object-contain shrink-0"
                />
              ) : null}
              <span className="font-semibold text-gray-900">{brand.label}</span>
            </NavLinkItem>
          </div>
        ) : null} */}

        {/* Primary links */}
        {primary.map((item) => (
          <MobileAccordionItem
            key={item.label}
            item={item}
            onNavigate={onNavigate}
          />
        ))}

        <div className="my-2 border-t" />

        {/* Action links */}
        {actionItems.map((item) => {
          const Icon = item.Icon;
          const hasChildren = item.children?.length;

          if (hasChildren) {
            return (
              <MobileAccordionItem
                key={item.label}
                item={item}
                onNavigate={onNavigate}
              />
            );
          }

          return (
            <NavLinkItem
              key={item.label}
              to={item.to}
              onClick={onNavigate}
              className="w-full justify-start"
              variant={item.variant}
            >
              {Icon ? <Icon size={18} /> : null}
              <span>{item.label}</span>
            </NavLinkItem>
          );
        })}
      </div>
    </div>
  );
}
