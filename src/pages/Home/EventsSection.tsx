import React from 'react';

interface Event {
  id: string;
  title: string;
  image: string;
  imageWidth?: string;
  imageHeight?: string;
}

const EventsSection = () => {
  const events: Event[] = [
    {
      id: "1",
      title: "Finance 360 Conference",
      image: "/images/img_rectangle_3_226x378.png",
      imageWidth: "378px",
      imageHeight: "226px"
    },
    {
      id: "2",
      title: "Fintech Hackathon", 
      image: "/images/img_rectangle_4.png",
      imageWidth: "382px",
      imageHeight: "226px"
    },
    {
      id: "3",
      title: "Bi weekly General Metings",
      image: "/images/img_rectangle_2.png",
      imageWidth: "382px", 
      imageHeight: "226px"
    }
  ];

  return (
    <section className="w-full bg-background-main py-[60px] sm:py-[80px] md:py-[84px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-start items-center gap-[48px] sm:gap-[60px] md:gap-[72px] w-full">
          {/* Section Header */}
          <div className="flex flex-col justify-start items-center gap-[16px] sm:gap-[20px] text-center">
            <h2 className="text-[32px] sm:text-[48px] md:text-2xl font-medium leading-[38px] sm:leading-[58px] md:leading-extra-loose text-center text-text-primary font-[Inter]">
              Event Highlights
            </h2>
            <p className="text-base font-normal leading-normal text-center text-text-primary font-[Inter]">
              Explore our vibrant moments from key finance events.
            </p>
          </div>

          {/* Events Grid */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-[24px] sm:gap-[18px] md:gap-[22px] w-full max-w-[1184px]">
            {events.map((event, index) => (
              <div 
                key={event.id}
                className={`flex flex-col justify-start items-center gap-[12px] sm:gap-[16px] w-full ${
                  index === 0 ? 'sm:w-[378px]' : 'sm:w-[382px]'
                } ${index === 1 ? 'mb-[20px] sm:mb-[40px]' : ''}`}
              >
                <img 
                  src={event.image} 
                  alt={event.title}
                  className={`w-full ${
                    index === 0 
                      ? 'h-[180px] sm:h-[200px] md:h-[226px] max-w-[378px]' 
                      : 'h-[180px] sm:h-[200px] md:h-[226px] max-w-[382px]'
                  } object-cover rounded-sm`}
                />
                <h3 className={`${
                  index === 1 
                    ? 'text-xl sm:text-2xl md:text-xl font-medium leading-[28px] sm:leading-[32px] md:leading-loose' 
                    : 'text-xl sm:text-2xl md:text-xl font-medium leading-[28px] sm:leading-[32px] md:leading-loose'
                } text-center text-text-primary font-[Inter] w-full`}>
                  {event.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;