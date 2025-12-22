import { X, Linkedin, Mail, Phone } from "lucide-react";

export default function TeamMemberDrawer({ open, member, onClose }) {
  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[1px]"
        onClick={onClose}
      />

      <aside className="fixed right-0 top-0 z-50 h-full w-full max-w-md overflow-y-auto bg-white shadow-2xl">
        <div className="flex items-start justify-between border-b border-gray-200 p-5">
          <div>
            <div className="text-lg font-semibold text-gray-900">
              {member?.name}
            </div>
            <div className="mt-1 text-sm text-gray-600">{member?.role}</div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 hover:bg-gray-50 cursor-pointer"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-5">
          <img
            src={member?.image}
            alt={member?.name}
            className="h-[320px] sm:h-[360px] w-full rounded-2xl object-cover"
          />

          <div className="mt-6">
            <h3 className="text-sm font-semibold tracking-wide text-[#6b1620]">
              ABOUT
            </h3>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              {member?.about}
            </p>
          </div>

          {/* Divider between ABOUT and CONNECT (your requirement) */}
          <hr className="my-8 border-gray-200" />

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-[#6b1620]">
              CONNECT
            </h3>

            <div className="mt-3 flex flex-wrap gap-2">
              <a
                href={member?.socials?.linkedin || "#"}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 cursor-pointer"
              >
                <Linkedin className="h-4 w-4 text-[#6b1620]" />
                LinkedIn
              </a>

              {/* Optional placeholders - wire later if you add fields */}
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 cursor-pointer"
              >
                <Mail className="h-4 w-4 text-[#6b1620]" />
                Email
              </button>

              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 cursor-pointer"
              >
                <Phone className="h-4 w-4 text-[#6b1620]" />
                Call
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
