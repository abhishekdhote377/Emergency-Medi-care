const DOCTORS = [
  { name: "Dr. Amara Okafor", role: "Chief of Cardiology", initials: "AO", years: "16 yrs" },
  { name: "Dr. Liam Chen", role: "Neurology", initials: "LC", years: "11 yrs" },
  { name: "Dr. Priya Nair", role: "Pediatrics", initials: "PN", years: "9 yrs" },
  { name: "Dr. Marcus Webb", role: "Orthopedic Surgery", initials: "MW", years: "19 yrs" },
];

export default function Doctors() {
  return (
    <section id="doctors" className="py-24 md:py-32 bg-paper-dim/60">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div className="max-w-xl">
            <p className="text-[13px] font-medium tracking-wide uppercase text-coral">Meet the team</p>
            <h2 className="font-display text-4xl md:text-[2.75rem] leading-tight text-ink mt-3">
              Specialists who remember your name.
            </h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {DOCTORS.map((d) => (
            <div key={d.name} className="rounded-2xl bg-white border border-ink/[0.06] overflow-hidden hover:shadow-card transition-shadow">
              <div className="aspect-[4/3] bg-gradient-to-br from-teal-100 to-sage grid place-items-center">
                <span className="font-display text-4xl text-teal-700">{d.initials}</span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg text-ink">{d.name}</h3>
                <p className="text-[13.5px] text-ink-soft mt-1">{d.role}</p>
                <p className="text-[12px] font-mono text-teal-700 mt-2">{d.years} experience</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
