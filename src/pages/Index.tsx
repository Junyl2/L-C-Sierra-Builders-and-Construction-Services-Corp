import { useEffect } from "react";
import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import AboutPreview from "@/components/home/AboutPreview";
import ProcessSection from "@/components/home/ProcessSection";
import ServiceAreaPreview from "@/components/home/ServiceAreaPreview";
import ContactCTA from "@/components/home/ContactCTA";

const Index = () => {
  useEffect(() => {
    document.title = "Home | Sona HVAC";
  }, []);

  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <AboutPreview />
      <ProcessSection />
      <ServiceAreaPreview />
      <ContactCTA />
    </>
  );
};

export default Index;
