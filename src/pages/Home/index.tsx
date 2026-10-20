import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import EvolutionSection from './EvolutionSection';
import VisionMissionSection from './VisionMissionSection';
import AchievementsSection from './AchievementsSection';
import TeamSection from './TeamSection';
import FacultySection from './FacultySection';
import FAQSection from './FAQSection';
import EventsSection from './EventsSection';
import JoinCtaSection from './JoinCtaSection';
import ContactSection from './ContactSection';
import FooterSection from './FooterSection';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>BOF OAU — Empowering Future Financial Leaders</title>
        <meta
          name="description"
          content="BOF OAU is Nigeria's first student-led finance club. Build practical skills, find your people, and become the next generation of financial leaders."
        />
        <meta property="og:title" content="BOF OAU — Empowering Future Financial Leaders" />
        <meta
          property="og:description"
          content="Nigeria's first student-led finance club at Obafemi Awolowo University."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bofoau.org" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Header />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <EvolutionSection />
        <VisionMissionSection />
        <AchievementsSection />
        <TeamSection />
        <FacultySection />
        <FAQSection />
        <EventsSection />
        <JoinCtaSection />
        <ContactSection />
      </main>
      <FooterSection />
    </>
  );
};

export default Home;
