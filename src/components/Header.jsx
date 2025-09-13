import { useState } from 'react';
import { Menu, X, Accessibility } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleContrast = () => {
    setHighContrast(!highContrast);
    document.body.classList.toggle('high-contrast');
  };

  const menuItems = [
    { to: '/impacto', label: 'Impacto' },
    { to: '/casos', label: 'Casos de Sucesso' },
    { to: '/dados', label: 'Dados' },
    { to: '/metodologia', label: 'Metodologia' },
    { to: '/contato', label: 'Contato' }
  ];

  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur-md bg-white/70 border-b border-white/40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="block">
            <h1 className="text-2xl font-bold text-gray-800 font-open-sans">
              IMPAR
            </h1>
            </Link>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
                >
                  {item.label}
                </NavLink>
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t rounded-b-xl shadow-lg">
              <div className="max-h-[70vh] overflow-y-auto">
              {menuItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => `block nav-link ${isActive ? 'nav-link-active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

