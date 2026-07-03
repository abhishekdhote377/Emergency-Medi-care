import { Activity, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-teal-900 text-teal-100/80 pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-[1.3fr_1fr_1fr_1fr] gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid place-items-center w-9 h-9 rounded-full bg-paper text-teal-700">
                <Activity size={18} strokeWidth={2.5} />
              </span>
              <span className="font-display text-xl text-paper">Emergency</span>
            </div>
            <p className="text-[14px] leading-relaxed mt-4 max-w-xs">
              This web is project is created to do only the practice about the understanding.
            </p>
          </div>  
        </div>
        <div className="border-t border-paper/10 mt-14 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12.5px] text-teal-100/60">
          <p>© {new Date().getFullYear()} Meridian Health. All rights reserved by Abhishek.</p>
          <p>In a medical emergency, call 911 immediately.</p>
        </div>
      </div>
    </footer>
  );
}
