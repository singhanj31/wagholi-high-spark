import { motion } from "framer-motion";
import gallery5 from "@/assets/gallery-5.jpeg";
import { ArrowRight } from "lucide-react";

const highlights = [
  { num: "01", title: "Premium Retail Shops", desc: "High-footfall ground-floor units with maximum visibility." },
  { num: "02", title: "Glass-Front Showrooms", desc: "Expansive display spaces for premium brand showcasing." },
  { num: "03", title: "Modern Office Spaces", desc: "Corporate-grade offices with contemporary infrastructure." },
  { num: "04", title: "High Footfall Zone", desc: "Strategically positioned for maximum customer engagement." },
  { num: "05", title: "Premium Business Address", desc: "Establish your brand at Pune's most prestigious commercial destination." },
];

const ProjectHighlightsSection = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Background with less opacity */}
      <div className="absolute inset-0">
        <img src={gallery5} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-br from-cream/80 via-cream/70 to-gold/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="section-divider mb-6" />
          <p className="text-sm font-semibold tracking-widest text-gold uppercase mb-3 drop-shadow-md">Highlights</p>
          <h2 className="section-heading mb-4 text-charcoal drop-shadow-lg" style={{ textShadow: '0 2px 8px rgba(255,255,255,0.7)' }}>Project Highlights</h2>
          <p className="section-subheading mx-auto text-charcoal/90 font-medium" style={{ textShadow: '0 1px 6px rgba(255,255,255,0.8)' }}>Every detail crafted for commercial excellence.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {highlights.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative bg-charcoal/80 backdrop-blur-lg border border-gold/20 rounded-2xl p-7 hover:shadow-2xl transition-all duration-300"
            >
              <span className="text-5xl font-heading font-bold text-gold/40 group-hover:text-gold/60 transition-colors duration-300 absolute top-4 right-5 select-none">
                {item.num}
              </span>
              <h3 className="text-lg font-heading font-semibold text-popover mb-2 mt-2 pr-12">{item.title}</h3>
              <p className="text-sm text-popover/75 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="gradient-band rounded-2xl p-7 flex flex-col justify-center items-start text-primary-foreground"
          >
            <h3 className="text-lg font-heading font-semibold mb-3">
              Ready to Secure Your Premium Space?
            </h3>
            <a
              href="#enquiry"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-accent-foreground font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg"
            >
              Book a Site Visit <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlightsSection;
