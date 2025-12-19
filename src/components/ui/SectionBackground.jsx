export default function SectionBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0"
      style={{
        height: "50%",
        backgroundImage: `
          linear-gradient(to right, rgba(120,120,120,0.15) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(120,120,120,0.15) 1px, transparent 1px)
        `,
        backgroundSize: "64px 64px",
        WebkitMaskImage: `
            linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%),
            linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)
            `,
        WebkitMaskComposite: "intersect",
        maskComposite: "intersect",
      }}
    />
  );
}
