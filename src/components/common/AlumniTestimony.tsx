import React from 'react';

/**
 * Testimonial data structure
 */
interface Testimonial {
  id: number;
  quote: string;
  name: string;
  position: string;
  company: string;
  image: string;
}

/**
 * AlumniTestimony component displays testimonials from alumni
 * Showcases success stories and impact of the organization
 * 
 * @returns A section with alumni testimonials in a responsive grid layout
 */
const AlumniTestimony: React.FC = () => {
  // Testimonial data for better maintainability
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "BOF OAU provided real-world experience that built my skills and confidence. This foundation was crucial for my professional growth and success at Andersen and now Oando Plc.",
      name: "Damilare Abdulai",
      position: "Fiscal & Tax Analyst",
      company: "Oando Energy",
      image: "/images/img_ellipse_1_92x86.png"
    },
    {
      id: 2,
      quote: "My role taught me that true welfare is about making people feel seen and valued. This mindset of thoughtful leadership and service continues to guide me today.",
      name: "Esther Opadoyin",
      position: "Outreach Specialist",
      company: "Velocity Company",
      image: "/images/img_ellipse_2_92x86.png"
    },
    {
      id: 3,
      quote: "Leading the Finance 360 conference challenged my creative thinking for funding and awareness. The experience proved invaluable for my finance internship interviews and career foundation.",
      name: "Tolu Enitilo",
      position: "Financial Analyst",
      company: "Nordea Bank Abp",
      image: "/images/img_ellipse_3_92x86.png"
    },
    {
      id: 4,
      quote: "As a former executive member, I gained invaluable experience, knowledge, and skills. I'm proud to have been part of a team that fostered financial literacy and excellence.",
      name: "Damilola Agbebi",
      position: "Financial Consultant",
      company: "Leadway Assur. Plc",
      image: "/images/img_ellipse_4_92x86_1.png"
    },
    {
      id: 5,
      quote: "Being part of BOF OAU was transformative! It taught me finance, teamwork, and confidence. The exposure, leadership opportunities, and friendships shaped me professionally and personally. I'm proud to be an alumnus and excited to see BOF OAU's future growth and impact!",
      name: "Kennedy Osigwe",
      position: "Senior Business Analyst",
      company: "Venture Garden Group",
      image: "/images/img_ellipse_1_2.png"
    },
    {
      id: 6,
      quote: "Joining BOF in my first year was pivotal. It laid a solid career foundation and deepened my finance understanding, which I now apply at First Bank Head Office.",
      name: "Emmanuella Ishola",
      position: "Trade Reconciliation Specialist",
      company: "First bank of Nigeria Ltd",
      image: "/images/img_ellipse_2_5.png"
    },
    {
      id: 7,
      quote: "Participating in various BOF projects added significant value to my development. Holding leadership positions on two occasions was instrumental in improving my leadership skills.",
      name: "Olajumoke Oyeyemi",
      position: "Career Consultant & Co founder",
      company: "Cv2essence",
      image: "/images/img_ellipse_3_2.png"
    },
    {
      id: 8,
      quote: "BOF built my foundation through research and presentations. Facilitating a panel at Finance 360 boosted my confidence, enabling a smooth transition and rapid growth in my corporate career.",
      name: "Ifeoluwa Farayola",
      position: "Investment Associate",
      company: "Elmpark Advisor",
      image: "/images/img_ellipse_4_92x86_2.png"
    }
  ];

  return (
    <section className="w-full bg-primary-medium rounded-sm py-8 sm:py-10 md:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[52px] py-6 sm:py-8 md:py-10 lg:py-[52px]">
        <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10 lg:gap-[62px] w-full">
          {/* Section heading */}
          <div className="text-center mb-2 sm:mb-3">
          <h2 className="text-center text-text-primary w-full max-w-[860px] mt-2 sm:mt-3 md:mt-[12px]">
              Alumni Testimonials
            </h2>
          </div>

          {/* Testimonials grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8 w-full">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-background-main rounded-lg shadow-sm p-4 sm:p-5 md:p-6 flex flex-col gap-4 sm:gap-5 md:gap-[30px] items-start h-full"
              >
                {/* Testimonial quote */}
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed text-text-primary w-full">
                  {testimonial.quote}
                </p>
                
                {/* Alumni information with photo */}
                <div className="flex items-center w-full gap-3 sm:gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-[70px] h-[75px] sm:w-[80px] sm:h-[85px] md:w-[86px] md:h-[92px] rounded-md object-cover flex-shrink-0"
                    loading="lazy"
                  />
                  <div className="flex flex-col gap-1">
                    <h4 className="text-base sm:text-lg md:text-xl font-semibold leading-tight text-text-primary">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base font-normal leading-tight text-text-primary">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlumniTestimony;