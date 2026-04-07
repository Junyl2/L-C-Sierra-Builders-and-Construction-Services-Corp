import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AboutPreview = () => {
  return (
    <section className="py-20 bg-section-warm">
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

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold uppercase text-foreground mb-6">
              About Sona HVAC
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sona HVAC is a local heating and air conditioning business based in Elk Grove Village, Illinois. We provide reliable HVAC support for homeowners and businesses in the area.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our focus is on delivering comfort you can count on — from installations and repairs to ongoing system maintenance.
            </p>
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 text-foreground font-semibold text-sm tracking-wide uppercase"
            >
              <span className="relative">
                LEARN MORE
                <span className="absolute bottom-0 left-0 w-full h-px bg-primary group-hover:h-0.5 transition-all" />
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
