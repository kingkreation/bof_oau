import React from 'react';
import { ArrowRight, BookOpen, BriefcaseBusiness, HeartHandshake, Lightbulb, Trophy } from 'lucide-react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import FooterSection from '../Home/FooterSection';
import ContactSection from '../Home/ContactSection';
import Reveal from '../../components/home/Reveal';
import SectionHeading from '../../components/home/SectionHeading';

const programs = [
  { icon: BriefcaseBusiness, title: 'Finance 360 Conference', copy: 'A flagship room for conversations that make the finance industry feel closer and more human.' },
  { icon: Lightbulb, title: 'FinTech Hackathon', copy: 'A practical sprint for students who want to turn a sharp problem into a useful product.' },
  { icon: Trophy, title: 'Case competitions', copy: 'High-pressure practice that teaches research, communication, and the confidence to present.' },
];

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About BOF OAU — The story behind the bureau</title>
        <meta name="description" content="Discover the story, programs, and community behind BOF OAU, Nigeria's first student-led finance club." />
      </Helmet>
      <Header />
      <main id="main-content">
        <section className="inner-page-hero">
          <div className="shell inner-page-hero__layout">
            <Reveal><span className="eyebrow eyebrow--dark">About the bureau</span><h1>A serious start for a meaningful career.</h1><p>BOF OAU is Nigeria&apos;s first student-led finance club, built by students who wanted more from the classroom and more from themselves.</p></Reveal>
            <Reveal className="inner-page-hero__visual" delay={0.1}><img src="/images/img_rectangle_7.png" alt="BOF OAU students and faculty advisers" width="850" height="600" /><span>Est. 2011 · Ile-Ife</span></Reveal>
          </div>
        </section>
        <section className="section section--light">
          <div className="shell story-layout">
            <Reveal className="story-image"><img src="/images/img_rectangle_2.png" alt="BOF OAU members learning in a workshop" width="760" height="650" loading="lazy" /><span>Finance is a team sport.</span></Reveal>
            <Reveal delay={0.1}><SectionHeading eyebrow="Our beginning" title="Built for the gap between theory and practice." description="What started in 2011 as a student-led initiative has grown into a community of analysts, builders, researchers, and leaders. Every program is designed to make the next step feel more possible." /><div className="story-points"><div><strong>500+</strong><span>students reached</span></div><div><strong>20+</strong><span>competition wins</span></div><div><strong>All</strong><span>faculties welcome</span></div></div><a className="text-link" href="/#join">Find your next step <ArrowRight size={16} /></a></Reveal>
          </div>
        </section>
        <section className="section section--sage">
          <div className="shell"><Reveal><SectionHeading eyebrow="What we do" title="A platform for better questions." description="The bureau connects education, experience, and people through a few focused programs." align="center" /></Reveal><div className="program-grid">{programs.map((program, index) => { const Icon = program.icon; return <Reveal key={program.title} delay={index * 0.07}><article className="program-card"><span className="icon-tile"><Icon size={20} /></span><span className="card-eyebrow">0{index + 1}</span><h3>{program.title}</h3><p>{program.copy}</p></article></Reveal>; })}</div></div>
        </section>
        <section className="section section--dark about-belief"><div className="shell belief-layout"><Reveal><span className="eyebrow eyebrow--dark">What we believe</span><h2>Ambition grows faster when it is shared.</h2></Reveal><Reveal delay={0.1}><div className="belief-card"><HeartHandshake size={24} /><p>We make room for different backgrounds, different faculties, and different starting points. The standard stays high. The invitation stays open.</p><a className="text-link text-link--light" href="/#join">Join the community <ArrowRight size={16} /></a></div></Reveal></div></section>
        <ContactSection />
      </main>
      <FooterSection />
    </>
  );
};

export default About;

