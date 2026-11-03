import React from 'react';
import Reveal from '../../components/home/Reveal';
import SectionHeading from '../../components/home/SectionHeading';

const visits = [
  {
    name: 'Chevron',
    title: 'Inside the boardroom',
    detail: 'A close look at how ideas, people, and decisions come together.',
    image: '/images/visits/WhatsApp Image 2026-10-20 at 1.14.10 PM.jpeg',
    featured: true,
  },
  {
    name: 'FMDQ',
    title: 'Where markets meet',
    detail: 'Exploring the infrastructure behind Nigeria’s financial markets.',
    image: '/images/visits/WhatsApp Image 2026-10-20 at 1.13.20 PM.jpeg',
  },
  {
    name: 'Dash MFB',
    title: 'Fintech in the room',
    detail: 'Learning from a team building closer, more useful financial services.',
    image: '/images/visits/WhatsApp Image 2026-10-20 at 1.10.30 PM.jpeg',
  },
  {
    name: 'McKinsey & Company',
    title: 'Seeing strategy up close',
    detail: 'Connecting classroom frameworks to real-world problem solving.',
    image: '/images/visits/WhatsApp Image 2026-10-20 at 1.09.36 PM.jpeg',
  },
  {
    name: 'Abbey Bank Plc',
    title: 'Meeting industry practitioners',
    detail: 'Making space for candid conversations about careers in finance.',
    image: '/images/visits/WhatsApp Image 2026-10-20 at 1.07.52 PM.jpeg',
  },
  {
    name: 'Beta Plus Group',
    title: 'Learning from operators',
    detail: 'Seeing how financial thinking shapes everyday business decisions.',
    image: '/images/visits/WhatsApp Image 2026-10-20 at 1.07.18 PM.jpeg',
  },
  {
    name: 'VFD Group',
    title: 'Culture, people, and leadership',
    detail: 'Taking inspiration from teams building the future of finance.',
    image: '/images/visits/WhatsApp Image 2026-10-20 at 1.06.18 PM.jpeg',
  },
];

const VisitsSection: React.FC = () => {
  return (
    <section id="visits" className="section visits-section">
      <div className="visits-section__grid" aria-hidden="true" />
      <div className="shell">
        <div className="visits-section__intro">
          <Reveal>
            <SectionHeading
              eyebrow="Beyond the classroom"
              title="Learning where the work happens."
              description="Our special visits turn curiosity into context, taking BOF OAU members into the rooms where markets, businesses, and careers are being shaped."
            />
          </Reveal>
          <Reveal className="visits-section__signal" delay={0.08}>
            <span>Industry immersion</span>
            <strong>Seven visits. Countless new perspectives.</strong>
            <p>Every conversation helps our members see what a future in finance can look like.</p>
          </Reveal>
        </div>

        <div className="visits-grid">
          {visits.map((visit, index) => (
            <Reveal
              key={visit.name}
              className={visit.featured ? 'visit-card-wrap visit-card-wrap--featured' : 'visit-card-wrap'}
              delay={index * 0.05}
            >
              <article className={visit.featured ? 'visit-card visit-card--featured' : 'visit-card'}>
                <img src={visit.image} alt={`${visit.name} visit`} loading="lazy" />
                <div className="visit-card__shade" />
                <div className="visit-card__body">
                  <span className="visit-card__tag">{visit.name}</span>
                  <strong>{visit.title}</strong>
                  <p>{visit.detail}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisitsSection;
