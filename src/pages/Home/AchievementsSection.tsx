import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { BadgeCheck, ChevronLeft, ChevronRight, Medal } from 'lucide-react';
import Reveal from '../../components/home/Reveal';
import SectionHeading from '../../components/home/SectionHeading';

const achievements = [
  {
    title: 'CFA Institute Challenges',
    category: 'Research & valuation',
    description: 'Building investment theses that hold up under pressure.',
    image: '/images/img_.png',
    badge: 'Top-three finisher',
  },
  {
    title: 'Corporate Strategy & M&A',
    category: 'Strategy',
    description: 'Turning complex business cases into clear decisions.',
    image: '/images/img_88x64.png',
    badge: 'Competition ready',
  },
  {
    title: 'FinTech & Innovation',
    category: 'Technology',
    description: 'Exploring where finance, data, and product meet.',
    image: '/images/img_1.png',
    badge: 'Innovation track',
  },
  {
    title: 'And others…',
    category: 'The next chapter',
    description: 'Every challenge is a new opportunity to learn, lead, and leave a mark.',
    image: '/images/img_game_icons_impact_point.svg',
    badge: 'Still counting',
  },
];

const AchievementsSection: React.FC = () => {
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
    <section id="achievements" className="section section--light">
      <div className="shell">
        <div className="carousel-heading">
          <Reveal>
            <SectionHeading
              eyebrow="Proof of practice"
              title="Over 20 major competition victories and counting."
              description="The wins matter. The learning, confidence, and collaborators we bring home matter more."
            />
          </Reveal>
          <div className="carousel-controls" aria-label="Achievements carousel controls">
            <button
              className="icon-button icon-button--outline"
              type="button"
              aria-label="Previous achievement"
              onClick={() => emblaApi?.scrollPrev()}
            >
              <ChevronLeft size={19} />
            </button>
            <button
              className="icon-button icon-button--solid"
              type="button"
              aria-label="Next achievement"
              onClick={() => emblaApi?.scrollNext()}
            >
              <ChevronRight size={19} />
            </button>
          </div>
        </div>
        <Reveal className="embla-wrap" delay={0.08}>
          <div className="embla__viewport" ref={viewportRef}>
            <div className="embla__container">
              {achievements.map((item) => (
                <div className="embla__slide achievement-slide" key={item.title}>
                  <article className="achievement-card">
                    <div className="achievement-card__visual">
                      <img src={item.image} alt="" width="120" height="120" loading="lazy" />
                      <span className="achievement-card__index">
                        <Medal size={14} aria-hidden="true" /> BOF OAU
                      </span>
                    </div>
                    <div className="achievement-card__body">
                      <span className="card-eyebrow">{item.category}</span>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <span className="status-badge">
                        <BadgeCheck size={14} aria-hidden="true" /> {item.badge}
                      </span>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <div className="carousel-dots" aria-label="Choose achievement slide">
          {achievements.map((item, index) => (
            <button
              key={item.title}
              type="button"
              className={selectedIndex === index ? 'is-active' : ''}
              aria-label={`Show achievement ${index + 1}`}
              aria-current={selectedIndex === index}
              onClick={() => emblaApi?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
