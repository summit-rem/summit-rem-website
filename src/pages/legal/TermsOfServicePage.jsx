import React from "react";
import { FileText, CalendarDays, Mail, Phone, MapPin, Shield } from "lucide-react";

const Section = ({ id, title, children }) => (
  <section id={id} className="scroll-mt-28">
    <h2 className="text-lg sm:text-xl font-semibold text-[#0b1220]">{title}</h2>
    <div className="mt-3 space-y-4 text-sm sm:text-[15px] leading-7 text-slate-700">
      {children}
    </div>
  </section>
);

const LegalLayout = ({ title, subtitle, effectiveDate, icon: Icon, children, toc }) => {
  return (
    <div className="w-full bg-white">
      <div className="w-full border-b border-slate-200/70">
        <div className="w-full px-4 sm:px-6 lg:px-10">
          <div className="max-w-[1200px] mx-auto py-10 sm:py-12">
            <div className="flex items-start gap-3">
              <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#6b0f1a]/10 text-[#6b0f1a]">
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                  Legal
                </p>
                <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0b1220]">
                  {title}
                </h1>
                <p className="mt-3 max-w-3xl text-sm sm:text-[15px] leading-7 text-slate-600">
                  {subtitle}
                </p>

                <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-600">
                  <CalendarDays className="h-4 w-4 text-[#6b0f1a]" />
                  <span className="font-medium">Effective Date:</span>
                  <span>{effectiveDate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto py-10 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
            <div className="space-y-10">{children}</div>

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
                <div className="mt-5 border-t border-slate-200 pt-4 text-xs text-slate-500">
                  <span className="font-semibold text-slate-600">Note:</span>{" "}
                  Continued use of the Website constitutes acceptance of these Terms.
                </div>
              </div>
            </aside>
          </div>

          <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold text-[#0b1220]">Contact</h3>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm text-slate-700">
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
              <div className="flex items-start gap-2">
                <Shield className="mt-0.5 h-4 w-4 text-[#6b0f1a]" />
                <div>
                  <div className="font-medium">License</div>
                  <div className="text-slate-600">
                    California Department of Real Estate License #01049566
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-4" />
        </div>
      </div>
    </div>
  );
};

export default function TermsOfServicePage() {
  const toc = [
    { id: "intro", label: "Overview" },
    { id: "informational", label: "Informational Use" },
    { id: "acceptable-use", label: "Acceptable Use" },
    { id: "ip", label: "Intellectual Property" },
    { id: "no-advice", label: "No Professional Advice" },
    { id: "third-party", label: "Third-Party Links" },
    { id: "disclaimer", label: "Disclaimers & Liability" },
    { id: "changes", label: "Changes" },
    { id: "governing-law", label: "Governing Law" },
  ];

  return (
    <LegalLayout
      title="Terms of Service"
      icon={FileText}
      effectiveDate="January 1, 2026"
      subtitle={`These Terms of Service (“Terms”) govern your access to and use of the website www.summit-rem.com (the “Website”), operated by Summit Real Estate Management Services Inc (“Summit,” “we,” “us,” or “our”).`}
      toc={toc}
    >
      <Section id="intro" title="Overview">
        <p>
          By accessing or using this Website, you agree to be bound by these
          Terms. If you do not agree, please do not use the Website.
        </p>
      </Section>

      <Section id="informational" title="Informational Use">
        <p>
          The Website is provided for informational purposes only and is intended
          to present general information about Summit, its services, and property
          management-related topics. Use of this Website does not create a
          client, tenant, agency, or professional relationship between you and
          Summit. Any relationship for services must be established through a
          separate written agreement.
        </p>
      </Section>

      <Section id="acceptable-use" title="Acceptable Use">
        <p>
          You agree to use this Website only for lawful purposes and in
          accordance with these Terms. You may not use the Website in any manner
          that could damage, disable, overburden, or impair its functionality,
          interfere with other users, attempt unauthorized access, or violate any
          applicable laws or regulations.
        </p>
      </Section>

      <Section id="ip" title="Intellectual Property">
        <p>
          All content on this Website, including text, graphics, logos, images,
          layouts, and design elements, is the property of Summit Real Estate
          Management Services Inc or its licensors and is protected by applicable
          intellectual property laws. You may view, download, or print content
          solely for personal, non-commercial use. Any other use, reproduction,
          distribution, or modification without prior written permission is
          prohibited.
        </p>
      </Section>

      <Section id="no-advice" title="No Professional Advice">
        <p>
          The information provided on this Website is not intended to constitute
          legal, financial, real estate, or professional advice. While Summit
          strives to keep information accurate and current, we make no
          representations or warranties regarding the completeness, accuracy, or
          reliability of any content. Reliance on information from this Website is
          at your own risk.
        </p>
      </Section>

      <Section id="third-party" title="Third-Party Links">
        <p>
          This Website may contain links to third-party websites for convenience
          or reference. Summit does not control and is not responsible for the
          content, policies, or practices of third-party websites. Accessing
          third-party sites is done at your own discretion and risk.
        </p>
      </Section>

      <Section id="disclaimer" title="Disclaimers & Liability">
        <p>
          To the fullest extent permitted by law, Summit disclaims all warranties,
          express or implied, related to the Website and its content, including
          warranties of merchantability, fitness for a particular purpose, and
          non-infringement. Summit shall not be liable for any damages arising
          from your use of, or inability to use, the Website, including direct,
          indirect, incidental, or consequential damages.
        </p>
      </Section>

      <Section id="changes" title="Changes">
        <p>
          Summit reserves the right to modify, suspend, or discontinue any part
          of the Website at any time without notice. We may also update these
          Terms periodically. Changes will be effective upon posting to this page,
          and continued use of the Website constitutes acceptance of the revised
          Terms.
        </p>
      </Section>

      <Section id="governing-law" title="Governing Law">
        <p>
          These Terms shall be governed by and construed in accordance with the
          laws of the State of California, without regard to conflict-of-law
          principles. Any disputes arising from these Terms or use of the Website
          shall be subject to the exclusive jurisdiction of state or federal
          courts located in California.
        </p>
      </Section>
    </LegalLayout>
  );
}
