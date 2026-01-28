import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import FooterSection from '../Home/FooterSection';
import Button from '../../components/ui/Button';

const Structure = () => {
  return (
    <>
      <Helmet>
        <title>Our Structure - BOF OAU | Organizational Leadership Structure</title>
        <meta
          name="description"
          content="BOF OAU organizational structure, divisions, subsidiaries and partnerships."
        />
      </Helmet>

      <div className="w-full bg-background-main text-gray-900">
        <Header />

        {/* Hero */}
        <section className="w-full flex justify-center">
          <div
            className="relative w-full max-w-[1200px] h-[420px] md:h-[560px] lg:h-[640px] bg-cover bg-center"
            style={{ backgroundImage: "url('/images/rec.jpg')" }}
          >

            {/* Large heading: top-right overlay (responsive sizing) */}
            <h1 className="text-black font-bold leading-tight text-right w-[180px] sm:w-[250px] md:w-[400px] lg:w-[500px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Built for Excellence
        </h1>

            {/* Stats: top-left group - slightly escaping image */}
            <div className="absolute left-[8px] sm:left-[10px] md:left-[40px] top-[-20px] sm:top-[-28px]">
              <div className="bg-white text-gray-800 shadow rounded flex flex-col items-center justify-center w-[90px] sm:w-[120px] md:w-[181px] h-[48px] sm:h-[64px] md:h-[96px] p-2 sm:p-3 border border-gray-200 border-opacity-10">
                <div className="text-xs sm:text-sm md:text-lg font-bold">03</div>
                <div className="text-[10px] sm:text-xs md:text-sm font-bold">Core Divisions</div>
              </div>
            </div>

            <div className="absolute left-[110px] sm:left-[140px] md:left-[290px] top-[-20px] sm:top-[-28px]">
              <div className="bg-white text-gray-800 shadow rounded flex flex-col items-center justify-center w-[90px] sm:w-[120px] md:w-[181px] h-[48px] sm:h-[64px] md:h-[96px] p-2 sm:p-3 border border-gray-200 border-opacity-10">
                <div className="text-xs sm:text-sm md:text-lg font-bold">15+</div>
                <div className="text-[10px] sm:text-xs md:text-sm font-bold">Specialized Teams</div>
              </div>
            </div>

            {/* Stats: bottom-right group - slightly outside image */}
            <div className="absolute right-[110px] sm:right-[140px] md:right-[320px] bottom-[-20px] sm:bottom-[-28px]">
              <div className="bg-white text-gray-800 shadow rounded flex flex-col items-center justify-center w-[90px] sm:w-[120px] md:w-[181px] h-[48px] sm:h-[64px] md:h-[96px] p-2 sm:p-3 border border-gray-200 border-opacity-10">
                <div className="text-xs sm:text-sm md:text-lg font-bold">03</div>
                <div className="text-[10px] sm:text-xs md:text-sm font-bold">Live Subsidiaries</div>
              </div>
            </div>

            <div className="absolute right-[8px] sm:right-[10px] md:right-[100px] bottom-[-20px] sm:bottom-[-28px]">
              <div className="bg-white text-gray-800 shadow rounded flex flex-col items-center justify-center w-[90px] sm:w-[120px] md:w-[181px] h-[48px] sm:h-[64px] md:h-[96px] p-2 sm:p-3 border border-gray-200 border-opacity-10">
                <div className="text-xs sm:text-sm md:text-lg font-bold">500+</div>
                <div className="text-[10px] sm:text-xs md:text-sm font-bold">Active Members</div>
              </div>
            </div>

          </div>
        </section>

        {/* Intro */}
        <section className="py-8 sm:py-12">
          <div className="container mx-auto text-center px-4">
            <p className="max-w-3xl mx-auto text-body text-gray-700">
              A sophisticated organizational structure designed to mirror real-world financial institutions while fostering leadership development.
            </p>
          </div>
        </section>

        {/* Core Divisions */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-gray-900">Our Core Divisions</h2>
            <p className="text-body text-center text-gray-600 mt-2 sm:mt-3 max-w-2xl mx-auto">Three specialized divisions covering all aspects of modern finance</p>

            <div className="grid gap-6 sm:gap-8 mt-6 sm:mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 sm:p-6">
                <div className="text-caption font-semibold text-green-700">DIVISION 01</div>
                <h3 className="card-title mt-1 text-text-primary">Capital & Markets</h3>
                <p className="text-body text-gray-600 mt-2">Core financial markets operations focusing on investment strategies, trading excellence, and corporate finance mastery.</p>
                <div className="flex flex-wrap gap-1 sm:gap-2 mt-3 sm:mt-4">
                  <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-caption">Investment Banking</span>
                  <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-caption">Alternative Investments</span>
                  <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-caption">Sales & Trading</span>
                  <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-caption">M&amp;A Analysis</span>
                  <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-caption">Derivatives</span>
                </div>
              </div>

              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 sm:p-6">
                <div className="text-caption font-semibold text-green-700">DIVISION 02</div>
                <h3 className="card-title mt-1">Research & Innovation</h3>
                <p className="text-body text-gray-600 mt-2">Cutting-edge financial research and technological advancement driving industry innovation.</p>
                <div className="flex flex-wrap gap-1 sm:gap-2 mt-3 sm:mt-4">
                  <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-caption">Financial Research</span>
                  <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-caption">FinTech Development</span>
                  <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-caption">Energy Finance</span>
                  <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-caption">Infrastructure</span>
                </div>
              </div>

              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 sm:p-6">
                <div className="text-caption font-semibold text-green-700">DIVISION 03</div>
                <h3 className="card-title mt-1">Operations & Advisory</h3>
                <p className="text-body text-gray-600 mt-2">Strategic operations, professional development, and organizational excellence across all BOF initiatives.</p>
                <div className="flex flex-wrap gap-1 sm:gap-2 mt-3 sm:mt-4">
                  <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-caption">Management Consulting</span>
                  <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-caption">Financial Operations</span>
                  <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-caption">Programs &amp; Events</span>
                  <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-caption">People &amp; Culture</span>
                  <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-caption">Public Relations</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Subsidiaries */}
        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-center font-bold">Internal Subsidiaries</h2>
            <p className="text-center text-gray-700 mt-3">BOF OAU transcends traditional classroom learning through our student-led subsidiaries - innovative structures that provide analysts with unparalleled hands-on experience in three critical areas of modern finance.</p>

            <div className="mt-8 space-y-6">
              <div className="bg-white rounded-lg p-6 shadow">
                <div className="w-12 h-12 bg-green-700 text-white rounded flex items-center justify-center text-2xl font-bold mb-4">1</div>
                <h3 className="text-xl font-semibold">BOF OAU Venture Capital Fund</h3>
                <p className="italic text-gray-600 mt-1">Student-Managed Investment Fund</p>
                <hr className="my-4" />
                <p className="text-gray-700">A pioneering platform that identifies and funds high-potential student startups, offering complete deal cycle experience from sourcing to portfolio management.</p>
                <ul className="list-disc list-inside mt-3 text-gray-700">
                  <li>Startup funding (₦100K - ₦1M range)</li>
                  <li>Due diligence &amp; portfolio management</li>
                  <li>Synergy with FinTech Hackathons</li>
                  <li>Co-investment opportunities</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow">
                <div className="w-12 h-12 bg-green-700 text-white rounded flex items-center justify-center text-2xl font-bold mb-4">2</div>
                <h3 className="text-xl font-semibold">BOF OAU Quant Laboratory</h3>
                <p className="italic text-gray-600 mt-1">Quantitative Finance Hub</p>
                <hr className="my-4" />
                <p className="text-gray-700">Cutting-edge hub for quantitative finance featuring professional-grade tools and live market data feeds for algorithmic strategy development.</p>
                <ul className="list-disc list-inside mt-3 text-gray-700">
                  <li>Python, R, MATLAB tools</li>
                  <li>Live market data feeds</li>
                  <li>Backtesting &amp; simulation</li>
                  <li>Quant competitions</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow">
                <div className="w-12 h-12 bg-green-700 text-white rounded flex items-center justify-center text-2xl font-bold mb-4">3</div>
                <h3 className="text-xl font-semibold">BOF OAU ESG Advisory</h3>
                <p className="italic text-gray-600 mt-1">Sustainable Finance Arm</p>
                <hr className="my-4" />
                <p className="text-gray-700">The sustainability arm driving responsible finance through comprehensive ESG analysis and SDG-aligned consulting projects.</p>
                <ul className="list-disc list-inside mt-3 text-gray-700">
                  <li>ESG analysis (GRI, SASB frameworks)</li>
                  <li>Campus sustainability initiatives</li>
                  <li>SDG-aligned consulting</li>
                  <li>Impact measurement</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-block bg-green-200 text-green-800 px-6 py-3 rounded-lg font-semibold">Global Partnership</div>
            <h3 className="text-2xl font-bold mt-4">Imperial College Investment Society</h3>
            <p className="max-w-3xl mx-auto text-gray-700 mt-3">Strategic alliance with London's premier student finance organization, enabling cross-continental competitions, knowledge sharing, and networking opportunities across Africa and Europe.</p>

            <div className="flex items-center justify-center gap-8 mt-8">
              <img src="/images/bof.png" alt="BOF OAU Logo" className="h-24" />
              <div className="h-1 w-12 bg-gray-800"></div>
              <img src="/images/icis.png" alt="ICIS Logo" className="h-24" />
            </div>
          </div>
        </section>

        {/* Join */}
        <section className="py-16 bg-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="">Join Our Structure</h2>
            <p className="max-w-3xl mx-auto mt-4 text-gray-700">Become part of Africa's most sophisticated student finance organization and gain hands-on experience across all divisions and subsidiaries.</p>
            <div className="mt-6 inline-block">
              <Button text="Become an Analyst" size="large" variant="outline" />
            </div>
          </div>
        </section>

        <FooterSection />
      </div>
    </>
  );
};

export default Structure;
