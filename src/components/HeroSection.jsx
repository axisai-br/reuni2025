import { Button } from '@/components/ui/button';
import { ArrowRight, Play, TrendingUp, Users, Award } from 'lucide-react';
import heroImage from '../assets/images/vyoPG9wixHtK.jpg';
import ScrollReveal from './ScrollReveal';
import AnimatedCounter from './AnimatedCounter';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Modern Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay absolute inset-0"></div>
        <div className="absolute inset-0 gradient-mesh opacity-30"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-blue-support/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-green-support/10 rounded-full blur-lg animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Content */}
      <div className="hero-content section-spacing">
        <ScrollReveal direction="up" delay={0.2}>
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-orange-primary/20 border border-orange-primary/30 text-orange-primary text-sm font-medium backdrop-blur-sm mb-4">
              <Award className="w-4 h-4 mr-2" />
              Metodologia Validada por MIT, Harvard & Forbes
            </span>
          </div>
          <h1 className="text-display-2xl font-playfair font-bold mb-6 leading-tight">
            Transforme <span className="text-orange-primary">PCDs</span> em{' '}
            <span className="text-orange-primary">Líderes</span> de{' '}
            <span className="text-orange-primary">Sucesso</span>
          </h1>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={0.4}>
          <p className="text-body-lg mb-12 text-gray-100 font-inter max-w-3xl mx-auto leading-relaxed">
            Vá além da contratação. Retenha, desenvolva e promova talentos PCD com nossa 
            metodologia científica que gera resultados mensuráveis para pequenas e médias empresas.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.6}>
          <div className="flex-responsive justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="btn-primary focus-visible group"
            >
              Diagnóstico Gratuito
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="btn-secondary focus-visible group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Ver Metodologia
            </Button>
          </div>
        </ScrollReveal>

        {/* Estatísticas em destaque com design moderno */}
        <ScrollReveal direction="up" delay={0.8}>
          <div className="grid-responsive grid-auto-fit">
            <div className="stat-card group">
              <div className="flex items-center justify-center mb-3">
                <TrendingUp className="w-8 h-8 text-orange-primary" />
              </div>
              <div className="stat-number">
                <AnimatedCounter end={33} suffix="%" />
              </div>
              <div className="text-body-md text-gray-200 font-inter">
                Redução no turnover de PCDs
              </div>
              <div className="text-xs text-orange-primary/80 mt-1 font-medium">
                Dados da pesquisa PCDs
              </div>
            </div>
            
            <div className="stat-card group">
              <div className="flex items-center justify-center mb-3">
                <Users className="w-8 h-8 text-blue-support" />
              </div>
              <div className="stat-number">
                <AnimatedCounter end={25} suffix="%" />
              </div>
              <div className="text-body-md text-gray-200 font-inter">
                PCDs com 1-2 anos na empresa
              </div>
              <div className="text-xs text-blue-support/80 mt-1 font-medium">
                Dados da pesquisa PCDs
              </div>
            </div>
            
            <div className="stat-card group">
              <div className="flex items-center justify-center mb-3">
                <Award className="w-8 h-8 text-green-support" />
              </div>
              <div className="stat-number">
                <AnimatedCounter end={28} suffix="%" />
              </div>
              <div className="text-body-md text-gray-200 font-inter">
                Mais receita em empresas inclusivas
              </div>
              <div className="text-xs text-green-support/80 mt-1 font-medium">
                Dados da pesquisa empresas
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Call-to-action secundário */}
        <ScrollReveal direction="up" delay={1.0}>
          <div className="mt-12 text-center">
            <p className="text-body-md text-gray-300 font-inter mb-4">
              Junte-se a mais de <span className="text-orange-primary font-semibold">200+ empresas</span> que já transformaram seus resultados
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
              <span>✓ Sem compromisso</span>
              <span>•</span>
              <span>✓ Resultados em 30 dias</span>
              <span>•</span>
              <span>✓ Suporte especializado</span>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

