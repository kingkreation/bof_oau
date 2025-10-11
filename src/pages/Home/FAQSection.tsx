import React from 'react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQSection = () => {
  const faqItems: FAQItem[] = [
    {
      id: "1",
      question: "What is BOF?",
      answer: "Nigeria's first student-led finance organisation at OAU founded in 2011, focused on practical finance skills, not just theory."
    },
    {
      id: "2", 
      question: "How to become a member?",
      answer: "To become a member, you must be a student at OAU with a passion for finance. Simply fill out the application form available on our website. Once submitted, our team will review your application and get back to you.on questions asked."
    },
    {
      id: "3",
      question: "What training programs are available?",
      answer: "We offer a variety of training programs designed to enhance your financial skills. These include workshops on investment strategies, financial modeling, and industry-specific seminars. Participants also gain access to mentorship opportunities with industry professionals."
    },
    {
      id: "4",
      question: "What are your achievement?",
      answer: "Consistent top-three finishes in global finance competitions like the CFA Researcg Challenge"
    },
    {
      id: "5",
      question: "What are the benefits?",
      answer: "Members enjoy exclusive access to workshops, competitions, and networking events. These experiences not only boost your resume but also provide real-world insights into the finance industry. Additionally, you will join a vibrant community of like-minded individuals."
    }
  ];

  return (
    <section className="w-full bg-primary-medium py-[40px] sm:py-[50px] md:py-[60px]">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-start items-center gap-[40px] lg:gap-[80px] w-full max-w-[1198px] mx-auto px-4 sm:px-6 lg:px-8 py-[16px] sm:py-[20px] md:py-[24px]">
          {/* Left Section - Title */}
          <div className="flex flex-col justify-start items-start gap-[4px] sm:gap-[6px] w-full lg:w-[600px]">
            <h2 className="text-[32px] sm:text-[48px] md:text-2xl font-medium leading-[38px] sm:leading-[58px] md:leading-extra-loose text-center lg:text-left text-text-primary font-[Inter]">
              FAQ
            </h2>
            <p className="text-base font-normal leading-normal text-center lg:text-left text-text-primary font-[Inter]">
              Here are answers to the common questions asked.
            </p>
          </div>

          {/* Right Section - FAQ Items */}
          <div className="flex flex-col justify-start items-center w-full lg:w-auto lg:self-center gap-[20px] sm:gap-[24px] md:gap-[28px]">
            {faqItems.map((item) => (
              <div 
                key={item.id}
                className="flex flex-col justify-start items-start gap-[10px] sm:gap-[12px] md:gap-[14px] w-full"
              >
                <h3 className="text-base font-semibold leading-normal text-left text-text-primary font-[Inter]">
                  {item.question}
                </h3>
                <p className="text-base font-normal leading-tight text-left text-text-primary font-[Inter] w-full">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;