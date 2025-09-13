import { useState, useEffect } from 'react';
import { X, ChevronRight, HelpCircle, Lightbulb, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLocation, useNavigate } from 'react-router-dom';

const InteractiveGuide = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [hasShown, setHasShown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const steps = [
    {
      title: "Bem-vindo! 👋",
      content: "Olá! Sou seu guia virtual. Vou te ajudar a descobrir como a inclusão pode transformar sua empresa.",
      action: "Começar Tour",
      target: null
    },
    {
      title: "Impacto Financeiro 💰",
      content: "Veja como empresas inclusivas geram 28% mais receita.",
      action: "Ver Impacto",
      route: "/impacto",
      target: "#impacto"
    },
    {
      title: "Casos Reais 🏢",
      content: "Conheça empresas como Microsoft e Amazon que transformaram seus resultados com inclusão.",
      action: "Ver Casos",
      route: "/casos",
      target: "#casos"
    },
    {
      title: "Teste sua Empresa 📊",
      content: "Faça nosso quiz rápido e descubra o nível de inclusão da sua empresa!",
      action: "Fazer Quiz",
      route: "/",
      target: "#quiz"
    },
    {
      title: "Calcule seu ROI 🧮",
      content: "Use nossa calculadora para descobrir o potencial retorno da inclusão para sua empresa.",
      action: "Calcular",
      route: "/",
      target: "#calculadora"
    }
  ];

  useEffect(() => {
    const shown = localStorage.getItem('tourHasShown') === '1';
    if (shown) {
      setHasShown(true);
      return;
    }
    const timer = setTimeout(() => {
      if (!hasShown) {
        setIsOpen(true);
        setHasShown(true);
        localStorage.setItem('tourHasShown', '1');
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [hasShown]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsOpen(false);
      setCurrentStep(0);
    }
  };

  const handleAction = () => {
    const step = steps[currentStep];
    const goNext = () => handleNext();

    // Navigate to a route if needed
    if (step.route && location.pathname !== step.route) {
      navigate(step.route);
      // wait for route change and DOM paint
      setTimeout(() => {
        if (step.target) {
          const el = document.querySelector(step.target);
          if (el) {
            el.classList.add('tour-highlight');
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setTimeout(() => el.classList.remove('tour-highlight'), 1600);
          }
        }
        goNext();
      }, 250);
      return;
    }

    // Same route: scroll to target if provided
    if (step.target) {
      const el = document.querySelector(step.target);
      if (el) {
        el.classList.add('tour-highlight');
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setTimeout(() => el.classList.remove('tour-highlight'), 1600);
      }
    }
    goNext();
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bottom-safe right-safe z-50 rounded-full w-14 h-14 sm:h-12 sm:w-auto sm:px-4 bg-orange-primary hover:bg-orange-primary/90 shadow-2xl ring-4 ring-orange-primary/30 animate-pulse"
        aria-label="Abrir guia interativo"
      >
        <HelpCircle className="h-6 w-6" />
        <span className="hidden sm:inline ml-2 font-semibold">Tour</span>
      </Button>
    );
  }

  const currentStepData = steps[currentStep];

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/20 z-40" onClick={handleClose} />
      
      {/* Guide Card */}
      <Card className="fixed bottom-6 right-6 bottom-safe right-safe z-50 w-80 shadow-2xl animate-in slide-in-from-bottom-4" role="dialog" aria-modal="true">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-primary rounded-full flex items-center justify-center">
                <MessageCircle className="h-4 w-4 text-white" />
              </div>
              <div className="text-sm text-gray-medium">
                {currentStep + 1} de {steps.length}
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <h3 className="font-bold text-gray-dark mb-2" id="tour-title">
            {currentStepData.title}
          </h3>
          
          <p className="text-gray-medium mb-4 text-sm">
            {currentStepData.content}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex space-x-1">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentStep ? 'bg-orange-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={handleAction}
              className="btn-primary text-sm px-4 py-2"
              autoFocus
            >
              {currentStepData.action}
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default InteractiveGuide;

