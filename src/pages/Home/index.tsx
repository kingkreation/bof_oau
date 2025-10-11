import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import EvolutionSection from './EvolutionSection';
import VisionMissionSection from './VisionMissionSection';
import AchievementsSection from './AchievementsSection';
import TeamSection from './TeamSection';
import FacultySection from './FacultySection';
import FAQSection from './FAQSection';
import EventsSection from './EventsSection';
import ContactSection from './ContactSection';
import FooterSection from './FooterSection';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>BOF OAU - Leading Business & Finance Student Organization in Africa | Empowering Future Financial Leaders</title>
        <meta
          name="description"
          content="Join BOF OAU, Africa's premier Business and Finance student organization at Obafemi Awolowo University. Founded in 2011, we empower students with practical financial skills, industry exposure, and leadership development through cutting-edge training, competitions, and networking opportunities. Meet our accomplished team, explore our achievements, and discover how to become part of Nigeria's first student-led finance club."
        />
        <meta property="og:title" content="BOF OAU - Leading Business & Finance Student Organization in Africa | Empowering Future Financial Leaders" />
        <meta property="og:description" content="Join BOF OAU, Africa's premier Business and Finance student organization at Obafemi Awolowo University. Founded in 2011, we empower students with practical financial skills, industry exposure, and leadership development through cutting-edge training, competitions, and networking opportunities." />
      </Helmet>

      <main className="w-full bg-background-main">
        <HeroSection />
        <AboutSection />
        <EvolutionSection />
        <VisionMissionSection />
        <AchievementsSection />
        <TeamSection />
        <FacultySection />
        <FAQSection />
        <EventsSection />
        <ContactSection />
        <FooterSection />
      </main>
    </>
  );
};

export default Home;