import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from '../../components/home/Reveal';

const APPLICATION_URL = 'https://forms.gle/fDiLo3HFRZCsNpYz6';

const JoinCtaSection: React.FC = () => {
  return (
    <section id="join" className="join-section">
      <div className="join-section__grid" aria-hidden="true" />
      <div className="shell join-layout">
        <Reveal>
          <span className="eyebrow eyebrow--dark">Your next chapter</span>
          <h2>Become part of a legacy that shapes future finance leaders.</h2>
          <p>Open to all OAU students with a passion for finance.</p>
          <a
            className="button button--light"
            href={APPLICATION_URL}
            target="_blank"
            rel="noreferrer"
          >
            Become an Analyst <ArrowRight size={17} aria-hidden="true" />
          </a>
        </Reveal>
        <Reveal className="join-steps" delay={0.1}>
          <span className="join-steps__label">A simple way in</span>
          {[
            ['01', 'Apply online'],
            ['02', 'Application review'],
            ['03', 'Welcome to BOF'],
          ].map(([number, label], index) => (
            <motion.div
              className="join-step"
              key={label}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <span>{number}</span>
              <strong>{label}</strong>
              {index < 2 && <Check size={15} aria-hidden="true" />}
            </motion.div>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default JoinCtaSection;
