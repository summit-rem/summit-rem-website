import React from "react";
import { Shield, CalendarDays, Mail, Phone, MapPin } from "lucide-react";

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
      {/* Hero */}
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

      {/* Body */}
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto py-10 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
            <div className="space-y-10">{children}</div>

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
                <div className="mt-5 border-t border-slate-200 pt-4 text-xs text-slate-500">
                  <span className="font-semibold text-slate-600">Note:</span>{" "}
                  This page is provided for informational purposes only.
                </div>
              </div>
            </aside>
          </div>

          {/* Contact card */}
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

          {/* Bottom spacing for footer rhythm */}
          <div className="h-4" />
        </div>
      </div>
    </div>
  );
};

export default function PrivacyPolicyPage() {
  const toc = [
    { id: "intro", label: "Overview" },
    { id: "info-you-provide", label: "Information You Provide" },
    { id: "auto-info", label: "Information Collected Automatically" },
    { id: "use", label: "How We Use Information" },
    { id: "sharing", label: "How We Share Information" },
    { id: "security", label: "Security" },
    { id: "retention", label: "Retention" },
    { id: "ca-rights", label: "California Rights" },
    { id: "cookies", label: "Cookies" },
    { id: "third-party", label: "Third-Party Links" },
    { id: "children", label: "Children" },
    { id: "updates", label: "Updates" },
  ];

  return (
    <LegalLayout
      title="Privacy Policy"
      icon={Shield}
      effectiveDate="January 1, 2026"
      subtitle={`Summit Real Estate Management Services Inc (“Summit,” “we,” “us,” or “our”) is committed to protecting the privacy of individuals who visit and interact with our website, www.summit-rem.com`}
      toc={toc}
    >
      <Section id="intro" title="Overview">
        <p>
          This Privacy Policy explains how we collect, use, disclose, and protect
          personal information obtained through our website and related
          communications. By accessing or using our website, you agree to the
          practices described in this Privacy Policy.
        </p>
      </Section>

      <Section id="info-you-provide" title="Information You Provide">
        <p>
          We may collect personal information that you voluntarily provide when
          you contact us through our website, submit an inquiry, request
          information about our services, subscribe to communications, or
          otherwise communicate with us by email or phone. This information may
          include your name, email address, phone number, mailing address,
          property-related details, and any other information you choose to
          provide. Providing personal information is voluntary, but certain
          information may be required to respond to your inquiry or provide
          services.
        </p>
      </Section>

      <Section id="auto-info" title="Information Collected Automatically">
        <p>
          In addition to information you provide directly, we may automatically
          collect certain technical information when you visit our website. This
          may include your IP address, browser type, device information, pages
          viewed, time spent on the site, and referring website addresses. This
          information is collected through cookies and similar technologies and
          is used to understand website usage, improve functionality, and
          enhance user experience.
        </p>
      </Section>

      <Section id="use" title="How We Use Information">
        <p>
          Summit uses personal information for legitimate business purposes,
          including responding to inquiries, providing property management
          services, communicating with clients, tenants, and prospective
          customers, maintaining internal records, improving website content and
          functionality, and complying with legal and regulatory requirements.
          We do not sell, rent, or trade personal information to third parties.
        </p>
      </Section>

      <Section id="sharing" title="How We Share Information">
        <p>
          We may share personal information with trusted third-party service
          providers who assist us with website operations, communications, or
          business functions, provided those parties are contractually obligated
          to maintain confidentiality and use the information only for
          authorized purposes. We may also disclose information if required by
          law, legal process, or governmental request, or when necessary to
          protect the rights, property, or safety of Summit, our users, or
          others.
        </p>
      </Section>

      <Section id="security" title="Security">
        <p>
          We take reasonable administrative, technical, and physical measures to
          safeguard personal information against unauthorized access,
          disclosure, alteration, or destruction. While we strive to protect
          your information, no method of transmission over the internet or
          electronic storage is completely secure, and we cannot guarantee
          absolute security.
        </p>
      </Section>

      <Section id="retention" title="Retention">
        <p>
          Personal information is retained only for as long as necessary to
          fulfill the purposes outlined in this Privacy Policy, comply with
          legal or regulatory obligations, resolve disputes, and enforce
          agreements. When personal information is no longer required, it is
          securely deleted or anonymized in accordance with applicable laws.
        </p>
      </Section>

      <Section id="ca-rights" title="California Rights">
        <p>
          California residents may have certain rights regarding their personal
          information under applicable state law. These rights may include the
          right to request access to personal information we have collected,
          request correction of inaccurate information, or request deletion of
          personal information, subject to legal exceptions. Requests may be
          submitted by contacting us at hello@summit-rem.com , and we will
          respond in accordance with applicable legal requirements.
        </p>
      </Section>

      <Section id="cookies" title="Cookies">
        <p>
          Our website may use cookies and similar technologies to enhance
          functionality and analyze usage. You may control cookie settings
          through your browser preferences; however, disabling cookies may
          affect the functionality of certain features of the website.
          Additional information about cookies may be found in our Cookie
          Policy.
        </p>
      </Section>

      <Section id="third-party" title="Third-Party Links">
        <p>
          Our website may contain links to third-party websites for your
          convenience. Summit is not responsible for the privacy practices,
          content, or security of third-party websites, and we encourage you to
          review their privacy policies before providing personal information.
        </p>
      </Section>

      <Section id="children" title="Children">
        <p>
          Our website is not intended for children under the age of 13, and we
          do not knowingly collect personal information from children. If we
          become aware that personal information from a child has been
          collected, we will take appropriate steps to delete it.
        </p>
      </Section>

      <Section id="updates" title="Updates">
        <p>
          We reserve the right to update this Privacy Policy from time to time
          to reflect changes in our practices, legal requirements, or website
          operations. Any updates will be posted on this page with a revised
          effective date. Continued use of the website after changes are posted
          constitutes acceptance of the updated Privacy Policy.
        </p>
      </Section>
    </LegalLayout>
  );
}
