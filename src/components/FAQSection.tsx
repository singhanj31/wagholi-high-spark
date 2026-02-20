import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What unit types are available at Wagholi High Street?",
    a: "We offer shops, showrooms, and offices across 5 towers (G+3). Carpet areas range from 130 to 386+ sq.ft with customizable interior configurations.",
  },
  {
    q: "What are the connectivity advantages?",
    a: "The project is connected via 120 Ft. Link Road, upcoming Ramwadi–Wagholi Metro, Samruddhi Expressway, and 173-km Pune Outer Ring Road. It's near EON IT Park and World Trade Center.",
  },
  {
    q: "What makes Wagholi High Street unique?",
    a: "It's a 5.5-acre integrated commercial development with world-class amenities including rooftop lounges, co-working spaces, and game zones — with top brands like McDonald's and CinePRO already invested.",
  },
  {
    q: "How can I book a site visit?",
    a: "Simply fill out the enquiry form on this page or call/WhatsApp us directly. Our team will schedule a personalized visit at your convenience.",
  },
  {
    q: "Is the project MahaRERA registered?",
    a: "Yes. RERA Registration Number: P52100079202. You can verify on the official MahaRERA website.",
  },
];

const FAQSection = () => (
  <section id="faq" className="section-padding bg-background">
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <p className="text-sm font-semibold tracking-widest text-gold uppercase mb-3">FAQ</p>
        <h2 className="section-heading mb-4">Frequently Asked Questions</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="premium-card px-6 py-1 border rounded-xl overflow-hidden"
            >
              <AccordionTrigger className="hover:no-underline text-left text-foreground font-medium">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>

      <div className="text-center mt-10">
        <a
          href="#enquiry"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-accent-foreground font-semibold text-sm hover:opacity-90 transition-opacity shadow-md"
        >
          Have More Questions? Enquire Now
        </a>
      </div>
    </div>
  </section>
);

export default FAQSection;
