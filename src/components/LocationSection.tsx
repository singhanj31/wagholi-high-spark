import { motion } from "framer-motion";
import { MapPin, Train, Route, Building, Globe } from "lucide-react";
import SectionDivider from "@/components/SectionDivider";

const connectivityItems = [
  { icon: Train, label: "Metro Extension", desc: "Direct metro connectivity" },
  { icon: Route, label: "120 Ft Link Road", desc: "Prime road access" },
  { icon: Route, label: "Samruddhi Expressway", desc: "Expressway link" },
  { icon: Route, label: "Pune Outer Ring Road", desc: "Ring road proximity" },
  { icon: Building, label: "EON IT Park", desc: "IT hub nearby" },
  { icon: Globe, label: "World Trade Center", desc: "WTC Pune access" },
];

const LocationSection = () => {
  return (
    <section id="location" className="section-padding bg-background relative overflow-hidden">
      {/* Subtle colored accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <SectionDivider />
          <p className="text-sm font-semibold tracking-widest text-gold uppercase mb-3">
            Strategic Location
          </p>
          <h2 className="section-heading mb-4">
            Pune's Fastest-Growing Business District
          </h2>
          <p className="section-subheading mx-auto">
            Unmatched connectivity and rapid infrastructure growth make Wagholi the next commercial powerhouse.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-xl border-2 border-gold/20 h-[400px] relative group"
          >
            <a
              href="https://maps.app.goo.gl/TztiWR7RGvGh9DCKA"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-10"
              aria-label="Open Wagholi High Street on Google Maps"
            />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1891.0!2d74.017861!3d18.573787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b80a6883%3A0xa2c9e1f3b1d4e77f!2sWagholi+High+Street!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wagholi High Street Location"
            />
            {/* Red location pin overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full z-20 pointer-events-none flex flex-col items-center">
              <div className="relative">
                <MapPin className="w-10 h-10 text-red-600 drop-shadow-lg" fill="red" strokeWidth={1.5} />
              </div>
              <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg border border-red-200 mt-1 whitespace-nowrap">
                <p className="text-xs font-bold text-red-700">Wagholi High Street</p>
                <p className="text-[10px] text-gray-600">GS Crown Plaza, Kesnand Rd</p>
              </div>
            </div>
          </motion.div>

          {/* Connectivity Grid */}
          <div className="grid grid-cols-2 gap-4">
            {connectivityItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" as const }}
                whileHover={{ y: -6, boxShadow: "0 12px 30px -8px rgba(0,0,0,0.12)" }}
                className="bg-popover rounded-xl border border-border p-5 cursor-default shadow-sm group"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-gold/10 flex items-center justify-center mb-3 group-hover:from-gold/20 group-hover:to-primary/15 transition-all">
                  <item.icon className="w-5 h-5 text-navy group-hover:text-gold transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">{item.label}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
