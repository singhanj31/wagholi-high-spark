import reraQr from "@/assets/rera-qr.jpeg";

const ReraSection = () => {
  return (
    <section className="py-12 bg-background">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="premium-card p-8 inline-flex flex-col sm:flex-row items-center gap-6">
          <img src={reraQr} alt="MAHA RERA QR Code" className="w-28 h-28 rounded-lg border border-border" />
          <div className="text-left">
            <p className="text-xs font-semibold tracking-widest text-gold uppercase mb-1">MahaRERA</p>
            <p className="text-lg font-heading font-bold text-foreground mb-1">P52100079202</p>
            <a
              href="https://maharera.mahaonline.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-navy hover:text-gold transition-colors underline"
            >
              maharera.mahaonline.gov.in
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReraSection;
