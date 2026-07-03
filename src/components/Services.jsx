import { HeartPulse, Brain, Bone, Baby, Stethoscope, Eye, ArrowUpRight } from "lucide-react";
import PulseDivider from "./PulseDivider";

const SERVICES = [
  { icon: HeartPulse, name: "Cardiology", desc: "Preventive screening, catheter labs, and rhythm care from a team that treats hearts all day, every day." },
  { icon: Brain, name: "Neurology", desc: "Diagnosis and treatment for migraines, stroke recovery, and complex neurological conditions." },
  { icon: Bone, name: "Orthopedics", desc: "Joint replacement, sports medicine, and rehabilitation to get you back on your feet, faster." },
  
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="max-w-xl">
          <p className="text-[13px] font-medium tracking-wide uppercase text-coral">What we treat</p>
          <h2 className="font-display text-4xl md:text-[2.75rem] leading-tight text-ink mt-3">
            Departments built around how people actually get sick.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {SERVICES.map(({ icon: Icon, name, desc }) => (
            <div
              key={name}
              className="group relative rounded-2xl bg-white border border-ink/[0.06] p-7 hover:border-teal-700/30 hover:shadow-card transition-all duration-300"
            >
              <div className="absolute top-0 left-7 right-7 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <PulseDivider color="var(--color-coral)" className="h-3" />
              </div>
              <span className="grid place-items-center w-11 h-11 rounded-xl bg-sage text-teal-700 mb-5">
                <Icon size={20} strokeWidth={2} />
              </span>
              <h3 className="font-display text-xl text-ink mb-2">{name}</h3>
              <p className="text-[14.5px] text-ink-soft leading-relaxed mb-4">{desc}</p>
              <a href="#appointment" className="inline-flex items-center gap-1 text-[13.5px] font-medium text-teal-700">
                Learn more <ArrowUpRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
