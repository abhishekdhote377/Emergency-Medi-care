import { ArrowRight, ShieldCheck, Clock3, Form } from "lucide-react";
import PulseDivider from "./PulseDivider";
import heroImage from "../assets/womendr.png";


export default function Hero() {
  return (
    <section id="top" className="relative pt-16 pb-24 md:pt-20 md:pb-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-[13px] font-medium tracking-wide uppercase text-teal-700 bg-teal-100 rounded-full px-3.5 py-1.5">
            <Clock3 size={14} /> 24/7 Emergency Care
          </span>

          <h1 className="font-display text-[2.6rem] leading-[1.08] md:text-[3.6rem] md:leading-[1.05] tracking-tight text-ink mt-6">
            Care that keeps pace
            <br />
            with your life.
          </h1>

          <p className="text-ink-soft text-lg leading-relaxed mt-6 max-w-md">
            Meridian Health brings specialist medicine, same-week appointments, and a
            team that actually calls you back — all under one roof in the heart of the city.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-9">
            <a
              href="#appointment"
              className="inline-flex items-center gap-2 rounded-full bg-teal-700 text-paper text-[15px] font-medium px-6 py-3.5 hover:bg-teal-600 transition-colors shadow-card"
            >
              Book an appointment <ArrowRight size={16} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-[15px] font-medium text-ink px-6 py-3.5 rounded-full border border-ink/15 hover:border-teal-700 hover:text-teal-700 transition-colors"
            >
              Explore services
            </a>
          </div>

          
        </div>

        <div className="relative">
  <div className="relative rounded-[2rem] aspect-[4/5] overflow-hidden float-soft">

    <img
      src={heroImage}
      alt="Doctor"
      className="absolute inset-0 w-full h-full object-cover"
    />

    <div className="absolute inset-0 bg-black/20"></div>

    <svg
      viewBox="0 0 300 60"
      className="absolute top-1/2 left-0 w-full -translate-y-1/2 opacity-90"
      preserveAspectRatio="none"
    >
      
    </svg>

  </div>
</div>
      </div>

      
    </section>
  );
}
