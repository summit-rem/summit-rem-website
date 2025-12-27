import React from "react";
import { Cookie, CalendarDays, Mail, Phone, MapPin } from "lucide-react";

const Section = ({ id, title, children }) => (
  <section id={id} className="scroll-mt-28">
    <h2 className="text-lg sm:text-xl font-semibold text-[#0b1220]">{title}</h2>
    <div className="mt-3 space-y-4 text-sm sm:text-[15px] leading-7 text-slate-700">
      {children}
    </div>
  </section>
);

export default function CookiePolicyPage() {
  const toc = [
    { id: "intro", label: "Overview" },
    { id: "what-are-cookies", label: "What Cookies Are" },
    { id: "how-we-use", label: "How We Use Cookies" },
    { id: "types", label: "Types of Cookies" },
    { id: "third-party", label: "Third-Party Cookies" },
    { id: "control", label: "Control Cookies" },
    { id: "no-ads", label: "No Targeted Advertising" },
    { id: "updates", label: "Updates" },
  ];

  return (
    <div className="w-full bg-white">
      <div className="w-full border-b border-slate-200/70">
        <div className="w-full px-4 sm:px-6 lg:px-10">
          <div className="max-w-[1200px] mx-auto py-10 sm:py-12">
            <div className="flex items-start gap-3">
              <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#6b0f1a]/10 text-[#6b0f1a]">
                <Cookie className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                  Legal
                </p>
                <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0b1220]">
                  Cookie Policy
                </h1>
                <p className="mt-3 max-w-3xl text-sm sm:text-[15px] leading-7 text-slate-600">
                  This Cookie Policy explains how Summit Real Estate Management
                  Services Inc (“Summit,” “we,” “us,” or “our”) uses cookies and
                  similar technologies on our website, www.summit-rem.com.
                </p>

                <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-600">
                  <CalendarDays className="h-4 w-4 text-[#6b0f1a]" />
                  <span className="font-medium">Effective Date:</span>
                  <span>[Insert Date]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto py-10 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
            <div className="space-y-10">
              <Section id="intro" title="Overview">
                <p>
                  By continuing to use our website, you consent to the use of
                  cookies as described in this policy, unless you choose to
                  disable them through your browser settings.
                </p>
              </Section>

              <Section id="what-are-cookies" title="What Cookies Are">
                <p>
                  Cookies are small text files that are placed on your device
                  when you visit a website. They help websites function properly,
                  improve user experience, and provide information about how
                  visitors interact with the site. Cookies do not typically
                  contain information that personally identifies you, but they
                  may be linked to other information we hold about you.
                </p>
              </Section>

              <Section id="how-we-use" title="How We Use Cookies">
                <p>
                  Summit uses cookies to ensure the website operates efficiently,
                  to understand how visitors use our website, and to improve
                  performance and usability. These cookies help us analyze site
                  traffic, identify popular pages, and understand how users
                  navigate through the site so we can make improvements over time.
                </p>
              </Section>

              <Section id="types" title="Types of Cookies">
                <p>
                  We may use essential cookies that are necessary for the basic
                  operation of the website. Without these cookies, certain
                  features of the site may not function properly. We may also
                  use analytics cookies that collect aggregated information about
                  website usage, such as page visits and interaction patterns.
                  This information helps us understand overall site performance
                  but does not identify individual users.
                </p>
              </Section>

              <Section id="third-party" title="Third-Party Cookies">
                <p>
                  Some cookies used on our website may be provided by third-party
                  service providers, such as analytics platforms. These third
                  parties may collect information about your use of the website
                  in accordance with their own privacy and cookie policies.
                  Summit does not control the placement or use of third-party
                  cookies and is not responsible for their practices.
                </p>
              </Section>

              <Section id="control" title="Control Cookies">
                <p>
                  You have the ability to control or disable cookies through your
                  browser settings at any time. Most web browsers allow you to
                  delete existing cookies or prevent new cookies from being
                  stored. Please note that disabling cookies may impact the
                  functionality and performance of certain parts of the website.
                </p>
              </Section>

              <Section id="no-ads" title="No Targeted Advertising">
                <p>
                  Summit does not use cookies for targeted advertising or
                  marketing tracking purposes. Cookies are used solely to support
                  website functionality and to gain general insight into website
                  usage trends.
                </p>
              </Section>

              <Section id="updates" title="Updates">
                <p>
                  We may update this Cookie Policy from time to time to reflect
                  changes in technology, legal requirements, or website
                  operations. Any updates will be posted on this page with a
                  revised effective date. Continued use of the website after
                  changes are posted constitutes acceptance of the updated Cookie
                  Policy.
                </p>
              </Section>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold text-[#0b1220]">Contact</h3>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm text-slate-700">
                  <div className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 text-[#6b0f1a]" />
                    <div>
                      Summit Real Estate Management Services Inc
                      <div className="text-slate-600">
                        2205 Plaza Drive, Suite 100
                        <br />
                        Rocklin, CA 95765
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="mt-0.5 h-4 w-4 text-[#6b0f1a]" />
                    <div>
                      <div className="font-medium">Office</div>
                      <div className="text-slate-600">916.960.5700</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Mail className="mt-0.5 h-4 w-4 text-[#6b0f1a]" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-slate-600">hello@summit-rem.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* TOC (desktop) */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                  On this page
                </p>
                <nav className="mt-3 space-y-1">
                  {toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
          </div>

          <div className="h-4" />
        </div>
      </div>
    </div>
  );
}
