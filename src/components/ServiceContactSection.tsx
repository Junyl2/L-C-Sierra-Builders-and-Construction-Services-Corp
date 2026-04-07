import { motion } from "framer-motion";
import { Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceContactSectionProps {
  serviceName: string;
}

const ServiceContactSection = ({ serviceName }: ServiceContactSectionProps) => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded overflow-hidden">
              <img
                src="/images/services/contact-section.jpg"
                alt="HVAC technician with tools"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded shadow-lg hidden md:block">
              <p className="text-sm font-medium uppercase tracking-wide">Local Service</p>
              <p className="text-2xl font-heading font-bold">Elk Grove Village</p>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:pl-8"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary-foreground mt-3 mb-6">
              Ready for {serviceName}?
            </h2>
            <p className="text-secondary-foreground/80 leading-relaxed mb-8">
              Contact us today to discuss your heating and cooling needs. We provide on-site service throughout Elk Grove Village and surrounding areas. Our team is ready to help you achieve the comfort you deserve.
            </p>

            {/* Contact Details */}
            <div className="space-y-4 mb-8">
              <a
                href="tel:+18473126967"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded bg-primary/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-secondary-foreground/60">Call Us</p>
                  <p className="text-lg font-semibold text-primary-foreground group-hover:text-primary transition-colors">
                    (847) 312-6967
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded bg-primary/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-secondary-foreground/60">Location</p>
                  <p className="text-lg font-semibold text-primary-foreground">
                    Elk Grove Village, IL 60007
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded bg-primary/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-secondary-foreground/60">Service Area</p>
                  <p className="text-lg font-semibold text-primary-foreground">
                    Local & Surrounding Areas
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+18473126967"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-semibold rounded hover:bg-primary-foreground/10 transition-colors"
              >
                Contact Page
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceContactSection;
