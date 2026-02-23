import gsLogo from "@/assets/gs-group-logo-footer.png";
import whsLogo from "@/assets/whs-logo-footer.jpeg";
import { MapPin, Phone, Mail, Globe, ShieldCheck } from "lucide-react";

const Footer = () => (
  <footer className="relative overflow-hidden">
    {/* Main footer */}
    <div className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-6 flex-wrap">
              <img src={gsLogo} alt="GS Group" className="h-20 w-auto rounded-lg" />
              <img src={whsLogo} alt="Wagholi High Street" className="h-16 w-auto rounded-lg" />
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Wagholi High Street by GS Group — Pune's premier commercial destination
              for shops, showrooms, and offices.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-heading font-semibold text-gold mb-3">Contact Us</h4>
            <div className="flex items-start gap-2 text-sm text-primary-foreground/70">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold" />
              <span>GS Wagholi High Street, Kesnand, Pune, 412207, Maharashtra</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <Phone className="w-4 h-4 flex-shrink-0 text-gold" />
              <a href="tel:+917420807577" className="hover:text-gold transition-colors">+91 74208 07577</a>
            </div>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <Mail className="w-4 h-4 flex-shrink-0 text-gold" />
              <a href="mailto:wagholihighstreet12@gmail.com" className="hover:text-gold transition-colors">wagholihighstreet12@gmail.com</a>
            </div>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <Globe className="w-4 h-4 flex-shrink-0 text-gold" />
              <a href="https://www.wagholihighstreet.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                www.wagholihighstreet.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-heading font-semibold text-gold mb-3">Quick Links</h4>
            <div className="space-y-2">
              {["Overview", "Location", "Offerings", "Gallery", "FAQ", "Enquiry"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm text-primary-foreground/70 hover:text-gold transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* RERA + Copyright */}
        <div className="border-t border-primary-foreground/15 mt-10 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-primary-foreground/60">
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span>MahaRERA Reg: P52100079202 | maharera.mahaonline.gov.in</span>
            </div>
            <p className="text-xs text-primary-foreground/60">
              © {new Date().getFullYear()} GS Group. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
