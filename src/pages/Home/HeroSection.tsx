import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';

/**
 * HeroSection component
 * 
 * This is the main banner section displayed at the top of the home page.
 * It includes a headline, description, call-to-action buttons, and a hero image.
 * The component is fully responsive across different screen sizes.
 * 
 * @returns A hero section with headline, description, CTAs and image
 */
const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  
  /**
   * Navigate to Join Us page
   */
  const handleJoinClick = () => {
    navigate('/join-us');
  };
  
  /**
   * Navigate to About page for more information
   */
  const handleLearnMoreClick = () => {
    navigate('/about');
  };
  
  return (
    <section className="w-full bg-background-main pt-8 md:pt-12 lg:pt-16">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-start items-center w-full gap-[32px] sm:gap-[40px] md:gap-[52px]">
          {/* Hero Content */}
          <div className="flex flex-col justify-start items-center w-full max-w-[892px]">
            {/* Main Heading - Fixed line height to prevent text overlap */}
            <h1 className="w-full max-w-[892px] mx-auto [font-family:'Inter',Helvetica] font-normal  sm:leading-[62px] text-black text-[64px] text-center tracking-[0] leading-[normal] mb-8">
          Empowering Future Financial Leaders at OAU
        </h1>

            {/* Description - Improved readability with better line height */}
            <p className="w-full max-w-[713px] mx-auto [font-family:'Inter',Helvetica] font-normal text-black text-base text-center tracking-[0] leading-[normal] mb-10">
          Join BOF OAU, Nigeria&#39;s premier student finance club, where
          passion meets opportunity. Together, we cultivate the next generation
          of financial professionals through innovative training and real-world
          experiences.
        </p>

            {/* CTA Buttons - Improved mobile responsiveness */}
            <div className="mt-6 inline-block">
              <Button text="Become an Analyst" size="large" variant="outline" />
            </div>
          </div>

          <div className="w-full max-w-[1185px] mx-auto">
          <img
            className="w-full h-auto rounded-lg object-cover"
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
