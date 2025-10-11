import React from 'react';

const VisionMissionSection = () => {
  return (
    <section className="w-full bg-primary-medium py-[40px] sm:py-[56px] md:py-[80px]">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col justify-start items-center gap-[48px] sm:gap-[60px] md:gap-[78px] px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <h2 className="text-[32px] sm:text-[48px] md:text-2xl font-medium leading-[38px] sm:leading-[58px] md:leading-extra-loose text-center text-text-primary font-[Inter] w-full max-w-[860px] mt-[12px]">
            Our Vision and Mission at BOF OAU
          </h2>

          {/* Content Row */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-[40px] lg:gap-[80px] w-full max-w-[1198px]">
            {/* Vision & Mission Text */}
            <div className="w-full lg:w-[456px] mt-0 lg:mt-[112px]">
              <p className="text-base font-medium leading-tight text-left text-text-primary font-[Inter] w-full">
                Vision: To be Africa's leading student-led finance organization, producing world-class financial professionals with technical expertise, innovative thinking, and ethical leadership.
                <br /><br /><br />
                Mission: Empower students with practical financial skills, industry exposure, and leadership development through cutting-edge training, competitions, and networking opportunities.
              </p>
            </div>

            {/* Image */}
            <div className="flex justify-center items-center w-full lg:w-[644px] lg:self-center">
              <img 
                src="/images/img_rectangle_3.png" 
                alt="BOF OAU Vision Mission" 
                className="w-full max-w-[644px] h-[250px] sm:h-[350px] md:h-[482px] object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;