import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import Reveal from '../../components/home/Reveal';
import SectionHeading from '../../components/home/SectionHeading';

const events = [
  {
    title: 'Finance 360 Conference',
    detail: 'A room full of questions, ideas, and the next generation of finance talent.',
    date: 'Annual conference',
    image: '/images/img_rectangle_3_226x378.png',
  },
  {
    title: 'FinTech Hackathon',
    detail: 'Building useful solutions at the intersection of finance and technology.',
    date: 'Innovation sprint',
    image: '/images/img_rectangle_4.png',
  },
  {
    title: 'Bi-weekly General Meetings',
    detail: 'The regular rhythm where members learn, share, and keep each other moving.',
    date: 'Community moments',
    image: '/images/img_rectangle_2.png',
  },
];

const EventsSection: React.FC = () => {
  const [viewportRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightboxIndex(null);
      if (event.key === 'ArrowRight')
        setLightboxIndex((current) => (current === null ? null : (current + 1) % events.length));
      if (event.key === 'ArrowLeft')
        setLightboxIndex((current) =>
          current === null ? null : (current - 1 + events.length) % events.length
        );
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxIndex]);

  return (
    <section id="events" className="section section--light">
      <div className="shell">
        <div className="carousel-heading">
          <Reveal>
            <SectionHeading
              eyebrow="In the room"
              title="Event highlights."
              description="Explore our vibrant moments from key finance events."
            />
          </Reveal>
          <div className="carousel-controls" aria-label="Events carousel controls">
            <button
              className="icon-button icon-button--outline"
              type="button"
              aria-label="Previous event"
              onClick={() => emblaApi?.scrollPrev()}
            >
              <ChevronLeft size={19} />
            </button>
            <button
              className="icon-button icon-button--solid"
              type="button"
              aria-label="Next event"
              onClick={() => emblaApi?.scrollNext()}
            >
              <ChevronRight size={19} />
            </button>
          </div>
        </div>
        <Reveal className="embla-wrap events-carousel" delay={0.08}>
          <div className="embla__viewport" ref={viewportRef}>
            <div className="embla__container">
              {events.map((event, index) => (
                <div
                  className={
                    'embla__slide event-slide ' + (selectedIndex === index ? 'is-selected' : '')
                  }
                  key={event.title}
                >
                  <button
                    className="event-card"
                    type="button"
                    aria-label={'Open photo for ' + event.title}
                    onClick={() => setLightboxIndex(index)}
                  >
                    <img
                      src={event.image}
                      alt={event.title}
                      width="900"
                      height="580"
                      loading="lazy"
                    />
                    <span className="event-card__shade" />
                    <span className="event-card__expand">
                      <Maximize2 size={17} aria-hidden="true" />
                    </span>
                    <span className="event-card__caption">
                      <small>{event.date}</small>
                      <strong>{event.title}</strong>
                      <span>{event.detail}</span>
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <div className="carousel-dots" aria-label="Choose event slide">
          {events.map((event, index) => (
            <button
              key={event.title}
              type="button"
              className={selectedIndex === index ? 'is-active' : ''}
              aria-label={'Show ' + event.title}
              aria-current={selectedIndex === index}
              onClick={() => emblaApi?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
      {lightboxIndex !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={events[lightboxIndex].title}
          onClick={() => setLightboxIndex(null)}
        >
          <button
            className="icon-button lightbox__close"
            type="button"
            aria-label="Close image viewer"
            onClick={() => setLightboxIndex(null)}
          >
            <X size={22} />
          </button>
          <img
            src={events[lightboxIndex].image}
            alt={events[lightboxIndex].title}
            onClick={(event) => event.stopPropagation()}
          />
          <div className="lightbox__caption">
            <small>{events[lightboxIndex].date}</small>
            <strong>{events[lightboxIndex].title}</strong>
          </div>
        </div>
      )}
    </section>
  );
};

export default EventsSection;
