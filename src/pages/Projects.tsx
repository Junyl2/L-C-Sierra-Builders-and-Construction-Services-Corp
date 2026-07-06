import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { gsap } from "@/lib/gsap";
import PageBanner from "@/components/PageBanner";
import { projectImages } from "@/data/projects";

const Projects = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const activeProject =
    currentIndex === null ? null : projectImages[currentIndex];

  useEffect(() => {
    document.title = "Projects | L C Sierra Builders and Construction Services Corporation";
  }, []);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const ctx = gsap.context(() => {
      const items = page.querySelectorAll<HTMLElement>(".projects-anim");
      gsap.fromTo(
        items,
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: ".projects-gallery", start: "top 82%", once: true },
        }
      );
    }, page);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setCurrentIndex(null);
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    const previousBodyOverflow = document.body.style.overflow;
    const previousRootOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousRootOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex]);

  const showPrevious = () => {
    setCurrentIndex((current) => {
      if (current === null) return current;
      return current === 0 ? projectImages.length - 1 : current - 1;
    });
  };

  const showNext = () => {
    setCurrentIndex((current) => {
      if (current === null) return current;
      return current === projectImages.length - 1 ? 0 : current + 1;
    });
  };

  return (
    <div ref={pageRef}>
      <PageBanner
        title="Projects"
        subtitle="Construction gallery images for visual reference"
        backgroundImage={projectImages[0]?.src}
      />

      <section className="projects-gallery relative overflow-hidden bg-background">
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="mb-14 grid gap-8 md:mb-16 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <div
                className="projects-anim mb-6 flex items-center gap-3"
                style={{ opacity: 0 }}
              >
                <span className="block h-[2px] w-10 bg-primary" />
                <span className="text-primary text-xs font-semibold uppercase tracking-[0.25em]">
                  Project Gallery
                </span>
              </div>
              <h2
                className="projects-anim font-heading font-black uppercase leading-[0.95] tracking-tight text-foreground text-4xl md:text-5xl lg:text-6xl"
                style={{ opacity: 0 }}
              >
                Gallery images,
                <br />
                <span className="text-primary">documented clearly.</span>
              </h2>
            </div>
            <p
              className="projects-anim md:col-span-5 text-foreground/65 text-base md:text-lg font-medium leading-relaxed"
              style={{ opacity: 0 }}
            >
              Browse construction-related gallery images for visual reference.
              Select any image to view it larger.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5">
            {projectImages.map((project, index) => {
              const isFeature = index === 0 || index === 5;
              const tileClass = isFeature
                ? "sm:col-span-2 lg:col-span-6 lg:row-span-2 aspect-[16/11] lg:aspect-[4/5]"
                : "lg:col-span-3 aspect-[4/5]";

              return (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={`projects-anim group relative overflow-hidden bg-secondary text-left ${tileClass}`}
                  style={{ opacity: 0 }}
                  aria-label={`Open ${project.title}`}
                >
                  <img
                    src={project.src}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                    loading={index < 4 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/5 transition-colors group-hover:from-black/65" />
                  <span className="absolute left-6 top-6 font-heading font-black text-primary text-4xl leading-none md:text-5xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center border border-white/25 bg-black/25 text-white backdrop-blur-sm transition-colors group-hover:border-primary group-hover:text-primary">
                    <ZoomIn className="h-4 w-4" />
                  </span>
                  <span className="absolute inset-x-0 bottom-0 p-6">
                    <span className="mb-3 block h-[2px] w-8 bg-primary transition-all duration-500 group-hover:w-16" />
                    <span className="block font-heading font-black uppercase tracking-tight text-white text-xl">
                      {project.title}
                    </span>
                    <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.2em] text-white/65">
                      {project.meta}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {activeProject && currentIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Project image lightbox"
        >
          <button
            type="button"
            onClick={() => setCurrentIndex(null)}
            className="absolute inset-0 cursor-default bg-black/35"
            aria-label="Close project lightbox backdrop"
          />

          <div className="relative z-10 flex h-full w-full max-w-7xl flex-col">
            <div className="mb-4 flex items-center justify-between gap-4 text-white">
              <div>
                <p className="font-heading font-black uppercase tracking-tight text-lg md:text-2xl">
                  {activeProject.title}
                </p>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                  {currentIndex + 1} / {projectImages.length}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setCurrentIndex(null)}
                className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/20 bg-white/5 text-white transition-colors hover:border-primary hover:text-primary"
                aria-label="Close project lightbox"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative min-h-0 flex-1">
              <img
                src={activeProject.src}
                alt={activeProject.title}
                className="h-full w-full object-contain"
              />

              <button
                type="button"
                onClick={showPrevious}
                className="absolute left-0 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/20 bg-black/45 text-white backdrop-blur-sm transition-colors hover:border-primary hover:text-primary md:left-4 md:h-14 md:w-14"
                aria-label="Previous project image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                type="button"
                onClick={showNext}
                className="absolute right-0 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/20 bg-black/45 text-white backdrop-blur-sm transition-colors hover:border-primary hover:text-primary md:right-4 md:h-14 md:w-14"
                aria-label="Next project image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-4 flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
              <span>Construction Gallery</span>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-white transition-colors hover:text-primary"
              >
                Contact Us
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
