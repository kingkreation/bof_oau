import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const APPLICATION_URL = 'https://forms.gle/fDiLo3HFRZCsNpYz6';

const navItems = [
  { label: 'About us', href: '#about' },
  { label: 'Our Mission', href: '#mission' },
  { label: 'Our Structure', href: '#team' },
  { label: 'Join Us', href: '#join' },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();
  const homeHref = location.pathname === '/' ? '#hero' : '/';

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });

    const sections = [
      'hero',
      'about',
      'evolution',
      'mission',
      'achievements',
      'team',
      'advisers',
      'faq',
      'events',
      'join',
      'contact',
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: [0.1, 0.3, 0.6] }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', updateHeader);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="shell site-header__inner">
        <a className="brand-lockup" href={homeHref} onClick={closeMenu} aria-label="BOF OAU home">
          <img src="/images/img_d64c46b0a850558.png" alt="BOF OAU logo" width="48" height="48" />
          <span>
            <strong>BOF OAU</strong>
            <small>Students' Professional Bureau of Finance</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => {
            const section = item.href.slice(1);
            return (
              <a
                key={item.href}
                className={activeSection === section ? 'is-active' : ''}
                href={location.pathname === '/' ? item.href : '/' + item.href}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <a
          className="button button--primary header-cta"
          href={APPLICATION_URL}
          target="_blank"
          rel="noreferrer"
        >
          Become an Analyst <ArrowUpRight size={16} aria-hidden="true" />
        </a>

        <button
          className="icon-button mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              className="mobile-menu-backdrop"
              type="button"
              aria-label="Close navigation menu"
              onClick={closeMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.aside
              id="mobile-navigation"
              className="mobile-drawer"
              aria-label="Mobile navigation"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mobile-drawer__top">
                <span className="eyebrow">Navigate</span>
                <button
                  className="icon-button"
                  type="button"
                  aria-label="Close navigation menu"
                  onClick={closeMenu}
                >
                  <X size={22} aria-hidden="true" />
                </button>
              </div>
              <nav className="mobile-nav" aria-label="Mobile primary navigation">
                {navItems.map((item, index) => {
                  const section = item.href.slice(1);
                  return (
                    <a
                      key={item.href}
                      className={activeSection === section ? 'is-active' : ''}
                      href={location.pathname === '/' ? item.href : '/' + item.href}
                      onClick={closeMenu}
                    >
                      <span>0{index + 1}</span>
                      {item.label}
                    </a>
                  );
                })}
              </nav>
              <div className="mobile-drawer__bottom">
                <p>Open to all OAU students with a passion for finance.</p>
                <a
                  className="button button--primary button--wide"
                  href={APPLICATION_URL}
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeMenu}
                >
                  Become an Analyst <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
