import { useRef, useEffect } from "react";
import { Star, User, ArrowUpRight, Quote } from "lucide-react";
import { gsap } from "@/lib/gsap";

const googleReviewsUrl =
  "https://www.google.com/maps/place/Komfort+iQ+HVAC/@43.8630074,-116.4567941,91602m/data=!3m1!1e3!4m8!3m7!1s0xa80fdce1596295e7:0xc69ffc9c0ec8b90f!8m2!3d43.8073244!4d-115.742997!9m1!1b1!16s%2Fg%2F11z14lf6gr";

const GoogleIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

const ReviewSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const header = section.querySelectorAll<HTMLElement>(".rev-header");
      gsap.fromTo(
        header,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: section, start: "top 75%", once: true },
        }
      );

      const card = section.querySelector<HTMLElement>(".rev-card");
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 48 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            delay: 0.15,
            scrollTrigger: { trigger: section, start: "top 72%", once: true },
          }
        );
      }

      const cta = section.querySelector<HTMLElement>(".rev-cta");
      if (cta) {
        gsap.fromTo(
          cta,
          { opacity: 0, y: 48 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            delay: 0.3,
            scrollTrigger: { trigger: section, start: "top 72%", once: true },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-background py-24 md:py-32 lg:py-36"
    >
      {/* Corner editorial ticks */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 h-[2px] w-24 bg-primary md:w-32"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-0 right-0 h-[2px] w-24 bg-primary md:w-32"
      />

      <div className="container mx-auto px-4">
        {/* ── Header ── */}
        <div className="mb-14 max-w-3xl md:mb-16">
          <div
            className="rev-header mb-5 flex items-center gap-3"
            style={{ opacity: 0 }}
          >
            <span className="block h-[2px] w-10 bg-primary" />
            <span className="text-primary text-xs font-semibold uppercase tracking-[0.25em]">
              Reviews — From Google
            </span>
          </div>
          <h2
            className="rev-header font-heading font-black uppercase leading-[0.95] tracking-tight text-foreground text-4xl md:text-5xl lg:text-6xl"
            style={{ opacity: 0 }}
          >
            What our customers
            <br />
            are <span className="text-primary">saying.</span>
          </h2>
        </div>

        {/* ── Grid: review card + CTA block ── */}
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Review card */}
          <article
            className="rev-card relative flex flex-col border border-foreground/15 bg-background p-8 md:p-10 lg:col-span-7 lg:p-12"
            style={{ opacity: 0 }}
          >
            {/* Decorative quote mark */}
            <Quote
              aria-hidden="true"
              className="absolute -top-4 left-8 h-9 w-9 bg-background p-1 text-primary md:left-10 md:h-10 md:w-10"
              strokeWidth={2.5}
            />

            {/* Review text */}
            <blockquote className="mt-2 mb-10">
              <p className="font-body font-medium leading-[1.55] tracking-tight text-foreground text-lg md:text-xl lg:text-[1.3rem]">
                Komfort IQ Heating and Air is one of those rare companies that
                truly leads with integrity. Their commitment to quality work
                and doing right by people is clear in everything they
                represent. I've seen firsthand how dedicated they are to their
                customers and to their work. Their values alone make them a
                company worth recommending. You won't regret going through
                them for any of your HVAC needs!!
              </p>
            </blockquote>

            {/* Attribution */}
            <div className="mt-auto flex flex-col gap-4 border-t border-foreground/12 pt-6 sm:flex-row sm:items-center sm:justify-between">
              {/* Profile + name + date */}
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-primary/25 bg-primary/10">
                  <User className="h-5 w-5 text-primary" />
                </span>
                <div>
                  <p className="font-heading font-bold text-foreground text-base">
                    Shelbie Blackwood
                  </p>
                  <p className="text-foreground/50 text-xs font-semibold uppercase tracking-[0.2em]">
                    A month ago
                  </p>
                </div>
              </div>

              {/* Stars + Google badge */}
              <div className="flex items-center gap-3">
                <GoogleIcon className="h-4 w-4" />
                <div
                  className="flex items-center gap-1"
                  aria-label="5 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                      strokeWidth={0}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom edge accent */}
            <span
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-[3px] w-16 bg-primary"
            />
          </article>

          {/* CTA block */}
          <aside
            className="rev-cta relative flex flex-col justify-between border border-foreground/15 bg-secondary p-8 md:p-10 lg:col-span-5 lg:p-12"
            style={{ opacity: 0 }}
          >
            <div>
              <span className="mb-5 inline-flex items-center gap-3 text-primary text-xs font-semibold uppercase tracking-[0.25em]">
                <span className="block h-[2px] w-8 bg-primary" />
                Share Your Experience
              </span>

              <h3 className="mb-4 font-heading font-black uppercase leading-tight tracking-tight text-white text-2xl md:text-3xl">
                Leave us a{" "}
                <span className="text-primary">Google review.</span>
              </h3>

              <p className="mb-8 text-sm md:text-base font-medium leading-relaxed text-white/65">
                Your feedback helps local families find reliable HVAC service
                in the Boise area.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-3 bg-white px-6 py-4 text-sm font-semibold uppercase tracking-wider text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20 active:translate-y-0"
              >
                <GoogleIcon className="h-5 w-5" />
                Leave a Review
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <a
                href={googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-2 border border-white/20 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 transition-all duration-300 hover:border-primary hover:text-primary"
              >
                Read All Reviews on Google
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Bottom edge accent */}
            <span
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-[3px] w-16 bg-primary"
            />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
