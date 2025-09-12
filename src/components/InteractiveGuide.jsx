import { useState, useEffect } from 'react';
import { X, ChevronRight, HelpCircle, Lightbulb, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const InteractiveGuide = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [hasShown, setHasShown] = useState(false);

  const steps = [
    {
      title: "Bem-vindo! 👋",
      content: "Olá! Sou seu guia virtual. Vou te ajudar a descobrir como a inclusão pode transformar sua empresa.",
      action: "Começar Tour",
      target: null
    },
    {
      title: "Impacto Financeiro 💰",
      content: "Veja como empresas inclusivas geram 28% mais receita. Role para baixo para ver os dados!",
      action: "Ver Impacto",
      target: "#impacto"
    },
    {
      title: "Casos Reais 🏢",
      content: "Conheça empresas como Microsoft e Amazon que transformaram seus resultados com inclusão.",
      action: "Ver Casos",
      target: "#casos"
    },
    {
      title: "Teste sua Empresa 📊",
      content: "Faça nosso quiz rápido e descubra o nível de inclusão da sua empresa!",
      action: "Fazer Quiz",
      target: "#quiz"
    },
    {
      title: "Calcule seu ROI 🧮",
      content: "Use nossa calculadora para descobrir o potencial retorno da inclusão para sua empresa.",
      action: "Calcular",
      target: "#calculadora"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [hasShown]);

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
    if (step.target) {
      const element = document.querySelector(step.target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    handleNext();
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 bg-orange-primary hover:bg-orange-primary/90 shadow-lg animate-pulse"
        aria-label="Abrir guia interativo"
      >
        <HelpCircle className="h-6 w-6" />
      </Button>
    );
  }

  const currentStepData = steps[currentStep];

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/20 z-40" onClick={handleClose} />
      
      {/* Guide Card */}
      <Card className="fixed bottom-6 right-6 z-50 w-80 shadow-2xl animate-in slide-in-from-bottom-4">
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

          <h3 className="font-bold text-gray-dark mb-2">
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

