import { motion } from "framer-motion";
import gallery4 from "@/assets/gallery-4.jpeg";
import { Wine, Briefcase, Users, Gamepad2, Coffee, Sparkles } from "lucide-react";

const amenities = [
  { icon: Wine, title: "Rooftop Lounge", desc: "Sky-high relaxation with panoramic views" },
  { icon: Briefcase, title: "Business Lounge", desc: "Premium meeting & networking spaces" },
  { icon: Users, title: "Co-working Spaces", desc: "Flexible workspaces for modern professionals" },
  { icon: Gamepad2, title: "Game Zones", desc: "Entertainment & recreation areas" },
  { icon: Coffee, title: "Café & Leisure", desc: "Curated dining and leisure experiences" },
  { icon: Sparkles, title: "Premium Interiors", desc: "World-class finishes throughout" },
];

const AmenitiesSection = () => (
  <section id="amenities" className="relative overflow-hidden py-20 lg:py-28">
    {/* Real site background with frosted overlay */}
    <div className="absolute inset-0">
      <img src={gallery4} alt="" className="w-full h-full object-cover" aria-hidden="true" />
      <div className="absolute inset-0 bg-popover/80 backdrop-blur-sm" />
      <div className="absolute inset-0 bg-gradient-to-b from-cream/30 via-transparent to-cream/40" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <p className="text-sm font-semibold tracking-widest text-gold uppercase mb-3">World-Class Amenities</p>
        <h2 className="section-heading mb-4">Experience Beyond Business</h2>
        <p className="section-subheading mx-auto">
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
            whileHover={{ y: -8, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.15)" }}
            className="bg-popover/60 backdrop-blur-lg border border-border/50 rounded-2xl p-7 transition-colors duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-secondary/80 flex items-center justify-center mb-5">
              <a.icon className="w-7 h-7 text-navy" />
            </div>
            <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{a.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AmenitiesSection;
