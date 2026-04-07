import { useEffect } from "react";
import { motion } from "framer-motion";
import PageBanner from "@/components/PageBanner";

const About = () => {
  useEffect(() => {
    document.title = "About | Sona HVAC";
  }, []);

  return (
    <>
      <PageBanner title="About Us" subtitle="Local HVAC service you can trust" />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="aspect-[4/3] rounded-lg bg-muted flex items-center justify-center"
            >
              <div className="text-center text-muted-foreground">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-heading font-bold text-primary">S</span>
                </div>
                <p className="text-sm">Company Image</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-heading font-extrabold uppercase text-foreground mb-6">
                Who We Are
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sona HVAC is a local heating and air conditioning business based in Elk Grove Village, Illinois.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The business is associated publicly with Haresh Shah and a local Elk Grove Village contact number. Based on the available public information, the company focuses on general HVAC work and heating and cooling needs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We serve Elk Grove Village and nearby suburbs, providing reliable heating and air conditioning support for homes and local properties.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="py-20 bg-section-warm">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-heading font-extrabold uppercase text-foreground text-center mb-14"
          >
            What Drives Us
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Reliability", desc: "We show up when you need us and deliver consistent, dependable service." },
              { title: "Comfort", desc: "Your comfort is our priority — we ensure your HVAC system keeps your space just right." },
              { title: "Honesty", desc: "Straightforward communication and transparent service you can count on." },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-card rounded-lg text-center"
              >
                <h3 className="font-heading font-bold uppercase text-foreground mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
