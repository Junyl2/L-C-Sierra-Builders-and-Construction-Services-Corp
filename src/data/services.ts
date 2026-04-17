import { Wind, Wrench, Snowflake, Zap, Lightbulb, BatteryCharging } from "lucide-react";
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
    id: "ac-repair",
    slug: "air-conditioning-repair",
    icon: Wind,
    title: "Air Conditioning Repair",
    shortTitle: "AC Repair",
    shortDesc: "Professional air conditioning repair for residential and commercial clients, delivered with seamless and timely execution.",
    fullDesc: "Air conditioning repair is a primary service offering at C&B Electric & A/C Services. We provide reliable AC repair for both residential and commercial clients throughout the Rio Grande Valley. Our experienced technicians diagnose issues accurately and restore your cooling system to peak performance, keeping your space comfortable even in South Texas heat.",
    features: [
      "Residential and commercial AC repair",
      "Emergency same-day service available",
      "Compressor and condenser repairs",
      "Refrigerant recharge and leak detection",
      "Thermostat troubleshooting and replacement",
      "Evaporator and condenser coil servicing",
    ],
    benefits: [
      "Restore comfortable indoor temperatures fast",
      "Reduce energy costs with efficient repairs",
      "Extend the lifespan of your AC system",
      "Prevent costly breakdowns with timely fixes",
    ],
    bannerImage: "/images/services/ac-repair-banner.jpg",
    contentImage: "/images/services/ac-repair-content.jpg",
  },
  {
    id: "hvac-maintenance",
    slug: "hvac-maintenance",
    icon: Wrench,
    title: "HVAC Maintenance",
    shortTitle: "HVAC Maintenance",
    shortDesc: "Comprehensive HVAC maintenance programs to keep your heating and cooling systems running efficiently year-round.",
    fullDesc: "Regular HVAC maintenance prevents unexpected breakdowns and extends the life of your equipment. C&B Electric & A/C Services provides thorough maintenance for heating and cooling systems in homes and businesses. Our technicians perform detailed inspections, cleanings, and tune-ups to ensure your system operates at peak efficiency.",
    features: [
      "Seasonal system tune-ups and inspections",
      "Filter replacement and airflow optimization",
      "Ductwork inspection and cleaning",
      "System performance testing",
      "Preventive maintenance programs",
      "Component wear assessment and replacement",
    ],
    benefits: [
      "Prevent unexpected system breakdowns",
      "Improve energy efficiency and lower bills",
      "Extend equipment lifespan significantly",
      "Maintain consistent indoor comfort",
    ],
    bannerImage: "/images/services/hvac-maintenance-banner.jpg",
    contentImage: "/images/services/hvac-maintenance-content.jpg",
  },
  {
    id: "commercial-refrigeration",
    slug: "commercial-refrigeration",
    icon: Snowflake,
    title: "Commercial Refrigeration",
    shortTitle: "Refrigeration",
    shortDesc: "Installation, repair, and maintenance of commercial refrigeration systems for businesses across the Rio Grande Valley.",
    fullDesc: "C&B Electric & A/C Services handles commercial refrigeration needs for restaurants, grocery stores, convenience stores, and other businesses. From walk-in coolers to display cases, we service and repair refrigeration equipment to keep your products at the right temperature and your business running smoothly.",
    features: [
      "Walk-in cooler and freezer service",
      "Display case repair and maintenance",
      "Refrigeration system installation",
      "Temperature control calibration",
      "Compressor and motor replacement",
      "Emergency refrigeration repair",
    ],
    benefits: [
      "Protect perishable inventory from spoilage",
      "Maintain health code compliance",
      "Reduce energy consumption with efficient systems",
      "Minimize business downtime with fast repairs",
    ],
    bannerImage: "/images/services/refrigeration-banner.jpg",
    contentImage: "/images/services/refrigeration-content.jpg",
  },
  {
    id: "electrical",
    slug: "electrical-installation",
    icon: Zap,
    title: "Electrical Installation & Improvements",
    shortTitle: "Electrical",
    shortDesc: "Professional electrical installation, upgrades, and improvements for residential and commercial properties.",
    fullDesc: "From basic wire and cable installations to full electrical system upgrades, C&B Electric & A/C Services delivers reliable electrical work for homes and businesses. Our electricians handle panel upgrades, circuit installations, outlet and switch work, and complete electrical improvements with a focus on safety and code compliance.",
    features: [
      "Electrical panel upgrades and installations",
      "Circuit installation and wiring",
      "Outlet and switch installation",
      "Electrical system troubleshooting",
      "Code compliance inspections",
      "Dedicated circuits for heavy equipment",
    ],
    benefits: [
      "Ensure safe and reliable electrical systems",
      "Support increased power demands",
      "Meet current electrical code requirements",
      "Improve property value with modern wiring",
    ],
    bannerImage: "/images/services/electrical-banner.jpg",
    contentImage: "/images/services/electrical-content.jpg",
  },
  {
    id: "lighting",
    slug: "lighting-solutions",
    icon: Lightbulb,
    title: "Lighting Solutions",
    shortTitle: "Lighting",
    shortDesc: "Indoor, outdoor, retail, parking lot, and site lighting design, installation, and maintenance.",
    fullDesc: "C&B Electric & A/C Services provides comprehensive lighting solutions for every environment. Whether you need indoor ambient lighting, indirect lighting for retail spaces, parking lot illumination, or site lighting for commercial properties, our team designs and installs systems that are energy-efficient, properly illuminated, and built to last.",
    features: [
      "Indoor and ambient lighting installation",
      "Indirect and accent lighting design",
      "Retail and commercial display lighting",
      "Parking lot and outdoor area lighting",
      "Site and security lighting systems",
      "LED retrofit and energy-efficient upgrades",
    ],
    benefits: [
      "Enhance safety with proper illumination",
      "Reduce energy costs with LED solutions",
      "Improve property appearance and functionality",
      "Meet commercial lighting requirements",
    ],
    bannerImage: "/images/services/lighting-banner.jpg",
    contentImage: "/images/services/lighting-content.jpg",
  },
  {
    id: "power-generation",
    slug: "power-generation",
    icon: BatteryCharging,
    title: "Power Generation & Infrastructure",
    shortTitle: "Power",
    shortDesc: "Power generation solutions and electrical infrastructure services for commercial and industrial applications.",
    fullDesc: "C&B Electric & A/C Services supports businesses with power generation and electrical infrastructure needs. From backup generator installation to electrical infrastructure planning and implementation, we ensure your facility has reliable power supply and the electrical backbone to support your operations.",
    features: [
      "Backup generator installation and service",
      "Electrical infrastructure planning",
      "Power distribution systems",
      "Transfer switch installation",
      "Load management solutions",
      "Emergency power system maintenance",
    ],
    benefits: [
      "Ensure uninterrupted power supply",
      "Protect equipment from power fluctuations",
      "Support business continuity during outages",
      "Scale infrastructure with growing demands",
    ],
    bannerImage: "/images/services/power-banner.jpg",
    contentImage: "/images/services/power-content.jpg",
  },
];

export const getServiceBySlug = (slug: string): ServiceItem | undefined => {
  return services.find((service) => service.slug === slug);
};

export const getServiceById = (id: string): ServiceItem | undefined => {
  return services.find((service) => service.id === id);
};
