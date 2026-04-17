import { useRef, useEffect } from "react";
import { Star } from "lucide-react";
import { gsap } from "@/lib/gsap";

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const ReviewSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const els = section.querySelectorAll(".anim");
      gsap.fromTo(els, { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.12,
        scrollTrigger: { trigger: section, start: "top 72%", once: true },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden"
      style={{ background: "linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--foreground) / 0.97) 100%)" }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Stars */}
          <div className="anim flex items-center justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-[#FBBC05] text-[#FBBC05]" />
            ))}
          </div>

          {/* Quote */}
          <blockquote className="anim mb-10 md:mb-12">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-bold text-background leading-snug md:leading-[1.25] tracking-tight italic">
              "Carlos did an amazing job on our ac. While searching for someone to help, he was available the fastest and even followed up with us after the job was done. Very professional. Ac is working top notch!!!"
            </p>
          </blockquote>

          {/* Attribution */}
          <div className="anim mb-10">
            <p className="text-background font-heading font-semibold text-base md:text-lg">
              Joanna Pena
            </p>
            <p className="text-background/40 text-sm mt-1">
              Google Review
            </p>
          </div>

          {/* Divider */}
          <div className="anim w-16 h-[2px] bg-primary mx-auto mb-10" />

          {/* Google CTA */}
          <div className="anim">
            <a
              href="https://www.google.com/maps/place/C%26B+Electric+%26+A%2FC+Services/@30.5719527,-99.3571293,3357374m/data=!3m1!1e3!4m8!3m7!1s0x8665a72e27895ec7:0xc053aa4993fb2234!8m2!3d26.1532382!4d-98.2541064!9m1!1b1!16s%2Fg%2F11yp5v0m0d?entry=ttu&g_ep=EgoyMDI2MDQxNC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-4 bg-background text-foreground font-semibold text-sm hover:bg-background/90 transition-colors"
            >
              <GoogleIcon />
              <span>Read Our Reviews on Google</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
