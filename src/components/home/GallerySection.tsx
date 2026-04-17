import { useRef, useEffect, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { useLenis } from "@/lib/lenis";

const allImages = Array.from({ length: 12 }, (_, i) => `/images/gallery/gallery-${i + 1}.jpg`);

const col1 = [allImages[0], allImages[3], allImages[6], allImages[9]];
const col2 = [allImages[1], allImages[4], allImages[7], allImages[10]];
const col3 = [allImages[2], allImages[5], allImages[8], allImages[11]];

const GAP = 12; // matches gap-3 (0.75rem = 12px)

const MarqueeColumn = ({
  images,
  direction,
  speed,
  onImageClick,
}: {
  images: string[];
  direction: "up" | "down";
  speed: number;
  onImageClick: (src: string) => void;
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  // Wait for images to load so we get correct height
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const imgs = track.querySelectorAll("img");
    let loaded = 0;

    const check = () => {
      loaded++;
      if (loaded >= imgs.length) setReady(true);
    };

    imgs.forEach((img) => {
      if (img.complete) check();
      else {
        img.addEventListener("load", check);
        img.addEventListener("error", check);
      }
    });

    // Fallback
    const fallback = setTimeout(() => setReady(true), 3000);
    return () => clearTimeout(fallback);
  }, []);

  // Start animation once ready
  useEffect(() => {
    if (!ready) return;
    const track = trackRef.current;
    if (!track) return;

    // Measure one set of images (first half of children)
    const children = track.children;
    const halfCount = images.length;
    let oneSetHeight = 0;
    for (let i = 0; i < halfCount; i++) {
      oneSetHeight += (children[i] as HTMLElement).offsetHeight + GAP;
    }

    if (oneSetHeight <= 0) return;

    const duration = oneSetHeight / speed;
    const moveY = direction === "up" ? -oneSetHeight : oneSetHeight;

    // For "down" direction, offset the start so it begins scrolling downward
    if (direction === "down") {
      gsap.set(track, { y: -oneSetHeight });
    }

    const tween = gsap.to(track, {
      y: direction === "up" ? moveY : 0,
      duration,
      ease: "none",
      repeat: -1,
    });

    return () => { tween.kill(); };
  }, [ready, direction, speed, images.length]);

  // Triple the images to ensure no gaps
  const tripled = [...images, ...images, ...images];

  return (
    <div className="overflow-hidden h-full">
      <div ref={trackRef} className="flex flex-col gap-3">
        {tripled.map((src, idx) => (
          <button
            key={idx}
            onClick={() => onImageClick(src)}
            className="relative block w-full overflow-hidden cursor-pointer group focus:outline-none flex-shrink-0"
          >
            <img
              src={src}
              alt={`Gallery ${(idx % images.length) + 1}`}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
          </button>
        ))}
      </div>
    </div>
  );
};

const GallerySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const { stop, start } = useLenis();

  const openModal = useCallback((src: string) => {
    const idx = allImages.indexOf(src);
    setActiveIndex(idx >= 0 ? idx : 0);
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % allImages.length);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  }, []);

  useEffect(() => {
    if (modalOpen) {
      stop();
      document.body.style.overflow = "hidden";
    } else {
      start();
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [modalOpen, stop, start]);

  useEffect(() => {
    if (!modalOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [modalOpen, closeModal, goNext, goPrev]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const els = section.querySelectorAll(".anim");
      gsap.fromTo(els, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.1,
        scrollTrigger: { trigger: section, start: "top 78%", once: true },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={sectionRef} className="relative bg-background py-20 md:py-28 lg:py-36 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <div>
              <div className="anim flex items-center gap-3 mb-5">
                <span className="block w-10 h-[2px] bg-primary" />
                <span className="text-primary font-semibold text-xs uppercase tracking-[0.2em]">Our Work</span>
              </div>
              <h2 className="anim text-4xl md:text-5xl lg:text-6xl font-heading font-black uppercase text-foreground leading-[0.92] tracking-tight">
                Project <span className="text-primary">Gallery</span>
              </h2>
            </div>
            <p className="anim text-muted-foreground text-base md:text-lg max-w-sm md:text-right leading-relaxed">
              A look at our electrical and AC work across the Rio Grande Valley.
            </p>
          </div>
        </div>

        <div className="h-[500px] md:h-[600px] lg:h-[700px] flex gap-3 md:gap-4 px-3 md:px-4">
          <div className="flex-1">
            <MarqueeColumn images={col1} direction="up" speed={60} onImageClick={openModal} />
          </div>
          <div className="flex-1">
            <MarqueeColumn images={col2} direction="down" speed={55} onImageClick={openModal} />
          </div>
          <div className="hidden md:block flex-1">
            <MarqueeColumn images={col3} direction="up" speed={50} onImageClick={openModal} />
          </div>
        </div>
      </section>

      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center" data-lenis-prevent>
          <div className="absolute inset-0 bg-foreground/90 backdrop-blur-sm" onClick={closeModal} />

          <button
            onClick={closeModal}
            className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center text-background/70 hover:text-background transition-colors"
            aria-label="Close gallery"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={goPrev}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-background/10 hover:bg-background/20 text-background transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goNext}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-background/10 hover:bg-background/20 text-background transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="relative z-10 max-w-5xl mx-4 mb-28">
            <img
              src={allImages[activeIndex]}
              alt={`Gallery image ${activeIndex + 1}`}
              className="max-w-full max-h-[60vh] md:max-h-[65vh] object-contain"
            />
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-10 bg-foreground/80 backdrop-blur-md py-4 px-4">
            <div className="text-center mb-3">
              <span className="text-background/50 text-xs font-heading font-semibold tracking-wider">
                {String(activeIndex + 1).padStart(2, "0")} / {String(allImages.length).padStart(2, "0")}
              </span>
            </div>
            <div className="flex gap-2 justify-center max-w-[90vw] mx-auto overflow-x-auto py-1 px-1">
              {allImages.map((src, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 overflow-hidden transition-all duration-200 ${
                    activeIndex === idx
                      ? "ring-2 ring-primary opacity-100"
                      : "opacity-40 hover:opacity-70"
                  }`}
                >
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySection;
