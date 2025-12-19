import React from "react";
import * as Icons from "lucide-react";

function getIcon(name) {
  return Icons?.[name] ?? null;
}

function CardAction({ action }) {
  if (!action) return null;

  const common =
    "text-sm font-semibold text-[var(--color-burgundy)] hover:underline underline-offset-4 cursor-pointer";

  if (action.type === "email") return <a className={common} href={`mailto:${action.value}`}>{action.label}</a>;
  if (action.type === "phone") return <a className={common} href={`tel:${action.value}`}>{action.label}</a>;
  if (action.type === "link")
    return (
      <a className={common} href={action.value} target="_blank" rel="noreferrer">
        {action.label}
      </a>
    );

  return <span className={common}>{action.label}</span>;
}

export default function InfoCards({ cards = [] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((c) => {
        const Icon = c.icon ? getIcon(c.icon) : null;

        return (
          <div
            key={c.title}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="h-10 w-10 rounded-xl border border-gray-200 bg-gray-50 flex items-center justify-center">
              {Icon ? <Icon size={18} /> : null}
            </div>

            <h3 className="mt-4 font-semibold text-gray-900">{c.title}</h3>
            {c.description ? (
              <p className="mt-2 text-sm text-gray-600">{c.description}</p>
            ) : null}

            <div className="mt-4">
              <CardAction action={c.action} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
