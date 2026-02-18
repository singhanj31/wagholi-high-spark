import gallery1 from "@/assets/gallery-1.jpeg";
import { Award } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={gallery1} alt="Wagholi High Street" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-popover/70 via-popover/40 to-popover/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 backdrop-blur-md border border-primary/20 mb-8 animate-fade-in-up">
          <Award className="w-5 h-5 text-gold" />
          <span className="text-sm font-medium text-foreground tracking-wide">
            Voted #1 Business Destination
          </span>
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-6 tracking-tight animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Wins Vote of Confidence
        </h1>

        <p
          className="text-xl sm:text-2xl text-muted-foreground font-body mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Be Part of This Business Revolution
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <a
            href="#offerings"
            className="px-8 py-4 rounded-full bg-gold text-accent-foreground font-semibold text-base hover:opacity-90 transition-opacity shadow-lg"
          >
            Explore Shops
          </a>
          <a
            href="#enquiry"
            className="px-8 py-4 rounded-full bg-primary/10 backdrop-blur-md text-foreground border border-primary/30 font-semibold text-base hover:bg-primary/20 transition-all"
          >
            Book Site Visit
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-foreground/40" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
