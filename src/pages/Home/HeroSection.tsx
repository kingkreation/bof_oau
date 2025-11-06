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
          <div className="flex flex-col justify-start items-center w-full max-w-[892px] gap-[24px] sm:gap-[32px] md:gap-[48px]">
            {/* Main Heading - Fixed line height to prevent text overlap */}
            <h1 className="w-full max-w-[892px] mx-auto [font-family:'Inter',Helvetica] font-normal text-black text-[64px] text-center tracking-[0] leading-[normal] mb-8">
          Empowering Future Financial Leaders at OAU
        </h1>

            {/* Description - Improved readability with better line height */}
            <p className="w-full max-w-[713px] mx-auto [font-family:'Inter',Helvetica] font-normal text-black text-base text-center tracking-[0] leading-[normal] mb-8">
          Join BOF OAU, Nigeria&#39;s premier student finance club, where
          passion meets opportunity. Together, we cultivate the next generation
          of financial professionals through innovative training and real-world
          experiences.
        </p>

            {/* CTA Buttons - Improved mobile responsiveness */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-[16px] sm:gap-[24px] w-full sm:w-auto mt-[22px] sm:mt-[32px] md:mt-[54px]">
              <Button
                text="Join Us"
                text_font_size="16"
                text_font_family="Inter"
                text_font_weight="500"
                text_line_height="20px"
                text_text_align="center"
                text_color="#000000"
                fill_background_color="#00713acc"
                border_border="none"
                border_border_radius="8px"
                layout_width="auto"
                position="relative"
                margin="0"
                variant="primary"
                size="medium"
                padding="12px 24px"
                className="w-full sm:w-auto min-w-[140px] hover:bg-primary-background transition-colors duration-200"
                onClick={handleJoinClick}
              />
              <Button
                text="Learn More"
                text_font_size="16"
                text_font_family="Inter"
                text_font_weight="500"
                text_line_height="20px"
                text_text_align="center"
                text_color="#00713a"
                fill_background_color="transparent"
                border_border="2px solid #00713a"
                border_border_radius="8px"
                layout_width="auto"
                position="relative"
                margin="0"
                variant="outline"
                size="medium"
                padding="12px 24px"
                className="w-full sm:w-auto min-w-[140px] hover:bg-primary-light hover:bg-opacity-10 transition-colors duration-200"
                onClick={handleLearnMoreClick}
              />
            </div>
          </div>

          {/* Hero Image Stack - Fixed shadow and improved responsiveness */}
          <div className="relative w-full max-w-[1228px] h-[300px] sm:h-[400px] md:h-[546px] mt-[24px] sm:mt-[32px] md:mt-[48px] mb-8 md:mb-12">
            {/* Background Shadow - Improved shadow effect */}
            <div className="absolute inset-0 top-[60px] sm:top-[80px] md:top-[111px] w-full h-[240px] sm:h-[320px] md:h-[434px] bg-primary-light rounded-lg shadow-lg"></div>
            
            {/* Main Image - Added loading optimization and improved alt text */}
            <img 
              src="/images/img_rectangle_7.png" 
              alt="BOF OAU Team Members at a Financial Conference" 
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-32px)] sm:w-[calc(100%-40px)] md:w-[calc(100%-46px)] h-[260px] sm:h-[360px] md:h-[472px] object-cover rounded-lg"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
