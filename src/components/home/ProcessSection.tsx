import { motion } from "framer-motion";
import { Search, Settings, Wrench, Headphones } from "lucide-react";

const steps = [
  { icon: Search, label: "Inspect", desc: "Thorough assessment of your HVAC system" },
  { icon: Settings, label: "Install", desc: "Professional installation or repair work" },
  { icon: Wrench, label: "Maintain", desc: "Ongoing maintenance for peak performance" },
  { icon: Headphones, label: "Support", desc: "Reliable support when you need it" },
];

const ProcessSection = () => {
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
            How It Works
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            A simple, professional process from start to finish.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="relative mx-auto w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4">
                <step.icon className="w-7 h-7 text-accent-foreground" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-heading font-bold uppercase text-foreground mb-2">{step.label}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
