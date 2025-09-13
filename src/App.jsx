import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BenefitSection from './components/BenefitSection';
import MethodologySection from './components/MethodologySection';
import ValidationSection from './components/ValidationSection';
import CasesSection from './components/CasesSection';
import DataSection from './components/DataSection';
import InteractiveSection from './components/InteractiveSection';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';
import InteractiveGuide from './components/InteractiveGuide';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ImpactSection from './components/ImpactSection';
import SolutionsSection from './components/SolutionsSection';
import ScrollToTop from './components/ScrollToTop';
import PartnerCarousel from './components/PartnerCarousel';

function HomePage() {
  return (
    <>
      <HeroSection />
      <PartnerCarousel />
      <InteractiveSection />
    </>
  );
}

function ImpactoPage() {
  return (
    <>
      <ImpactSection />
    </>
  );
}

function CasosPage() {
  return (
    <>
      <CasesSection />
    </>
  );
}

function DadosPage() {
  return (
    <>
      <DataSection />
    </>
  );
}

function SolucoesPage() {
  return (
    <>
      <SolutionsSection />
    </>
  );
}

function ContatoPage() {
  return (
    <section className="py-20 bg-gray-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4 font-open-sans">
          Fale com a nossa equipe
        </h2>
        <p className="text-lg text-gray-medium mb-8">
          Envie uma mensagem e retornaremos em até 1 dia útil.
        </p>
        <div className="flex-responsive justify-center">
          <a href="https://wa.me/5549988185714" target="_blank" rel="noopener noreferrer" className="btn-primary">
            WhatsApp: +55 49 98818-5714
          </a>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white font-open-sans relative overflow-x-hidden">
        <ScrollToTop />
        <FloatingElements />
        <Header />
        <main className="pt-16 sm:pt-20 pt-safe relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/impacto" element={<ImpactoPage />} />
            <Route path="/casos" element={<CasosPage />} />
            <Route path="/dados" element={<DadosPage />} />
            <Route path="/metodologia" element={<SolucoesPage />} />
            <Route path="/solucoes" element={<SolucoesPage />} />
            <Route path="/contato" element={<ContatoPage />} />
          </Routes>
        </main>
        <Footer />
        <InteractiveGuide />
      </div>
    </BrowserRouter>
  );
}

export default App;
