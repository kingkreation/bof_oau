import React, { useState } from 'react';
import { ChevronDown, Mail, Plus } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Reveal from '../../components/home/Reveal';
import SectionHeading from '../../components/home/SectionHeading';

const questions = [
  {
    question: 'What is BOF?',
    answer:
      "BOF is Nigeria's first student-led finance organisation at OAU, founded in 2011 and focused on practical finance skills, not just theory.",
  },
  {
    question: 'How to become a member?',
    answer:
      'To become a member, you must be an OAU student with a passion for finance. Fill out the application form available through our Become an Analyst links. Our team will review your application and get back to you.',
  },
  {
    question: 'What training programs are available?',
    answer:
      'We offer workshops on investment research, financial modelling, corporate strategy, financial technology, and industry-specific seminars. Members also gain access to mentorship and practice-led projects.',
  },
  {
    question: 'What are your achievements?',
    answer:
      'BOF OAU has celebrated over 20 major competition victories and consistent top-three finishes in global finance competitions, including the CFA Research Challenge.',
  },
  {
    question: 'What are the benefits?',
    answer:
      'Members get access to workshops, competitions, networking events, leadership opportunities, practical projects, and a community of ambitious people.',
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section section--sage">
      <div className="shell faq-layout">
        <div className="faq-intro">
          <Reveal>
            <SectionHeading
              eyebrow="Questions, answered"
              title="FAQs"
              description="Here are answers to the common questions asked."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <a className="faq-contact-card" href="mailto:bureauoffinance@gmail.com">
              <span className="icon-tile">
                <Mail size={18} aria-hidden="true" />
              </span>
              <span>
                <strong>Still have questions?</strong>
                <small>Contact us directly</small>
              </span>
              <ChevronDown size={17} className="faq-contact-card__arrow" aria-hidden="true" />
            </a>
          </Reveal>
        </div>
        <div className="faq-list">
          {questions.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={item.question} delay={index * 0.05}>
                <div className={'faq-item ' + (isOpen ? 'is-open' : '')}>
                  <button
                    type="button"
                    className="faq-question"
                    aria-expanded={isOpen}
                    aria-controls={'faq-answer-' + index}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span>
                      <small>0{index + 1}</small>
                      {item.question}
                    </span>
                    <Plus size={19} aria-hidden="true" className="faq-plus" />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={'faq-answer-' + index}
                        className="faq-answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <p>{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
