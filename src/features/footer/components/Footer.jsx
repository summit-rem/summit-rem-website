import React, { useMemo } from "react";
import * as Icons from "lucide-react";
import { MapPin, Phone, Mail } from "lucide-react";
import { footerConfig } from '../config/footerConfig.js';
import FooterLink from "./FooterLink";
import Container from "../../../components/ui/Container.jsx";

function getIcon(name) {
  return Icons?.[name] ?? null;
}

export default function Footer() {
  const socials = useMemo(
    () =>
      footerConfig.bottom.socials.map((s) => ({
        ...s,
        Icon: s.icon ? getIcon(s.icon) : null,
      })),
    []
  );

  return (
    <footer className="mt-16 bg-[#0b1220] text-white">
      <Container className="py-14">
        <div>
          {/* Top Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Brand / Contact */}
              <div className="md:col-span-5">
                {/* <h3 className="text-lg font-semibold">{footerConfig.brand.title}</h3> */}
                {footerConfig.brand.logo ? (
                  <img
                    src={footerConfig.brand.logo}
                    alt={footerConfig.brand.label}
                    className="h-18 w-auto object-contain"
                  />
                ) : null}
                <p className="mt-4 text-sm text-gray-300 leading-6 max-w-md">
                  {footerConfig.brand.description}
                </p>

              <div className="mt-6 space-y-3 text-sm text-gray-300">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 opacity-80" />
                  <div>
                    {footerConfig.brand.addressLines.map((line) => (
                      <div key={line}>{line}</div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={18} className="opacity-80" />
                  <span>{footerConfig.brand.phone}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={18} className="opacity-80" />
                  <span>{footerConfig.brand.email}</span>
                </div>
              </div>
            </div>

            {/* Columns */}
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-10">
              {footerConfig.columns.map((col) => (
                <div key={col.title}>
                  <h4 className="text-sm font-semibold tracking-wide">{col.title}</h4>
                  <ul className="mt-4 space-y-3">
                    {col.links.map((link) => (
                      <li key={`${link.label}-${link.to}`}>
                        <FooterLink to={link.to} variant={link.variant ?? "default"} icon={link.icon}>
                          {link.label}
                        </FooterLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="mt-12 border-t border-white/10" />

          {/* Bottom Row */}
          <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="text-sm text-gray-300">
              {footerConfig.bottom.copyright}
            </div>

            <div className="flex items-center gap-4">
              {socials.map((s) => {
                const Icon = s.Icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="text-gray-300 hover:text-white transition cursor-pointer"
                  >
                    {Icon ? <Icon size={18} /> : s.label}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Legal Links */}
          <div className="mt-6 border-t border-white/10 pt-6">
            <div className="flex flex-wrap items-center justify-center gap-6">
              {footerConfig.bottom.legal.map((l) => (
                <FooterLink key={l.label} to={l.to} className="text-gray-400">
                  {l.label}
                </FooterLink>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
