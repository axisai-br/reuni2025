import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '../assets/images/vyoPG9wixHtK.jpg';
import ScrollReveal from './ScrollReveal';
import AnimatedCounter from './AnimatedCounter';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay absolute inset-0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0.2}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-open-sans">
            Transforme <span className="text-orange-primary">PCDs</span> em{' '}
            <span className="text-orange-primary">Líderes</span> de{' '}
            <span className="text-orange-primary">Sucesso</span>
          </h1>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={0.4}>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 font-light">
            Vá além da contratação. Retenha, desenvolva e promova talentos PCD com nossa 
            metodologia validada por <strong className="text-orange-primary">MIT</strong>, 
            <strong className="text-orange-primary"> Harvard</strong> e 
            <strong className="text-orange-primary"> Forbes</strong>
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.6}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="btn-primary px-8 py-3 text-lg font-semibold focus-visible"
            >
              Diagnóstico Gratuito
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-3 text-lg focus-visible backdrop-blur-sm"
            >
              <Play className="mr-2 h-5 w-5" />
              Ver Metodologia
            </Button>
          </div>
        </ScrollReveal>

        {/* Estatísticas em destaque com animação */}
        <ScrollReveal direction="up" delay={0.8}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold text-orange-primary mb-2">
                <AnimatedCounter end={33} suffix="%" />
              </div>
              <div className="text-sm md:text-base text-gray-200">
                Redução no turnover de PCDs (pesquisa PCDs)
              </div>
            </div>
            
            <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold text-orange-primary mb-2">
                <AnimatedCounter end={25} suffix="%" />
              </div>
              <div className="text-sm md:text-base text-gray-200">
                PCDs com 1-2 anos na empresa (pesquisa PCDs)
              </div>
            </div>
            
            <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold text-orange-primary mb-2">
                <AnimatedCounter end={28} suffix="%" />
              </div>
              <div className="text-sm md:text-base text-gray-200">
                Mais receita em empresas inclusivas (pesquisa empresas)
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 pulse-soft"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

