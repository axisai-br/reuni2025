import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, TrendingUp, TrendingDown, Users, Award } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import AnimatedCounter from './AnimatedCounter';
import heroImage from '@/assets/images/imagemInicial.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-center overflow-hidden bg-hero">
      {/* Background Layer (fallback without external image) */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="hero-overlay absolute inset-0" />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-blue-support/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-green-support/10 rounded-full blur-lg animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Content */}
      <div className="hero-content section-spacing pt-16 sm:pt-24">
        <ScrollReveal direction="up" delay={0.2}>
          <div className="mb-6 text-center">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm mt-6 mb-4 shadow-sm border border-white/30">
              <Award className="w-4 h-4 mr-2" />
              Metodologia Validada por MIT, Harvard & Forbes
            </span>
          </div>
          <h1 className="text-display-2xl font-playfair font-bold mb-4 leading-tight text-white text-center">
            Inclusão que transforma pessoas e negócios
          </h1>
          <p className="text-body-lg mb-8 text-gray-100 font-inter max-w-3xl mx-auto leading-relaxed text-center">
            Acolha, desenvolva e promova talentos PCD com propósito.
          </p>
        </ScrollReveal>
        

        <ScrollReveal direction="up" delay={0.6}>
          <div className="flex-responsive justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="btn-primary focus-visible group"
              onClick={() => {
                const el = document.querySelector('#calculadora');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              aria-label="Calcular meu ROI agora"
            >
              Calcular meu ROI agora
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Link to="/contato" className="contents">
              <Button 
                variant="outline" 
                size="lg" 
                className="btn-secondary focus-visible group"
                aria-label="Fazer diagnóstico gratuito"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Fazer diagnóstico gratuito
              </Button>
            </Link>
            
            <Link to="/metodologia" className="contents">
              <Button 
                variant="outline" 
                size="lg" 
                className="btn-secondary focus-visible group"
                aria-label="Ver como a metodologia funciona"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Ver metodologia
              </Button>
            </Link>
          </div>
        </ScrollReveal>

        {/* Estatísticas em destaque com design moderno */}
        <ScrollReveal direction="up" delay={0.8}>
          <div className="grid-responsive grid-auto-fit">
            <div className="stat-card group">
              <div className="flex items-center justify-center mb-3">
                <TrendingDown className="w-8 h-8 text-orange-primary" />
              </div>
              <div className="stat-number">
                <AnimatedCounter end={65} suffix="%" decimals={0} />
              </div>
              <div className="text-body-md text-white font-inter">
                Saída por falta de valorização
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
                <AnimatedCounter end={98} suffix="%" decimals={0} />
              </div>
              <div className="text-body-md text-white font-inter">
                Retenção de PCDs com valorização
              </div>
              <div className="text-xs text-blue-support/80 mt-1 font-medium">
                Dados da metodologia IMPAR
              </div>
            </div>

            <div className="stat-card group">
              <div className="flex items-center justify-center mb-3">
                <Award className="w-8 h-8 text-green-support" />
              </div>
              <div className="stat-number">10+</div>
              <div className="text-body-md text-white font-inter">
                Empresas aumentaram sua produtividade com esta metodologia
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

