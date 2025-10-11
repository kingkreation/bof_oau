import React from 'react';
import Button from '../../components/ui/Button';

const EvolutionSection = () => {
  return (
    <section className="w-full bg-background-main py-[40px] sm:py-[56px] md:py-[80px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1198px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-start items-start gap-[40px] lg:gap-[80px]">
            {/* Left Content */}
            <div className="flex flex-col justify-start items-start w-full lg:w-[692px] gap-[18px]">
              <h2 className="text-[32px] sm:text-[48px] md:text-2xl font-medium leading-[38px] sm:leading-[58px] md:leading-extra-loose text-left text-text-primary font-[Inter] w-full max-w-[650px]">
                The Evolution of BOF OAU Since 2011
              </h2>
              <Button
                text="Learn More"
                text_font_size="16"
                text_font_family="Inter"
                text_font_weight="500"
                text_line_height="20px"
                text_text_align="center"
                text_color="#000000"
                fill_background_color="transparent"
                border_border="2px solid #00713acc"
                border_border_radius="8px"
                padding="8px"
                className="w-auto mt-[16px]"
                layout_width="auto"
                position="static"
                margin="0"
                variant="outlined"
                size="medium"
                onClick={() => {}}
              />
            </div>

            {/* Right Timeline */}
            <div className="flex flex-col justify-start items-end w-full lg:w-[506px] lg:self-center">
              <div className="flex flex-col justify-start items-start gap-[40px] sm:gap-[60px] w-full max-w-[458px] ml-[38px]">
                {/* Timeline Item 1 */}
                <div className="flex flex-col justify-start items-start w-full gap-[16px] sm:gap-[32px]">
                  <div className="flex justify-start items-start gap-[20px] sm:gap-[30px] w-full">
                    <img 
                      src="/images/img_uil_chart_growth.svg" 
                      alt="Growth Icon" 
                      className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px] mt-[1px]"
                    />
                    <div className="flex flex-col justify-start items-start gap-[8px] sm:gap-[12px] flex-1">
                      <h3 className="text-base font-medium leading-normal text-left text-text-primary font-[Inter]">
                        Our Journey
                      </h3>
                      <p className="text-base font-normal leading-tight text-left text-text-primary font-[Inter] w-full">
                        Founded in 2011, BOF OAU has transformed finance education for students across all faculties.
                      </p>
                    </div>
                  </div>
                  <div className="w-[2px] h-[50px] sm:h-[76px] bg-line-background ml-[11px] sm:ml-[14px] -mt-[16px] sm:-mt-[32px]"></div>
                </div>

                {/* Timeline Item 2 */}
                <div className="flex flex-col justify-start items-start w-full gap-[16px] sm:gap-[32px]">
                  <div className="flex justify-start items-start gap-[20px] sm:gap-[30px] w-full">
                    <img 
                      src="/images/img_vector.svg" 
                      alt="Vector Icon" 
                      className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px] mt-[1px]"
                    />
                    <div className="flex flex-col justify-start items-start gap-[8px] sm:gap-[14px] flex-1">
                      <h3 className="text-base font-medium leading-normal text-left text-text-primary font-[Inter]">
                        Our Growth
                      </h3>
                      <p className="text-base font-normal leading-tight text-left text-text-primary font-[Inter] w-full max-w-[380px]">
                        From a small club to a powerhouse with over 500 engaged members and diverse initiatives.
                      </p>
                    </div>
                  </div>
                  <div className="w-[2px] h-[50px] sm:h-[76px] bg-line-background ml-[11px] sm:ml-[16px] -mt-[16px] sm:-mt-[32px]"></div>
                </div>

                {/* Timeline Item 3 */}
                <div className="flex flex-col justify-start items-start w-full gap-[16px] sm:gap-[32px]">
                  <div className="flex justify-start items-start gap-[20px] sm:gap-[32px] w-full">
                    <img 
                      src="/images/img_game_icons_impact_point.svg" 
                      alt="Impact Icon" 
                      className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px] mt-[1px]"
                    />
                    <div className="flex flex-col justify-start items-start gap-[8px] sm:gap-[12px] flex-1">
                      <h3 className="text-base font-medium leading-normal text-left text-text-primary font-[Inter]">
                        Our Impact
                      </h3>
                      <p className="text-base font-normal leading-tight text-left text-text-primary font-[Inter] w-full">
                        We empower students to excel in finance, fostering skills and leadership through innovative programs.
                      </p>
                    </div>
                  </div>
                  <div className="w-[2px] h-[50px] sm:h-[76px] bg-line-background ml-[11px] sm:ml-[14px] -mt-[16px] sm:-mt-[32px]"></div>
                </div>

                {/* Timeline Item 4 */}
                <div className="flex justify-start items-start gap-[20px] sm:gap-[30px] w-full">
                  <img 
                    src="/images/img_material_symbols_join_outline.svg" 
                    alt="Join Icon" 
                    className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px] mt-[1px]"
                  />
                  <div className="flex flex-col justify-start items-start gap-[8px] sm:gap-[14px] flex-1">
                    <h3 className="text-base font-medium leading-normal text-left text-text-primary font-[Inter]">
                      Join Us
                    </h3>
                    <p className="text-base font-normal leading-tight text-left text-text-primary font-[Inter] w-full">
                      Become part of a legacy that shapes future finance leaders at BOF OAU.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvolutionSection;