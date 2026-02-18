import { useState } from "react";
import { Store, Building2, Briefcase, Shirt, UtensilsCrossed, Stethoscope, Dumbbell, Palette, Heart } from "lucide-react";

type Category = "All" | "Shops" | "Showrooms" | "Offices";

const categories: Category[] = ["All", "Shops", "Showrooms", "Offices"];

const offerings = [
  { type: "Shops" as const, icon: Shirt, title: "Fashion & Lifestyle", desc: "Premium retail spaces for fashion brands and lifestyle stores." },
  { type: "Shops" as const, icon: UtensilsCrossed, title: "QSR & Restaurants", desc: "High-footfall food court and standalone restaurant spaces." },
  { type: "Shops" as const, icon: Stethoscope, title: "Clinics & Wellness", desc: "Healthcare and wellness spaces with modern infrastructure." },
  { type: "Showrooms" as const, icon: Store, title: "Brand Showrooms", desc: "Large format display spaces for premium brand showcasing." },
  { type: "Showrooms" as const, icon: Dumbbell, title: "Gym & Fitness Studios", desc: "Spacious layouts perfect for fitness centers and studios." },
  { type: "Showrooms" as const, icon: Palette, title: "Creative Studios", desc: "Versatile spaces for design studios and creative businesses." },
  { type: "Offices" as const, icon: Briefcase, title: "Professional Offices", desc: "Corporate-grade office spaces with premium amenities." },
  { type: "Offices" as const, icon: Building2, title: "Co-working Spaces", desc: "Flexible work environments for modern businesses." },
  { type: "Offices" as const, icon: Heart, title: "Wellness & Spa", desc: "Dedicated spaces for wellness centers and spa businesses." },
];

const OfferingsSection = () => {
  const [active, setActive] = useState<Category>("All");

  const filtered = active === "All" ? offerings : offerings.filter((o) => o.type === active);

  return (
    <section id="offerings" className="section-padding premium-bg-soft">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold tracking-widest text-gold uppercase mb-3">
            Commercial Spaces
          </p>
          <h2 className="section-heading mb-4">Explore Business Opportunities</h2>
          <p className="section-subheading mx-auto">
            From retail shops to professional offices, find the perfect space for your business vision.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`filter-pill ${active === cat ? "filter-pill-active" : "filter-pill-inactive"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.title}
              className="premium-card p-6 group"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <item.icon className="w-6 h-6 text-navy group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <span className="text-xs font-semibold text-gold uppercase tracking-wider">{item.type}</span>
              <h3 className="text-lg font-heading font-semibold text-foreground mt-1 mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
