import { Thermometer, Wind, Wrench, ClipboardCheck, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceItem {
  id: string;
  slug: string;
  icon: LucideIcon;
  title: string;
  shortTitle: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  benefits: string[];
  bannerImage: string;
  contentImage: string;
}

export const services: ServiceItem[] = [
  {
    id: "heating",
    slug: "heating-services",
    icon: Thermometer,
    title: "Heating Services",
    shortTitle: "Heating",
    shortDesc: "Professional heating system installation, repair, and maintenance for residential and commercial properties.",
    fullDesc: "Keep your home or business warm and comfortable with our comprehensive heating services. We work with furnaces, boilers, heat pumps, and other heating systems to ensure reliable operation throughout the colder months. Our technicians diagnose issues accurately and provide solutions that restore your comfort efficiently.",
    features: [
      "Furnace installation and replacement",
      "Heating system repairs and diagnostics",
      "Boiler services",
      "Heat pump installation and service",
      "Thermostat installation and programming",
      "Ductwork inspection and repair",
    ],
    benefits: [
      "Restore warmth to your home quickly",
      "Improve heating system efficiency",
      "Extend the lifespan of your equipment",
      "Reduce energy costs with proper maintenance",
    ],
    bannerImage: "/images/services/heating-banner.jpg",
    contentImage: "/images/services/heating-content.jpg",
  },
  {
    id: "cooling",
    slug: "air-conditioning-services",
    icon: Wind,
    title: "Air Conditioning Services",
    shortTitle: "Air Conditioning",
    shortDesc: "Complete air conditioning solutions including installation, repair, and seasonal maintenance.",
    fullDesc: "Stay cool and comfortable during warm weather with our air conditioning services. We handle everything from new AC installations to repairs and routine maintenance. Our team works with central air systems, ductless mini-splits, and other cooling equipment to keep your indoor environment comfortable year-round.",
    features: [
      "Central air conditioning installation",
      "AC unit repairs and troubleshooting",
      "Ductless mini-split systems",
      "Refrigerant recharge and leak repair",
      "Evaporator and condenser coil cleaning",
      "Air filter replacement and maintenance",
    ],
    benefits: [
      "Maintain comfortable indoor temperatures",
      "Improve indoor air quality",
      "Reduce humidity levels",
      "Lower cooling costs with efficient systems",
    ],
    bannerImage: "/images/services/cooling-banner.jpg",
    contentImage: "/images/services/cooling-content.jpg",
  },
  {
    id: "hvac-systems",
    slug: "hvac-systems",
    icon: Wrench,
    title: "HVAC Systems",
    shortTitle: "HVAC Systems",
    shortDesc: "Complete HVAC system services including installation, upgrades, and comprehensive maintenance programs.",
    fullDesc: "Our HVAC system services cover the full spectrum of heating, ventilation, and air conditioning needs. Whether you need a complete system installation, an upgrade to more efficient equipment, or ongoing maintenance to keep everything running smoothly, we provide reliable solutions tailored to your property.",
    features: [
      "Complete HVAC system installation",
      "System upgrades and replacements",
      "Preventive maintenance programs",
      "Indoor air quality assessments",
      "Ventilation system services",
      "Zoning system installation",
    ],
    benefits: [
      "Single source for all HVAC needs",
      "Coordinated heating and cooling solutions",
      "Improved overall system efficiency",
      "Consistent comfort throughout your space",
    ],
    bannerImage: "/images/services/hvac-systems-banner.jpg",
    contentImage: "/images/services/hvac-systems-content.jpg",
  },
  {
    id: "inspections",
    slug: "inspections",
    icon: ClipboardCheck,
    title: "HVAC Inspections",
    shortTitle: "Inspections",
    shortDesc: "Thorough HVAC system inspections to identify issues, ensure safety, and optimize performance.",
    fullDesc: "Regular inspections help catch problems before they become costly repairs. Our comprehensive HVAC inspections evaluate your heating and cooling systems for safety, efficiency, and proper operation. We provide detailed findings and recommendations to help you make informed decisions about maintenance and repairs.",
    features: [
      "Complete system performance evaluation",
      "Safety inspections and testing",
      "Efficiency assessments",
      "Component condition analysis",
      "Air quality testing",
      "Detailed inspection reports",
    ],
    benefits: [
      "Identify issues before they worsen",
      "Ensure safe system operation",
      "Optimize energy efficiency",
      "Plan maintenance and repairs proactively",
    ],
    bannerImage: "/images/services/inspections-banner.jpg",
    contentImage: "/images/services/inspections-content.jpg",
  },
  {
    id: "electrical",
    slug: "electrical-support",
    icon: Zap,
    title: "Electrical Support",
    shortTitle: "Electrical",
    shortDesc: "HVAC-related electrical services including wiring, diagnostics, and component repairs.",
    fullDesc: "HVAC systems rely on electrical components to operate properly. Our electrical support services address the wiring, controls, and electrical components that power your heating and cooling equipment. We diagnose electrical issues, repair faulty connections, and ensure your HVAC system receives the power it needs to function safely and efficiently.",
    features: [
      "HVAC electrical diagnostics",
      "Wiring repairs and upgrades",
      "Control board troubleshooting",
      "Capacitor and relay replacement",
      "Thermostat wiring",
      "Motor and compressor electrical service",
    ],
    benefits: [
      "Resolve electrical issues safely",
      "Restore proper system operation",
      "Prevent electrical failures",
      "Ensure code-compliant installations",
    ],
    bannerImage: "/images/services/electrical-banner.jpg",
    contentImage: "/images/services/electrical-content.jpg",
  },
];

export const getServiceBySlug = (slug: string): ServiceItem | undefined => {
  return services.find((service) => service.slug === slug);
};

export const getServiceById = (id: string): ServiceItem | undefined => {
  return services.find((service) => service.id === id);
};
