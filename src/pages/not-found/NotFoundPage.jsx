import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    // If user has history, go back. If not, go home.
    if (window.history.length > 1) navigate(-1);
    else navigate("/");
  };

  return (
    <div className="min-h-[calc(100vh-64px)] w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh] overflow-hidden rounded-2xl border border-gray-200 bg-white">
          {/* LEFT */}
          <div className="p-10 lg:p-14 flex flex-col">
            <img
              src="/src/assets/image/signature_logo2.jpg"
              alt="Summit Real Estate Management"
              className="h-10 w-auto object-contain"
            />

            <div className="mt-10">
              <div className="text-sm font-semibold text-[var(--color-burgundy)]">
                404
              </div>

              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-gray-900">
                Page not found
              </h1>

              <p className="mt-4 text-base text-gray-600 max-w-md">
                Sorry, we couldn’t find the page you’re looking for.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {/* Back button (previous page) */}
                <button
                  type="button"
                  onClick={handleBack}
                  className="inline-flex items-center gap-2 h-10 px-4 rounded-md border border-gray-200 bg-white text-gray-900 hover:bg-gray-50 cursor-pointer"
                >
                  <ArrowLeft size={16} />
                  Back
                </button>

                {/* Home button (consistent brand) */}
                <button
                  type="button"
                  onClick={() => navigate("/")}
                  className="inline-flex items-center h-10 px-4 rounded-md bg-[var(--color-burgundy)] text-white hover:opacity-90 cursor-pointer"
                >
                  Go to home
                </button>
              </div>
            </div>

            {/* Bottom mini-links */}
            <div className="mt-auto pt-10">
              <div className="border-t pt-6 text-sm text-gray-500 flex items-center gap-6">
                <span className="cursor-pointer hover:text-gray-700">
                  Contact support
                </span>
                <span>•</span>
                <span className="cursor-pointer hover:text-gray-700">Status</span>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative min-h-[320px] lg:min-h-full">
            <img
              src="/src/assets/image/not_found_image.jpg"
              alt="Not found background"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
