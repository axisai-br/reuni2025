import { useState } from 'react';
import { Calculator, HelpCircle, Star, Send, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const InteractiveSection = () => {
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [calculatorData, setCalculatorData] = useState({
    revenue: '',
    employees: '',
    turnover: ''
  });
  const [calculatorResult, setCalculatorResult] = useState(null);

  const quizQuestions = [
    {
      question: "Sua empresa possui políticas formais de inclusão para PCDs?",
      options: [
        { value: 3, text: "Sim, políticas abrangentes e bem implementadas" },
        { value: 2, text: "Sim, mas ainda em desenvolvimento" },
        { value: 1, text: "Políticas básicas apenas" },
        { value: 0, text: "Não possui políticas formais" }
      ]
    },
    {
      question: "Qual o percentual atual de PCDs na sua empresa?",
      options: [
        { value: 3, text: "Acima de 5%" },
        { value: 2, text: "Entre 2% e 5%" },
        { value: 1, text: "Menos de 2%" },
        { value: 0, text: "Não temos PCDs contratados" }
      ]
    },
    {
      question: "Sua empresa oferece treinamentos sobre inclusão?",
      options: [
        { value: 3, text: "Sim, treinamentos regulares para todos" },
        { value: 2, text: "Sim, para gestores e RH" },
        { value: 1, text: "Ocasionalmente" },
        { value: 0, text: "Não oferece treinamentos" }
      ]
    },
    {
      question: "Como está a acessibilidade física da sua empresa?",
      options: [
        { value: 3, text: "Totalmente acessível" },
        { value: 2, text: "Parcialmente acessível" },
        { value: 1, text: "Acessibilidade básica" },
        { value: 0, text: "Não é acessível" }
      ]
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Desenvolvedora de Software",
      company: "TechCorp",
      text: "Trabalhar em uma empresa inclusiva transformou minha carreira. Aqui posso contribuir com todo meu potencial.",
      rating: 5
    },
    {
      name: "João Santos",
      role: "Gerente de Projetos",
      company: "InnovaCorp",
      text: "A diversidade da nossa equipe trouxe perspectivas únicas que melhoraram nossos produtos significativamente.",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Analista Financeira",
      company: "FinanceMax",
      text: "O programa de mentoria me ajudou a crescer profissionalmente e me sinto verdadeiramente valorizada.",
      rating: 5
    }
  ];

  const handleQuizAnswer = (value) => {
    const newAnswers = { ...quizAnswers, [quizStep]: value };
    setQuizAnswers(newAnswers);
    
    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    }
  };

  const calculateQuizResult = () => {
    const total = Object.values(quizAnswers).reduce((sum, value) => sum + value, 0);
    const maxScore = quizQuestions.length * 3;
    const percentage = (total / maxScore) * 100;
    
    if (percentage >= 75) return { level: "Excelente", color: "text-green-support", message: "Sua empresa está no caminho certo para a inclusão!" };
    if (percentage >= 50) return { level: "Bom", color: "text-blue-support", message: "Há oportunidades de melhoria na inclusão." };
    if (percentage >= 25) return { level: "Regular", color: "text-orange-primary", message: "É importante investir mais em inclusão." };
    return { level: "Iniciante", color: "text-red-500", message: "Há muito espaço para crescer na inclusão." };
  };

  const calculateROI = () => {
    const revenue = parseFloat(calculatorData.revenue) || 0;
    const employees = parseInt(calculatorData.employees) || 0;

    const revenueIncrease = revenue * 1.6; // 1.6x mais receita (Pesquisa Empresas)
    const profitIncrease = revenue * 2.6; // 2.6x mais lucro líquido (Pesquisa Empresas)
    const productivityIncrease = employees * 0.25; // 25% mais produtividade (Pesquisa Empresas)

    const totalBenefit = revenueIncrease + profitIncrease + productivityIncrease;

    setCalculatorResult({
      revenueIncrease,
      profitIncrease,
      productivityIncrease,
      totalBenefit
    });
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizAnswers({});
  };

  return (
    <section className="py-20 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4 font-open-sans">
            <span className="text-orange-primary">Interaja</span> e Descubra
          </h2>
          <p className="text-xl text-gray-medium max-w-3xl mx-auto">
            Use nossas ferramentas interativas para avaliar sua empresa e calcular o potencial de retorno da inclusão.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Quiz */}
          <Card className="bg-white shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-bold text-gray-dark">
                <HelpCircle className="mr-2 h-6 w-6 text-orange-primary" />
                Sua Empresa Está Inclusiva?
              </CardTitle>
              <p className="text-gray-medium">
                Responda 4 perguntas rápidas e descubra o nível de inclusão da sua empresa.
              </p>
            </CardHeader>
            
            <CardContent>
              {Object.keys(quizAnswers).length < quizQuestions.length ? (
                <div className="space-y-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-medium">
                      Pergunta {quizStep + 1} de {quizQuestions.length}
                    </span>
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-orange-primary h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${((quizStep + 1) / quizQuestions.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-gray-dark mb-4">
                    {quizQuestions[quizStep].question}
                  </h3>
                  
                  <div className="space-y-2">
                    {quizQuestions[quizStep].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuizAnswer(option.value)}
                        className="w-full text-left p-3 border border-gray-200 rounded-lg hover:border-orange-primary hover:bg-orange-primary/5 transition-all duration-200 focus-visible"
                      >
                        {option.text}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center space-y-4">
                  <CheckCircle className="h-16 w-16 text-green-support mx-auto" />
                  <h3 className="text-xl font-bold text-gray-dark">Quiz Concluído!</h3>
                  
                  {(() => {
                    const result = calculateQuizResult();
                    return (
                      <div className="space-y-3">
                        <div className={`text-2xl font-bold ${result.color}`}>
                          Nível: {result.level}
                        </div>
                        <p className="text-gray-medium">{result.message}</p>
                        <Button 
                          onClick={resetQuiz}
                          variant="outline" 
                          className="mt-4"
                        >
                          Refazer Quiz
                        </Button>
                      </div>
                    );
                  })()}
                </div>
              )}
            </CardContent>
          </Card>

          {/* ROI Calculator */}
          <Card className="bg-white shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-bold text-gray-dark">
                <Calculator className="mr-2 h-6 w-6 text-blue-support" />
                Calculadora de ROI
              </CardTitle>
              <p className="text-gray-medium">
                Calcule o potencial retorno financeiro da inclusão para sua empresa.
              </p>
            </CardHeader>
            
            <CardContent>
              {!calculatorResult ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-dark mb-2">
                      Receita Anual (R$)
                    </label>
                    <Input
                      type="number"
                      placeholder="Ex: 10000000"
                      value={calculatorData.revenue}
                      onChange={(e) => setCalculatorData({...calculatorData, revenue: e.target.value})}
                      className="focus-visible"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-dark mb-2">
                      Número de Funcionários
                    </label>
                    <Input
                      type="number"
                      placeholder="Ex: 500"
                      value={calculatorData.employees}
                      onChange={(e) => setCalculatorData({...calculatorData, employees: e.target.value})}
                      className="focus-visible"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-dark mb-2">
                      Taxa de Turnover Atual (%)
                    </label>
                    <Input
                      type="number"
                      placeholder="Ex: 20"
                      value={calculatorData.turnover}
                      onChange={(e) => setCalculatorData({...calculatorData, turnover: e.target.value})}
                      className="focus-visible"
                    />
                  </div>
                  
                  <Button 
                    onClick={calculateROI}
                    className="w-full btn-primary focus-visible"
                    disabled={!calculatorData.revenue || !calculatorData.employees}
                  >
                    Calcular ROI
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-dark text-center mb-4">
                    Potencial de Retorno Anual
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-orange-primary/10 rounded-lg">
                      <span className="text-gray-dark">Aumento na Receita (1.6x)</span>
                      <span className="font-bold text-orange-primary">
                        R$ {calculatorResult.revenueIncrease.toLocaleString("pt-BR")}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-green-support/10 rounded-lg">
                      <span className="text-gray-dark">Aumento no Lucro (2.6x)</span>
                      <span className="font-bold text-green-support">
                        R$ {calculatorResult.profitIncrease.toLocaleString("pt-BR")}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-blue-support/10 rounded-lg">
                      <span className="text-gray-dark">Aumento na Produtividade (25%)</span>
                      <span className="font-bold text-blue-support">
                        R$ {calculatorResult.productivityIncrease.toLocaleString("pt-BR")}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center p-4 bg-gray-dark text-white rounded-lg">
                      <span className="font-bold">Benefício Total Anual</span>
                      <span className="text-xl font-bold">
                        R$ {calculatorResult.totalBenefit.toLocaleString('pt-BR')}
                      </span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => setCalculatorResult(null)}
                    variant="outline" 
                    className="w-full mt-4"
                  >
                    Nova Simulação
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Testimonials */}
        <Card className="bg-white shadow-lg border-0 mb-16">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-dark text-center">
              Depoimentos de Sucesso
            </CardTitle>
            <p className="text-gray-medium text-center">
              Histórias reais de profissionais PCDs e líderes que vivenciam a inclusão no dia a dia.
            </p>
          </CardHeader>
          
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="p-6 border border-gray-200 rounded-lg">
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-orange-primary fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-medium mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div>
                    <div className="font-semibold text-gray-dark">{testimonial.name}</div>
                    <div className="text-sm text-gray-medium">{testimonial.role}</div>
                    <div className="text-sm text-orange-primary">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact Form */}
        <Card className="bg-white shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-dark text-center">
              Fale Conosco
            </CardTitle>
            <p className="text-gray-medium text-center">
              Tem dúvidas ou quer saber mais sobre como implementar a inclusão na sua empresa? 
              Entre em contato conosco.
            </p>
          </CardHeader>
          
          <CardContent>
            <form className="space-y-4 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-dark mb-2">
                    Nome *
                  </label>
                  <Input placeholder="Seu nome completo" className="focus-visible" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-dark mb-2">
                    Email *
                  </label>
                  <Input type="email" placeholder="seu@email.com" className="focus-visible" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-dark mb-2">
                    Empresa
                  </label>
                  <Input placeholder="Nome da sua empresa" className="focus-visible" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-dark mb-2">
                    Telefone
                  </label>
                  <Input placeholder="(11) 99999-9999" className="focus-visible" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-dark mb-2">
                  Mensagem *
                </label>
                <Textarea 
                  placeholder="Conte-nos sobre seus desafios e objetivos com a inclusão..."
                  rows={4}
                  className="focus-visible"
                />
              </div>
              
              <Button className="w-full btn-primary focus-visible">
                <Send className="mr-2 h-4 w-4" />
                Enviar Mensagem
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default InteractiveSection;

