import { useEffect } from "react";
import { motion } from "framer-motion";
import { Thermometer, Wind, Wrench, ClipboardCheck, Zap } from "lucide-react";
import PageBanner from "@/components/PageBanner";

const serviceDetails = [
  {
    icon: Thermometer,
    title: "Heating Services",
    desc: "Help with heating system needs for homes and local properties. This can include general heating-related HVAC work and system support.",
    items: ["Heating system service", "Seasonal heating support", "General HVAC help"],
  },
  {
    icon: Wind,
    title: "Air Conditioning Services",
    desc: "Support for air conditioning and cooling needs in the local area.",
    items: ["Cooling system service", "Air conditioning support", "General comfort system help"],
  },
  {
    icon: Wrench,
    title: "HVAC Systems",
    desc: "General HVAC support for customers who need help with heating and cooling equipment.",
    items: ["Heating and cooling systems", "Basic HVAC service needs", "Local on-site support"],
  },
  {
    icon: ClipboardCheck,
    title: "Inspections",
    desc: "Thorough HVAC system inspections to identify potential issues and ensure everything is running properly.",
    items: ["System performance checks", "Safety inspections", "Preventive assessments"],
  },
  {
    icon: Zap,
    title: "Electrical Support",
    desc: "Electrical support related to HVAC systems and their components.",
    items: ["HVAC electrical diagnostics", "Wiring and connections", "Component support"],
  },
];

const Services = () => {
  useEffect(() => {
    document.title = "Services | Sona HVAC";
  }, []);

  return (
    <>
      <PageBanner title="Our Services" subtitle="Comprehensive HVAC solutions for your comfort" />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 space-y-16">
          {serviceDetails.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <h3 className="text-2xl font-heading font-extrabold uppercase text-foreground">
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">{service.desc}</p>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Placeholder */}
              <div className={`aspect-[4/3] rounded-lg bg-muted flex items-center justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="text-center text-muted-foreground">
                  <service.icon className="w-10 h-10 mx-auto mb-2 text-primary/30" />
                  <p className="text-sm">Service Image</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
