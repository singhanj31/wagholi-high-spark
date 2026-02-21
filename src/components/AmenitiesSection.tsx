import { motion } from "framer-motion";
import gallery4 from "@/assets/gallery-4.jpeg";
import { Wine, Briefcase, Gamepad2, Coffee, Sparkles } from "lucide-react";

const amenities = [
  { icon: Wine, title: "Rooftop Lounge", desc: "Sky-high relaxation with panoramic views" },
  { icon: Briefcase, title: "Business Lounge", desc: "Premium meeting & networking spaces" },
  { icon: Gamepad2, title: "Game Zones", desc: "Entertainment & recreation areas" },
  { icon: Coffee, title: "Café & Leisure", desc: "Curated dining and leisure experiences" },
  { icon: Sparkles, title: "Premium Interiors", desc: "World-class finishes throughout" },
];

const AmenitiesSection = () => (
  <section id="amenities" className="relative overflow-hidden py-20 lg:py-28">
    {/* Real site background */}
    <div className="absolute inset-0">
      <img src={gallery4} alt="" className="w-full h-full object-cover" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-br from-navy/85 via-navy/75 to-charcoal/80" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <div className="h-1 w-20 mx-auto rounded-full bg-gold mb-6" />
        <p className="text-sm font-semibold tracking-widest text-gold uppercase mb-3">World-Class Amenities</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-popover tracking-tight mb-4">
          Experience Beyond Business
        </h2>
        <p className="text-lg text-popover/70 max-w-2xl mx-auto">
          A curated suite of amenities that elevate the everyday work experience.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {amenities.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            whileHover={{ y: -8 }}
            className="bg-popover/10 backdrop-blur-lg border border-popover/20 rounded-2xl p-7 hover:bg-popover/18 transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-xl bg-gold/15 flex items-center justify-center mb-5 group-hover:bg-gold/25 transition-colors">
              <a.icon className="w-7 h-7 text-gold" />
            </div>
            <h3 className="text-lg font-heading font-semibold text-popover mb-2">{a.title}</h3>
            <p className="text-sm text-popover/65 leading-relaxed">{a.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AmenitiesSection;
