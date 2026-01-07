import React from "react";
import footerConfig from "../config/footerConfig";
import FooterLink from "./FooterLink";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const { brand, columns, bottom } = footerConfig;

  return (
    <footer className="bg-[#071021] text-white">
      {/* Main */}
      <div className="w-full">
        {/* Match app-wide spacing: full width but consistent gutters */}
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 py-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Brand / Contact */}
            <div className="md:col-span-4">
              <div className="flex items-start gap-4">
                {brand?.logoSrc ? (
                  <img
                    src={brand.logoSrc}
                    alt={brand.logoAlt || "Summit Real Estate Management"}
                    className="h-16 w-16 rounded-md bg-white object-contain p-1"
                  />
                ) : null}

                <div>
                  <div className="font-semibold text-base">
                    {brand?.title || "Summit Real Estate Management"}
                  </div>
                  {brand?.tagline ? (
                    <p className="mt-2 text-sm text-gray-300 leading-relaxed max-w-sm">
                      {brand.tagline}
                    </p>
                  ) : null}
                </div>
              </div>

              {/* Contact block (ss1-style) */}
              <div className="mt-8 space-y-4 text-sm text-gray-200">
                {Array.isArray(brand?.addressLines) &&
                brand.addressLines.length ? (
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 text-gray-300" />
                    <div className="leading-relaxed">
                      {brand.addressLines.map((line, idx) => (
                        <div key={`${line}-${idx}`}>{line}</div>
                      ))}
                    </div>
                  </div>
                ) : null}

                {brand?.phone ? (
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-gray-300" />
                    <a
                      className="hover:underline underline-offset-4"
                      href={`tel:${brand.phone.replace(/[^\d+]/g, "")}`}
                    >
                      {brand.phone}
                    </a>
                  </div>
                ) : null}

                {brand?.email ? (
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-gray-300" />
                    <a
                      className="hover:underline underline-offset-4"
                      href={`mailto:${brand.email}`}
                    >
                      {brand.email}
                    </a>
                  </div>
                ) : null}
              </div>
            </div>

            {/* Columns */}
            <div className="md:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                {columns?.map((col) => (
                  <div key={col.title}>
                    <div className="text-sm font-semibold tracking-wide text-white">
                      {col.title}
                    </div>

                    <div className="mt-5 space-y-3">
                      {col.links?.map((link) => {
                        const isPayRent = link?.variant === "softPrimary";
                        return (
                          <div key={`${col.title}-${link.label}`}>
                            <FooterLink
                              to={link.href}
                              external={!!link.external}
                              variant={link.variant || "default"}
                              icon={link.icon}
                              iconSize={isPayRent ? 18 : 16}
                              className={
                                isPayRent
                                  ? "w-fit px-4 h-10 rounded-md"
                                  : ""
                              }
                            >
                              {link.label}
                            </FooterLink>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-12 border-t border-white/10" />

          {/* Bottom row */}
          <div className="pt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="text-xs text-gray-400">
              {bottom?.copyright ||
                "© 2026 Summit Real Estate Management Services. All rights reserved."}
            </div>

            {/* Socials (text like ss1) */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-300">
              {bottom?.social?.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal links centered */}
          <div className="mt-8 border-t border-white/10 pt-6">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
              {bottom?.legal?.map((l) => (
                <FooterLink key={l.label} to={l.href} variant="default">
                  {l.label}
                </FooterLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
