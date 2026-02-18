import { useState } from "react";
import { Phone, MessageCircle, Send } from "lucide-react";

const EnquirySection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", inventory: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("New Enquiry – Wagholi High Street");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nInventory: ${form.inventory}\nMessage: ${form.message}`
    );
    window.open(`mailto:singh31anj@gmail.com?subject=${subject}&body=${body}`);
  };

  return (
    <section id="enquiry" className="section-padding bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-secondary/30" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-gold uppercase mb-3">Get In Touch</p>
            <h2 className="section-heading mb-6">Let's Start Your Business Journey</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Ready to invest in Pune's most promising commercial destination? Reach out to us for site visits, pricing, and availability.
            </p>

            <div className="space-y-4">
              <a
                href="tel:7420807577"
                className="flex items-center gap-4 premium-card p-5 group"
              >
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call Us</p>
                  <p className="font-semibold text-foreground">7420807577</p>
                </div>
              </a>

              <a
                href="https://wa.me/918237290784"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 premium-card p-5 group"
              >
                <div className="w-12 h-12 rounded-full bg-success flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-popover" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">WhatsApp</p>
                  <p className="font-semibold text-foreground">8237290784</p>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="premium-card p-8 shadow-xl">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-6">Submit Enquiry</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
              />
              <select
                value={form.inventory}
                onChange={(e) => setForm({ ...form, inventory: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
              >
                <option value="">Select Inventory</option>
                <option value="Shops">Shops</option>
                <option value="Showrooms">Showrooms</option>
                <option value="Offices">Offices</option>
              </select>
              <textarea
                placeholder="Your Message"
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm resize-none"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                <Send className="w-4 h-4" />
                Submit Enquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EnquirySection;
