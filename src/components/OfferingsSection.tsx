import { motion } from "framer-motion";
import { Shirt, UtensilsCrossed, Stethoscope, Heart, Dumbbell, Palette, Briefcase } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const offerings = [
  { icon: Shirt, title: "Fashion & Lifestyle", desc: "Curate the perfect retail experience in a premium setting." },
  { icon: UtensilsCrossed, title: "QSR / Café", desc: "Serve flavors that keep customers coming back, every day." },
  { icon: Stethoscope, title: "Clinics / Healthcare", desc: "Build a trusted healthcare presence in a thriving community." },
  { icon: Heart, title: "Wellness / Salon", desc: "Create a sanctuary of beauty and well-being." },
  { icon: Dumbbell, title: "Gym / Fitness", desc: "Inspire transformation in a world-class fitness space." },
  { icon: Palette, title: "Studios / Creative Spaces", desc: "Bring creative visions to life in a vibrant environment." },
  { icon: Briefcase, title: "Professional Offices", desc: "Command your industry from a prestigious business address." },
];

const OfferingsSection = () => {
  return (
    <section id="offerings" className="section-padding premium-bg-soft">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
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
          <Accordion type="single" collapsible className="space-y-3">
            {offerings.map((item, i) => (
              <AccordionItem
                key={item.title}
                value={`item-${i}`}
                className="premium-card px-6 py-1 border rounded-xl overflow-hidden"
              >
                <AccordionTrigger className="hover:no-underline gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-secondary/80 flex items-center justify-center flex-shrink-0">
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
      </div>
    </section>
  );
};

export default OfferingsSection;
