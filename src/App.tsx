import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { RootLayout } from "@/components/layout/RootLayout";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Placeholder from "./pages/Placeholder.tsx";
import ProjectDetail from "./pages/proyectos/ProjectDetail.tsx";
import Nosotros from "./pages/nosotros/Nosotros.tsx";
import Equipo from "./pages/nosotros/Equipo.tsx";
import Manifiesto from "./pages/nosotros/Manifiesto.tsx";
import Servicios from "./pages/servicios/Servicios.tsx";
import ServiceDetail from "./pages/servicios/ServiceDetail.tsx";
import Careers from "./pages/careers/Careers.tsx";
import Cultura from "./pages/careers/Cultura.tsx";
import Posiciones from "./pages/careers/Posiciones.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Index />} />

            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/nosotros/equipo" element={<Equipo />} />
            <Route path="/nosotros/manifiesto" element={<Manifiesto />} />

            <Route path="/servicios" element={<Servicios />} />
            <Route path="/servicios/:slug" element={<ServiceDetail />} />

            <Route path="/proyectos" element={<Placeholder />} />
            <Route path="/proyectos/:slug" element={<ProjectDetail />} />

            <Route path="/careers" element={<Careers />} />
            <Route path="/careers/cultura" element={<Cultura />} />
            <Route path="/careers/posiciones-abiertas" element={<Posiciones />} />

            <Route path="/contacto" element={<Placeholder />} />
            <Route path="/contacto/buenos-aires" element={<Placeholder />} />
            <Route path="/contacto/brief" element={<Placeholder />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
