import { Building2, ShieldCheck, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import generalBannerImage from "@/assets/projects/project-2.jpg";
import generalContentImage from "@/assets/projects/project-4.jpg";
import generalDetailImage from "@/assets/projects/project-1.jpg";
import strengtheningBannerImage from "@/assets/projects/project-6.jpg";
import strengtheningContentImage from "@/assets/projects/project-10.jpg";
import strengtheningDetailImage from "@/assets/projects/project-9.jpg";
import commercialBannerImage from "@/assets/projects/project-10.jpg";
import commercialContentImage from "@/assets/projects/project-5.jpg";
import commercialDetailImage from "@/assets/projects/project-7.jpg";

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
  detailImage: string;
}

export const services: ServiceItem[] = [
  {
    id: "general-construction",
    slug: "general-construction",
    icon: Building2,
    title: "General Construction",
    shortTitle: "General Construction",
    shortDesc: "Commercial construction support from a Cebu City company providing practical, coordinated project services.",
    fullDesc: "L C Sierra Builders and Construction Services Corporation is a commercial construction company based in Cebu City since 2020. The company provides general construction services with a practical, coordinated approach for commercial project needs.",
    features: [
      "Commercial construction support",
      "General project coordination",
      "On-site construction service",
    ],
    benefits: [
      "Clear construction communication",
      "Based in Cebu City since 2020",
      "Commercial project focus",
      "Safe, factual service scope",
    ],
    bannerImage: generalBannerImage,
    contentImage: generalContentImage,
    detailImage: generalDetailImage,
  },
  {
    id: "structural-strengthening",
    slug: "structural-strengthening",
    icon: ShieldCheck,
    title: "Structural Strengthening",
    shortTitle: "Structural Strengthening",
    shortDesc: "Structural strengthening services for commercial properties where added reinforcement or corrective work is required.",
    fullDesc: "L C Sierra Builders and Construction Services Corporation provides structural strengthening services for commercial construction needs. The service focuses on reinforcement and improvement work carried out with clear coordination and project-aware planning.",
    features: [
      "Structural strengthening work",
      "Reinforcement-focused service",
      "Commercial property support",
    ],
    benefits: [
      "Built around structural service needs",
      "Practical project coordination",
      "Commercial construction experience",
      "Factual, non-exaggerated scope",
    ],
    bannerImage: strengtheningBannerImage,
    contentImage: strengtheningContentImage,
    detailImage: strengtheningDetailImage,
  },
  {
    id: "commercial-construction",
    slug: "commercial-construction",
    icon: Wrench,
    title: "Commercial Construction Services",
    shortTitle: "Commercial Construction",
    shortDesc: "Commercial construction services for organizations that need dependable site work and clear project communication.",
    fullDesc: "L C Sierra Builders and Construction Services Corporation serves commercial construction needs from its Cebu City base. The company supports commercial projects with general construction and structural strengthening services.",
    features: [
      "Commercial construction service",
      "Project-based site support",
      "General construction and strengthening",
    ],
    benefits: [
      "Commercial-focused service language",
      "Cebu City-based company",
      "Clear contact and inquiry path",
      "No unsupported claims or statistics",
    ],
    bannerImage: commercialBannerImage,
    contentImage: commercialContentImage,
    detailImage: commercialDetailImage,
  },
];

export const getServiceBySlug = (slug: string): ServiceItem | undefined => {
  return services.find((service) => service.slug === slug);
};

export const getServiceById = (id: string): ServiceItem | undefined => {
  return services.find((service) => service.id === id);
};
