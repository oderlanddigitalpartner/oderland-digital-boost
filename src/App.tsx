import { useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";

// Import components
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import References from '@/components/References';
import Process from '@/components/Process';
import Packages from '@/components/Packages';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

const queryClient = new QueryClient();

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="min-h-screen bg-white">
      <Header onOpenModal={openModal} />
      <Hero onOpenModal={openModal} />
      <Services />
      <References />
      <Process />
      <Packages />
      <About />
      <FAQ />
      <Contact />
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-brand-800 mb-4">404 - Seite nicht gefunden</h1>
              <p className="text-gray-600 mb-6">Die angeforderte Seite existiert nicht.</p>
              <a href="/" className="btn-primary">Zur Startseite</a>
            </div>
          </div>} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
