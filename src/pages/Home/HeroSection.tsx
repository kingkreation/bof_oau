import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  
  // updated to point to external Medium page
  const handleBecomeAnalyst = () => {
    window.location.href = 'https://forms.gle/fDiLo3HFRZCsNpYz6';
  };
  
  return (
    <section className="w-full bg-background-main pt-8 md:pt-12 lg:pt-16">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-start items-center w-full gap-[32px] sm:gap-[40px] md:gap-[52px]">
          {/* Hero Content */}
          <div className="flex flex-col justify-start items-center w-full max-w-[892px]">
            {/* Main Heading */}
            <h1 className="w-full max-w-[892px] mx-auto text-center text-text-primary mb-8">
          Empowering Future Financial Leaders at OAU
        </h1>

            <p className="w-full max-w-[713px] mx-auto font-normal text-black text-base text-center tracking-[0] leading-[normal] mb-10">
          Join BOF OAU, Nigeria&#39;s premier student finance club, where
          passion meets opportunity. Together, we cultivate the next generation
          of financial professionals through innovative training and real-world
          experiences.
        </p>

            <div className="mt-6 inline-block">
              <Button text="Become an Analyst" size="large" variant="outline" onClick={handleBecomeAnalyst} />
            </div>
          </div>

          <div className="w-full max-w-[1185px] mx-auto">
          <img
            className="w-full h-auto rounded object-cover"
            alt="Faculty advisors and students at OAU"
            src="/images/img_rectangle_7.png" 
          />
        </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;