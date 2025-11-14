import React from 'react';

const ContactSection = () => {
  return (
    <section className="w-full bg-background-main py-[80px] sm:py-[100px] md:py-[106px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-start items-center gap-[40px] sm:gap-[60px] md:gap-[80px] w-full">
          {/* Section Header */}
          <div className="flex flex-col justify-start items-center gap-[6px] sm:gap-[8px] text-center">
            <h2 className="text-center text-text-primary">
              Get in touch
            </h2>
            <p className="text-base font-normal leading-normal text-center text-text-primary font-[Inter] max-w-[600px]">
              We'd love to hear from you! Reach out with any questions or inquiries.
            </p>
          </div>

          {/* Contact Content */}
          <div className="flex flex-col lg:flex-row justify-end items-center gap-[40px] lg:gap-[64px] w-full max-w-[1206px]">
            {/* Contact Image */}
            <div className="w-full lg:w-[740px] order-2 lg:order-1">
              <img 
                src="/images/img_rectangle_6.png" 
                alt="Contact BOF OAU" 
                className="w-full h-[250px] sm:h-[300px] md:h-[366px] object-cover rounded-sm"
              />
            </div>

            {/* Contact Information */}
            <div className="flex flex-col justify-start items-center gap-[14px] sm:gap-[16px] md:gap-[18px] w-full lg:w-[316px] order-1 lg:order-2">
              {/* Email */}
              <div className="flex flex-col justify-start items-start gap-[8px] sm:gap-[10px] md:gap-[12px] w-full">
                <h3 className="text-lg sm:text-xl md:text-lg font-semibold leading-relaxed text-center text-text-primary font-[Inter]">
                  Email
                </h3>
                <p className="text-base font-normal leading-normal text-center text-text-primary font-[Inter]">
                  bureauoffinance@gmail.com
                </p>
              </div>

              {/* Phone */}
              <div className="flex flex-col justify-start items-start gap-[8px] sm:gap-[10px] w-full px-[3px] sm:px-[4px] md:px-[6px]">
                <h3 className="text-lg sm:text-xl md:text-lg font-semibold leading-relaxed text-center text-text-primary font-[Inter]">
                  Phone
                </h3>
                <p className="text-base font-normal leading-normal text-center text-text-primary font-[Inter]">
                  +234 123 4567
                </p>
              </div>

              {/* Location */}
              <div className="flex flex-col justify-start items-start gap-[8px] sm:gap-[10px] md:gap-[12px] w-full">
                <h3 className="text-lg sm:text-xl md:text-lg font-semibold leading-relaxed text-center text-text-primary font-[Inter]">
                  Location
                </h3>
                <p className="text-base font-normal leading-normal text-center text-text-primary font-[Inter]">
                  Obafemi Awolowo University, Ile-Ife, Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;