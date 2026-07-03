import { useState } from "react";
import { Menu, X, Activity } from "lucide-react";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Doctors", href: "#doctors" },
  { label: "Petaint Review", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur-sm border-b border-ink/[0.06]">
      <nav className="max-w-6xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 shrink-0">
          <span className="grid place-items-center w-9 h-9 rounded-full bg-teal-700 text-paper">
            <Activity size={18} strokeWidth={2.5} />
          </span>
          <span className="font-display text-x1 tracking-tight text-ink">Emergency</span>
        </a>

        <div className="hidden md:flex items-center gap-9">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[15px] text-ink-soft hover:text-teal-700 transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-coral transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <button
          className="md:hidden p-2 -mr-2 text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-ink/[0.06] bg-paper px-6 py-6 flex flex-col gap-5">
          {LINKS.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-[16px] text-ink-soft">
              {l.label}
            </a>
          ))}
          
        </div>
      )}
    </header>
  );
}
