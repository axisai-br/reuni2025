import { CheckCircle, TrendingUp, Users, Award, Target, Zap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import AnimatedCounter from './AnimatedCounter';

const BenefitSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              O Benefício que Transforma 
              <span className="text-orange-primary"> Pequenas e Médias Empresas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossa metodologia de desenvolvimento de carreira inclusiva é especialmente desenhada 
              para empresas de pequeno e médio porte, gerando resultados mensuráveis e sustentáveis.
            </p>
          </div>
        </ScrollReveal>

        {/* Benefícios por Segmento */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Pequenas Empresas */}
          <ScrollReveal direction="left" delay={0.3}>
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-orange-primary">
              <div className="flex items-center mb-6">
                <Zap className="h-8 w-8 text-orange-primary mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Pequenas Empresas (10-99 funcionários)</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Construa uma cultura inclusiva desde o início e prepare-se para crescer de forma sustentável.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Diagnóstico de maturidade simplificado e prático</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Treinamentos focados em lideranças emergentes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Mentoria para primeiros colaboradores PCD</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Políticas de RH inclusivas desde o início</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Médias Empresas */}
          <ScrollReveal direction="right" delay={0.3}>
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-primary">
              <div className="flex items-center mb-6">
                <Award className="h-8 w-8 text-blue-primary mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Médias Empresas (100-999 funcionários)</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Otimize sua estratégia de D&I e transforme PCDs em líderes de alta performance.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Avaliação 360° de maturidade em D&I</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Programas de liderança inclusiva estruturados</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Programas de mentoria corporativa escaláveis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">KPIs avançados e relatórios de impacto</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* KPIs de Sucesso */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="bg-gradient-to-r from-orange-primary to-orange-secondary rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Resultados Comprovados por KPIs
              </h3>
              <p className="text-orange-100 text-lg">
                Metodologia validada por MIT, Harvard e Forbes
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  <AnimatedCounter end={25} suffix="%" />
                </div>
                <div className="text-sm text-orange-100">
                  PCDs com 1-2 anos na empresa
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  <AnimatedCounter end={69} suffix="%" />
                </div>
                <div className="text-sm text-orange-100">
                  Saída por Salário/Carreira
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  <AnimatedCounter end={28} suffix="%" />
                </div>
                <div className="text-sm text-orange-100">
                  Mais Receita em Empresas Inclusivas
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  <AnimatedCounter end={25} suffix="%" />
                </div>
                <div className="text-sm text-orange-100">
                  Aumento de Produtividade
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Diferencial Competitivo */}
        <ScrollReveal direction="up" delay={0.5}>
          <div className="mt-16 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Por que Escolher Nossa Metodologia?
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-orange-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-orange-primary" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Foco em Resultados</h4>
                <p className="text-gray-600">
                  Não vendemos produtos, entregamos benefícios mensuráveis para seu negócio.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-primary" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Expertise Humana</h4>
                <p className="text-gray-600">
                  Especialistas em D&I com metodologia validada por instituições renomadas.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-green-primary" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Escalabilidade</h4>
                <p className="text-gray-600">
                  Solução que cresce com sua empresa, de pequeno a médio porte.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BenefitSection;

