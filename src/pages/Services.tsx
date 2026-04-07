import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import PageBanner from "@/components/PageBanner";

const Services = () => {
  useEffect(() => {
    document.title = "Services | Sona HVAC";
  }, []);

  return (
    <>
      <PageBanner
        title="Our Services"
        subtitle="Comprehensive HVAC solutions for your comfort"
        backgroundImage="/images/services/services-banner.jpg"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="group block h-full bg-card rounded overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  {/* Image */}
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={service.contentImage}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Icon & Title */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded bg-accent flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-5">
                      {service.shortDesc}
                    </p>

                    {/* Features Preview */}
                    <ul className="space-y-2 mb-5">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Link */}
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-20 text-center"
          >
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-foreground mb-4">
                Need Help with Your HVAC System?
              </h2>
              <p className="text-muted-foreground mb-8">
                Contact us today to discuss your heating and cooling needs. We provide professional service throughout Elk Grove Village and surrounding areas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+18473126967"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded hover:bg-primary/90 transition-colors"
                >
                  Call (847) 312-6967
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-foreground/20 text-foreground font-semibold rounded hover:bg-foreground/5 transition-colors"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
