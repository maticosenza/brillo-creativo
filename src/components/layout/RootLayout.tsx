import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { SmoothScroll } from "./SmoothScroll";
import { PageTransition } from "./PageTransition";
import { WhatsAppButton } from "../WhatsAppButton";

gsap.registerPlugin(ScrollTrigger);

export const RootLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollTop = () => {
      const lenis = (window as unknown as {
        lenis?: { scrollTo: (t: number, o?: { immediate?: boolean; force?: boolean }) => void };
      }).lenis;
      if (lenis) {
        lenis.scrollTo(0, { immediate: true, force: true });
      }
      window.scrollTo(0, 0);
      if (document.scrollingElement) document.scrollingElement.scrollTop = 0;
    };

    // Run immediately and again on the next frames, since Lenis/route content
    // can restore scroll after the first call.
    scrollTop();
    const raf1 = requestAnimationFrame(scrollTop);
    const raf2 = requestAnimationFrame(() => requestAnimationFrame(scrollTop));
    const t = setTimeout(() => ScrollTrigger.refresh(), 700);
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      clearTimeout(t);
    };
  }, [pathname]);

  return (
    <SmoothScroll>
      <a href="#main" className="skip-link">Saltar al contenido</a>
      <PageTransition />
      <Navbar />
      <main id="main" className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </SmoothScroll>
  );
};
