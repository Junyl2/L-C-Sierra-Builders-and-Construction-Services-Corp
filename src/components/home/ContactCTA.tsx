import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold uppercase mb-4">
            Ready for Reliable HVAC Service?
          </h2>
          <p className="text-secondary-foreground/70 max-w-lg mx-auto mb-8">
            Contact Sona HVAC today for heating and air conditioning support in Elk Grove Village and surrounding areas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="tel:+18473126967"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              CALL NOW
            </a>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 font-semibold text-sm tracking-wide uppercase"
            >
              <span className="relative">
                SEND A MESSAGE
                <span className="absolute bottom-0 left-0 w-full h-px bg-primary group-hover:h-0.5 transition-all" />
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
