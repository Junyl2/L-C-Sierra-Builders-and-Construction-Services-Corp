import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-hvac.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end pb-16 md:pb-24 overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
      {/* Hero image - right side on desktop */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full">
        <img
          src={heroImage}
          alt="HVAC technician servicing air conditioning unit"
          className="w-full h-full object-cover"
          width={1280}
          height={960}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-background/40 md:bg-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Row 1 - Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading font-black text-foreground uppercase leading-none whitespace-nowrap"
          style={{ fontSize: "clamp(2rem, 7vw, 6rem)" }}
        >
          TOTAL HVAC SOLUTIONS
        </motion.h1>

        {/* Row 2 - Subtitle + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <p className="text-muted-foreground text-base md:text-lg max-w-md">
            Installation, repair, and maintenance for homes and businesses in Elk Grove Village, IL.
          </p>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 text-foreground font-semibold text-sm tracking-wide uppercase"
          >
            <span className="relative">
              REQUEST SERVICE
              <span className="absolute bottom-0 left-0 w-full h-px bg-primary group-hover:h-0.5 transition-all" />
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
