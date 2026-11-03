import React from 'react';
import { ArrowUpRight, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from '../../components/home/Reveal';
import SectionHeading from '../../components/home/SectionHeading';

const advisers = [
  {
    name: 'Prof. R.O. Salawu',
    role: 'Strategic Development & Industry Partnerships',
    image: '/images/img_ellipse_2_2.png',
  },
  {
    name: 'Dr. J. Monday',
    role: 'Student Development & Curriculum Alignment',
    image: '/images/img_ellipse_2_3.png',
  },
  {
    name: 'Dr. Q.A. Lawal',
    role: 'Financial Research & Innovation',
    image: '/images/img_ellipse_2_4.png',
  },
];

const FacultySection: React.FC = () => {
  return (
    <section id="advisers" className="section section--light">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="Guided by experience"
            title="Faculty advisers."
            description="A quiet layer of support from people who understand both the institution and the industry."
            align="center"
          />
        </Reveal>
        <div className="adviser-grid">
          {advisers.map((adviser, index) => (
            <Reveal key={adviser.name} delay={index * 0.08}>
              <motion.article
                className="adviser-card"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="adviser-card__top">
                  <span className="adviser-tag">
                    <GraduationCap size={14} aria-hidden="true" /> Faculty Adviser
                  </span>
                  <ArrowUpRight size={18} aria-hidden="true" />
                </div>
                <img
                  src={adviser.image}
                  alt={adviser.name}
                  width="180"
                  height="180"
                  loading="lazy"
                />
                <h3>{adviser.name}</h3>
                <p>{adviser.role}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
