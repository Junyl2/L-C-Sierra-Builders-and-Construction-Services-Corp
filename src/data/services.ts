import { Flame, Snowflake, Wrench } from "lucide-react";
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
    slug: "heating",
    icon: Flame,
    title: "Heating Services",
    shortTitle: "Heating",
    shortDesc: "Heating support from a family-owned company in Boise, Idaho, with a practical, straightforward approach and a focus on comfort.",
    fullDesc: "Komfort iQ HVAC is a family-owned heating and air company in Boise, Idaho that provides heating support with a practical, straightforward approach and a focus on comfort. Service is available for residential and commercial customers in the Boise area.",
    features: [
      "Heating system service",
      "General heating support",
      "Local service for Boise-area customers",
    ],
    benefits: [
      "Practical, straightforward service",
      "Local family-owned company",
      "Focus on day-to-day comfort",
      "Service for homes and businesses in the Boise area",
    ],
    bannerImage: "/images/services/heating-banner.jpg",
    contentImage: "/images/services/heating-content.jpg",
  },
  {
    id: "air-conditioning",
    slug: "air-conditioning",
    icon: Snowflake,
    title: "Air Conditioning Services",
    shortTitle: "Air Conditioning",
    shortDesc: "Air conditioning support from a family-owned company in Boise, Idaho, focused on practical help with indoor comfort.",
    fullDesc: "Komfort iQ HVAC is a family-owned heating and air company in Boise, Idaho that provides air conditioning support with a practical, straightforward approach and a focus on comfort. Service is available for residential and commercial customers in the Boise area.",
    features: [
      "Air conditioning service",
      "Cooling system support",
      "Help with indoor comfort",
    ],
    benefits: [
      "Practical, straightforward service",
      "Local family-owned company",
      "Focus on day-to-day comfort",
      "Service for homes and businesses in the Boise area",
    ],
    bannerImage: "/images/services/cooling-banner.jpg",
    contentImage: "/images/services/cooling-content.jpg",
  },
  {
    id: "general-hvac",
    slug: "general-hvac",
    icon: Wrench,
    title: "General HVAC Services",
    shortTitle: "General HVAC",
    shortDesc: "General HVAC support from a family-owned contractor in Boise, Idaho, covering everyday heating and cooling needs.",
    fullDesc: "Komfort iQ HVAC is a family-owned heating and air company in Boise, Idaho that provides general HVAC support with a practical, straightforward approach and a focus on comfort. Service is available for residential and commercial customers in the Boise area.",
    features: [
      "General HVAC service",
      "Heating and cooling support",
      "Local contractor service",
    ],
    benefits: [
      "Practical, straightforward service",
      "Local family-owned company",
      "Focus on day-to-day comfort",
      "Service for homes and businesses in the Boise area",
    ],
    bannerImage: "/images/services/hvac-systems-banner.jpg",
    contentImage: "/images/services/hvac-systems-content.jpg",
  },
];

export const getServiceBySlug = (slug: string): ServiceItem | undefined => {
  return services.find((service) => service.slug === slug);
};

export const getServiceById = (id: string): ServiceItem | undefined => {
  return services.find((service) => service.id === id);
};
