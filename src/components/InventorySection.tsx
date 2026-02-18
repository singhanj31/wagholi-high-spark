import { useState } from "react";
import { ArrowRight } from "lucide-react";

type UnitType = "All" | "Shops" | "Showrooms" | "Offices";

interface Unit {
  type: "Shops" | "Showrooms" | "Offices";
  name: string;
  size: string;
  status: "Available" | "Sold";
}

const units: Unit[] = [
  { type: "Shops", name: "Retail Shop A-101", size: "250 sq.ft", status: "Available" },
  { type: "Shops", name: "Retail Shop A-201", size: "300 sq.ft", status: "Available" },
  { type: "Showrooms", name: "Showroom B-101", size: "500 sq.ft", status: "Sold" },
  { type: "Showrooms", name: "Showroom B-102", size: "450 sq.ft", status: "Available" },
  { type: "Offices", name: "Office C-301", size: "350 sq.ft", status: "Available" },
  { type: "Offices", name: "Office C-302", size: "400 sq.ft", status: "Sold" },
];

const filters: UnitType[] = ["All", "Shops", "Showrooms", "Offices"];

const InventorySection = () => {
  const [active, setActive] = useState<UnitType>("All");
  const filtered = active === "All" ? units : units.filter((u) => u.type === active);

  return (
    <section id="inventory" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold tracking-widest text-gold uppercase mb-3">Availability</p>
          <h2 className="section-heading mb-4">Explore Available Spaces</h2>
          <p className="section-subheading mx-auto">Units ranging from 130 – 386+ sq.ft across all categories.</p>
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((unit) => (
            <div key={unit.name} className="premium-card p-6 relative">
              {/* Status badge */}
              <span
                className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                  unit.status === "Available"
                    ? "bg-success/10 text-success"
                    : "bg-muted text-sold"
                }`}
              >
                {unit.status}
              </span>

              <span className="text-xs font-semibold text-gold uppercase tracking-wider">{unit.type}</span>
              <h3 className="text-lg font-heading font-semibold text-foreground mt-1 mb-1">{unit.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{unit.size}</p>

              {unit.status === "Available" && (
                <a
                  href="#enquiry"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-gold transition-colors"
                >
                  Enquire Now <ArrowRight className="w-4 h-4" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InventorySection;
