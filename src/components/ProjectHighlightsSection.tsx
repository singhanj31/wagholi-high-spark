import gallery5 from "@/assets/gallery-5.jpeg";
import { ArrowRight } from "lucide-react";

const highlights = [
  { num: "01", title: "Premium Retail Shops", desc: "High-footfall ground-floor units with maximum visibility." },
  { num: "02", title: "Glass-Front Showrooms", desc: "Expansive display spaces for premium brand showcasing." },
  { num: "03", title: "Modern Office Spaces", desc: "Corporate-grade offices with contemporary infrastructure." },
  { num: "04", title: "High Footfall Zone", desc: "Strategically positioned for maximum customer engagement." },
  { num: "05", title: "Premium Business Address", desc: "Establish your brand at Pune's most prestigious commercial destination." },
];

const ProjectHighlightsSection = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Background with soft luxury gradient */}
      <div className="absolute inset-0">
        <img src={gallery5} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-br from-popover/90 via-cream/85 to-popover/92" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest text-gold uppercase mb-3">
            Highlights
          </p>
          <h2 className="section-heading mb-4">Project Highlights</h2>
          <p className="section-subheading mx-auto">
            Every detail crafted for commercial excellence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {highlights.map((item) => (
            <div
              key={item.num}
              className="group relative bg-popover/50 backdrop-blur-lg border border-border/50 rounded-2xl p-7 hover:shadow-2xl hover:-translate-y-1 transition-all duration-400"
            >
              <span className="text-5xl font-heading font-bold text-gold/20 group-hover:text-gold/35 transition-colors duration-300 absolute top-4 right-5 select-none">
                {item.num}
              </span>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2 mt-2 pr-12">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}

          {/* CTA Card */}
          <div className="bg-primary/95 backdrop-blur-lg rounded-2xl p-7 flex flex-col justify-center items-start text-primary-foreground">
            <h3 className="text-lg font-heading font-semibold mb-3">
              Ready to Secure Your Premium Space?
            </h3>
            <a
              href="#enquiry"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-accent-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Book a Site Visit <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlightsSection;
