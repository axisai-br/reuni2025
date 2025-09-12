import { CheckCircle, ArrowRight, BarChart3, Users, Target, TrendingUp, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from './ScrollReveal';
import AnimatedCounter from './AnimatedCounter';

const MethodologySection = () => {
  const phases = [
    {
      id: 1,
      title: "Diagnóstico e Planejamento",
      subtitle: "Imersão",
      description: "Avaliação 360° da maturidade em D&I e criação de plano de ação personalizado",
      duration: "2-4 semanas",
      deliverables: ["Relatório de Diagnóstico", "Plano de Ação Estratégico"],
      icon: Target,
      color: "orange"
    },
    {
      id: 2,
      title: "Capacitação e Desenvolvimento",
      subtitle: "Engajamento",
      description: "Desenvolvimento de lideranças inclusivas e estruturação de programas de mentoria",
      duration: "4-8 semanas",
      deliverables: ["Workshops de Liderança", "Programa de Mentoria", "Treinamentos"],
      icon: Users,
      color: "blue"
    },
    {
      id: 3,
      title: "Implementação e Acompanhamento",
      subtitle: "Execução",
      description: "Suporte na execução do plano e acompanhamento contínuo dos PCDs",
      duration: "8-12 semanas",
      deliverables: ["Relatórios de Progresso", "PDIs Atualizados", "Sessões de Coaching"],
      icon: TrendingUp,
      color: "green"
    },
    {
      id: 4,
      title: "Avaliação e Otimização",
      subtitle: "Resultados",
      description: "Análise de KPIs, demonstração do ROI e planejamento de próximos passos",
      duration: "2-3 semanas",
      deliverables: ["Relatório de Impacto e ROI", "Plano de Otimização"],
      icon: Award,
      color: "purple"
    }
  ];

  const kpis = [
    {
      category: "Retenção e Engajamento (Pesquisa PCDs)",
      metrics: [
        { name: "Taxa de Emprego Formal PCDs", target: "↑ 52.8%", description: "PCDs empregados com carteira assinada" },
        { name: "Tempo Médio de Permanência", target: "↑ 25% (1-2 anos)", description: "PCDs que permanecem de 1 a 2 anos na empresa" },
        { name: "Motivo de Saída (Salário/Carreira)", target: "↓ 69.4%", description: "PCDs que saem por salário baixo ou falta de plano de carreira" }
      ],
      icon: Users,
      color: "orange"
    },
    {
      category: "Desenvolvimento e Produtividade (Pesquisa Empresas)",
      metrics: [
        { name: "Aumento de Produtividade", target: "↑ 25%", description: "Empresas com PCDs atingem produtividade acima da média" },
        { name: "Maior Lucro Líquido", target: "↑ 2.6x", description: "Empresas inclusivas vs. não inclusivas" },
        { name: "Maior Receita", target: "↑ 1.6x", description: "Empresas inclusivas vs. não inclusivas" }
      ],
      icon: TrendingUp,
      color: "blue"
    },
    {
      category: "Impacto e Clima Organizacional (Pesquisa Empresas)",
      metrics: [
        { name: "Redução de Absenteísmo/Turnover", target: "↓", description: "PCDs tendem a ter menor rotatividade e ausências" },
        { name: "Avaliações Positivas (Glassdoor)", target: "↑ 2x", description: "Empresas líderes em acessibilidade" },
        { name: "Inovação e Qualidade", target: "↑", description: "Equipes diversas (inclusive PCDs) estimulam soluções criativas" }
      ],
      icon: BarChart3,
      color: "green"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título da Seção */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nossa <span className="text-orange-primary">Metodologia</span> de 
              <span className="text-blue-primary"> Transformação</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Um processo estruturado em 4 fases que garante resultados mensuráveis 
              e sustentáveis para empresas de pequeno e médio porte.
            </p>
          </div>
        </ScrollReveal>

        {/* Fases da Metodologia */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {phases.map((phase, index) => (
              <ScrollReveal key={phase.id} direction="up" delay={0.2 + index * 0.1}>
                <div className="relative bg-white rounded-xl shadow-lg p-6 border-t-4 border-orange-primary hover:shadow-xl transition-shadow duration-300">
                  {/* Número da Fase */}
                  <div className="absolute -top-4 left-6 bg-orange-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    {phase.id}
                  </div>
                  
                  {/* Ícone */}
                  <div className={`bg-${phase.color}-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4 mt-2`}>
                    <phase.icon className={`h-6 w-6 text-${phase.color}-primary`} />
                  </div>
                  
                  {/* Conteúdo */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{phase.title}</h3>
                  <div className="text-sm text-orange-primary font-semibold mb-3">{phase.subtitle}</div>
                  <p className="text-gray-600 text-sm mb-4">{phase.description}</p>
                  
                  {/* Duração */}
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Clock className="h-4 w-4 mr-2" />
                    {phase.duration}
                  </div>
                  
                  {/* Entregáveis */}
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-gray-700">Entregáveis:</div>
                    {phase.deliverables.map((deliverable, idx) => (
                      <div key={idx} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {deliverable}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* KPIs de Sucesso */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                KPIs de <span className="text-orange-primary">Sucesso</span> Mensuráveis
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Metodologia validada por MIT, Harvard e Forbes com resultados comprovados
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {kpis.map((category, index) => (
                <ScrollReveal key={index} direction="up" delay={0.2 + index * 0.1}>
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                    {/* Cabeçalho da Categoria */}
                    <div className="flex items-center mb-6">
                      <div className={`bg-${category.color}-primary/10 rounded-full w-10 h-10 flex items-center justify-center mr-3`}>
                        <category.icon className={`h-5 w-5 text-${category.color}-primary`} />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900">{category.category}</h4>
                    </div>
                    
                    {/* Métricas */}
                    <div className="space-y-4">
                      {category.metrics.map((metric, idx) => (
                        <div key={idx} className="border-l-3 border-gray-200 pl-4">
                          <div className="flex items-center justify-between mb-1">
                            <div className="text-sm font-semibold text-gray-700">{metric.name}</div>
                            <div className={`text-lg font-bold text-${category.color}-primary`}>{metric.target}</div>
                          </div>
                          <div className="text-xs text-gray-500">{metric.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Call to Action */}
        <ScrollReveal direction="up" delay={0.6}>
          <div className="text-center bg-gradient-to-r from-orange-primary to-orange-secondary rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Pronto para Transformar sua Empresa?
            </h3>
            <p className="text-lg text-orange-100 mb-6 max-w-2xl mx-auto">
              Comece com um diagnóstico gratuito e descubra como nossa metodologia 
              pode gerar resultados mensuráveis para seus talentos PCD.
            </p>
            <Button size="lg" className="bg-white text-orange-primary hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Solicitar Diagnóstico Gratuito
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default MethodologySection;

