import React from 'react';
        import { Helmet } from 'react-helmet';
        import Header from '../../components/common/Header';
        import Footer from '../../components/common/Footer';

        const Mission = () => {
          return (
            <>
              <Helmet>
                <title>Our Mission - BOF OAU | Empowering Future Financial Leaders</title>
                <meta
                  name="description"
                  content="Learn about BOF OAU's mission to empower students with practical financial skills, industry exposure, and leadership development. Discover our vision for transforming African finance education."
                />
                <meta property="og:title" content="Our Mission - BOF OAU | Empowering Future Financial Leaders" />
                <meta property="og:description" content="Learn about BOF OAU's mission to empower students with practical financial skills, industry exposure, and leadership development." />
              </Helmet>

              <div className="w-full bg-background-main">
                <Header />
                
                {/* Hero Section */}
                <section className="w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                  <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                      <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
                        Our Mission & Vision
                      </h1>
                      <p className="text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto">
                        Empowering the next generation of African financial leaders through innovative education, 
                        practical experience, and industry connections.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Mission Section */}
                <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-white">
                  <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 bg-primary-background rounded-full flex items-center justify-center mr-4">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary">Our Mission</h2>
                        </div>
                        <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                          To provide students at Obafemi Awolowo University with comprehensive business and finance education 
                          that goes beyond traditional classroom learning. We are committed to:
                        </p>
                        <ul className="space-y-4">
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-primary-background mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-text-secondary">Bridging the gap between academic theory and industry practice</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-primary-background mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-text-secondary">Developing critical thinking and analytical skills in finance</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-primary-background mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-text-secondary">Creating networking opportunities with industry professionals</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-primary-background mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-text-secondary">Fostering leadership and entrepreneurial mindset</span>
                          </li>
                        </ul>
                      </div>
                      <div className="relative">
                        <img 
                          src="/images/img_rectangle_24.png" 
                          alt="Mission Visual" 
                          className="w-full h-96 object-cover rounded-lg shadow-lg"
                        />
                        <div className="absolute inset-0 bg-primary-background bg-opacity-20 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Vision Section */}
                <section className="w-full px-4 sm:px-6 lg:px-8 py-16">
                  <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div className="lg:order-2">
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 bg-primary-background rounded-full flex items-center justify-center mr-4">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary">Our Vision</h2>
                        </div>
                        <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                          To be Africa's leading student-driven organization in business and finance education, 
                          recognized for producing exceptional graduates who transform the financial landscape across the continent.
                        </p>
                        <div className="bg-primary-background bg-opacity-10 p-6 rounded-lg">
                          <h3 className="text-xl font-semibold text-text-primary mb-4">Our Impact Goals</h3>
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-primary-background">500+</div>
                              <div className="text-sm text-text-secondary">Students Empowered</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-primary-background">50+</div>
                              <div className="text-sm text-text-secondary">Industry Partners</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-primary-background">10+</div>
                              <div className="text-sm text-text-secondary">Major Events</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-primary-background">95%</div>
                              <div className="text-sm text-text-secondary">Graduate Success Rate</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="lg:order-1 relative">
                        <img 
                          src="/images/img_rectangle_25.png" 
                          alt="Vision Visual" 
                          className="w-full h-96 object-cover rounded-lg shadow-lg"
                        />
                        <div className="absolute inset-0 bg-primary-background bg-opacity-20 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Core Values Section */}
                <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-white">
                  <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                      <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">Our Core Values</h2>
                      <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                        These values guide everything we do and shape the leaders we develop
                      </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      <div className="text-center p-6">
                        <div className="w-16 h-16 bg-primary-background rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-text-primary mb-2">Excellence</h3>
                        <p className="text-text-secondary">Striving for the highest standards in everything we do</p>
                      </div>
                      <div className="text-center p-6">
                        <div className="w-16 h-16 bg-primary-background rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-text-primary mb-2">Collaboration</h3>
                        <p className="text-text-secondary">Building strong partnerships within our community</p>
                      </div>
                      <div className="text-center p-6">
                        <div className="w-16 h-16 bg-primary-background rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-text-primary mb-2">Innovation</h3>
                        <p className="text-text-secondary">Embracing new ideas and creative solutions</p>
                      </div>
                      <div className="text-center p-6">
                        <div className="w-16 h-16 bg-primary-background rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-text-primary mb-2">Leadership</h3>
                        <p className="text-text-secondary">Developing strong leaders for tomorrow</p>
                      </div>
                      <div className="text-center p-6">
                        <div className="w-16 h-16 bg-primary-background rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-text-primary mb-2">Integrity</h3>
                        <p className="text-text-secondary">Maintaining honesty and ethical standards</p>
                      </div>
                      <div className="text-center p-6">
                        <div className="w-16 h-16 bg-primary-background rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-text-primary mb-2">Impact</h3>
                        <p className="text-text-secondary">Creating positive change in our community</p>
                      </div>
                    </div>
                  </div>
                </section>

                <Footer />
              </div>
            </>
          );
        };

        export default Mission;