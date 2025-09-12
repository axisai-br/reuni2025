import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Users, Clock, TrendingDown } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import AnimatedCounter from './AnimatedCounter';

const DataSection = () => {
  // Dados do formulário - Perfil das Empresas
  const sectorData = [
    { name: 'Indústrias', value: 41.7, color: '#1976d2' },
    { name: 'Varejo', value: 16.7, color: '#ff8a00' },
    { name: 'Tecnologia', value: 8.3, color: '#388e3c' },
    { name: 'Saúde', value: 8.3, color: '#e65100' },
    { name: 'Outros', value: 25.0, color: '#4a5568' }
  ];

  const companySizeData = [
    { size: '<100', percentage: 33.3, fill: '#e65100' },
    { size: '100-499', percentage: 33.3, fill: '#1976d2' },
    { size: '500-999', percentage: 25.0, fill: '#388e3c' },
    { size: '5.000+', percentage: 8.3, fill: '#ff8a00' }
  ];

  const pcdHiringData = [
    { period: 'Sim, com carteira', percentage: 40.5, fill: '#e65100' },
    { period: 'Sim, informal', percentage: 8.1, fill: '#1976d2' },
    { period: 'Não empregado', percentage: 51.4, fill: '#388e3c' }
  ];

  const challengesData = [
    { challenge: 'Saúde/motivo pessoal', percentage: 35.1, fill: '#66bb6a' },
    { challenge: 'Salário baixo/proposta melhor', percentage: 32.4, fill: '#e65100' },
    { challenge: 'Falta de plano de carreira/crescimento', percentage: 13.5, fill: '#1976d2' },
    { challenge: 'Liderança/ambiente de trabalho', percentage: 8.1, fill: '#388e3c' },
    { challenge: 'Transporte/deslocamento', percentage: 5.4, fill: '#42a5f5' },
    { challenge: 'Acessibilidade insuficiente', percentage: 5.4, fill: '#ff8a00' }
  ];

  const turnoverReasons = [
    { reason: 'Saúde/motivo pessoal', percentage: 35.1, color: '#66bb6a' },
    { reason: 'Salário baixo/proposta melhor', percentage: 32.4, color: '#e65100' },
    { reason: 'Falta de plano de carreira/crescimento', percentage: 13.5, color: '#1976d2' },
    { reason: 'Liderança/ambiente de trabalho', percentage: 8.1, color: '#388e3c' },
    { reason: 'Transporte/deslocamento', percentage: 5.4, color: '#42a5f5' },
    { reason: 'Acessibilidade insuficiente', percentage: 5.4, color: '#ff8a00' }
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-border rounded-lg shadow-lg">
          <p className="font-medium text-gray-dark">{label}</p>
          <p className="text-orange-primary">
            {`${payload[0].name}: ${payload[0].value}%`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="dados" className="py-20 section-bg-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4 font-open-sans">
              <span className="text-orange-primary">Dados</span> do Mercado Brasileiro
            </h2>
            <p className="text-xl text-gray-medium max-w-3xl mx-auto">
              Análise detalhada baseada em pesquisas com empresas e profissionais PCDs no Brasil.
            </p>
          </div>
        </ScrollReveal>

        {/* Key Statistics */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <Card className="bg-white shadow-lg border-0 card-hover">
              <CardContent className="p-6 text-center">
                <Building2 className="h-8 w-8 text-orange-primary mx-auto mb-3" />
                <div className="text-3xl font-bold stat-number mb-2">
                  <AnimatedCounter end={40.5} suffix="%" decimals={1} />
                </div>
                <div className="text-sm text-gray-medium">PCDs empregados com carteira</div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0 card-hover">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-green-support mx-auto mb-3" />
                <div className="text-3xl font-bold text-green-support mb-2">
                  <AnimatedCounter end={10.8} suffix="%" decimals={1} />
                </div>
                <div className="text-sm text-gray-medium">PCDs com Superior Completo</div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0 card-hover">
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 text-blue-support mx-auto mb-3" />
                <div className="text-3xl font-bold text-blue-support mb-2">
                  <AnimatedCounter end={56.8} suffix="%" decimals={1} />
                </div>
                <div className="text-sm text-gray-medium">Limitação Física/Motora</div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0 card-hover">
              <CardContent className="p-6 text-center">
                <TrendingDown className="h-8 w-8 text-orange-primary mx-auto mb-3" />
                <div className="text-3xl font-bold stat-number mb-2">
                  <AnimatedCounter end={35.1} suffix="%" decimals={1} />
                </div>
                <div className="text-sm text-gray-medium">Saída por Saúde/Motivo Pessoal</div>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Setores das Empresas */}
          <ScrollReveal direction="left" delay={0.3}>
            <Card className="chart-container">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-dark">
                  Setores das Empresas Participantes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={sectorData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {sectorData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Tamanho das Empresas */}
          <ScrollReveal direction="right" delay={0.3}>
            <Card className="chart-container">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-dark">
                  Porte das Empresas (Nº de Colaboradores)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={companySizeData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="size" tick={{ fill: '#4a5568' }} />
                    <YAxis tick={{ fill: '#4a5568' }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="percentage" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Contratação de PCDs */}
          <ScrollReveal direction="left" delay={0.4}>
            <Card className="chart-container">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-dark">
                  Situação de Emprego dos PCDs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={pcdHiringData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="period" tick={{ fill: '#4a5568', fontSize: 12 }} />
                    <YAxis tick={{ fill: '#4a5568' }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="percentage" name="% Pessoas" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Principais Desafios */}
          <ScrollReveal direction="right" delay={0.4}>
            <Card className="chart-container">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-dark">
                  Principais Desafios na Inclusão
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={challengesData} layout="horizontal">
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis type="number" tick={{ fill: '#4a5568' }} />
                    <YAxis dataKey="challenge" type="category" width={100} tick={{ fill: '#4a5568', fontSize: 12 }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="percentage" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>

        {/* Perfil dos Profissionais PCDs */}
        <ScrollReveal direction="up" delay={0.5}>
          <Card className="bg-white shadow-lg border-0 mb-16 card-hover">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-dark text-center">
                Perfil dos Profissionais PCDs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold stat-number">
                    <AnimatedCounter end={5.4} suffix="%" decimals={1} />
                  </div>
                  <div className="text-sm text-gray-medium">Têm menos de 20 anos</div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-green-support">
                    <AnimatedCounter end={10.8} suffix="%" decimals={1} />
                  </div>
                  <div className="text-sm text-gray-medium">Superior Completo</div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-blue-support">
                    <AnimatedCounter end={56.8} suffix="%" decimals={1} />
                  </div>
                  <div className="text-sm text-gray-medium">Limitação Física/Motora</div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-3xl font-bold stat-number">
                    <AnimatedCounter end={40.5} suffix="%" decimals={1} />
                  </div>
                  <div className="text-sm text-gray-medium">Empregados com carteira</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* Motivos de Saída */}
        <ScrollReveal direction="up" delay={0.6}>
          <Card className="bg-white shadow-lg border-0 card-hover">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-dark">
                Principais Motivos de Saída dos PCDs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {turnoverReasons.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-dark font-medium">{item.reason}</span>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-lighter rounded-full h-3 overflow-hidden">
                        <div 
                          className="h-3 rounded-full transition-all duration-1000 ease-out" 
                          style={{ 
                            width: `${item.percentage}%`,
                            backgroundColor: item.color
                          }}
                        ></div>
                      </div>
                      <span className="font-bold w-12 text-right" style={{ color: item.color }}>
                        {item.percentage}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* Insight Box */}
        <ScrollReveal direction="up" delay={0.7}>
          <div className="mt-16 gradient-orange rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-dark mb-4">
              O Custo da Não Inclusão
            </h3>
            <p className="text-lg text-gray-medium mb-6">
              Com 56% de turnover geral no Brasil e desafios específicos para PCDs, 
              empresas perdem talentos valiosos e oportunidades de crescimento.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold stat-number mb-2">
                  <AnimatedCounter end={18.6} suffix="M" decimals={1} />
                </div>
                <div className="text-sm text-gray-medium">PCDs no Brasil (PNAD 2022)</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-support mb-2">Limitada</div>
                <div className="text-sm text-gray-medium">Inclusão por barreiras</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-support mb-2">Grande</div>
                <div className="text-sm text-gray-medium">Potencial inexplorado</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default DataSection;

