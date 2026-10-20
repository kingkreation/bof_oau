import React from 'react';
import { Eye, Sparkles, Target } from 'lucide-react';
import Reveal from '../../components/home/Reveal';
import SectionHeading from '../../components/home/SectionHeading';

const VisionMissionSection: React.FC = () => {
  return (
    <section id="mission" className="section section--sage">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="Vision & mission"
            title="Technical edge. Human impact."
            description="The ambition is global. The starting point is a student who wants to do meaningful work."
            align="center"
          />
        </Reveal>
        <div className="vision-layout">
          <Reveal className="vision-image-card">
            <img
              src="/images/vission.JPG"
              alt="BOF OAU members collaborating during a finance session"
              width="860"
              height="600"
              loading="lazy"
            />
            <div className="vision-image-card__overlay">
              <span>01</span>
              <p>Learn with people who care about the work.</p>
            </div>
          </Reveal>
          <div className="vision-cards">
            <Reveal delay={0.08}>
              <article className="vision-card">
                <div className="vision-card__header">
                  <span className="vision-card__number">01</span>
                  <span className="icon-tile">
                    <Eye size={19} aria-hidden="true" />
                  </span>
                </div>
                <span className="card-eyebrow">Vision</span>
                <h3>Leading from OAU to Africa.</h3>
                <p>
                  To be Africa&apos;s leading student-led finance organization, producing
                  world-class financial professionals with technical expertise, innovative thinking,
                  and ethical leadership.
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.14}>
              <article className="vision-card vision-card--primary">
                <div className="vision-card__header">
                  <span className="vision-card__number">02</span>
                  <span className="icon-tile">
                    <Target size={19} aria-hidden="true" />
                  </span>
                </div>
                <span className="card-eyebrow">Mission</span>
                <h3>Make opportunity practical.</h3>
                <p>
                  Empower students with practical financial skills, industry exposure, and
                  leadership development through cutting-edge training, competitions, and networking
                  opportunities.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
        <div className="mission-note">
          <Sparkles size={16} aria-hidden="true" />
          <span>Curiosity is the only prerequisite.</span>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
