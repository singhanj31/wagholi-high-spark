import { useState } from "react";
import { Phone, MessageCircle, Send } from "lucide-react";

const EnquirySection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", inventory: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const phone = form.phone.trim();
    if (!name || !email || !phone) return;

    const subject = encodeURIComponent("New Enquiry – Wagholi High Street");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nInventory: ${form.inventory}\nMessage: ${form.message.trim()}`
    );
    window.open(`mailto:singh31anj@gmail.com?subject=${subject}&body=${body}`, "_blank");
  };

  return (
    <section id="enquiry" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-background to-gold/[0.06]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <div className="gold-accent-bar" />
            <p className="text-sm font-semibold tracking-widest text-gold uppercase mb-3">Get In Touch</p>
            <h2 className="section-heading mb-6">Let's Start Your Business Journey</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Ready to invest in Pune's most promising commercial destination? Reach out to us for site visits, pricing, and availability.
            </p>

            <div className="space-y-4">
              <a
                href="tel:+917420807577"
                className="flex items-center gap-4 bg-popover rounded-xl border border-border p-5 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-md">
                  <Phone className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call Us</p>
                  <p className="font-semibold text-foreground">+91 7420807577</p>
                </div>
              </a>

              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
                  const url = isMobile
                    ? `https://api.whatsapp.com/send?phone=918237290784&text=${encodeURIComponent("Hi, I am interested in Wagholi High Street. Please share more details.")}`
                    : `https://web.whatsapp.com/send?phone=918237290784&text=${encodeURIComponent("Hi, I am interested in Wagholi High Street. Please share more details.")}`;
                  window.open(url, "_blank", "noopener,noreferrer");
                }}
                className="flex items-center gap-4 bg-popover rounded-xl border border-border p-5 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-success flex items-center justify-center shadow-md">
                  <MessageCircle className="w-5 h-5 text-popover" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">WhatsApp</p>
                  <p className="font-semibold text-foreground">+91 8237290784</p>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-popover rounded-2xl border border-border p-8 shadow-xl relative overflow-hidden">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 gradient-band" />

            <h3 className="font-heading text-xl font-semibold text-foreground mb-6">Submit Enquiry</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 text-sm transition-all"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 text-sm transition-all"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                maxLength={15}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 text-sm transition-all"
              />
              <select
                value={form.inventory}
                onChange={(e) => setForm({ ...form, inventory: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 text-sm transition-all"
              >
                <option value="">Select Inventory</option>
                <option value="Shops">Shops</option>
                <option value="Showrooms">Showrooms</option>
                <option value="Offices">Offices</option>
              </select>
              <textarea
                placeholder="Your Message"
                rows={3}
                maxLength={1000}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 text-sm resize-none transition-all"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg bg-gold text-accent-foreground font-semibold hover:bg-gold-light transition-colors shadow-lg shadow-gold/20"
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
