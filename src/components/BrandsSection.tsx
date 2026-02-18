import mcdonaldsLogo from "@/assets/mcdonalds-logo.png";
import cineproLogo from "@/assets/cinepro-logo.jpeg";
import { Star } from "lucide-react";

const brands = [
  { name: "McDonald's", logo: mcdonaldsLogo, size: "h-20" },
  { name: "CinePRO", logo: cineproLogo, size: "h-24" },
];

const BrandsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest text-gold uppercase mb-3">Trust</p>
          <h2 className="section-heading mb-4">Top Brands Invested With Us</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="premium-card p-8 w-64 flex flex-col items-center group"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className={`${brand.size} w-auto object-contain mb-4`}
              />
              <h3 className="font-heading font-semibold text-foreground text-lg relative">
                {brand.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-500" />
              </h3>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-gold text-gold" />
            ))}
          </div>
          <p className="text-sm text-muted-foreground font-medium">
            Trusted by leading national brands
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
