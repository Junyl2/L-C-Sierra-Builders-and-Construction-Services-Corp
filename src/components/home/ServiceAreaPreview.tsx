import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceAreaPreview = () => {
  return (
    <section className="py-20 bg-section-warm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold uppercase text-foreground mb-6">
              Service Area
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sona HVAC is based in Elk Grove Village, Illinois and serves the local area and nearby suburbs.
            </p>
            <div className="flex items-start gap-3 mb-8">
              <MapPin className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="font-semibold text-foreground">1073 Florida Ln</p>
                <p className="text-muted-foreground text-sm">Elk Grove Village, IL 60007</p>
              </div>
            </div>
            <Link
              to="/service-area"
              className="text-sm font-semibold tracking-wide uppercase text-primary hover:text-primary/80 transition-colors"
            >
              VIEW SERVICE AREA →
            </Link>
          </motion.div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="aspect-[4/3] rounded-lg bg-muted flex items-center justify-center"
          >
            <div className="text-center text-muted-foreground">
              <MapPin className="w-10 h-10 mx-auto mb-2 text-primary/40" />
              <p className="text-sm">Map Placeholder</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaPreview;
