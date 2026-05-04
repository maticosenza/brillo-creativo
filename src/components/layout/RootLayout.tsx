import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { SmoothScroll } from "./SmoothScroll";
import { CustomCursor } from "./CustomCursor";
import { PageTransition } from "./PageTransition";

export const RootLayout = () => {
  return (
    <SmoothScroll>
      <a href="#main" className="skip-link">Saltar al contenido</a>
      <CustomCursor />
      <PageTransition />
      <Navbar />
      <main id="main" className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </SmoothScroll>
  );
};
