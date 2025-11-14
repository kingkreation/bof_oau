import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';

/**
 * AboutSection component
 * 
 * This section provides an introduction to BOF OAU with key statistics
 * and a call-to-action button. It includes responsive layout for different
 * screen sizes with text on the left and an image on the right.
 * 
 * @returns A section with organization introduction and key statistics
 */
const AboutSection: React.FC = () => {
  const navigate = useNavigate();

  // Statistics data for better maintainability
  const stats = [
    {
      value: "50%",
      description: "Join us for unparalleled finance education and growth."
    },
    {
      value: "50%",
      description: "Explore our vibrant community and opportunities."
    }
  ];

  return (
    <section className="w-full bg-background-main py-[40px] sm:py-[56px] md:py-[80px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1198px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-[40px] lg:gap-[80px]">
            {/* Left Content - Text and Statistics */}
            <div className="flex flex-col justify-start items-start w-full lg:w-[656px] gap-[24px] sm:gap-[32px] md:gap-[40px]">
              {/* Heading and Introduction */}
              <div className="flex flex-col justify-start items-start w-full gap-[16px] sm:gap-[18px]">
                <h2 className="text-left text-text-primary">
                  Empower
                </h2>
                 <h3 className="text-[32px] sm:text-[48px] md:text-2xl font-medium leading-[38px] sm:leading-[58px] md:leading-extra-loose text-left text-text-primary font-[Inter] w-full max-w-[650px]">
              Leading Student Finance Organization in Africa
            </h3>
                <p className="text-base sm:text-lg font-normal leading-relaxed text-left text-text-primary font-[Inter] w-full max-w-[590px]">
                  BOF OAU is Nigeria's first student-led finance club, uniting passionate students from all faculties. Our mission is to equip future financial leaders with the skills and experience needed to excel in today's competitive landscape.
                </p>
              </div>

              {/* Key Statistics */}
              <div className="flex flex-col sm:flex-row justify-start items-start gap-[24px] sm:gap-[40px] w-full">
                {stats.map((stat, index) => (
                  <div key={index} className="flex flex-col justify-start items-start gap-[10px] w-full sm:w-auto">
                    <span className="text-[32px] sm:text-[48px] md:text-[56px] font-normal leading-[38px] sm:leading-[58px] md:leading-extra-loose text-left text-primary-background font-[Inter]">
                      {stat.value}
                    </span>
                    <p className="text-base font-normal leading-tight text-left text-text-primary font-[Inter] max-w-[270px]">
                      {stat.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Call to Action Button */}
              <Button
                text="Join Us"
                text_font_size="16"
                text_font_family="Inter"
                text_font_weight="500"
                text_line_height="20px"
                text_text_align="center"
                text_color="#000000"
                fill_background_color="#00713acc"
                border_border_radius="8px"
                border_border="none"
                layout_width="auto"
                position="relative"
                margin="0"
                variant="primary"
                size="medium"
                padding="12px 24px"
                className="w-auto mt-[16px] sm:mt-[24px] hover:bg-primary-background transition-colors duration-200"
                onClick={() => navigate('/join-us')}
              />
            </div>

            {/* Right Image - Showcasing BOF OAU Activities */}
            <div className="flex justify-center items-center w-full lg:w-[528px] lg:self-center">
              <img
              src = "/images/img_rectangle_2.png"
                alt = "BOF OAU Members at a Financial Workshop"
                className = "w-full max-w-[528px] h-[300px] sm:h-[400px] md:h-[572px] object-cover rounded shadow-md"
                  loading = "lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
