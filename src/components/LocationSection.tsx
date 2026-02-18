import { MapPin, Train, Route, Building, Globe, Landmark } from "lucide-react";

const connectivityItems = [
  { icon: Train, label: "Metro Extension", desc: "Direct metro connectivity" },
  { icon: Route, label: "120 Ft Link Road", desc: "Prime road access" },
  { icon: Route, label: "Samruddhi Expressway", desc: "Expressway link" },
  { icon: Route, label: "Pune Outer Ring Road", desc: "Ring road proximity" },
  { icon: Building, label: "EON IT Park", desc: "IT hub nearby" },
  { icon: Globe, label: "World Trade Center", desc: "WTC Pune access" },
];

const LocationSection = () => {
  return (
    <section id="location" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest text-gold uppercase mb-3">
            Strategic Location
          </p>
          <h2 className="section-heading mb-4">
            Pune's Fastest-Growing Business District
          </h2>
          <p className="section-subheading mx-auto">
            Unmatched connectivity and rapid infrastructure growth make Wagholi the next commercial powerhouse.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-border h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.5!2d73.98!3d18.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM0JzQ4LjAiTiA3M8KwNTgnNDguMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wagholi High Street Location"
            />
          </div>

          {/* Connectivity Grid */}
          <div className="grid grid-cols-2 gap-4">
            {connectivityItems.map((item) => (
              <div key={item.label} className="premium-card p-5">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-navy" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">{item.label}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
