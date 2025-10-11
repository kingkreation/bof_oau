import React from 'react';

const FooterSection = () => {
  return (
    <footer className="w-full bg-background-main py-[40px] sm:py-[60px] md:py-[80px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-start items-center gap-[16px] sm:gap-[20px] w-full max-w-[634px] mx-auto">
          {/* Logo and Navigation */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-[20px] sm:gap-[30px] w-full px-[6px] sm:px-[8px] md:px-[12px]">
            {/* Logo */}
            <img 
              src="/images/img_d64c46b0a850558.png" 
              alt="BOF OAU Logo" 
              className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px]"
            />

            {/* Navigation Links */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-[16px] sm:gap-[20px] md:gap-[30px]">
              <a 
                href="#about" 
                className="text-lg sm:text-xl md:text-lg font-semibold leading-relaxed text-center text-text-primary font-[Inter] hover:text-primary-background transition-colors duration-200"
              >
                About Us
              </a>
              <a 
                href="#mission" 
                className="text-lg sm:text-xl md:text-lg font-semibold leading-relaxed text-center text-text-primary font-[Inter] hover:text-primary-background transition-colors duration-200"
              >
                Mission
              </a>
              <a 
                href="#structure" 
                className="text-lg sm:text-xl md:text-lg font-semibold leading-relaxed text-center text-text-primary font-[Inter] hover:text-primary-background transition-colors duration-200"
              >
                Our Structure
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-[12px] sm:gap-[20px] md:gap-[32px] w-full">
            <p className="text-base font-normal leading-normal text-center text-text-primary font-[Inter]">
              © 2025 BOF OAU. All rights reserved.
            </p>
            <a 
              href="#privacy" 
              className="text-base font-normal leading-normal text-center text-text-primary font-[Inter] hover:text-primary-background transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a 
              href="#terms" 
              className="text-base font-normal leading-normal text-center text-text-primary font-[Inter] hover:text-primary-background transition-colors duration-200"
            >
              Terms of Use
            </a>
            <a 
              href="#cookies" 
              className="text-base font-normal leading-normal text-center text-text-primary font-[Inter] hover:text-primary-background transition-colors duration-200"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;