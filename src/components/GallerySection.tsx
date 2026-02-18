import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpeg";
import gallery3 from "@/assets/gallery-3.jpeg";
import gallery4 from "@/assets/gallery-4.jpeg";
import gallery5 from "@/assets/gallery-5.jpeg";

const images = [gallery1, gallery2, gallery3, gallery4, gallery5];

const GallerySection = () => {
  return (
    <section id="gallery" className="section-padding premium-bg-soft overflow-hidden">
      <div className="max-w-7xl mx-auto mb-10">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-widest text-gold uppercase mb-3">Visual Tour</p>
          <h2 className="section-heading mb-4">Project Gallery</h2>
        </div>
      </div>

      {/* Infinite scrolling gallery */}
      <div className="relative">
        <div className="flex animate-scroll-gallery" style={{ width: `${images.length * 2 * 420}px` }}>
          {[...images, ...images].map((img, i) => (
            <div key={i} className="flex-shrink-0 w-[400px] h-[280px] mx-2.5 rounded-xl overflow-hidden shadow-lg">
              <img
                src={img}
                alt={`Gallery ${(i % images.length) + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
