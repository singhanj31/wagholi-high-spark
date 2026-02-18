import { Wine, Briefcase, Users, Gamepad2, Coffee } from "lucide-react";

const amenities = [
  { icon: Wine, title: "Rooftop Lounge", desc: "Exclusive rooftop space for networking and relaxation with panoramic views." },
  { icon: Briefcase, title: "Business Lounge", desc: "Premium meeting rooms and business-ready lounges for professionals." },
  { icon: Users, title: "Co-working Spaces", desc: "Flexible shared workspaces designed for collaboration and productivity." },
  { icon: Gamepad2, title: "Game Zones", desc: "Recreation areas for leisure and team-building activities." },
  { icon: Coffee, title: "Café & Leisure Areas", desc: "Curated café spaces and leisure zones for a premium experience." },
];

const AmenitiesSection = () => {
  return (
    <section id="amenities" className="section-padding premium-bg-soft">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest text-gold uppercase mb-3">Lifestyle</p>
          <h2 className="section-heading mb-4">Amenities & Experience</h2>
          <p className="section-subheading mx-auto">
            World-class amenities designed to elevate your business and lifestyle.
          </p>
        </div>

        <div className="space-y-8">
          {amenities.map((item, i) => (
            <div
              key={item.title}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 premium-card p-8 text-center md:text-left">
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-4 mx-auto md:mx-0">
                  <item.icon className="w-7 h-7 text-navy" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
              <div className="flex-1 h-1 md:h-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
