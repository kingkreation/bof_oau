import React from 'react';
import Header from '../../components/common/Header';
import Button from '../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="w-full bg-background-main">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-start items-center w-full gap-[32px] sm:gap-[40px] md:gap-[52px]">
          {/* Header */}
          <Header />

          {/* Hero Content */}
          <div className="flex flex-col justify-start items-center w-full max-w-[892px] gap-[24px] sm:gap-[32px] md:gap-[48px] mt-[14px]">
            {/* Main Heading */}
            <h1 className="text-[32px] sm:text-[48px] md:text-[56px] lg:text-2xl font-normal leading-[38px] sm:leading-[58px] md:leading-[68px] lg:leading-extra-loose text-center text-text-primary font-[Inter] w-full">
              Empowering Future Financial Leaders at OAU
            </h1>

            {/* Description */}
            <p className="text-base font-normal leading-tight text-center text-text-primary font-[Inter] w-full max-w-[836px] mt-[8px] px-[28px] sm:px-[40px] md:px-[56px]">
              Join BOF OAU, Nigeria's premier student finance club, where passion meets opportunity. Together, we cultivate the next generation of financial professionals through innovative training and real-world experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-[16px] sm:gap-[24px] w-full sm:w-auto mt-[22px] sm:mt-[32px] md:mt-[54px]">
              <Button
                text="Join Us"
                text_font_size="16"
                text_font_family="Inter"
                text_font_weight="400"
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
                padding="8px"
                className="w-full sm:w-auto min-w-[100px]"
                onClick={() => {}}
              />
              <Button
                text="Learn More"
                text_font_size="16"
                text_font_family="Inter"
                text_font_weight="400"
                text_line_height="20px"
                text_text_align="center"
                text_color="#000000"
                fill_background_color="transparent"
                border_border="2px solid #00713a"
                border_border_radius="8px"
                layout_width="auto"
                position="relative"
                margin="0"
                variant="secondary"
                size="medium"
                padding="8px"
                className="w-full sm:w-auto min-w-[100px]"
                onClick={() => {}}
              />
            </div>
          </div>

          {/* Hero Image Stack */}
          <div className="relative w-full max-w-[1228px] h-[300px] sm:h-[400px] md:h-[546px] mt-[24px] sm:mt-[32px] md:mt-[48px]">
            {/* Background Shadow */}
            <div className="absolute inset-0 top-[60px] sm:top-[80px] md:top-[111px] w-full h-[240px] sm:h-[320px] md:h-[434px] bg-primary-light rounded-sm shadow-[0px_4px_100px_#888888ff]"></div>
            
            {/* Main Image */}
            <img 
              src="/images/img_rectangle_7.png" 
              alt="BOF OAU Team" 
              className="absolute top-0 left-[16px] sm:left-[20px] md:left-[23px] w-[calc(100%-32px)] sm:w-[calc(100%-40px)] md:w-[calc(100%-46px)] h-[260px] sm:h-[360px] md:h-[472px] object-cover rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;