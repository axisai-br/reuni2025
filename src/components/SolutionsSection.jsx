import { GraduationCap, Users, Accessibility, Handshake, CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ScrollReveal from './ScrollReveal';

const SolutionsSection = () => {
  const benefits = [
    {
      icon: GraduationCap,
      title: 'Desenvolvimento de Lideranças Inclusivas',
      description: 'Capacitação de líderes para criar ambientes de trabalho verdadeiramente inclusivos e produtivos.',
      details: [
        'Workshops e treinamentos imersivos para gestores',
        'Sessões de coaching executivo focadas em D&I',
        'Ferramentas para identificar e eliminar vieses inconscientes',
        'Criação de planos de ação para lideranças'
      ],
      color: 'text-orange-primary',
      bgColor: 'bg-orange-primary-subtle'
    },
    {
      icon: Users,
      title: 'Programas de Mentoria e Acompanhamento de Carreira',
      description: 'Apoio contínuo para o desenvolvimento profissional e pessoal de talentos PCDs.',
      details: [
        'Mentoria individualizada para PCDs com profissionais experientes',
        'Criação de Planos de Desenvolvimento Individual (PDIs) personalizados',
        'Acompanhamento de progresso e feedback contínuo',
        'Workshops de soft skills e hard skills para PCDs'
      ],
      color: 'text-green-support',
      bgColor: 'bg-green-support-subtle'
    },
    {
      icon: Accessibility,
      title: 'Adequação de Acessibilidade e Tecnologia Assistiva',
      description: 'Garantia de um ambiente físico e digital acessível para todos os colaboradores.',
      details: [
        'Auditoria de acessibilidade em espaços físicos e plataformas digitais',
        'Recomendação e implementação de tecnologias assistivas (TA)',
        'Treinamento para uso de TA e ferramentas de acessibilidade',
        'Consultoria para design universal e inclusivo'
      ],
      color: 'text-blue-support',
      bgColor: 'bg-blue-support-subtle'
    },
    {
      icon: Handshake,
      title: 'Cultura e Comunicação Inclusiva',
      description: 'Transformação da cultura organizacional para promover um ambiente de respeito e valorização da diversidade.',
      details: [
        'Campanhas de sensibilização e conscientização para toda a empresa',
        'Desenvolvimento de guias de comunicação inclusiva',
        'Criação de comitês de diversidade e inclusão',
        'Eventos e palestras sobre temas de D&I'
      ],
      color: 'text-orange-primary',
      bgColor: 'bg-orange-primary-subtle'
    }
  ];

  const roiMetrics = [
    {
      stat: '1.6x',
      description: 'Mais receita em empresas inclusivas',
      source: 'Pesquisa Empresas (2018-2023)'
    },
    {
      stat: '2.6x',
      description: 'Mais lucro líquido em empresas inclusivas',
      source: 'Pesquisa Empresas (2018-2023)'
    },
    {
      stat: '25%',
      description: 'Mais probabilidade de atingir produtividade acima da média',
      source: 'Pesquisa Empresas'
    }
  ];

  const successMetrics = [
    {
      stat: '52.8%',
      description: 'PCDs empregados formalmente',
      color: 'text-orange-primary'
    },
    {
      stat: '36.1%',
      description: 'PCDs com Superior Completo',
      color: 'text-green-support'
    },
    {
      stat: '58.3%',
      description: 'PCDs com Limitação Física/Motora',
      color: 'text-blue-support'
    },
    {
      stat: '36.1%',
      description: 'Saída de PCDs por Salário Baixo',
      color: 'text-orange-primary'
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4 font-open-sans">
              O <span className="text-orange-primary">Benefício</span> que Transforma sua Empresa
            </h2>
            <p className="text-xl text-gray-medium max-w-3xl mx-auto">
              Nossa solução vai além do compliance, capacitando sua empresa a reter, desenvolver e 
              promover talentos PCD, gerando impacto real e mensurável.
            </p>
          </div>
        </ScrollReveal>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <ScrollReveal key={index} direction={index % 2 === 0 ? "left" : "right"} delay={0.3 + index * 0.1}>
                <Card className="card-hover bg-white border-0 shadow-lg">
                  <CardHeader>
                    <div className={`w-16 h-16 ${benefit.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className={`h-8 w-8 ${benefit.color}`} />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-dark text-center">
                      {benefit.title}
                    </CardTitle>
                    <p className="text-gray-medium text-center">
                      {benefit.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent>
                    <h4 className="font-semibold text-gray-dark mb-3">O que sua empresa ganha:</h4>
                    <ul className="space-y-2">
                      {benefit.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-medium">
                          <CheckCircle className={`w-4 h-4 ${benefit.color} mr-2 mt-0.5 flex-shrink-0`} />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>

        {/* ROI Metrics */}
        <ScrollReveal direction="up" delay={0.5}>
          <Card className="bg-gradient-to-r from-orange-primary-subtle to-blue-support-subtle border-0 shadow-lg mb-16">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-gray-dark">
                Retorno sobre o Investimento (ROI) da Inclusão
              </CardTitle>
              <p className="text-gray-medium">
                Dados comprovados que demonstram o impacto financeiro positivo da inclusão de PCDs.
              </p>
            </CardHeader>
            
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-8">
                {roiMetrics.map((metric, index) => (
                  <div key={index} className="space-y-2">
                    <div className="text-3xl font-bold text-orange-primary mb-2">
                      {metric.stat}
                    </div>
                    <div className="text-sm text-gray-medium">
                      {metric.description}
                    </div>
                    <div className="text-xs text-gray-500">
                      {metric.source}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <Button className="btn-primary px-8 py-3 focus-visible">
                  Fale com um Especialista
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* Success Metrics */}
        <ScrollReveal direction="up" delay={0.6}>
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-dark text-center mb-8">
              Métricas de Sucesso da Nossa Metodologia
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {successMetrics.map((metric, index) => (
                <div key={index} className="text-center p-4 border border-gray-200 rounded-lg">
                  <div className={`text-3xl font-bold ${metric.color} mb-2`}>
                    {metric.stat}
                  </div>
                  <div className="text-sm text-gray-medium">
                    {metric.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Call to Action */}
        <ScrollReveal direction="up" delay={0.7}>
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-gray-dark mb-4">
              Pronto para Transformar sua Empresa?
            </h3>
            <p className="text-lg text-gray-medium mb-8 max-w-2xl mx-auto">
              Comece hoje mesmo a jornada de inclusão e descubra como sua empresa 
              pode se beneficiar dessa estratégia comprovadamente eficaz.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary px-8 py-3 focus-visible">
                Solicitar Diagnóstico Gratuito
              </Button>
              <Button variant="outline" className="px-8 py-3 focus-visible">
                Baixar Guia Completo
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SolutionsSection;

