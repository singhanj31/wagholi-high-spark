import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import LocationSection from "@/components/LocationSection";
import OfferingsSection from "@/components/OfferingsSection";
import InventorySection from "@/components/InventorySection";
import AmenitiesSection from "@/components/AmenitiesSection";
import InvestmentSection from "@/components/InvestmentSection";
import BrandsSection from "@/components/BrandsSection";
import GallerySection from "@/components/GallerySection";
import EnquirySection from "@/components/EnquirySection";
import DeveloperSection from "@/components/DeveloperSection";
import ReraSection from "@/components/ReraSection";
import Footer from "@/components/Footer";
import WhatsAppBubble from "@/components/WhatsAppBubble";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <OverviewSection />
      <LocationSection />
      <OfferingsSection />
      <InventorySection />
      <AmenitiesSection />
      <InvestmentSection />
      <BrandsSection />
      <GallerySection />
      <EnquirySection />
      <DeveloperSection />
      <ReraSection />
      <Footer />
      <WhatsAppBubble />
    </div>
  );
};

export default Index;
