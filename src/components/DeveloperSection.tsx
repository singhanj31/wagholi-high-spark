import gsLogo from "@/assets/gs-group-logo.png";
import { Shield, Award, Calendar } from "lucide-react";

const DeveloperSection = () => {
  return (
    <section className="section-padding premium-bg-soft">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold tracking-widest text-gold uppercase mb-3">The Developer</p>
          <h2 className="section-heading mb-4">GS Group</h2>
        </div>

        <div className="premium-card p-8 md:p-12 shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img src={gsLogo} alt="GS Group" className="h-28 w-auto flex-shrink-0" />
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Founded in 2017 by Gorakh Satav, GS Group has established itself as a trusted name
                in real estate and infrastructure development. With a diversified portfolio spanning
                commercial and residential projects, the group is committed to creating landmark
                destinations that redefine urban living and business.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-sm text-foreground font-medium">
                  <Calendar className="w-4 h-4 text-gold" /> Est. 2017
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground font-medium">
                  <Shield className="w-4 h-4 text-gold" /> RERA Registered
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground font-medium">
                  <Award className="w-4 h-4 text-gold" /> Trusted Developer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;
