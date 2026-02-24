import { useState } from "react";
import { ArrowRight, Ruler, IndianRupee, MoveVertical } from "lucide-react";
import SectionDivider from "@/components/SectionDivider";

type UnitType = "All" | "Showroom" | "Boutique Showroom" | "Shop" | "Office";

interface Unit {
  type: "Showroom" | "Boutique Showroom" | "Shop" | "Office";
  name: string;
  size: string;
  price: string;
  height?: string;
}

const units: Unit[] = [
  { type: "Showroom", name: "Showroom – 330 sq.ft", size: "330 sq.ft", price: "Starting ₹90 Lakh", height: "20 ft Height" },
  { type: "Showroom", name: "Showroom – 660 sq.ft", size: "660 sq.ft", price: "Starting ₹1.50 Cr", height: "20 ft Height" },
  { type: "Boutique Showroom", name: "Boutique Showroom – 180 sq.ft", size: "180 sq.ft", price: "Starting ₹50 Lakh", height: "17.5 ft Height" },
  { type: "Boutique Showroom", name: "Boutique Showroom – 200 sq.ft", size: "200 sq.ft", price: "Starting ₹70 Lakh", height: "17.5 ft Height" },
  { type: "Shop", name: "Shop – 250 sq.ft", size: "250 sq.ft", price: "Starting ₹50 Lakh" },
  { type: "Shop", name: "Shop – 500 sq.ft", size: "500 sq.ft", price: "Starting ₹80 Lakh" },
  { type: "Office", name: "Office – 130 sq.ft", size: "130 sq.ft", price: "Starting ₹40 Lakh" },
  { type: "Office", name: "Office – 250 sq.ft", size: "250 sq.ft", price: "Starting ₹50 Lakh" },
];

const filters: UnitType[] = ["All", "Showroom", "Boutique Showroom", "Shop", "Office"];

const InventorySection = () => {
  const [active, setActive] = useState<UnitType>("All");
  const filtered = active === "All" ? units : units.filter((u) => u.type === active);

  return (
    <section id="inventory" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cream-dark/50 via-background to-cream/80" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <SectionDivider />
          <p className="text-sm font-semibold tracking-widest text-gold uppercase mb-3">Availability</p>
          <h2 className="section-heading mb-4">Explore Available Spaces</h2>
          <p className="section-subheading mx-auto">Premium commercial units across all categories with flexible sizing.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`filter-pill ${active === f ? "filter-pill-active" : "filter-pill-inactive"}`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((unit) => (
            <div key={unit.name} className="bg-popover rounded-xl border border-border shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 p-6 relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-success to-success/50" />

              <span className="absolute top-5 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-success/15 text-success border border-success/20">
                Available
              </span>

              <span className="text-xs font-semibold text-gold uppercase tracking-wider">{unit.type}</span>
              <h3 className="text-lg font-heading font-semibold text-foreground mt-1 mb-3">{unit.name}</h3>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Ruler className="w-4 h-4 text-navy" />
                  <span>Carpet Area: <strong className="text-foreground">{unit.size}</strong></span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <IndianRupee className="w-4 h-4 text-navy" />
                  <span className="font-semibold text-foreground">{unit.price}</span>
                </div>
                {unit.height && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MoveVertical className="w-4 h-4 text-navy" />
                    <span>{unit.height}</span>
                  </div>
                )}
              </div>

              <a
                href="#enquiry"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-gold transition-colors"
              >
                Enquire Now <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InventorySection;
