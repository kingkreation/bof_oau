import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../ui/Button';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const viewportHeight = window.innerHeight;

          if (currentScrollY > viewportHeight) {
            if (currentScrollY < lastScrollY) {
              setShowHeader(true);
            } else {
              setShowHeader(false);
            }
          } else {
            setShowHeader(true);
          }

          setLastScrollY(currentScrollY);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`w-full sticky top-0 z-30 ${className}`}>
      <div className={`bg-header-background transition-transform duration-300 ease-in-out ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center w-full py-4 md:py-6">
            <Link to="/" className="flex justify-start items-center" onClick={closeMenu}>
              <div className="flex items-center gap-4">
                <div className="relative flex-shrink-0 w-[60px] sm:w-[70px] md:w-[80px]">
                  <img 
                    src="/images/img_d64c46b0a850558.png" 
                    alt="BOF OAU Logo" 
                    className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] object-contain"
                  />
                  <img 
                    src="/images/img_d64c46b0a850558.png" 
                    alt="BOF OAU Logo Overlay" 
                    className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] -mt-[60px] sm:-mt-[70px] md:-mt-[80px] object-contain opacity-80"
                  />
                </div>

                <div className="text-left leading-tight">
                  <div className="text-caption sm:text-subtitle font-semibold text-black">The Students' Professional</div>
                  <div className="text-caption sm:text-subtitle font-semibold text-black">Bureau of Finance, OAU</div>
                </div>
              </div>
            </Link>

            <button 
              className="block lg:hidden p-2 z-50 relative" 
              aria-label="Toggle menu"
              onClick={toggleMenu}
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            <div className="hidden lg:flex flex-row justify-between items-center gap-8">
              <nav className="flex flex-row justify-between items-center gap-6">
                <Link 
                  to="/about" 
                  className={`text-body font-medium leading-normal transition-colors duration-200 hover:text-primary-background ${
                    location.pathname === '/about' ? 'text-primary-background font-semibold' : 'text-text-primary'
                  }`}
                >
                  About us
                </Link>
                <Link 
                  to="/mission" 
                  className={`text-body font-medium leading-normal transition-colors duration-200 hover:text-primary-background ${
                    location.pathname === '/mission' ? 'text-primary-background font-semibold' : 'text-text-primary'
                  }`}
                >
                  Our Mission
                </Link>
                <Link 
                  to="/structure" 
                  className={`text-body font-medium leading-normal transition-colors duration-200 hover:text-primary-background ${
                    location.pathname === '/structure' ? 'text-primary-background font-semibold' : 'text-text-primary'
                  }`}
                >
                  Our Structure
                </Link>
              </nav>

              <Button
                text="Join Us"
                text_font_size="16"
                text_font_family="Inter"
                text_font_weight="500"
                text_line_height="20px"
                text_text_align="center"
                text_color="#ffffff"
                fill_background_color="#00713acc"
                border_border_radius="8px"
                border_border=""
                layout_width="auto"
                position="relative"
                margin="0"
                variant="primary"
                size="medium"
                padding="8px"
                className="min-w-[76px] hover:bg-primary-background transition-colors duration-200"
                onClick={() => (window.location.href = 'https://medium.com/@bureauoffinance')}
              />
            </div>
          </div>
        </div>
      </div>

      <div 
        className={`${menuOpen ? 'block' : 'hidden'} lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40`} 
        onClick={closeMenu}
        aria-hidden="true"
      ></div>
      
      <div 
        className={`${menuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden fixed top-0 right-0 h-full w-72 sm:w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto`}
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-text-primary">Menu</h2>
            <button 
              onClick={closeMenu}
              className="p-2"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col flex-1 p-4 gap-4">
            <Link 
              to="/about" 
              className={`text-body-lg font-medium leading-relaxed transition-colors duration-200 hover:text-primary-background py-3 px-2 rounded-lg hover:bg-gray-50 ${
                location.pathname === '/about' ? 'text-primary-background bg-green-50 font-semibold' : 'text-text-primary'
              }`}
              onClick={closeMenu}
            >
              About us
            </Link>
            <Link 
              to="/mission" 
              className={`text-body-lg font-medium leading-relaxed transition-colors duration-200 hover:text-primary-background py-3 px-2 rounded-lg hover:bg-gray-50 ${
                location.pathname === '/mission' ? 'text-primary-background bg-green-50 font-semibold' : 'text-text-primary'
              }`}
              onClick={closeMenu}
            >
              Our Mission
            </Link>
            <Link 
              to="/structure" 
              className={`text-body-lg font-medium leading-relaxed transition-colors duration-200 hover:text-primary-background py-3 px-2 rounded-lg hover:bg-gray-50 ${
                location.pathname === '/structure' ? 'text-primary-background bg-green-50 font-semibold' : 'text-text-primary'
              }`}
              onClick={closeMenu}
            >
              Our Structure
            </Link>
          </nav>

          <div className="p-4 border-t">
              <Button
                text="Join Us"
                text_font_size="16"
                text_font_family="Inter"
                text_font_weight="500"
                text_line_height="20px"
                text_text_align="center"
                text_color="#ffffff"
                fill_background_color="#00713acc"
                border_border_radius="8px"
                border_border=""
                layout_width="auto"
                position="relative"
                margin="0"
                variant="primary"
                size="medium"
                padding="8px"
                className="w-full hover:bg-primary-background transition-colors duration-200"
                onClick={() => {
                  closeMenu();
                  window.location.href = 'https://medium.com/@bureauoffinance';
                }}
              />
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
