import React from 'react';

interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  imageWidth?: string;
  imageHeight?: string;
}

const TeamSection = () => {
  const executiveTeam: TeamMember[] = [
    {
      id: "1",
      name: "Esther Mac-Sanddy",
      position: "CEO (President)",
      image: "/images/img_ellipse_1.png"
    },
    {
      id: "2", 
      name: "Adurasanmi David",
      position: "Vice President (Research)",
      image: "/images/img_ellipse_2.png"
    },
    {
      id: "3",
      name: "Deborah Okesanjo", 
      position: "Vice President (Operations)",
      image: "/images/img_ellipse_3.png"
    },
    {
      id: "4",
      name: "Abdulquadri Fasasi",
      position: "Head, Corporate Strategy & Branding",
      image: "/images/img_ellipse_4.png"
    }
  ];

  const departmentHeads: TeamMember[] = [
    {
      id: "5",
      name: "Favour Abanum",
      position: "Head, Financial Technology", 
      image: "/images/img_ellipse_1_108x108.png"
    },
    {
      id: "6",
      name: "Adekunle Okunniyi",
      position: "Head, Investment Banking & Alternative Investments",
      image: "/images/img_ellipse_2_108x108.png"
    },
    {
      id: "7",
      name: "Eniola Oyebode",
      position: "Head, Energy & Infrastructure",
      image: "/images/img_ellipse_3_108x108.png"
    },
    {
      id: "8",
      name: "Shukurat Azeez",
      position: "Head, Financial Operations",
      image: "/images/img_ellipse_4_108x108.png"
    }
  ];

  const additionalHeads: TeamMember[] = [
    {
      id: "9",
      name: "Jumoke Akande",
      position: "Head, Management Consulting",
      image: "/images/img_ellipse_1_1.png"
    },
    {
      id: "10",
      name: "Enoch Eyiaro",
      position: "Head, Research & Academics",
      image: "/images/img_ellipse_2_1.png"
    },
    {
      id: "11",
      name: "Simeon Olalude",
      position: "Head, Public Engagements",
      image: "/images/img_ellipse_3_1.png"
    },
    {
      id: "12",
      name: "Roqeeb Sorunke",
      position: "Head, Sales & Trading",
      image: "/images/img_ellipse_4_92x86.png",
      imageWidth: "86px",
      imageHeight: "92px"
    }
  ];

  const TeamMemberCard = ({ member, className = "" }: { member: TeamMember; className?: string }) => (
    <div className={`flex flex-col justify-start items-center gap-[8px] sm:gap-[12px] ${className}`}>
      <img 
        src={member.image} 
        alt={member.name}
        className={`${member.imageWidth && member.imageHeight 
          ? `w-[${member.imageWidth}] h-[${member.imageHeight}]` 
          : 'w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] md:w-[108px] md:h-[108px]'
        } object-cover rounded-lg`}
      />
      <div className="flex flex-col justify-start items-center gap-[4px] text-center">
        <h3 className="text-lg sm:text-xl md:text-lg font-semibold leading-relaxed text-center text-text-primary font-[Inter]">
          {member.name}
        </h3>
        <p className="text-sm sm:text-base font-normal leading-normal text-center text-text-primary font-[Inter]">
          {member.position}
        </p>
      </div>
    </div>
  );

  return (
    <section className="w-full bg-background-main py-[60px] sm:py-[80px] md:py-[84px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-start items-center gap-[32px] sm:gap-[40px] md:gap-[48px] w-full max-w-[1184px] mx-auto">
          {/* Section Header */}
          <div className="flex flex-col justify-start items-center gap-[16px] sm:gap-[24px] md:gap-[24px] text-center">
            <h2 className="text-center text-text-primary font-bold text-lg sm:text-xl md:text-2xl leading-tight mb-4">
  Team
</h2>
            <p className="text-base font-normal leading-normal text-center text-text-primary font-[Inter] max-w-[600px]">
              Meet the passionate individuals driving our mission forward
            </p>
          </div>

          {/* Team Grid */}
          <div className="flex flex-col justify-start items-center gap-[16px] sm:gap-[20px] md:gap-[22px] w-full">
            {/* Executive Team Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] sm:gap-[32px] lg:gap-[40px] w-full justify-items-center">
              {executiveTeam.map((member) => (
                <TeamMemberCard key={member.id} member={member} className="w-full max-w-[250px]" />
              ))}
            </div>

            {/* Department Heads Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] sm:gap-[32px] lg:gap-[40px] w-full justify-items-center px-[26px] sm:px-[40px] md:px-[52px]">
              {departmentHeads.map((member) => (
                <TeamMemberCard key={member.id} member={member} className="w-full max-w-[250px]" />
              ))}
            </div>

            {/* Additional Heads Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] sm:gap-[32px] lg:gap-[40px] w-full justify-items-center px-[13px] sm:px-[20px] md:px-[26px]">
              {additionalHeads.map((member) => (
                <TeamMemberCard key={member.id} member={member} className="w-full max-w-[250px]" />
              ))}
            </div>

            {/* Final Team Member */}
            <div className="flex justify-center items-center w-full mt-[16px] sm:mt-[20px] md:mt-[22px]">
              <TeamMemberCard 
                member={{
                  id: "13",
                  name: "Faith Adeniji",
                  position: "Head, Program & Event",
                  image: "/images/img_ellipse_4_1.png",
                  imageWidth: "86px",
                  imageHeight: "92px"
                }} 
                className="w-full max-w-[250px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;