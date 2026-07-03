const PARTNERS = ["Joint Commission", "Blue Cross Network", "Mayo Collaborative", "AmeriHealth", "National Board of Medicine"];

export default function TrustBar() {
  return (
    <section className="py-10 border-y border-ink/[0.06] bg-paper-dim/60">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <p className="text-center text-[12px] tracking-[0.14em] uppercase text-ink-soft mb-6">
          Accredited &amp; trusted by
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {PARTNERS.map((p) => (
            <span key={p} className="font-display text-lg text-ink-soft/70">
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
