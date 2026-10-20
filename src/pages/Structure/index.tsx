import React from 'react';
import { ArrowRight, BarChart3, BriefcaseBusiness, Building2, CandlestickChart, Megaphone, Search, Sparkles } from 'lucide-react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import FooterSection from '../Home/FooterSection';
import Reveal from '../../components/home/Reveal';
import SectionHeading from '../../components/home/SectionHeading';

const departments = [
  { icon: Search, name: 'Research & Academics', copy: 'The analytical engine: research notes, learning sessions, and the questions that sharpen our thinking.' },
  { icon: BriefcaseBusiness, name: 'Investment Banking & Alternatives', copy: 'Building commercial awareness through valuation, transactions, and structured problem-solving.' },
  { icon: CandlestickChart, name: 'Sales & Trading', copy: 'Understanding markets, narratives, and the pace of decisions in motion.' },
  { icon: BarChart3, name: 'Financial Operations', copy: 'Making the systems behind the bureau as thoughtful as the work in front of it.' },
  { icon: Megaphone, name: 'Public Engagements', copy: 'Connecting BOF OAU to the people, partners, and communities around us.' },
  { icon: Building2, name: 'Corporate Strategy & Branding', copy: 'Protecting the identity and translating our ambition into a clear public presence.' },
];

const Structure: React.FC = () => {
  return (
    <>
      <Helmet><title>Our Structure — BOF OAU</title><meta name="description" content="Explore the departments and people that make BOF OAU work." /></Helmet>
      <Header />
      <main id="main-content">
        <section className="inner-page-hero inner-page-hero--compact"><div className="shell inner-page-hero__layout"><Reveal><span className="eyebrow eyebrow--dark">How we work</span><h1>A structure that turns curiosity into practice.</h1><p>BOF OAU is a cross-functional community. Every department gives students a different way to build, contribute, and lead.</p></Reveal><Reveal className="inner-page-hero__visual inner-page-hero__visual--small" delay={0.1}><img src="/images/img_rectangle_3.png" alt="BOF OAU event" width="760" height="540" /><span>One bureau · many paths</span></Reveal></div></section>
        <section className="section section--light"><div className="shell"><Reveal><SectionHeading eyebrow="Our departments" title="Find the room where your edge gets sharper." description="No single background defines a finance professional. Our structure makes space for different strengths and shared standards." align="center" /></Reveal><div className="structure-grid">{departments.map((department, index) => { const Icon = department.icon; return <Reveal key={department.name} delay={index * 0.05}><article className="structure-card"><div className="structure-card__top"><span className="icon-tile"><Icon size={20} /></span><span>0{index + 1}</span></div><h3>{department.name}</h3><p>{department.copy}</p><a className="text-link" href="/#join">Explore the bureau <ArrowRight size={15} /></a></article></Reveal>; })}</div></div></section>
        <section className="section section--sage"><div className="shell structure-people"><Reveal><div><span className="eyebrow">The operating principle</span><h2>Different functions. One standard.</h2><p>Every department collaborates on events, competitions, and learning. That is how individual skills become collective capability.</p><a className="button button--primary" href="/#team">Meet the team <ArrowRight size={17} /></a></div></Reveal><Reveal className="structure-quote" delay={0.1}><Sparkles size={24} /><blockquote>“The best work happens when the room is ambitious and generous at the same time.”</blockquote><span>— The BOF OAU way</span></Reveal></div></section>
      </main>
      <FooterSection />
    </>
  );
};

export default Structure;

