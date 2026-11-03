import React from 'react';
import Reveal from '../../components/home/Reveal';
import SectionHeading from '../../components/home/SectionHeading';

const sponsors = [
  {
    name: 'ACCA',
    image: '/images/sponsors/cleaned/whatsapp-image-2026-10-20-at-6-46-47-pm.png',
    treatment: 'sponsor-card--light',
  },
  {
    name: 'IOVA Global Learning Solution',
    image: '/images/sponsors/cleaned/whatsapp-image-2026-10-20-at-6-46-32-pm.png',
    treatment: 'sponsor-card--light',
  },
  {
    name: 'BetaPlus',
    image: '/images/sponsors/cleaned/whatsapp-image-2026-10-20-at-6-46-57-pm.png',
    treatment: 'sponsor-card--light',
  },
  {
    name: 'KaiFinance by Koboaccountant',
    image: '/images/sponsors/cleaned/whatsapp-image-2026-10-20-at-6-48-51-pm.png',
    treatment: 'sponsor-card--dark',
  },
  {
    name: 'Intelregion',
    image: '/images/sponsors/cleaned/whatsapp-image-2026-10-20-at-6-48-38-pm.png',
    treatment: 'sponsor-card--green',
  },
  {
    name: 'Consonance',
    image: '/images/sponsors/cleaned/whatsapp-image-2026-10-20-at-6-51-18-pm.png',
    treatment: 'sponsor-card--light',
  },
  {
    name: 'Hilaq',
    image: '/images/sponsors/cleaned/whatsapp-image-2026-10-20-at-6-49-49-pm.png',
    treatment: 'sponsor-card--purple',
  },
  {
    name: 'MA Talent Africa',
    image: '/images/sponsors/cleaned/whatsapp-image-2026-10-20-at-6-49-41-pm.png',
    treatment: 'sponsor-card--dark',
  },
  {
    name: 'The Afara Initiative',
    image: '/images/sponsors/cleaned/whatsapp-image-2026-10-20-at-6-49-26-pm.png',
    treatment: 'sponsor-card--blue',
  },
  {
    name: 'SE Africa',
    image: '/images/sponsors/cleaned/whatsapp-image-2026-10-20-at-6-49-18-pm.png',
    treatment: 'sponsor-card--dark',
  },
  {
    name: 'OuiCapital',
    image: '/images/sponsors/cleaned/whatsapp-image-2026-10-20-at-6-49-07-pm.png',
    treatment: 'sponsor-card--dark',
  },
  {
    name: 'Eliad Investments & Securities',
    image: '/images/sponsors/cleaned/whatsapp-image-2026-10-20-at-6-47-36-pm.png',
    treatment: 'sponsor-card--dark',
  },
  {
    name: 'Bureau of Finance Alumni Body',
    image: '/images/sponsors/cleaned/whatsapp-image-2026-10-20-at-6-47-26-pm.png',
    treatment: 'sponsor-card--light',
  },
  {
    name: 'Dash Microfinance Bank',
    image: '/images/sponsors/cleaned/whatsapp-image-2026-10-20-at-6-47-06-pm.png',
    treatment: 'sponsor-card--light',
  },
  {
    name: 'Apex',
    image: '/images/sponsors/cleaned/whatsapp-image-2026-10-29-at-4-46-19-pm-1.png',
    treatment: 'sponsor-card--light',
  },
];

const SponsorsSection: React.FC = () => {
  return (
    <section id="sponsors" className="section sponsors-section">
      <div className="shell">
        <div className="sponsors-section__intro">
          <Reveal>
            <SectionHeading
              eyebrow="Built together"
              title="Backed by people who believe in the next generation."
              description="We're grateful to the organisations, professionals, and communities that make room for BOF OAU students to learn, connect, and lead."
            />
          </Reveal>
          <Reveal className="sponsors-section__note" delay={0.08}>
            <span>Our partners</span>
            <strong>Every introduction creates a new possibility.</strong>
            <p>Interested in supporting practical finance education at OAU?</p>
            <a href="#contact">Start a conversation</a>
          </Reveal>
        </div>

        <div className="sponsors-grid" aria-label="BOF OAU sponsors and partners">
          {sponsors.map((sponsor, index) => (
            <Reveal key={`${sponsor.name}-${index}`} delay={index * 0.025}>
              <article className={`sponsor-card ${sponsor.treatment}`}>
                <img
                  className="sponsor-card__logo"
                  src={sponsor.image}
                  alt={`${sponsor.name} logo`}
                  loading="lazy"
                />
                <span className="sponsor-card__label">{sponsor.name}</span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
