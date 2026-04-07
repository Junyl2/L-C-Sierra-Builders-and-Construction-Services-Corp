import { createContext, useContext, useEffect, useRef, useState, ReactNode } from "react";
import Lenis from "lenis";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "./gsap";

interface LenisContextType {
  lenis: Lenis | null;
  stop: () => void;
  start: () => void;
}

const LenisContext = createContext<LenisContextType>({
  lenis: null,
  stop: () => {},
  start: () => {},
});

export const useLenis = () => useContext(LenisContext);

interface LenisProviderProps {
  children: ReactNode;
}

export const LenisProvider = ({ children }: LenisProviderProps) => {
  const lenisRef = useRef<Lenis | null>(null);
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const location = useLocation();

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenisRef.current = lenisInstance;
    setLenis(lenisInstance);

    // Sync Lenis scroll with GSAP ScrollTrigger
    lenisInstance.on("scroll", () => {
      ScrollTrigger.update();
    });

    // Use GSAP ticker for smooth animation frame sync
    const raf = (time: number) => {
      lenisInstance.raf(time * 1000);
    };

    // Add to GSAP ticker for better performance
    import("gsap").then(({ gsap }) => {
      gsap.ticker.add(raf);
    });

    return () => {
      import("gsap").then(({ gsap }) => {
        gsap.ticker.remove(raf);
      });
      lenisInstance.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
      // Refresh ScrollTrigger after navigation
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    }
  }, [location.pathname]);

  const stop = () => {
    lenisRef.current?.stop();
  };

  const start = () => {
    lenisRef.current?.start();
  };

  return (
    <LenisContext.Provider value={{ lenis, stop, start }}>
      {children}
    </LenisContext.Provider>
  );
};
