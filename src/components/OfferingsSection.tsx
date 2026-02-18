import gallery3 from "@/assets/gallery-3.jpeg";
import { Shirt, UtensilsCrossed, Stethoscope, Heart, Dumbbell, Palette, Briefcase } from "lucide-react";

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
    <section id="offerings" className="relative overflow-hidden py-20 lg:py-28">
      {/* Background image with soft overlay */}
      <div className="absolute inset-0">
        <img src={gallery3} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-br from-popover/92 via-popover/88 to-cream/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest text-gold uppercase mb-3">
            Commercial Spaces
          </p>
          <h2 className="section-heading mb-4">Explore Business Opportunities</h2>
          <p className="section-subheading mx-auto">
            From retail shops to professional offices — find the perfect space for your vision.
          </p>
        </div>

        {/* Horizontal scrolling bands */}
        <div className="space-y-4">
          {offerings.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-2xl overflow-hidden bg-popover/60 backdrop-blur-lg border border-border/60 hover:border-gold/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-6 px-6 py-6 sm:px-8 sm:py-7">
                <div className="w-14 h-14 rounded-xl bg-secondary/80 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/15 transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-navy group-hover:text-gold transition-colors duration-300" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
                <div className="hidden sm:block w-24 h-1 rounded-full bg-gradient-to-r from-gold/40 to-transparent group-hover:from-gold/70 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
