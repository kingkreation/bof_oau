import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';

// Import all section components
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

/**
 * Home page component
 * 
 * This is the main landing page of the BOF OAU website.
 * It includes multiple sections showcasing different aspects of the organization
 * such as about information, team members, achievements, and contact details.
 * 
 * @returns The complete home page with all sections
 */
const Home: React.FC = () => {
  return (
    <>
      {/* SEO metadata */}
      <Helmet>
        <title>BOF OAU - Leading Business & Finance Student Organization in Africa | Empowering Future Financial Leaders</title>
        <meta
          name="description"
          content="Join BOF OAU, Africa's premier Business and Finance student organization at Obafemi Awolowo University. Founded in 2011, we empower students with practical financial skills, industry exposure, and leadership development through cutting-edge training, competitions, and networking opportunities. Meet our accomplished team, explore our achievements, and discover how to become part of Nigeria's first student-led finance club."
        />
        <meta property="og:title" content="BOF OAU - Leading Business & Finance Student Organization in Africa | Empowering Future Financial Leaders" />
        <meta property="og:description" content="Join BOF OAU, Africa's premier Business and Finance student organization at Obafemi Awolowo University. Founded in 2011, we empower students with practical financial skills, industry exposure, and leadership development through cutting-edge training, competitions, and networking opportunities." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bofoau.org" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Page header */}
      <Header />

      {/* Main content */}
      <main className="w-full bg-background-main">
        {/* Hero section - First visual element visitors see */}
        <HeroSection />
        
        {/* About section - Introduction to the organization */}
        <AboutSection />
        
        {/* Evolution section - History and growth */}
        <EvolutionSection />
        
        {/* Vision & Mission - Organizational goals */}
        <VisionMissionSection />
        
        {/* Achievements - Showcasing success */}
        <AchievementsSection />
        
        {/* Team section - Leadership and members */}
        <TeamSection />
        
        {/* Faculty section - Academic support */}
        <FacultySection />
        
        {/* FAQ section - Common questions */}
        <FAQSection />
        
        {/* Events section - Past and upcoming events */}
        <EventsSection />
        
        {/* Contact section - Get in touch */}
        <ContactSection />
        
        {/* Footer section - Site navigation and info */}
        <FooterSection />
      </main>
    </>
  );
};

export default Home;