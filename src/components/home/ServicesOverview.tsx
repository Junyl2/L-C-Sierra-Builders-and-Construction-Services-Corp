import { motion } from "framer-motion";
import { Thermometer, Wind, Wrench, ClipboardCheck, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Thermometer, title: "HVAC Installation", desc: "Complete heating and cooling system installation for residential and commercial properties." },
  { icon: Wrench, title: "Heating Repair", desc: "Expert diagnosis and repair for heating systems to restore your comfort quickly." },
  { icon: Wind, title: "System Maintenance", desc: "Preventive maintenance programs to keep your HVAC system running efficiently." },
  { icon: ClipboardCheck, title: "Inspections", desc: "Thorough system inspections to identify potential issues before they become problems." },
  { icon: Zap, title: "Electrical Support", desc: "Electrical support related to HVAC systems and components." },
];

const ServicesOverview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold uppercase text-foreground">
            Our Services
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Comprehensive HVAC solutions for your comfort needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link
                to="/services"
                className="group block p-8 rounded-lg bg-card hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-primary/20"
              >
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-5">
                  <service.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-heading font-bold text-lg uppercase text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
                <div className="mt-4 h-0.5 w-0 bg-primary group-hover:w-12 transition-all duration-300" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
