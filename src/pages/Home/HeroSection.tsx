import React from 'react';
import { ArrowDown, ArrowRight, BarChart3, Trophy, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from '../../components/home/Reveal';

const APPLICATION_URL = 'https://forms.gle/fDiLo3HFRZCsNpYz6';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-section__grid" aria-hidden="true" />
      <div className="shell hero-section__inner">
        <div className="hero-copy">
          <Reveal>
            <span className="eyebrow eyebrow--dark">
              Nigeria&apos;s first student-led finance club · Since 2011
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1>
              Empowering <span>Future Financial Leaders</span> at OAU
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="hero-lede">
              Join BOF OAU, Nigeria&apos;s premier student finance club, where passion meets
              opportunity. Together, we cultivate the next generation of financial professionals
              through innovative training and real-world experiences.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="hero-actions">
              <a
                className="button button--light"
                href={APPLICATION_URL}
                target="_blank"
                rel="noreferrer"
              >
                Become an Analyst <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a className="text-link text-link--light" href="#about">
                Learn more <ArrowDown size={16} aria-hidden="true" />
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="hero-proof" aria-label="BOF OAU highlights">
              <div>
                <strong>500+</strong>
                <span>engaged members</span>
              </div>
              <div>
                <strong>20+</strong>
                <span>competition victories</span>
              </div>
              <div>
                <strong>All</strong>
                <span>faculties welcome</span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="hero-visual-wrap" delay={0.12}>
          <div className="hero-visual">
            <div className="hero-visual__halo" aria-hidden="true" />
            <div className="hero-image-frame">
              <img
                src="/images/img_rectangle_7.png"
                alt="BOF OAU students and faculty advisers together"
                width="900"
                height="620"
                fetchPriority="high"
              />
              <div className="hero-image-frame__label">
                <span className="pulse-dot" /> Building what&apos;s next
              </div>
            </div>
            <motion.div
              className="float-card float-card--members"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="float-card__icon">
                <Users size={17} aria-hidden="true" />
              </span>
              <span>
                <strong>500+</strong>
                <small>members in motion</small>
              </span>
            </motion.div>
            <motion.div
              className="float-card float-card--wins"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
            >
              <span className="float-card__icon float-card__icon--accent">
                <Trophy size={17} aria-hidden="true" />
              </span>
              <span>
                <strong>20+</strong>
                <small>competition wins</small>
              </span>
            </motion.div>
            <div className="hero-chart-mark" aria-hidden="true">
              <BarChart3 size={25} />
            </div>
          </div>
        </Reveal>
      </div>

      <div className="shell trusted-row">
        <span>Learning beyond the classroom</span>
        <div className="trusted-chips" aria-label="Finance competition focus areas">
          <span>CFA Institute Challenges</span>
          <span>Corporate Strategy</span>
          <span>FinTech &amp; Innovation</span>
        </div>
      </div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to learn about BOF OAU">
        <span /> Scroll to explore
      </a>
    </section>
  );
};

export default HeroSection;
