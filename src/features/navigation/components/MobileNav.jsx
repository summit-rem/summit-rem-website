import React from "react";
import NavDropdown from "./NavDropdown";
import NavLinkItem from "./NavLinkItem";

export default function MobileNav({ primary = [], actions = [], onNavigate }) {
  return (
    <div className="md:hidden border-t border-gray-200 bg-white">
      <div className="px-3 py-2 flex flex-col gap-1">
        {primary.map((item) =>
          item.children?.length ? (
            <NavDropdown
              key={item.label}
              label={item.label}
              to={item.to}
              items={item.children}
              onNavigate={onNavigate}
              triggerClassName="w-full justify-between"
              align="left"
            />
          ) : (
            <NavLinkItem
              key={item.label}
              to={item.to}
              onClick={onNavigate}
              className="w-full justify-start"
            >
              {item.label}
            </NavLinkItem>
          )
        )}

        <div className="my-2 border-t" />
        {actions.map((item) =>
            item.children?.length ? (
                <NavDropdown
                    key={item.label}
                    label={item.label}
                    to={item.to}
                    items={item.children}
                    onNavigate={onNavigate}
                    triggerClassName="w-full justify-between"
                    align="left"
                />
            ) : (
                <NavLinkItem
                    key={item.label}
                    to={item.to}
                    onClick={onNavigate}
                    className="w-full justify-start"
                    variant={item.variant}   // ✅ THIS LINE
                    >
                    {item.label}
                </NavLinkItem>
            )
        )}
      </div>
    </div>
  );
}
