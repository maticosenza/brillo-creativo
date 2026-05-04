import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { RootLayout } from "@/components/layout/RootLayout";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Placeholder from "./pages/Placeholder.tsx";

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

            <Route path="/nosotros" element={<Placeholder />} />
            <Route path="/nosotros/equipo" element={<Placeholder />} />
            <Route path="/nosotros/manifiesto" element={<Placeholder />} />

            <Route path="/servicios" element={<Placeholder />} />
            <Route path="/servicios/produccion-integral" element={<Placeholder />} />
            <Route path="/servicios/activaciones-de-marca" element={<Placeholder />} />
            <Route path="/servicios/eventos-corporativos" element={<Placeholder />} />
            <Route path="/servicios/lanzamientos" element={<Placeholder />} />

            <Route path="/proyectos" element={<Placeholder />} />
            <Route path="/proyectos/:slug" element={<Placeholder />} />

            <Route path="/careers" element={<Placeholder />} />
            <Route path="/careers/cultura" element={<Placeholder />} />
            <Route path="/careers/posiciones-abiertas" element={<Placeholder />} />

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
