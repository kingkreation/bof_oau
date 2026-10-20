import React from 'react';
import { ArrowUp, Instagram, Linkedin, Mail, Music2 } from 'lucide-react';

const FooterSection: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-grid">
          <div className="footer-brand">
            <a className="brand-lockup brand-lockup--footer" href="#hero">
              <img
                src="/images/img_d64c46b0a850558.png"
                alt="BOF OAU logo"
                width="50"
                height="50"
              />
              <span>
                <strong>BOF OAU</strong>
                <small>The Students&apos; Professional Bureau of Finance</small>
              </span>
            </a>
            <p>Building the next generation of financial professionals from OAU to Africa.</p>
            <div className="footer-socials">
              <a
                href="https://open.spotify.com/show/5YHUK9vFxslbFGtnfzql8I"
                target="_blank"
                rel="noreferrer"
                aria-label="BOF OAU on Spotify"
              >
                <Music2 size={17} />
              </a>
              <a href="mailto:bureauoffinance@gmail.com" aria-label="Email BOF OAU">
                <Mail size={17} />
              </a>
              <a
                href="https://www.linkedin.com/company/the-students-professional-bureau-of-finance-oau-ife/"
                target="_blank"
                rel="noreferrer"
                aria-label="BOF OAU on LinkedIn"
              >
                <Linkedin size={17} />
              </a>
              <a
                href="https://www.instagram.com/bof_oau"
                target="_blank"
                rel="noreferrer"
                aria-label="BOF OAU on Instagram"
              >
                <Instagram size={17} />
              </a>
            </div>
          </div>
          <div className="footer-column">
            <h3>Quick links</h3>
            <a href="#about">About us</a>
            <a href="#mission">Our Mission</a>
            <a href="#team">Our Structure</a>
            <a href="#join">Join Us</a>
          </div>
          <div className="footer-column">
            <h3>Contact</h3>
            <a href="mailto:bureauoffinance@gmail.com">bureauoffinance@gmail.com</a>
            <span>
              Obafemi Awolowo University
              <br />
              Ile-Ife, Nigeria
            </span>
          </div>
          <div className="footer-column">
            <h3>Legal</h3>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Use</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 BOF OAU. All rights reserved.</span>
          <span>Made for curious minds.</span>
          <a className="back-to-top" href="#hero" aria-label="Back to top">
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
