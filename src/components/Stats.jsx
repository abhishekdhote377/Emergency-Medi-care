const STATS = [
  { value: "38", label: "Years serving the community" },
  { value: "210+", label: "Board-certified physicians" },
  { value: "412", label: "Licensed patient beds" },
  { value: "96%", label: "Patients who'd return" },
];

export default function Stats() {
  return (
    <section className="bg-teal-900 py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="font-mono text-4xl md:text-5xl text-coral">{s.value}</p>
              <p className="text-teal-100/80 text-[14px] mt-3 leading-snug max-w-[16ch]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
