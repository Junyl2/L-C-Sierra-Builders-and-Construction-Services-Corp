import { useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import PageBanner from "@/components/PageBanner";

const ServiceArea = () => {
  useEffect(() => {
    document.title = "Service Area | Sona HVAC";
  }, []);

  return (
    <>
      <PageBanner title="Service Area" subtitle="Serving Elk Grove Village and nearby suburbs" />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-heading font-extrabold uppercase text-foreground mb-6">
                Where We Serve
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Sona HVAC is based in Elk Grove Village, Illinois and appears to work mainly in Elk Grove Village and nearby suburbs. No broader regional or multi-state service area was publicly listed, so our coverage area is local and focused.
              </p>

              <div className="flex items-start gap-3 p-4 bg-accent rounded-lg">
                <MapPin className="w-5 h-5 text-accent-foreground mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Headquarters</p>
                  <p className="text-sm text-muted-foreground">
                    1073 Florida Ln<br />
                    Elk Grove Village, IL 60007
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="aspect-square rounded-lg bg-muted flex items-center justify-center"
            >
              <div className="text-center text-muted-foreground">
                <MapPin className="w-12 h-12 mx-auto mb-3 text-primary/30" />
                <p className="text-sm">Map Placeholder</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Map embed */}
      <div className="w-full" style={{ height: "385px" }}>
        <iframe
          title="Sona HVAC Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2963.123!2d-87.987!3d42.007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDAwJzI1LjIiTiA4N8KwNTknMTMuMiJX!5e0!3m2!1sen!2sus!4v1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
};

export default ServiceArea;
