import React from 'react';

interface FacultyMember {
  id: string;
  name: string;
  position: string;
  image: string;
}

const FacultySection = () => {
  const facultyMembers: FacultyMember[] = [
    {
      id: "1",
      name: "Prof. R.O. Salawu",
      position: "Strategic Development & Industry Partnerships",
      image: "/images/img_ellipse_2_2.png"
    },
    {
      id: "2",
      name: "Dr. J. Monday",
      position: "Student Development & Curriculum Alignment", 
      image: "/images/img_ellipse_2_3.png"
    },
    {
      id: "3",
      name: "Dr. Q.A. Lawal",
      position: "Financial Research & Innovation",
      image: "/images/img_ellipse_2_4.png"
    }
  ];

  return (
    <section className="w-full bg-background-main py-[32px] sm:py-[40px] md:py-[46px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-start items-center gap-[32px] sm:gap-[40px] md:gap-[48px] w-full">
          {/* Section Title */}
          <h2 className="font-medium text-center text-text-primary">
            Our Faculty Advisers
          </h2>

          {/* Faculty Grid */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-[40px] sm:gap-[80px] md:gap-[116px] w-full max-w-[950px] px-[21px] sm:px-[30px] md:px-[42px]">
            {facultyMembers.map((member) => (
              <div 
                key={member.id}
                className="flex flex-col justify-start items-center gap-[8px] sm:gap-[12px] w-full sm:w-[186px]"
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] md:w-[108px] md:h-[108px] object-cover rounded-lg"
                />
                <div className="flex flex-col justify-start items-center gap-[4px] sm:gap-[6px] text-center">
                  <h3 className="text-lg sm:text-xl md:text-lg font-semibold leading-relaxed text-center text-text-primary font-[Inter]">
                    {member.name}
                  </h3>
                  <p className="text-sm sm:text-base font-normal leading-tight text-center text-text-primary font-[Inter] w-full">
                    {member.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultySection;