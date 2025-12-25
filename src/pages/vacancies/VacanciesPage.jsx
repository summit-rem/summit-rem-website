import React, { useEffect, useMemo, useRef, useState } from "react";

const APFOLIO_HOST = "summitrem.appfolio.com";

export default function VacanciesPage() {
  const iframeRef = useRef(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  // The HTML AppFolio expects, but isolated inside an iframe
  const iframeHtml = useMemo(() => {
    return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1,maximum-scale=1"
    />
    <style>
      html, body { margin: 0; padding: 0; background: #fff; }
      /* AppFolio sometimes injects its own spacing; keep it clean */
      #af-root { padding: 0; margin: 0; }
    </style>
  </head>
  <body>
    <div id="af-root"></div>

    <script type="text/javascript" charset="utf-8"
      src="https://${APFOLIO_HOST}/javascripts/listing.js"></script>

    <script type="text/javascript" charset="utf-8">
      (function () {
        function init() {
          if (!window.Appfolio || !window.Appfolio.Listing) {
            return setTimeout(init, 50);
          }
          window.Appfolio.Listing({
            hostUrl: "${APFOLIO_HOST}",
            themeColor: "#676767",
            height: "500px",
            width: "100%",
            defaultOrder: "date_posted"
          });
        }
        init();
      })();
    </script>
  </body>
</html>`;
  }, []);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    // Write the embed HTML into the iframe document
    const doc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!doc) return;

    doc.open();
    doc.write(iframeHtml);
    doc.close();

    // "Loaded" just means our iframe document is mounted; widget can still load after
    setIframeLoaded(true);
  }, [iframeHtml]);

  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold tracking-[0.22em] text-slate-500">
              LISTINGS
            </p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Vacancies
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Browse available rentals and apply online. Listings are powered by
              our AppFolio portal.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-3xl bg-white ring-1 ring-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 sm:px-8 py-6 border-b border-slate-200 flex items-center justify-between">
            <div>
              <p className="text-sm font-extrabold text-slate-900">
                Available Rentals
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Updated directly from our leasing system.
              </p>
            </div>

            <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold bg-[#6b0f1a]/5 text-[#6b0f1a] ring-1 ring-[#6b0f1a]/15">
              Powered by AppFolio
            </span>
          </div>

          <div className="p-4 sm:p-6">
            {!iframeLoaded ? (
              <div className="rounded-2xl bg-slate-50 ring-1 ring-slate-200 p-6">
                <p className="text-sm font-bold text-slate-700">
                  Loading vacancies…
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  If this takes longer than a few seconds, an extension or
                  network policy may be blocking the widget.
                </p>
              </div>
            ) : null}

            <div className="w-full overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-white">
              <iframe
                ref={iframeRef}
                title="AppFolio Listings"
                className="w-full"
                style={{ height: 520, border: 0, display: "block" }}
                // sandbox keeps AppFolio from impacting parent page; allow what it needs
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
