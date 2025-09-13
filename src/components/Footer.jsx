import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    empresa: [
      { name: 'Sobre Nós', href: '#sobre' },
      { name: 'Nossa Missão', href: '#missao' },
      { name: 'Equipe', href: '#equipe' },
      { name: 'Carreiras', href: '#carreiras' }
    ],
    servicos: [
      { name: 'Diagnóstico de Inclusão', href: '#diagnostico' },
      { name: 'Desenvolvimento de Lideranças', href: '#liderancas' },
      { name: 'Mentoria e Carreira PCD', href: '#mentoria-pcd' },
      { name: 'Acessibilidade e TA', href: '#acessibilidade-ta' },
      { name: 'Cultura Inclusiva', href: '#cultura-inclusiva' }
    ],
    recursos: [
      { name: 'Blog', href: '#blog' },
      { name: 'Guias', href: '#guias' },
      { name: 'Webinars', href: '#webinars' },
      { name: 'Casos de Sucesso', href: '#casos' }
    ],
    legal: [
      { name: 'Política de Privacidade', href: '#privacidade' },
      { name: 'Termos de Uso', href: '#termos' },
      { name: 'Cookies', href: '#cookies' },
      { name: 'LGPD', href: '#lgpd' }
    ]
  };

  const instagramUrl = 'https://www.instagram.com/unihunters?igsh=MjA0dmQyMDZnMmV4'
  const socialLinks = [
    { icon: Facebook, href: instagramUrl, label: 'Instagram' },
    { icon: Twitter, href: instagramUrl, label: 'Instagram' },
    { icon: Linkedin, href: instagramUrl, label: 'Instagram' },
    { icon: Instagram, href: instagramUrl, label: 'Instagram' }
  ];

  return (
    <footer className="text-white bg-gradient-to-b from-gray-900 via-gray-950 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-orange-primary mb-4 font-open-sans">
              IMPAR
            </h3>
            <p className="text-gray-200 mb-6 text-sm leading-relaxed">
              Transformamos empresas através da inclusão de pessoas com deficiência, 
              gerando valor social e econômico sustentável para todos os stakeholders.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-200">
                <Mail className="h-4 w-4 mr-3 text-orange-primary flex-shrink-0" />
                contato@inclusaopcd.com.br
              </div>
              <a
                href="https://wa.me/5549988185714"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-gray-200 hover:text-orange-primary transition-colors"
                aria-label="Fale pelo WhatsApp"
              >
                <Phone className="h-4 w-4 mr-3 text-orange-primary flex-shrink-0" />
                +55 49 98818-5714 (WhatsApp)
              </a>
              <div className="flex items-center text-sm text-gray-200">
                <MapPin className="h-4 w-4 mr-3 text-orange-primary flex-shrink-0" />
                Caçador, SC - Brasil
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-white mb-4">Empresa</h4>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm text-gray-300 hover:text-orange-primary transition-colors duration-200 focus-visible"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Serviços</h4>
            <ul className="space-y-2">
              {footerLinks.servicos.map((link, index) => (
                <li key={index}>
                  {link.name === 'Diagnóstico de Inclusão' ? (
                    <Link 
                      to="/contato" 
                      className="text-sm text-gray-300 hover:text-orange-primary transition-colors duration-200 focus-visible"
                    >
                      {link.name}
                    </Link>
                  ) : link.name === 'Desenvolvimento de Lideranças' ? (
                    <Link 
                      to="/metodologia" 
                      className="text-sm text-gray-300 hover:text-orange-primary transition-colors duration-200 focus-visible"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a 
                      href={link.href} 
                      className="text-sm text-gray-300 hover:text-orange-primary transition-colors duration-200 focus-visible"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Recursos</h4>
            <ul className="space-y-2">
              {footerLinks.recursos.map((link, index) => (
                <li key={index}>
                  {link.name === 'Casos de Sucesso' ? (
                    <Link 
                      to="/casos" 
                      className="text-sm text-gray-300 hover:text-orange-primary transition-colors duration-200 focus-visible"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a 
                      href={link.href} 
                      className="text-sm text-gray-300 hover:text-orange-primary transition-colors duration-200 focus-visible"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm text-gray-300 hover:text-orange-primary transition-colors duration-200 focus-visible"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="font-semibold text-white mb-2">
                Receba Conteúdos sobre Inclusão
              </h4>
              <p className="text-sm text-gray-300">
                Fique por dentro das últimas novidades, pesquisas e melhores práticas em inclusão.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-transparent"
              />
              <button className="px-6 py-2 bg-orange-primary text-white rounded-lg hover:bg-orange-primary/90 transition-colors duration-200 font-medium focus-visible">
                Inscrever-se
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-sm text-gray-300">
              © {currentYear} IMPAR. Todos os direitos reservados.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-300 mr-2">Siga-nos:</span>
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="text-gray-300 hover:text-orange-primary transition-colors duration-200 focus-visible"
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>

            {/* Accessibility Certification */}
            <div className="flex items-center text-sm text-gray-300">
              <Shield className="h-4 w-4 mr-2 text-green-support" />
              <span>WCAG 2.1 AA Certificado</span>
            </div>
          </div>
        </div>

        {/* Accessibility Statement */}
        <div className="py-4 border-t border-white/10">
          <div className="text-center">
            <p className="text-xs text-gray-400">
              Este site foi desenvolvido seguindo as diretrizes de acessibilidade WCAG 2.1 nível AA. 
              Para sugestões de melhoria na acessibilidade, entre em contato conosco.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
