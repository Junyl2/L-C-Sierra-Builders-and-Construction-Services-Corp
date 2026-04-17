import { useEffect } from "react";
import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import ReviewSection from "@/components/home/ReviewSection";
import AboutPreview from "@/components/home/AboutPreview";
import GallerySection from "@/components/home/GallerySection";
import ProcessSection from "@/components/home/ProcessSection";
import ServiceAreaPreview from "@/components/home/ServiceAreaPreview";
import ContactCTA from "@/components/home/ContactCTA";

const Index = () => {
  useEffect(() => {
    document.title = "Home | C&B Electric & A/C Services";
  }, []);

  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <ReviewSection />
      <AboutPreview />
      <GallerySection />
      <ProcessSection />
      <ServiceAreaPreview />
      <ContactCTA />
    </>
  );
};

export default Index;
