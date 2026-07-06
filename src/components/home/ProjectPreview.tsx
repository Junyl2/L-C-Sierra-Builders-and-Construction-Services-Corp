import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Images,
  X,
} from "lucide-react";
import { gsap } from "@/lib/gsap";
import { projectImages } from "@/data/projects";

const previewImages = projectImages.slice(0, 5);

const ProjectPreview = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const activeProject =
    currentIndex === null ? null : previewImages[currentIndex];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const items = section.querySelectorAll<HTMLElement>(".project-preview-anim");
      gsap.fromTo(
        items,
        { opacity: 0, y: 42 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: section, start: "top 76%", once: true },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (currentIndex === null) return;

    const showPrevious = () => {
      setCurrentIndex((current) => {
        if (current === null) return current;
        return current === 0 ? previewImages.length - 1 : current - 1;
      });
    };

    const showNext = () => {
      setCurrentIndex((current) => {
        if (current === null) return current;
        return current === previewImages.length - 1 ? 0 : current + 1;
      });
    };

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
      return current === 0 ? previewImages.length - 1 : current - 1;
    });
  };

  const showNext = () => {
    setCurrentIndex((current) => {
      if (current === null) return current;
      return current === previewImages.length - 1 ? 0 : current + 1;
    });
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-background">
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 h-[2px] w-24 bg-primary md:w-32"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-0 right-0 h-[2px] w-24 bg-primary md:w-32"
      />

      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="mb-14 grid gap-8 md:mb-16 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <div
              className="project-preview-anim mb-6 flex items-center gap-3"
              style={{ opacity: 0 }}
            >
              <span className="block h-[2px] w-10 bg-primary" />
              <span className="text-primary text-xs font-semibold uppercase tracking-[0.25em]">
                Projects — Gallery
              </span>
            </div>
            <h2
              className="project-preview-anim font-heading font-black uppercase leading-[0.95] tracking-tight text-foreground text-4xl md:text-5xl lg:text-6xl"
              style={{ opacity: 0 }}
            >
              Gallery images,
              <br />
              <span className="text-primary">built into view.</span>
            </h2>
          </div>

          <div
            className="project-preview-anim md:col-span-5 md:text-right"
            style={{ opacity: 0 }}
          >
            <p className="mb-6 text-foreground/65 text-base md:text-lg font-medium leading-relaxed">
              Browse selected construction-related images, then open the full
              gallery for a larger view.
            </p>
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:text-primary"
            >
              <span className="border-b-2 border-foreground/25 pb-1 transition-colors group-hover:border-primary">
                View Projects
              </span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <div
          className="project-preview-anim group grid min-h-[720px] grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-4 lg:min-h-[760px] lg:gap-5"
          style={{ opacity: 0 }}
        >
          {previewImages.map((project, index) => {
            const placement = [
              "md:col-span-4 md:row-span-2",
              "md:col-span-2 md:row-span-1",
              "md:col-span-2 md:row-span-1",
              "md:col-span-3 md:row-span-2",
              "md:col-span-3 md:row-span-2",
            ][index];

            return (
              <button
                key={project.id}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`relative min-h-[260px] overflow-hidden bg-secondary ${placement}`}
                aria-label={`Open ${project.title}`}
              >
                <img
                  src={project.src}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  loading={index < 2 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/5" />
                <div className="absolute left-6 top-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center border border-white/25 bg-black/25 text-primary backdrop-blur-sm">
                    <Images className="h-4 w-4" />
                  </span>
                  <span className="text-white/65 text-xs font-semibold uppercase tracking-[0.2em]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="mb-3 block h-[2px] w-8 bg-primary transition-all duration-500 group-hover:w-16" />
                  <h3 className="font-heading font-black uppercase tracking-tight text-white text-xl md:text-2xl">
                    {project.title}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {activeProject && currentIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Homepage project image lightbox"
        >
          <button
            type="button"
            onClick={() => setCurrentIndex(null)}
            className="absolute inset-0 cursor-default bg-black/35"
            aria-label="Close homepage project lightbox backdrop"
          />

          <div className="relative z-10 flex h-full w-full max-w-7xl flex-col">
            <div className="mb-4 flex items-center justify-between gap-4 text-white">
              <div>
                <p className="font-heading font-black uppercase tracking-tight text-lg md:text-2xl">
                  {activeProject.title}
                </p>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                  {currentIndex + 1} / {previewImages.length}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setCurrentIndex(null)}
                className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/20 bg-white/5 text-white transition-colors hover:border-primary hover:text-primary"
                aria-label="Close homepage project lightbox"
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
                aria-label="Previous homepage project image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                type="button"
                onClick={showNext}
                className="absolute right-0 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/20 bg-black/45 text-white backdrop-blur-sm transition-colors hover:border-primary hover:text-primary md:right-4 md:h-14 md:w-14"
                aria-label="Next homepage project image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-4 flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
              <span>Construction Gallery</span>
              <Link
                to="/projects"
                onClick={() => setCurrentIndex(null)}
                className="inline-flex items-center gap-2 text-white transition-colors hover:text-primary"
              >
                View All
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectPreview;
