import React from 'react';
import Link from '../ui/Link';

interface FooterProps {
  className?: string;
}

const Footer = ({ className = '' }: FooterProps) => {
  return (
    <footer className={`w-full bg-footer-background mt-[148px] ${className}`}>
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Alumni Testimonials Section */}
        <div className="w-full bg-primary-medium rounded-sm">
          <div className="px-4 sm:px-6 lg:px-[52px] py-[52px]">
            <div className="flex flex-col items-center gap-[62px] w-full">
              {/* Section Title */}
              <div className="text-center mb-3">
                <h2 className="text-3xl sm:text-[64px] font-normal leading-mega-loose text-text-primary">
                  Alumni Testimonials
                </h2>
              </div>

              {/* Testimonials Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
                {/* Testimonial 1 */}
                <div className="bg-background-main rounded-sm p-5 sm:p-6 flex flex-col gap-[30px] items-center">
                  <p className="text-lg sm:text-[24px] font-normal leading-medium text-text-primary w-full sm:w-[96%]">
                    BOF OAU provided real-world experience that built my skills and confidence. This foundation was crucial for my professional growth and success at Andersen and now Oando Plc.
                  </p>
                  <div className="flex justify-between items-center w-full mx-[40px] sm:mx-[24px]">
                    <img 
                      src="/images/img_ellipse_1_92x86.png" 
                      alt="Damilare Abdulai" 
                      className="w-[86px] h-[92px] rounded-md"
                    />
                    <div className="flex flex-col gap-[6px] w-[34%]">
                      <h4 className="text-lg sm:text-[24px] font-semibold leading-relaxed text-center text-text-primary">
                        Damilare Abdulai
                      </h4>
                      <p className="text-base font-normal leading-tight text-left text-text-primary">
                        Fiscal & Tax Analyst, Oando Energy
                      </p>
                    </div>
                  </div>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-background-main rounded-sm p-5 sm:p-6 flex flex-col gap-[30px] items-center">
                  <p className="text-lg sm:text-[24px] font-normal leading-medium text-text-primary">
                    My role taught me that true welfare is about making people feel seen and valued. This mindset of thoughtful leadership and service continues to guide me today.
                  </p>
                  <div className="flex justify-between items-center w-full mx-[24px] sm:mx-[20px]">
                    <img 
                      src="/images/img_ellipse_2_92x86.png" 
                      alt="Esther Opadoyin" 
                      className="w-[86px] h-[92px] rounded-md"
                    />
                    <div className="flex flex-col gap-[2px] w-[34%]">
                      <h4 className="text-lg sm:text-[24px] font-semibold leading-relaxed text-center text-text-primary">
                        Esther Opadoyin
                      </h4>
                      <p className="text-base font-normal leading-tight text-left text-text-primary">
                        Outreach Specialist, Velocity Company
                      </p>
                    </div>
                  </div>
                </div>

                {/* Testimonial 3 */}
                <div className="bg-background-main rounded-sm p-5 sm:p-6 flex flex-col gap-[30px] items-start">
                  <p className="text-lg sm:text-[24px] font-normal leading-medium text-text-primary w-full sm:w-[96%] mt-2">
                    Leading the Finance 360 conference challenged my creative thinking for funding and awareness. The experience proved invaluable for my finance internship interviews and career foundation.
                  </p>
                  <div className="flex justify-between items-center w-full mx-[32px] sm:mx-[16px]">
                    <img 
                      src="/images/img_ellipse_3_92x86.png" 
                      alt="Tolu Enitilo" 
                      className="w-[86px] h-[92px] rounded-md"
                    />
                    <div className="flex flex-col gap-[6px] w-[32%]">
                      <h4 className="text-lg sm:text-[24px] font-semibold leading-relaxed text-center text-text-primary">
                        Tolu Enitilo
                      </h4>
                      <p className="text-base font-normal leading-tight text-left text-text-primary">
                        Financial Analyst, Nordea Bank Abp
                      </p>
                    </div>
                  </div>
                </div>

                {/* Testimonial 4 */}
                <div className="bg-background-main rounded-sm p-5 sm:p-6 flex flex-col gap-[30px] items-start">
                  <p className="text-lg sm:text-[24px] font-normal leading-medium text-text-primary mt-2">
                    As a former executive member, I gained invaluable experience, knowledge, and skills. I'm proud to have been part of a team that fostered financial literacy and excellence.
                  </p>
                  <div className="flex justify-between items-center w-full mx-[22px] sm:mx-[18px]">
                    <img 
                      src="/images/img_ellipse_4_92x86_1.png" 
                      alt="Damilola Agbebi" 
                      className="w-[86px] h-[92px] rounded-md"
                    />
                    <div className="flex flex-col gap-[2px] w-[28%] mr-[26px]">
                      <h4 className="text-lg sm:text-[24px] font-semibold leading-relaxed text-center text-text-primary">
                        Damilola Agbebi
                      </h4>
                      <p className="text-base font-normal leading-tight text-left text-text-primary">
                        Financial Consultant, Leadway Assur. Plc
                      </p>
                    </div>
                  </div>
                </div>

                {/* Testimonial 5 */}
                <div className="bg-background-main rounded-sm p-5 sm:p-6 flex flex-col gap-[30px] items-start">
                  <p className="text-lg sm:text-[24px] font-normal leading-medium text-text-primary mt-2 ml-4">
                    Leading the Finance 360 conference challenged my creative thinking for funding and awareness. The experience proved invaluable for my finance internship interviews and career foundation.
                  </p>
                  <div className="flex justify-between items-center w-[88%] ml-4">
                    <img 
                      src="/images/img_ellipse_1_2.png" 
                      alt="Kennedy Osigwe" 
                      className="w-[86px] h-[92px] rounded-md"
                    />
                    <div className="flex flex-col gap-[2px] w-[32%] mr-[10px]">
                      <h4 className="text-lg sm:text-[24px] font-semibold leading-relaxed text-center text-text-primary">
                        Kennedy Osigwe
                      </h4>
                      <p className="text-base font-normal leading-tight text-left text-text-primary w-[96%]">
                        Senior Business Analyst, Venture Garden Group
                      </p>
                    </div>
                  </div>
                </div>

                {/* Testimonial 6 */}
                <div className="bg-background-main rounded-sm p-5 sm:p-6 flex flex-col gap-[30px] items-center">
                  <p className="text-lg sm:text-[24px] font-normal leading-medium text-text-primary mt-2">
                    Joining BOF in my first year was pivotal. It laid a solid career foundation and deepened my finance understanding, which I now apply at First Bank Head Office.
                  </p>
                  <div className="flex justify-between items-center w-full mx-[30px] sm:mx-[24px]">
                    <img 
                      src="/images/img_ellipse_2_5.png" 
                      alt="Emmanuella Ishola" 
                      className="w-[86px] h-[92px] rounded-md"
                    />
                    <div className="flex flex-col gap-[4px] w-[34%] mr-[10px]">
                      <h4 className="text-lg sm:text-[24px] font-semibold leading-relaxed text-center text-text-primary">
                        Emmanuella Ishola
                      </h4>
                      <p className="text-base font-normal leading-tight text-left text-text-primary">
                        Trade Reconciliation Specialist, First bank of Nigeria Ltd
                      </p>
                    </div>
                  </div>
                </div>

                {/* Testimonial 7 */}
                <div className="bg-background-main rounded-sm p-5 sm:p-6 flex flex-col gap-[30px] items-center">
                  <p className="text-lg sm:text-[24px] font-normal leading-medium text-text-primary w-[94%]">
                    Participating in various BOF projects added significant value to my development. Holding leadership positions on two occasions was instrumental in improving my leadership skills.
                  </p>
                  <div className="flex justify-between items-center w-[94%]">
                    <img 
                      src="/images/img_ellipse_3_2.png" 
                      alt="Olajumoke Oyeyemi" 
                      className="w-[86px] h-[92px] rounded-md"
                    />
                    <div className="flex flex-col gap-[2px] w-[36%] mr-[6px]">
                      <h4 className="text-lg sm:text-[24px] font-semibold leading-relaxed text-center text-text-primary self-end">
                        Olajumoke Oyeyemi
                      </h4>
                      <p className="text-base font-normal leading-tight text-left text-text-primary w-[78%]">
                        Career Consultant & Co founder, Cv2essence
                      </p>
                    </div>
                  </div>
                </div>

                {/* Testimonial 8 */}
                <div className="bg-background-main rounded-sm p-5 sm:p-6 flex flex-col gap-[42px] items-center">
                  <p className="text-lg sm:text-[24px] font-normal leading-medium text-text-primary">
                    BOF built my foundation through research and presentations. Facilitating a panel at Finance 360 boosted my confidence, enabling a smooth transition and rapid growth in my corporate career.
                  </p>
                  <div className="flex justify-between items-center w-full mx-[18px] mb-1">
                    <img 
                      src="/images/img_ellipse_4_92x86_2.png" 
                      alt="Ifeoluwa Farayola" 
                      className="w-[86px] h-[92px] rounded-md"
                    />
                    <div className="flex flex-col gap-[2px] w-[36%]">
                      <h4 className="text-lg sm:text-[24px] font-semibold leading-relaxed text-left text-text-primary">
                        Ifeoluwa Farayola
                      </h4>
                      <p className="text-base font-normal leading-tight text-left text-text-primary">
                        Investment Associate, Elmpark Advisor
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="px-4 sm:px-6 lg:px-[56px] lg:pl-[186px] py-[80px]">
          <div className="flex flex-col items-center w-full sm:w-[88%]">
            {/* Contact Header */}
            <div className="text-center mb-5">
              <h2 className="text-3xl sm:text-[64px] font-medium leading-mega-loose text-text-primary ml-[308px]">
                Get in touch
              </h2>
              <p className="text-base font-normal leading-normal text-center text-text-primary mt-2">
                We'd love to hear from you! Reach out with any questions or inquiries.
              </p>
            </div>

            {/* Contact Content */}
            <div className="flex flex-col lg:flex-row justify-between items-center w-full mt-5 gap-8">
              {/* Contact Image */}
              <div className="w-full lg:w-[68%]">
                <img 
                  src="/images/img_rectangle_6.png" 
                  alt="Contact Us" 
                  className="w-full h-[366px] object-cover"
                />
              </div>

              {/* Contact Information */}
              <div className="flex flex-col gap-[18px] w-full lg:w-[24%]">
                {/* Email */}
                <div className="flex flex-col gap-3">
                  <h4 className="text-lg sm:text-[24px] font-semibold leading-relaxed text-center text-text-primary">
                    Email
                  </h4>
                  <p className="text-base font-normal leading-normal text-center text-text-primary self-end">
                    bureauoffinance@gmail.com
                  </p>
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-[10px] ml-[6px]">
                  <h4 className="text-lg sm:text-[24px] font-semibold leading-relaxed text-center text-text-primary">
                    Phone
                  </h4>
                  <p className="text-base font-normal leading-normal text-center text-text-primary">
                    +234 123 4567
                  </p>
                </div>

                {/* Location */}
                <div className="flex flex-col gap-3 w-full">
                  <h4 className="text-lg sm:text-[24px] font-semibold leading-relaxed text-center text-text-primary">
                    Location
                  </h4>
                  <p className="text-base font-normal leading-normal text-center text-text-primary">
                    Obafemi Awolowo University, Ile-Ife, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="px-4 sm:px-6 lg:px-[196px] pb-8">
          <div className="flex flex-col gap-5 items-end">
            {/* Footer Navigation */}
            <div className="flex flex-col sm:flex-row gap-4 items-center mr-4">
              <img 
                src="/images/img_d64c46b0a850558.png" 
                alt="BOF OAU Logo" 
                className="w-[80px] h-[80px]"
              />
              <div className="flex flex-col sm:flex-row gap-[30px] items-center">
                <Link
                  text="About Us"
                  text_font_size="24"
                  text_font_family="Inter"
                  text_font_weight="600"
                  text_line_height="30px"
                  text_text_align="center"
                  text_color="#000000"
                  href="/about"
                  className="hover:text-primary-background transition-colors duration-200"
                />
                <Link
                  text="Mission"
                  text_font_size="24"
                  text_font_family="Inter"
                  text_font_weight="600"
                  text_line_height="30px"
                  text_text_align="center"
                  text_color="#000000"
                  href="#mission"
                  className="hover:text-primary-background transition-colors duration-200"
                />
                <Link
                  text="Our Structure"
                  text_font_size="24"
                  text_font_family="Inter"
                  text_font_weight="600"
                  text_line_height="30px"
                  text_text_align="center"
                  text_color="#000000"
                  href="#structure"
                  className="hover:text-primary-background transition-colors duration-200"
                />
              </div>
            </div>

            {/* Footer Links */}
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-0 items-center justify-center">
              <p className="text-base font-normal leading-normal text-center text-text-primary">
                © 2025 BOF OAU. All rights reserved.
              </p>
              <Link
                text="Privacy Policy"
                text_font_size="16"
                text_font_family="Inter"
                text_font_weight="400"
                text_line_height="20px"
                text_text_align="center"
                text_color="#000000"
                href="/privacy"
                className="ml-0 sm:ml-8 hover:text-primary-background transition-colors duration-200"
              />
              <Link
                text="Terms of Use"
                text_font_size="16"
                text_font_family="Inter"
                text_font_weight="400"
                text_line_height="20px"
                text_text_align="center"
                text_color="#000000"
                href="/terms"
                className="ml-0 sm:ml-[42px] hover:text-primary-background transition-colors duration-200"
              />
              <Link
                text="Cookie Policy"
                text_font_size="16"
                text_font_family="Inter"
                text_font_weight="400"
                text_line_height="20px"
                text_text_align="center"
                text_color="#000000"
                href="/cookies"
                className="ml-0 sm:ml-8 hover:text-primary-background transition-colors duration-200"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;