import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../ui/Button';

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`w-full bg-header-background ${className}`}>
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center w-full py-4 md:py-6">
          {/* Logo Section */}
          <Link to="/" className="flex justify-start items-center" onClick={closeMenu}>
            <div className="flex items-center gap-4">
              <div className="relative flex-shrink-0 w-[60px] sm:w-[70px] md:w-[80px]">
                <img 
                  src="/images/img_d64c46b0a850558.png" 
                  alt="BOF OAU Logo" 
                  className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px]"
                />
                <img 
                  src="/images/img_d64c46b0a850558.png" 
                  alt="BOF OAU Logo Overlay" 
                  className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] -mt-[60px] sm:-mt-[70px] md:-mt-[80px]"
                />
              </div>

              {/* Organization name - two lines, bold, black, left aligned */}
              <div className="text-left leading-tight">
                <div className="text-sm sm:text-base md:text-lg font-bold text-black">The Students' Professional</div>
                <div className="text-sm sm:text-base md:text-lg font-bold text-black">Bureau of Finance, OAU</div>
              </div>
            </div>
          </Link>

          {/* Hamburger Menu Icon (Mobile only) */}
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

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-row justify-between items-center gap-8">
            <nav className="flex flex-row justify-between items-center gap-6">
              <Link 
                to="/about" 
                className={`text-base font-normal leading-normal transition-colors duration-200 hover:text-primary-background ${
                  location.pathname === '/about' ? 'text-primary-background' : 'text-text-primary'
                }`}
              >
                About us
              </Link>
              <Link 
                to="/mission" 
                className={`text-base font-normal leading-normal transition-colors duration-200 hover:text-primary-background ${
                  location.pathname === '/mission' ? 'text-primary-background' : 'text-text-primary'
                }`}
              >
                Our Mission
              </Link>
              <Link 
                to="/structure" 
                className={`text-base font-normal leading-normal transition-colors duration-200 hover:text-primary-background ${
                  location.pathname === '/structure' ? 'text-primary-background' : 'text-text-primary'
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
              text_color="#000000"
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
              onClick={() => window.location.href = '/join-us'}
            />
          </div>

          {/* Mobile Navigation Overlay */}
          <div className={`${menuOpen ? 'block' : 'hidden'} lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40`} onClick={closeMenu}></div>
          
          {/* Mobile Navigation Menu */}
          <div className={`${menuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out`}>
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-lg font-semibold text-text-primary">Menu</h2>
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

              {/* Mobile Menu Content */}
              <nav className="flex flex-col flex-1 p-4 gap-6">
                <Link 
                  to="/about" 
                  className={`text-base font-normal leading-normal transition-colors duration-200 hover:text-primary-background py-2 ${
                    location.pathname === '/about' ? 'text-primary-background border-l-4 border-primary-background pl-4' : 'text-text-primary'
                  }`}
                  onClick={closeMenu}
                >
                  About us
                </Link>
                <Link 
                  to="/mission" 
                  className={`text-base font-normal leading-normal transition-colors duration-200 hover:text-primary-background py-2 ${
                    location.pathname === '/mission' ? 'text-primary-background border-l-4 border-primary-background pl-4' : 'text-text-primary'
                  }`}
                  onClick={closeMenu}
                >
                  Our Mission
                </Link>
                <Link 
                  to="/structure" 
                  className={`text-base font-normal leading-normal transition-colors duration-200 hover:text-primary-background py-2 ${
                    location.pathname === '/structure' ? 'text-primary-background border-l-4 border-primary-background pl-4' : 'text-text-primary'
                  }`}
                  onClick={closeMenu}
                >
                  Our Structure
                </Link>
              </nav>

              {/* Mobile CTA Button */}
              <div className="p-4 border-t">
                <Button
                  text="Join Us"
                  text_font_size="16"
                  text_font_family="Inter"
                  text_font_weight="500"
                  text_line_height="20px"
                  text_text_align="center"
                  text_color="#000000"
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
                    window.location.href = '/join-us';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;