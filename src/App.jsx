import './App.css';
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

function App() {
  return (
    <div className="min-h-screen bg-white font-open-sans relative">
      <FloatingElements />
      <Header />
      <main>
        <HeroSection />
        <BenefitSection />
        <MethodologySection />
        <ValidationSection />
        <CasesSection />
        <DataSection />
        <InteractiveSection />
      </main>
      <Footer />
      <InteractiveGuide />
    </div>
  );
}

export default App;
