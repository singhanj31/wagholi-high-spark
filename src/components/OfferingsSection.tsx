import { useState } from "react";
import { motion } from "framer-motion";
import { Shirt, UtensilsCrossed, Stethoscope, Heart, Dumbbell, Palette, Briefcase, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const offerings = [
  { icon: Shirt, title: "Fashion & Lifestyle", desc: "Curate the perfect retail experience in a premium setting designed to attract discerning customers." },
  { icon: UtensilsCrossed, title: "QSR / Café", desc: "Serve flavors that keep customers coming back, every day in high-visibility storefronts." },
  { icon: Stethoscope, title: "Clinics / Healthcare", desc: "Build a trusted healthcare presence in a thriving community with excellent accessibility." },
  { icon: Heart, title: "Wellness / Salon", desc: "Create a sanctuary of beauty and well-being in a premium commercial space." },
  { icon: Dumbbell, title: "Gym / Fitness", desc: "Inspire transformation in a world-class fitness space with modern infrastructure." },
  { icon: Palette, title: "Studios / Creative Spaces", desc: "Bring creative visions to life in a vibrant, inspiring environment." },
  { icon: Briefcase, title: "Professional Offices", desc: "Command your industry from a prestigious business address in Pune's growth corridor." },
];

const colors = [
  "from-blue-500/10 to-blue-600/5",
  "from-orange-500/10 to-orange-600/5",
  "from-emerald-500/10 to-emerald-600/5",
  "from-pink-500/10 to-pink-600/5",
  "from-violet-500/10 to-violet-600/5",
  "from-amber-500/10 to-amber-600/5",
  "from-cyan-500/10 to-cyan-600/5",
];

const OfferingsSection = () => {
  const [mainOpen, setMainOpen] = useState(false);

  return (
    <section id="offerings" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-background to-gold/[0.05]" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <div className="section-divider mb-6" />
          <p className="text-sm font-semibold tracking-widest text-gold uppercase mb-3">
            Commercial Spaces
          </p>
          <h2 className="section-heading mb-4">Explore Business Opportunities</h2>
          <p className="section-subheading mx-auto">
            From retail shops to professional offices — find the perfect space for your vision.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Main dropdown */}
          <button
            onClick={() => setMainOpen(!mainOpen)}
            className="w-full flex items-center justify-between px-7 py-5 rounded-xl bg-primary text-primary-foreground font-heading font-semibold text-lg shadow-lg hover:opacity-95 transition-opacity mb-4"
          >
            <span>Business Opportunities</span>
            <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${mainOpen ? "rotate-180" : ""}`} />
          </button>

          {mainOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
            >
              <Accordion type="single" collapsible className="space-y-3">
                {offerings.map((item, i) => (
                  <AccordionItem
                    key={item.title}
                    value={`item-${i}`}
                    className={`bg-gradient-to-r ${colors[i]} bg-popover border border-border/80 rounded-xl overflow-hidden px-6 py-1 shadow-sm hover:shadow-md transition-shadow`}
                  >
                    <AccordionTrigger className="hover:no-underline gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-navy" />
                        </div>
                        <span className="text-base font-heading font-semibold text-foreground text-left">
                          {item.title}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pl-[60px] text-muted-foreground leading-relaxed">
                      {item.desc}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default OfferingsSection;
