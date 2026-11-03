import React from 'react';
import { ArrowRight, Compass, Crown, GraduationCap, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from '../../components/home/Reveal';
import SectionHeading from '../../components/home/SectionHeading';

const cards = [
  {
    icon: Compass,
    eyebrow: 'Our journey',
    value: '2011',
    title: 'Founded with intent',
    copy: 'A student-led space built to make finance practical, inclusive, and ambitious.',
  },
  {
    icon: TrendingUp,
    eyebrow: 'Our growth',
    value: '500+',
    title: 'Members in motion',
    copy: 'A growing network of curious minds across every faculty at OAU.',
  },
  {
    icon: Crown,
    eyebrow: 'Our impact',
    value: '20+',
    title: 'Competition victories',
    copy: 'A record of showing up, doing the work, and raising the standard.',
  },
  {
    icon: GraduationCap,
    eyebrow: 'Your next move',
    value: 'All',
    title: 'Faculties welcome',
    copy: 'Bring your curiosity. We will help you build the technical edge.',
  },
];

const EvolutionSection: React.FC = () => {
  return (
    <section id="evolution" className="section section--dark">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="The evolution"
            title="A legacy still being written."
            description="From a small student initiative to a thriving finance community, BOF OAU keeps turning ambition into capability."
            tone="dark"
          />
        </Reveal>
        <div className="evolution-grid">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.eyebrow} delay={index * 0.06}>
                <motion.article
                  className="evolution-card"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="evolution-card__top">
                    <span className="icon-tile">
                      <Icon size={19} aria-hidden="true" />
                    </span>
                    <span>0{index + 1}</span>
                  </div>
                  <span className="card-eyebrow">{card.eyebrow}</span>
                  <strong>{card.value}</strong>
                  <h3>{card.title}</h3>
                  <p>{card.copy}</p>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
        <div className="stat-strip" aria-label="BOF OAU key statistics">
          <div>
            <strong>2011</strong>
            <span>founded</span>
          </div>
          <div>
            <strong>500+</strong>
            <span>members</span>
          </div>
          <div>
            <strong>20+</strong>
            <span>victories</span>
          </div>
          <div>
            <strong>∞</strong>
            <span>possibility</span>
          </div>
        </div>
        <a className="button button--light button--arrow" href="#join">
          Become an Analyst <ArrowRight size={17} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};

export default EvolutionSection;
