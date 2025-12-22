import { Linkedin, ArrowUpRight } from "lucide-react";

export default function TeamMemberCard({ member, onOpen }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group text-left"
      aria-label={`Open details for ${member.name}`}
    >
      <div className="overflow-hidden rounded-none bg-transparent">
        {/* Image tile */}
        <div className="relative overflow-hidden bg-gray-100">
          <img
            src={member.image}
            alt={member.name}
            className="h-72 sm:h-80 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
            loading="lazy"
          />

          {/* Action buttons (LinkedIn + Drawer Arrow) */}
          <div className="absolute bottom-3 right-3 flex items-center gap-2">
            {member.socials?.linkedin ? (
              <a
                href={member.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center bg-white shadow-sm ring-1 ring-black/10 transition hover:bg-gray-50"
                aria-label="Open LinkedIn"
                onClick={(e) => e.stopPropagation()}
              >
                <Linkedin className="h-4 w-4 text-[#6b1620]" />
              </a>
            ) : null}

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center bg-white shadow-sm ring-1 ring-black/10 transition hover:bg-gray-50"
              aria-label="Open profile drawer"
              onClick={(e) => {
                e.stopPropagation();
                onOpen();
              }}
            >
              <ArrowUpRight className="h-4 w-4 text-[#6b1620]" />
            </button>
          </div>
        </div>

        {/* Text */}
        <div className="pt-4">
          <div className="text-lg font-semibold text-gray-900 leading-snug">
            {member.name}
          </div>
          <div className="mt-1 text-xs tracking-wide text-gray-600">
            {member.role}
          </div>
        </div>
      </div>
    </button>
  );
}
