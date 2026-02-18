import { TrendingUp, Home, MapPin, Eye, Building2 } from "lucide-react";

const benefits = [
  { icon: TrendingUp, title: "Rising Property Values", stat: "30%+", desc: "Year-on-year appreciation in Wagholi commercial belt." },
  { icon: Home, title: "Strong Rental Potential", stat: "8-12%", desc: "Annual rental yield for premium commercial spaces." },
  { icon: MapPin, title: "Strategic Location", stat: "5 min", desc: "From key IT hubs and expressway access points." },
  { icon: Eye, title: "High Visibility", stat: "120 ft", desc: "Main road frontage ensuring maximum brand exposure." },
  { icon: Building2, title: "Growing Ecosystem", stat: "500+", desc: "Businesses already thriving in the Wagholi corridor." },
];

const InvestmentSection = () => {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Gradient background */}
      <div className="absolute inset-0 gradient-band opacity-95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.1)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest text-gold-light uppercase mb-3">
            Why Invest
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-popover tracking-tight mb-4">
            Investment Benefits
          </h2>
          <p className="text-lg text-popover/70 max-w-2xl mx-auto">
            Capitalize on Pune's booming commercial real estate market.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="bg-popover/10 backdrop-blur-sm border border-popover/20 rounded-xl p-6 text-center hover:bg-popover/15 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-popover/15 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-gold" />
              </div>
              <p className="text-3xl font-heading font-bold text-popover mb-1">{item.stat}</p>
              <h3 className="text-sm font-semibold text-popover mb-2">{item.title}</h3>
              <p className="text-xs text-popover/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
