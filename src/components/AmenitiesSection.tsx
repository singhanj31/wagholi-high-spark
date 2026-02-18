import gallery4 from "@/assets/gallery-4.jpeg";
import { Wine, Briefcase, Users, Gamepad2, Coffee } from "lucide-react";

const amenities = [
  { icon: Wine, title: "Rooftop Lounge", desc: "Exclusive rooftop space for networking with panoramic views." },
  { icon: Briefcase, title: "Business Lounge", desc: "Premium meeting rooms and business-ready lounges." },
  { icon: Users, title: "Co-working Spaces", desc: "Flexible shared workspaces for collaboration." },
  { icon: Gamepad2, title: "Game Zones", desc: "Recreation areas for leisure and team-building." },
  { icon: Coffee, title: "Café & Leisure", desc: "Curated café spaces for a premium experience." },
];

const AmenitiesSection = () => {
  return (
    <section id="amenities" className="relative overflow-hidden py-20 lg:py-28">
      {/* Real site background with frosted overlay */}
      <div className="absolute inset-0">
        <img src={gallery4} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-popover/85 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/40 via-transparent to-cream/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest text-gold uppercase mb-3">Lifestyle</p>
          <h2 className="section-heading mb-4">Amenities & Experience</h2>
          <p className="section-subheading mx-auto">
            World-class amenities designed to elevate your business and lifestyle.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((item) => (
            <div
              key={item.title}
              className="group bg-popover/60 backdrop-blur-lg border border-border/50 rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/80 flex items-center justify-center mb-5 group-hover:bg-gold/15 transition-colors duration-300">
                <item.icon className="w-7 h-7 text-navy group-hover:text-gold transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
