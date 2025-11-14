import React from 'react';

const AchievementsSection = () => {
  const achievements = [
    {
      id: 1,
      icon: "/images/img_.png",
      title: "CFA Institute Challenges",
      iconWidth: "64px",
      iconHeight: "88px"
    },
    {
      id: 2,
      icon: "/images/img_88x64.png",
      title: "Corporate Strategy & M&A",
      iconWidth: "64px",
      iconHeight: "88px"
    },
    {
      id: 3,
      icon: "/images/img_1.png",
      title: "FinTech & Innovation",
      iconWidth: "64px",
      iconHeight: "88px"
    }
  ];

  return (
    <section className="w-full bg-background-main py-[80px] sm:py-[100px] md:py-[138px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-start items-center gap-[32px] sm:gap-[40px] md:gap-[48px] w-full">
          {/* Section Title */}
          <h2 className="font-normal text-center text-text-primary">
            Over 20 major competition victories and counting
          </h2>

          {/* Achievements Grid */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-[40px] sm:gap-[60px] md:gap-[88px] w-full max-w-[1330px]">
            {achievements?.map((achievement) => (
              <div 
                key={achievement?.id}
                className="flex flex-col justify-start items-start gap-[20px] sm:gap-[30px] w-full sm:w-[346px] h-auto bg-primary-medium rounded-sm p-[40px] sm:p-[60px] md:p-[80px_32px_80px_32px]"
              >
                <div className="flex justify-center items-center w-full">
                  <img 
                    src={achievement?.icon} 
                    alt={achievement?.title}
                    className="w-[48px] h-[66px] sm:w-[56px] sm:h-[77px] md:w-[64px] md:h-[88px] object-contain"
                  />
                </div>
                <h3 className="text-lg font-normal leading-relaxed text-left text-text-primary font-[Inter] w-full text-center">
                  {achievement?.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Additional Text */}
          <p className="text-lg font-normal leading-relaxed text-center text-text-primary font-[Inter] mt-[16px] sm:mt-[24px]">
            and others..
          </p>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;