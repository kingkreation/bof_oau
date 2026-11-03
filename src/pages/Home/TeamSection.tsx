import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from '../../components/home/Reveal';
import SectionHeading from '../../components/home/SectionHeading';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const team: TeamMember[] = [
  { name: 'Adurasanmi David', role: 'VP, Research', image: '/images/img_ellipse_2.jpg' },
  { name: 'Deborah Okesanjo', role: 'VP, Operations', image: '/images/img_ellipse_3.jpg' },
  {
    name: 'Abdulquadri Fasasi',
    role: 'Head, Corporate Strategy & Branding',
    image: '/images/img_ellipse_4.jpg',
  },
  {
    name: 'Favour Abanum',
    role: 'Head, Financial Technology',
    image: '/images/img_ellipse_1_108x108.jpg',
  },
  {
    name: 'Adekunle Okunniyi',
    role: 'Head, Investment Banking & Alternative Investments',
    image: '/images/img_ellipse_2_108x108.jpg',
  },
  {
    name: 'Eniola Oyebode',
    role: 'Head, Energy & Infrastructure',
    image: '/images/img_ellipse_3_108x108.jpg',
  },
  {
    name: 'Shukurat Azeez',
    role: 'Head, Financial Operations',
    image: '/images/img_ellipse_4_108x108.jpg',
  },
  {
    name: 'Jumoke Akande',
    role: 'Head, Management Consulting',
    image: '/images/img_ellipse_1_1.jpg',
  },
  {
    name: 'Enoch Eyiaro',
    role: 'Head, Research & Academics',
    image: '/images/img_ellipse_2_1.jpg',
  },
  {
    name: 'Simeon Olalude',
    role: 'Head, Public Engagements',
    image: '/images/img_ellipse_3_1.jpg',
  },
  {
    name: 'Roqeeb Sorunke',
    role: 'Head, Sales & Trading',
    image: '/images/img_ellipse_4_92x86.jpg',
  },
  { name: 'Faith Adeniji', role: 'Head, Program & Event', image: '/images/img_ellipse_4_1.jpg' },
];

const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <motion.article className="team-card" whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
    <div className="team-card__image">
      <img src={member.image} alt={member.name} width="320" height="400" loading="lazy" />
      <a
        className="team-card__linkedin"
        href="https://www.linkedin.com/company/the-students-professional-bureau-of-finance-oau-ife/"
        target="_blank"
        rel="noreferrer"
        aria-label={'Open ' + member.name + "'s LinkedIn"}
      >
        <Linkedin size={15} />
      </a>
    </div>
    <div className="team-card__copy">
      <h3>{member.name}</h3>
      <p>{member.role}</p>
    </div>
  </motion.article>
);

const TeamSection: React.FC = () => {
  const [viewportRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <section id="team" className="section section--dark team-section">
      <div className="shell">
        <div className="carousel-heading carousel-heading--team">
          <Reveal>
            <SectionHeading
              eyebrow="The people"
              title="Meet the team."
              description="Passionate individuals doing the thinking, building the systems, and moving the bureau forward."
              tone="dark"
            />
          </Reveal>
          <div className="carousel-controls" aria-label="Team carousel controls">
            <button
              className="icon-button icon-button--dark-outline"
              type="button"
              aria-label="Previous team member"
              onClick={() => emblaApi?.scrollPrev()}
            >
              <ChevronLeft size={19} />
            </button>
            <button
              className="icon-button icon-button--dark-solid"
              type="button"
              aria-label="Next team member"
              onClick={() => emblaApi?.scrollNext()}
            >
              <ChevronRight size={19} />
            </button>
          </div>
        </div>
        <div className="team-featured">
          <Reveal className="team-featured__portrait">
            <img
              src="/images/img_ellipse_1.jpg"
              alt="Esther Mac-Sanddy, CEO of BOF OAU"
              width="520"
              height="650"
              loading="lazy"
            />
            <span className="team-featured__tag">CEO · 2024/25</span>
          </Reveal>
          <Reveal className="team-featured__copy" delay={0.08}>
            <span className="card-eyebrow">Featured leader</span>
            <h3>Esther Mac-Sanddy</h3>
            <p className="team-featured__role">Chief Executive Officer</p>
            <p>
              Leading with the conviction that the strongest finance professionals are also
              excellent listeners, collaborators, and citizens.
            </p>
            <a className="text-link text-link--light" href="#join">
              Meet the next class <ChevronRight size={16} />
            </a>
          </Reveal>
        </div>
        <Reveal className="embla-wrap team-carousel" delay={0.12}>
          <div className="embla__viewport" ref={viewportRef}>
            <div className="embla__container">
              {team.map((member) => (
                <div className="embla__slide team-slide" key={member.name}>
                  <TeamCard member={member} />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <div className="carousel-progress-row">
          <span>
            {String(selectedIndex + 1).padStart(2, '0')} / {String(team.length).padStart(2, '0')}
          </span>
          <div className="progress-track">
            <span style={{ width: ((selectedIndex + 1) / team.length) * 100 + '%' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
