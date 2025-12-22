import TeamMemberCard from "./TeamMemberCard";

export default function TeamSection({ heading, items, onOpen }) {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-12">
          {/* Left label column */}
          <div className="lg:col-span-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 leading-snug">
              {heading}
            </h2>
          </div>

          {/* Right grid column */}
          <div className="lg:col-span-9">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((m) => (
                <TeamMemberCard
                  key={m.id}
                  member={m}
                  onOpen={() => onOpen(m)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Divider after section */}
        <hr className="mt-14 border-gray-200" />
      </div>
    </section>
  );
}
