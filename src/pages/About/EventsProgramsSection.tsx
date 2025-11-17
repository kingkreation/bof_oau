import React from 'react';

const EventsProgramsSection = () => {
  return (
    <section className="w-full bg-background-main mt-[80px] sm:mt-[104px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[92px]">
        <div className="flex flex-col gap-[60px] sm:gap-[80px] lg:gap-[90px] items-center w-full">
          {/* Section Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl text-center text-text-primary font-bold leading-relaxed">
            Events & Programs
          </h2>
          
          {/* Events List */}
          <div className="flex flex-col gap-6 sm:gap-8 w-full pr-0 lg:pr-[18px]">
            {/* Finance 360° Conference */}
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-[48px] items-start lg:items-center w-full">
              <img 
                src="/images/img_rectangle_23.png" 
                alt="Finance 360° Conference" 
                className="w-full lg:w-[42%] h-[200px] sm:h-[280px] lg:h-[422px] object-cover"
              />
              <div className="flex flex-col gap-[20px] sm:gap-[30px] lg:gap-[42px] w-full lg:flex-1">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal leading-relaxed text-left text-text-primary">
                  Finance 360⁰ Conference
                </h3>
                <p className="text-sm sm:text-base md:text-lg font-normal leading-relaxed text-left text-text-primary">
                  Our annual flagship event, running strong for over eight years, serves as a dynamic nexus for students, industry leaders, and finance professionals. The Finance 360⁰ Conference delivers deep insights into evolving market trends, career pathways, and innovative disruptions shaping the future of finance. It features keynote sessions, panel discussions, and networking opportunities, providing an unparalleled platform for learning and professional connection.
                </p>
              </div>
            </div>
            
            {/* FinTech Hackathon */}
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-[48px] items-start lg:items-center w-full">
              <img 
                src="/images/img_rectangle_24.png" 
                alt="FinTech Hackathon" 
                className="w-full lg:w-[42%] h-[200px] sm:h-[280px] lg:h-[422px] object-cover"
              />
              <div className="flex flex-col gap-[20px] sm:gap-[25px] lg:gap-[40px] w-full lg:flex-1">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal leading-relaxed text-left text-text-primary">
                  FinTech Hackathon
                </h3>
                <p className="text-sm sm:text-base md:text-lg font-normal leading-relaxed text-left text-text-primary">
                  The BOF FinTech Hackathon is an intensive, innovation-driven event that challenges students to develop tech-powered solutions to real financial problems. Participants collaborate in teams to conceptualize, build, and pitch prototypes—from blockchain applications and AI-driven analytics to digital banking tools. This event is a crucible for innovation, connecting the brightest minds with industry mentors and potential investors.
                </p>
              </div>
            </div>
            
            {/* Bi-weekly General Meetings */}
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-[48px] items-start lg:items-center w-full">
              <img 
                src="/images/img_rectangle_25.png" 
                alt="Bi-weekly General Meetings" 
                className="w-full lg:w-[42%] h-[200px] sm:h-[280px] lg:h-[422px] object-cover"
              />
              <div className="flex flex-col gap-[16px] sm:gap-[20px] lg:gap-[36px] w-full lg:flex-1">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal leading-relaxed text-left text-text-primary">
                  Bi-weekly General Meetings
                </h3>
                <p className="text-sm sm:text-base md:text-lg font-normal leading-relaxed text-left text-text-primary">
                  Held every two weeks, our General Meetings are the core of continuous learning and community building at BOF. These sessions are designed to bring all analysts together for knowledge sharing, major announcements, and skill development. It's more than a meeting; it's a regular touchpoint to ensure every member is aligned, engaged, and growing within our finance ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsProgramsSection;