import { TrendingUp, Users, DollarSign, Award, Target, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import bannerImpact from '@/assets/images/grupoPessoasPcd.jpg';

const ImpactSection = () => {
  const impactData = [
    {
      icon: DollarSign,
      title: '28% Mais Receita',
      description: 'Empresas inclusivas geram significativamente mais receita que a concorrência',
      stat: '28%',
      color: 'text-orange-primary'
    },
    {
      icon: TrendingUp,
      title: '2x Mais Lucro Líquido',
      description: 'Dobro do lucro líquido comparado a empresas não inclusivas',
      stat: '2x',
      color: 'text-green-support'
    },
    {
      icon: Target,
      title: '30% Mais Margem',
      description: 'Margens de lucro econômico 30% superiores',
      stat: '30%',
      color: 'text-blue-support'
    },
    {
      icon: Zap,
      title: '25% Mais Produtividade',
      description: 'Produtividade acima da média setorial com menor absenteísmo',
      stat: '25%',
      color: 'text-orange-primary'
    },
    {
      icon: Users,
      title: '2x Avaliações Positivas',
      description: 'Dobro de avaliações positivas no clima organizacional',
      stat: '2x',
      color: 'text-green-support'
    },
    {
      icon: Award,
      title: 'Maior Inovação',
      description: 'Equipes diversas geram mais inovação e soluções criativas',
      stat: '+',
      color: 'text-blue-support'
    }
  ];

  return (
    <section id="impacto" className="py-20 bg-gray-light relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-5" style={{ backgroundImage: `url(${bannerImpact})` }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4 font-open-sans">
            O <span className="text-orange-primary">Impacto Real</span> da Inclusão
          </h2>
          <p className="subtitle text-gray-medium max-w-3xl mx-auto">
            Dados comprovados mostram que a inclusão de pessoas com deficiência não é apenas 
            uma questão social, mas uma estratégia de negócios altamente lucrativa.
          </p>
        </div>

        {/* Impact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {impactData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card key={index} className="card-hover bg-white border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-gray-50">
                    <IconComponent className={`h-8 w-8 ${item.color}`} />
                  </div>
                  <div className={`text-4xl font-bold ${item.color} mb-2`}>
                    {item.stat}
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-dark">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-medium">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Key Insights */}
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-dark mb-6 text-center">
            Principais Descobertas da Pesquisa Accenture
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-medium">
                  <strong className="text-gray-dark">2018-2023:</strong> Líderes em inclusão alcançam 
                  <span className="text-orange-primary font-semibold"> 1,6× mais receita</span>
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-support rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-medium">
                  <strong className="text-gray-dark">Lucro:</strong> 
                  <span className="text-green-support font-semibold"> 2,6× mais lucro líquido</span> 
                  e 2× mais lucro econômico
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-support rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-medium">
                  <strong className="text-gray-dark">Operacional:</strong> Menor turnover e 
                  <span className="text-blue-support font-semibold"> redução significativa de custos</span>
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-medium">
                  <strong className="text-gray-dark">Clima:</strong> Dobro de avaliações positivas no 
                  <span className="text-orange-primary font-semibold"> ambiente organizacional</span>
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-support rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-medium">
                  <strong className="text-gray-dark">Inovação:</strong> Equipes diversas geram 
                  <span className="text-green-support font-semibold"> mais soluções criativas</span>
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-support rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-medium">
                  <strong className="text-gray-dark">Competitividade:</strong> Vantagem sustentável no 
                  <span className="text-blue-support font-semibold"> mercado global</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;

