import React from 'react';

const HeroSection = () => {
  return (
    <section className="w-full bg-background-main">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-[30px] w-full pt-[42px] pb-8">
          {/* Header Navigation */}
          <div className="flex justify-between items-center w-full mt-[42px] mx-4 sm:mx-8 lg:mx-[128px]">
            {/* Logo and Navigation Row */}
            <div className="flex justify-between items-center w-full">
              {/* Logo */}
              <img 
                src="/images/img_header_logo.png" 
                alt="BOF OAU Logo" 
                className="w-[80px] h-[80px]"
              />
              
              {/* Navigation and Button */}
              <div className="flex justify-between items-center w-full sm:w-[84%]">
                {/* Navigation Links */}
                <div className="hidden md:flex justify-between items-center w-full sm:w-[36%]">
                  <span className="text-base font-bold leading-normal text-text-primary">
                    About us
                  </span>
                  <span className="text-base font-normal leading-normal text-text-primary">
                    Our Mission
                  </span>
                  <span className="text-base font-normal leading-normal text-text-primary">
                    Our Structure
                  </span>
                </div>
                
                {/* Join Us Button */}
                <button className="bg-primary-dark text-text-primary text-base font-medium leading-normal px-2 py-2 rounded-sm">
                  Join Us
                </button>
              </div>
            </div>
          </div>
          
          {/* Page Title */}
          <h1 className="text-[32px] sm:text-[48px] lg:text-[64px] font-normal leading-mega-loose text-center text-text-primary">
            About Us
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;