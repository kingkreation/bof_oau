import React from 'react';
import { ArrowRight, Eye, Flag, LineChart, ShieldCheck, Target, Users } from 'lucide-react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import FooterSection from '../Home/FooterSection';
import Reveal from '../../components/home/Reveal';
import SectionHeading from '../../components/home/SectionHeading';

const priorities = [
  { icon: LineChart, title: 'Make finance practical', copy: 'Bridge the distance between what students learn and the decisions professionals make.' },
  { icon: Users, title: 'Build an open community', copy: 'Create an environment where every faculty and every starting point has a place.' },
  { icon: ShieldCheck, title: 'Lead with integrity', copy: 'Develop technical excellence alongside the judgment, ethics, and care it requires.' },
];

const Mission: React.FC = () => {
  return (
    <>
      <Helmet><title>Our Mission — BOF OAU</title><meta name="description" content="Learn about BOF OAU's vision and mission for developing future financial leaders." /></Helmet>
      <Header />
      <main id="main-content">
        <section className="inner-page-hero inner-page-hero--compact"><div className="shell inner-page-hero__center"><Reveal><span className="eyebrow eyebrow--dark">The north star</span><h1>Our mission is to make potential practical.</h1><p>Empowering the next generation of African financial leaders through innovative education, practical experience, and industry connections.</p></Reveal></div></section>
        <section className="section section--light"><div className="shell mission-pair"><Reveal><article className="statement-card statement-card--dark"><div className="statement-card__top"><span>01</span><span className="icon-tile"><Target size={20} /></span></div><span className="card-eyebrow">Mission</span><h2>Opportunity should feel actionable.</h2><p>Empower students with practical financial skills, industry exposure, and leadership development through cutting-edge training, competitions, and networking opportunities.</p></article></Reveal><Reveal delay={0.1}><article className="statement-card statement-card--sage"><div className="statement-card__top"><span>02</span><span className="icon-tile"><Eye size={20} /></span></div><span className="card-eyebrow">Vision</span><h2>From OAU to the world.</h2><p>To be Africa&apos;s leading student-led finance organization, producing world-class financial professionals with technical expertise, innovative thinking, and ethical leadership.</p></article></Reveal></div></section>
        <section className="section section--dark"><div className="shell mission-practice"><div><Reveal><SectionHeading eyebrow="How we deliver it" title="Learn. Practice. Lead." description="The mission becomes real through consistent practice and an honest relationship with the world of finance." tone="dark" /></Reveal></div><div className="priority-list">{priorities.map((priority, index) => { const Icon = priority.icon; return <Reveal key={priority.title} delay={index * 0.08}><article className="priority-item"><span className="icon-tile"><Icon size={19} /></span><div><span>0{index + 1}</span><h3>{priority.title}</h3><p>{priority.copy}</p></div></article></Reveal>; })}</div></div></section>
        <section className="section section--sage"><div className="shell mission-image-layout"><Reveal><img src="/images/mission.JPG" alt="BOF OAU members collaborating" width="800" height="580" loading="lazy" /></Reveal><Reveal delay={0.1}><div><span className="eyebrow">A bigger picture</span><h2>Financial leadership is a responsibility.</h2><p>We want members to leave with more than a better CV. We want them to leave with the ability to ask better questions, make clearer decisions, and bring others with them.</p><a className="button button--primary" href="/#join">Become an Analyst <ArrowRight size={17} /></a></div></Reveal></div></section>
      </main>
      <FooterSection />
    </>
  );
};

export default Mission;

