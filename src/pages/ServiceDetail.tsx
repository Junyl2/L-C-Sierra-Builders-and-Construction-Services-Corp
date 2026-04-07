import { useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check } from "lucide-react";
import { getServiceBySlug, services } from "@/data/services";
import PageBanner from "@/components/PageBanner";
import ServiceContactSection from "@/components/ServiceContactSection";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  useEffect(() => {
    if (service) {
      document.title = `${service.title} | Sona HVAC`;
    }
  }, [service]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const ServiceIcon = service.icon;

  // Get other services for the sidebar
  const otherServices = services.filter((s) => s.id !== service.id);

  return (
    <>
      <PageBanner
        title={service.title}
        subtitle={service.shortDesc}
        backgroundImage={service.bannerImage}
      />

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Services
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content - 2 columns */}
            <div className="lg:col-span-2 space-y-12">
              {/* Service Icon & Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded bg-accent flex items-center justify-center">
                    <ServiceIcon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-foreground">
                    About This Service
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.fullDesc}
                </p>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-6">
                  What We Offer
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-card rounded border border-border"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-6">
                  Benefits
                </h3>
                <div className="bg-accent/50 rounded p-6 md:p-8">
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                        <span className="text-foreground leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Service Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="aspect-[16/9] rounded overflow-hidden bg-muted"
              >
                <img
                  src={service.contentImage}
                  alt={`${service.title} service`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Sidebar - 1 column */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="sticky top-32 space-y-6"
              >
                {/* Quick Contact Card */}
                <div className="bg-secondary rounded p-6">
                  <h4 className="text-lg font-heading font-bold text-primary-foreground mb-4">
                    Need This Service?
                  </h4>
                  <p className="text-secondary-foreground/80 text-sm mb-6">
                    Contact us today to discuss your {service.shortTitle.toLowerCase()} needs.
                  </p>
                  <a
                    href="tel:+18473126967"
                    className="block w-full py-3 bg-primary text-primary-foreground font-semibold text-center rounded hover:bg-primary/90 transition-colors mb-3"
                  >
                    (847) 312-6967
                  </a>
                  <Link
                    to="/contact"
                    className="block w-full py-3 border border-primary-foreground/30 text-primary-foreground font-semibold text-center rounded hover:bg-primary-foreground/10 transition-colors"
                  >
                    Contact Form
                  </Link>
                </div>

                {/* Other Services */}
                <div className="bg-card rounded border border-border p-6">
                  <h4 className="text-lg font-heading font-bold text-foreground mb-4">
                    Other Services
                  </h4>
                  <nav className="space-y-2">
                    {otherServices.map((s) => (
                      <Link
                        key={s.id}
                        to={`/services/${s.slug}`}
                        className="flex items-center gap-3 p-3 rounded hover:bg-accent transition-colors group"
                      >
                        <s.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                          {s.shortTitle}
                        </span>
                      </Link>
                    ))}
                  </nav>
                </div>

                {/* Service Area Info */}
                <div className="bg-accent/50 rounded p-6">
                  <h4 className="text-lg font-heading font-bold text-foreground mb-3">
                    Service Area
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    We provide {service.shortTitle.toLowerCase()} services in Elk Grove Village, IL and surrounding communities.
                  </p>
                  <Link
                    to="/service-area"
                    className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    View Service Area &rarr;
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ServiceContactSection serviceName={service.shortTitle} />
    </>
  );
};

export default ServiceDetail;
