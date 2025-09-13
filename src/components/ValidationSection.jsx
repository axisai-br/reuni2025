import { Quote, ExternalLink, Award, BookOpen, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from './ScrollReveal';
import bannerValidation from '@/assets/images/cadeiranteOlhandoParaCamera.jpg';

const ValidationSection = () => {
  const validations = [
    {
      institution: "MIT",
      fullName: "Massachusetts Institute of Technology",
      logo: "🎓",
      color: "blue",
      finding: "Inclusive hiring practices and workplace accessibility are fundamental for building better teams and driving innovation.",
      quote: "Research shows that having employees with disabilities in its workforce can build a firm's competitive advantage in four ways.",
      source: "MIT Sloan Management Review",
      insight: "Empresas que investem em práticas de contratação inclusiva e acessibilidade no local de trabalho constroem equipes mais fortes e inovadoras.",
      link: "#"
    },
    {
      institution: "Harvard Business Review",
      fullName: "Harvard Business School",
      logo: "📚",
      color: "red",
      finding: "88% of employees with invisible disabilities choose not to disclose it at work to avoid stigma and discrimination.",
      quote: "Even when disabled employees demonstrate the same skills and behaviors as their nondisabled peers, their performance is often rated lower.",
      source: "Harvard Business Review, 2023",
      insight: "A criação de ambientes verdadeiramente inclusivos é essencial para que PCDs possam prosperar e contribuir plenamente.",
      link: "#"
    },
    {
      institution: "Forbes",
      fullName: "Forbes Business Magazine",
      logo: "💼",
      color: "green",
      finding: "Providing low cost tools, technology and coaching for disabled people has a net benefit on productivity and growth for their careers.",
      quote: "Research shows that disabled people have higher levels of motivation, innovation, loyalty, problem-solving skills, and the ability to identify creative solutions.",
      source: "Forbes, 2025",
      insight: "Investir no desenvolvimento de carreira de PCDs através de mentoria e coaching gera retornos significativos em produtividade e inovação.",
      link: "#"
    }
  ];

  const researchHighlights = [
    {
      stat: "1.6x",
      description: "Mais receita em empresas inclusivas",
      source: "Pesquisa Empresas (2018-2023)"
    },
    {
      stat: "2.6x",
      description: "Mais lucro líquido em empresas inclusivas",
      source: "Pesquisa Empresas (2018-2023)"
    },
    {
      stat: "25%",
      description: "Mais probabilidade de atingir produtividade acima da média",
      source: "Pesquisa Empresas"
    },
    {
      stat: "52.8%",
      description: "PCDs empregados formalmente",
      source: "Pesquisa PCDs"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${bannerValidation})` }} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Título da Seção */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Metodologia <span className="text-orange-primary">Validada</span> por 
              <span className="text-blue-primary"> Instituições Renomadas</span>
            </h2>
            <p className="subtitle text-gray-300 max-w-3xl mx-auto">
              Nossa abordagem é fundamentada em pesquisas e insights das principais 
              instituições acadêmicas e publicações de negócios do mundo.
            </p>
          </div>
        </ScrollReveal>

        {/* Validações por Instituição */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {validations.map((validation, index) => (
            <ScrollReveal key={index} direction="up" delay={0.3 + index * 0.1}>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                {/* Cabeçalho da Instituição */}
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-3">{validation.logo}</div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{validation.institution}</h3>
                    <p className="text-sm text-gray-400">{validation.fullName}</p>
                  </div>
                </div>

                {/* Descoberta Principal */}
                <div className="mb-4">
                  <div className="flex items-start mb-3">
                    <Award className={`h-5 w-5 text-${validation.color}-400 mr-2 mt-0.5 flex-shrink-0`} />
                    <p className="text-sm text-gray-300 font-medium">{validation.finding}</p>
                  </div>
                </div>

                {/* Citação */}
                <div className="bg-white/5 rounded-lg p-4 mb-4 border-l-3 border-orange-primary">
                  <Quote className="h-4 w-4 text-orange-primary mb-2" />
                  <p className="text-sm text-gray-200 italic mb-2">"{validation.quote}"</p>
                  <p className="text-xs text-gray-400">— {validation.source}</p>
                </div>

                {/* Insight para Negócios */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-orange-primary mb-2">Aplicação Prática:</h4>
                  <p className="text-sm text-gray-300">{validation.insight}</p>
                </div>

                {/* Link para Pesquisa */}
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full bg-transparent border-white/20 text-white hover:bg-white/10"
                >
                  Ver Pesquisa Completa
                  <ExternalLink className="ml-2 h-3 w-3" />
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Destaques de Pesquisa */}
        <ScrollReveal direction="up" delay={0.6}>
          <div className="bg-gradient-to-r from-orange-primary/20 to-blue-primary/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Dados que <span className="text-orange-primary">Comprovam</span> o Impacto
              </h3>
              <p className="text-lg text-gray-300">
                Resultados baseados em pesquisas acadêmicas e estudos de caso reais
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {researchHighlights.map((highlight, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-orange-primary mb-2">
                    {highlight.stat}
                  </div>
                  <div className="text-sm text-gray-300 mb-1">
                    {highlight.description}
                  </div>
                  <div className="text-xs text-gray-400">
                    {highlight.source}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Credibilidade Científica */}
        <ScrollReveal direction="up" delay={0.7}>
          <div className="mt-16 text-center">
            <div className="flex items-center justify-center mb-6">
              <BookOpen className="h-6 w-6 text-orange-primary mr-3" />
              <h3 className="text-xl font-bold">Base Científica Sólida</h3>
            </div>
            
            <p className="text-gray-300 max-w-3xl mx-auto mb-8">
              Nossa metodologia não é baseada apenas em experiência prática, mas fundamentada 
              em décadas de pesquisa acadêmica sobre inclusão, desenvolvimento de carreira e 
              gestão de diversidade nas organizações.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <TrendingUp className="h-6 w-6 text-blue-primary mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Pesquisa Longitudinal</h4>
                <p className="text-sm text-gray-400">
                  Estudos de longo prazo sobre desenvolvimento de carreira inclusiva
                </p>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <Award className="h-6 w-6 text-green-primary mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Validação Empírica</h4>
                <p className="text-sm text-gray-400">
                  Resultados comprovados em múltiplos setores e tamanhos de empresa
                </p>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <BookOpen className="h-6 w-6 text-orange-primary mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Revisão por Pares</h4>
                <p className="text-sm text-gray-400">
                  Metodologia revisada e validada por especialistas em D&I
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ValidationSection;

