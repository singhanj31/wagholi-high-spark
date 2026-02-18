import gallery2 from "@/assets/gallery-2.jpeg";
import { Building2, Store, Briefcase, Maximize } from "lucide-react";

const highlights = [
  { icon: Building2, label: "5 Towers (G+3)" },
  { icon: Store, label: "Shops & Showrooms" },
  { icon: Briefcase, label: "Office Spaces" },
  { icon: Maximize, label: "Customizable Interiors" },
];

const OverviewSection = () => {
  return (
    <section id="overview" className="premium-bg-soft section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src={gallery2}
              alt="Wagholi High Street Aerial View"
              className="w-full h-[400px] lg:h-[500px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-foreground/30 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="px-4 py-2 rounded-full bg-popover/90 backdrop-blur text-sm font-semibold text-foreground">
                5.5 Acres Development
              </span>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-gold uppercase mb-3">
              The Vibrant Hub
            </p>
            <h2 className="section-heading mb-6">
              A New Era of Commercial Excellence
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Wagholi High Street is a 5.5-acre development with five towers offering
              commercial spaces for shops, showrooms, and offices. Designed for modern
              businesses, it combines strategic location with premium infrastructure.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="premium-card p-4 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-navy" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
