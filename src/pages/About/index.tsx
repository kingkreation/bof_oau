import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from './HeroSection';
import FoundingStorySection from './FoundingStorySection';
import EventsProgramsSection from './EventsProgramsSection';
import Footer from '../../components/common/Footer';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - BOF OAU | Nigeria's Premier Student Finance Organization Since 2011</title>
        <meta
          name="description"
          content="Discover BOF OAU's founding story from 2011, our flagship Finance 360° Conference, FinTech Hackathon, and alumni success stories. Join Nigeria's first student-led finance bureau at Obafemi Awolowo University empowering future financial leaders."
        />
        <meta property="og:title" content="About Us - BOF OAU | Nigeria's Premier Student Finance Organization Since 2011" />
        <meta property="og:description" content="Discover BOF OAU's founding story from 2011, our flagship Finance 360° Conference, FinTech Hackathon, and alumni success stories. Join Nigeria's first student-led finance bureau at Obafemi Awolowo University empowering future financial leaders." />
      </Helmet>

      <main className="w-full bg-background-main">
        <HeroSection />
        <FoundingStorySection />
        <EventsProgramsSection />
        <Footer />
      </main>
    </>
  );
};

export default About;