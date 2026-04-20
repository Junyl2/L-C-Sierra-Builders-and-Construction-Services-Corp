import { useEffect } from "react";
import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import AboutPreview from "@/components/home/AboutPreview";
import ProcessSection from "@/components/home/ProcessSection";
import ReviewSection from "@/components/home/ReviewSection";
import ServiceAreaPreview from "@/components/home/ServiceAreaPreview";
import ContactCTA from "@/components/home/ContactCTA";

const Index = () => {
  useEffect(() => {
    document.title = "Komfort iQ HVAC | Heating and Air Services in Boise, Idaho";
  }, []);

  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <AboutPreview />
      <ProcessSection />
      <ReviewSection />
      <ServiceAreaPreview />
      <ContactCTA />
    </>
  );
};

export default Index;
