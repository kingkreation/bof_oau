import React from 'react';

const FoundingStorySection = () => {
  return (
    <section className="w-full bg-background-main mt-[100px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[92px] lg:pr-[80px]">
        <div className="relative w-full">
          {/* Background Stack Container */}
          <div className="relative w-full h-[600px] sm:h-[800px] lg:h-[1180px]">
            {/* Background Overlay */}
            <div
              className="absolute bottom-0 left-[10px] sm:left-[30px] w-[95%] sm:w-[96%] h-[200px] sm:h-[300px] lg:h-[434px] rounded-sm shadow-[0px_4px_100px_#888888ff]"
              style={{
                background: 'linear-gradient(180deg, #ffffff4c 0%, #89dbb34c 100%)'
              }}
            />
            
            {/* Main Image */}
            <img
              src="/images/img_rectangle_20.png"
              alt="BOF OAU Team"
              className="absolute top-0 left-[15px] sm:left-[38px] w-[95%] sm:w-[94%] h-[400px] sm:h-[600px] lg:h-[754px] object-cover"
            />
            
            {/* Content Card (positioned bottom-right as requested) */}
            <div
              className="absolute bg-background-main border border-text-primary rounded-sm p-4 sm:p-6 lg:p-[22px] overflow-auto top-[200px] sm:top-[300px] left-[10px] sm:left-[50px] lg:left-[300px] w-[90%] sm:w-[80%] lg:w-[921px] h-[400px] sm:h-[600px] lg:h-[857px]"
              style={{
                boxSizing: 'border-box',
                borderWidth: 1,
              }}
            >
              <div className="flex flex-col gap-[14px] items-center">
                {/* Section Title */}
                <h2 className="text-center text-text-primary">
                  Our Founding Story
                </h2>
                
                {/* Story Content */}
                <div className="w-full sm:w-[96%]">
                  <p className="text-[16px] sm:text-[20px] lg:text-[24px] font-normal leading-medium text-left text-text-primary">
                    In the early 2010s, the global financial landscape was undergoing seismic shifts in the wake of the 2008 crisis. In Nigeria, a new generation of economic potential was emerging, yet a critical gap persisted between academic theory and the dynamic, practical realities of the financial world. Students at Obafemi Awolowo University (OAU), renowned for their academic excellence, were seeking more than textbooks; they craved real-world skills, industry exposure, and a platform to translate knowledge into impact.
                  </p>
                  <br />
                  <p className="text-[16px] sm:text-[20px] lg:text-[24px] font-normal leading-medium text-left text-text-primary">
                    Recognizing this imperative, the Department of Management and Accounting took a visionary step in 2011. They conceived and established The Students' Professional Bureau of Finance (BOF), not merely as a club, but as a groundbreaking experiment in experiential learning. It was christened Nigeria's first student-led finance bureau, a deliberate distinction from a typical club, signaling its mission to operate with the professionalism, rigor, and strategic focus of a real-world financial institution.
                  </p>
                  <br />
                  <p className="text-[16px] sm:text-[20px] lg:text-[24px] font-normal leading-medium text-left text-text-primary">
                    From a bold idea in 2011, BOF OAU has evolved into a premier finance ecosystem. Its journey from a pioneering initiative to a multi-divisional bureau with a proven track record of producing world-class talent is a testament to the foresight of its founders and the relentless drive of every student who has passed through its ranks. Today, BOF OAU stands as the realization of that initial vision: a vibrant, professional launchpad empowering the next generation of Africa's financial leaders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundingStorySection;