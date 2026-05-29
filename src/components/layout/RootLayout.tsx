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
    const t = setTimeout(() => ScrollTrigger.refresh(), 700);
    return () => clearTimeout(t);
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
    </SmoothScroll>
  );
};
