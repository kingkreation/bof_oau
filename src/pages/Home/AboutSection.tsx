import React from 'react';
import { ArrowRight, BookOpen, UsersRound } from 'lucide-react';
import Reveal from '../../components/home/Reveal';
import SectionHeading from '../../components/home/SectionHeading';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section section--light">
      <div className="shell about-layout">
        <Reveal className="about-image-wrap">
          <div className="about-image-accent" aria-hidden="true" />
          <img
            src="/images/img_rectangle_2.png"
            alt="BOF OAU members learning together at a financial workshop"
            width="720"
            height="820"
            loading="lazy"
          />
          <span className="image-caption">Learning in public · Growing together</span>
        </Reveal>
        <Reveal className="about-copy" delay={0.1}>
          <SectionHeading
            eyebrow="About BOF OAU"
            title="Leading Student Finance Organization in Africa"
            description="BOF OAU is Nigeria's first student-led finance club, uniting passionate students from all faculties. Our mission is to equip future financial leaders with the skills and experience needed to excel in today's competitive landscape."
          />
          <div className="feature-grid">
            <article className="feature-card">
              <span className="feature-card__icon">
                <BookOpen size={20} aria-hidden="true" />
              </span>
              <h3>Finance education and growth</h3>
              <p>Unparalleled finance education, practical tools, and room to grow.</p>
            </article>
            <article className="feature-card">
              <span className="feature-card__icon">
                <UsersRound size={20} aria-hidden="true" />
              </span>
              <h3>A vibrant community</h3>
              <p>A connected community where ambition meets opportunity.</p>
            </article>
          </div>
          <a className="text-link" href="#join">
            Join the bureau <ArrowRight size={16} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default AboutSection;
