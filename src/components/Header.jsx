import { useState } from 'react';
import { Menu, X, Accessibility } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleContrast = () => {
    setHighContrast(!highContrast);
    document.body.classList.toggle('high-contrast');
  };

  const menuItems = [
    { href: '#impacto', label: 'Impacto' },
    { href: '#casos', label: 'Casos de Sucesso' },
    { href: '#dados', label: 'Dados' },
    { href: '#solucoes', label: 'Soluções' },
    { href: '#contato', label: 'Contato' }
  ];

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-orange-primary font-open-sans">
              Inclusão PCD
            </h1>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-dark hover:text-orange-primary px-3 py-2 rounded-md text-sm font-medium smooth-transition focus-visible"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Botões de Acessibilidade e Menu Mobile */}
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleContrast}
              className="focus-visible"
              aria-label="Alternar alto contraste"
            >
              <Accessibility className="h-4 w-4" />
            </Button>

            {/* Menu Mobile Button */}
            <div className="md:hidden">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleMenu}
                className="focus-visible"
                aria-label="Abrir menu"
              >
                {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-dark hover:text-orange-primary block px-3 py-2 rounded-md text-base font-medium smooth-transition focus-visible"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

