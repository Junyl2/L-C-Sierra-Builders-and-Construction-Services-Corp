import { useEffect } from "react";
import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import AboutPreview from "@/components/home/AboutPreview";
import ProjectPreview from "@/components/home/ProjectPreview";
import ProcessSection from "@/components/home/ProcessSection";
import ReviewSection from "@/components/home/ReviewSection";
import ServiceAreaPreview from "@/components/home/ServiceAreaPreview";
import ContactCTA from "@/components/home/ContactCTA";

const Index = () => {
  useEffect(() => {
    document.title = "L C Sierra Builders and Construction Services Corporation | Cebu City Construction";
  }, []);

  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <AboutPreview />
      <ProjectPreview />
      <ProcessSection />
      <ReviewSection />
      <ServiceAreaPreview />
      <ContactCTA />
    </>
  );
};

export default Index;
