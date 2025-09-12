import { Building2, Users, TrendingUp, Award, CheckCircle, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CasesSection = () => {
  const cases = [
    {
      company: 'Accenture',
      logo: '🏢',
      employees: '16.000 PCDs',
      result: 'Crescimento e Inovação',
      description: 'Programa global de inclusão que transformou a cultura organizacional',
      highlights: ['Crescimento sustentável', 'Maior inovação', 'Cultura inclusiva'],
      color: 'border-orange-primary'
    },
    {
      company: 'Microsoft',
      logo: '💻',
      employees: 'Milhares de PCDs',
      result: 'Xbox Adaptive Controller',
      description: 'Produtos acessíveis que atraem talentos diversos e expandem mercados',
      highlights: ['Produtos inovadores', 'Talentos diversos', 'Novos mercados'],
      color: 'border-blue-support'
    },
    {
      company: 'Walgreens',
      logo: '🏪',
      employees: '50% PCDs em centros',
      result: '20% Mais Produtividade',
      description: 'Centros de distribuição com 50% de colaboradores PCDs superam metas',
      highlights: ['20% mais produtividade', 'Metas superadas', 'Modelo replicável'],
      color: 'border-green-support'
    },
    {
      company: 'Amazon',
      logo: '📦',
      employees: 'Programa global',
      result: '37% Mais Qualidade',
      description: 'Qualidade 37% superior e 100% de segurança em operações inclusivas',
      highlights: ['37% mais qualidade', '100% segurança', 'Eficiência operacional'],
      color: 'border-orange-primary'
    },
    {
      company: 'SAP',
      logo: '⚙️',
      employees: 'Autism at Work',
      result: '90% Retenção',
      description: 'Programa especializado em autismo com altíssima taxa de retenção',
      highlights: ['90% retenção', 'Especialização', 'Programa modelo'],
      color: 'border-blue-support'
    },
    {
      company: 'Unilever',
      logo: '🧴',
      employees: 'Meta: 5% PCDs até 2025',
      result: 'Foco em Acessibilidade',
      description: 'Compromisso global com meta ambiciosa e foco em acessibilidade',
      highlights: ['Meta 5% até 2025', 'Compromisso global', 'Acessibilidade total'],
      color: 'border-green-support'
    }
  ];

  return (
    <section id="casos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4 font-open-sans">
            <span className="text-orange-primary">Casos de Sucesso</span> Globais
          </h2>
          <p className="text-xl text-gray-medium max-w-3xl mx-auto">
            Empresas líderes mundiais que transformaram seus resultados através da inclusão de pessoas com deficiência.
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {cases.map((case_item, index) => (
            <Card key={index} className={`card-hover bg-white border-2 ${case_item.color} shadow-lg`}>
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-3">{case_item.logo}</div>
                <CardTitle className="text-xl font-bold text-gray-dark mb-2">
                  {case_item.company}
                </CardTitle>
                <div className="flex flex-col gap-2">
                  <Badge variant="outline" className="text-xs">
                    <Users className="w-3 h-3 mr-1" />
                    {case_item.employees}
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-orange-primary-subtle text-orange-primary">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {case_item.result}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-medium text-sm">
                  {case_item.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-dark text-sm">Principais Resultados:</h4>
                  <ul className="space-y-1">
                    {case_item.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-xs text-gray-medium">
                        <CheckCircle className="w-3 h-3 text-green-support mr-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="bg-gradient-to-r from-orange-primary/5 to-blue-support/5 rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-dark mb-4">
              Resultados Comprovados
            </h3>
            <p className="text-gray-medium">
              Essas empresas demonstram que a inclusão não é apenas responsabilidade social, 
              mas uma estratégia de negócios altamente eficaz.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-orange-primary">140+</div>
              <div className="text-sm text-gray-medium">Empresas Pesquisadas</div>
            </div>
            
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-support">2.6x</div>
              <div className="text-sm text-gray-medium">Maior Lucro Líquido</div>
            </div>
            
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-support">25%</div>
              <div className="text-sm text-gray-medium">Mais Produtividade</div>
            </div>
            
            <div className="space-y-2">
              <div className="text-3xl font-bold text-orange-primary">2x</div>
              <div className="text-sm text-gray-medium">Avaliações Positivas</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-medium mb-6">
            Sua empresa pode ser a próxima história de sucesso
          </p>
          <button className="btn-primary px-8 py-3 rounded-lg font-semibold focus-visible">
            Comece sua Transformação
            <ExternalLink className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;

