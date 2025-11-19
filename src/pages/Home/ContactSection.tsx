import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { SiSpotify } from 'react-icons/si'; // Added import for Spotify icon

const ContactSection = () => {
  return (
    <section className="w-full bg-background-main py-[80px] sm:py-[100px] md:py-[106px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-start items-center gap-[40px] sm:gap-[60px] md:gap-[80px] w-full">
          {/* Section Header */}
          <div className="flex flex-col justify-start items-center gap-[4px] sm:gap-[6px] md:gap-[8px] text-center">
            <h2 className="section-title">
              Get in touch
            </h2>
            <p className="section-subtitle max-w-[600px]">
              We'd love to hear from you! Reach out with any questions or inquiries.
            </p>
          </div>

          {/* Contact Content */}
          <div className="flex flex-col lg:flex-row justify-end items-center gap-[40px] lg:gap-[64px] w-full max-w-[1206px]">
            {/* Contact Image */}
            <div className="w-full lg:w-[740px] order-2 lg:order-1">
              <img 
                src="/images/img_rectangle_6.jpg" 
                alt="Contact BOF OAU" 
                className="w-full h-[250px] sm:h-[300px] md:h-[366px] object-cover rounded-sm"
              />
            </div>

            {/* Contact Information */}
            <div className="flex flex-col justify-start items-center gap-[12px] sm:gap-[14px] md:gap-[16px] w-full lg:w-[316px] order-1 lg:order-2">
              {/* Email */}
              <div className="flex flex-col justify-start items-start gap-[6px] sm:gap-[8px] md:gap-[10px] w-full">
                <h4 className="text-center text-text-primary font-[Inter]">
                  Email
                </h4>
                <p className="text-body text-flex text-text-primary font-[Inter]">
                  bureauoffinance@gmail.com
                </p>
              </div>

              {/* Location */}
              <div className="flex flex-col justify-start items-start gap-[6px] sm:gap-[8px] md:gap-[10px] w-full">
                <h4 className="text-center text-text-primary font-[Inter]">
                  Location
                </h4>
                <p className="text-body text-flex text-text-primary font-[Inter]">
                  Obafemi Awolowo University, Ile-Ife, Nigeria
                </p>
              </div>
              
              {/* Spotify Section */}
              <div className="flex flex-col justify-start items-start gap-[6px] sm:gap-[8px] w-full px-[2px] sm:px-[3px] md:px-[6px]">
                <h4 className="text-flex text-text-primary font-[Inter]">
                  Join BOF Market Pulse on Spotify
                </h4>
                <a href="https://open.spotify.com/show/5YHUK9vFxslbFGtnfzql8I?si=3pk2Gy7mSc-EDGLlUBly_w" target="_blank" rel="noopener noreferrer">
                  <SiSpotify className="text-text-primary hover:text-gray-500" size={24} />
                </a>
              </div>

              {/* Social Media Links */}
              <div className="flex justify-around items-center gap-[8px] sm:gap-[10px] mt-3 sm:mt-4">
                <a href="https://www.linkedin.com/company/the-students-professional-bureau-of-finance-oau-ife/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-text-primary hover:text-gray-500" size={24} />
                </a>
                <a href="https://x.com/bof_oau?t=u0bS9ewX7cPQL69A21Q4KA&s=09" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-text-primary hover:text-gray-500" size={24} />
                </a>
                <a href="https://www.facebook.com/bof.finance.3" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="text-text-primary hover:text-gray-500" size={24} />
                </a>
                <a href="https://www.instagram.com/bof_oau?igsh=MWppMGp4YnB3ZDRzNQ==" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-text-primary hover:text-gray-500" size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;