import React, { useState } from 'react';
        import { Helmet } from 'react-helmet';
        import Header from '../../components/common/Header';
        import FooterSection from '../Home/FooterSection';

        const JoinUs = () => {
          const [formData, setFormData] = useState({
            fullName: '',
            email: '',
            phone: '',
            department: '',
            level: '',
            interests: '',
            motivation: ''
          });

          const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
            const { name, value } = e.target;
            setFormData(prev => ({
              ...prev,
              [name]: value
            }));
          };

          const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            // Handle form submission
            console.log('Form submitted:', formData);
            // Here you would typically send the data to your backend
          };

          return (
            <>
              <Helmet>
                <title>Join Us - BOF OAU | Become a Member Today</title>
                <meta
                  name="description"
                  content="Join BOF OAU today and become part of Africa's premier Business and Finance student organization. Apply for membership and unlock opportunities for growth, networking, and leadership development."
                />
                <meta property="og:title" content="Join Us - BOF OAU | Become a Member Today" />
                <meta property="og:description" content="Join BOF OAU today and become part of Africa's premier Business and Finance student organization." />
              </Helmet>

              <div className="w-full bg-background-main">
                <Header />
                
                {/* Hero Section */}
                <section className="w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                  <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-text-primary mb-6">
                      Join BOF OAU Today
                    </h1>
                    <p className="text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto mb-8">
                      Become part of Africa's premier Business and Finance student organization. 
                      Unlock opportunities for growth, networking, and leadership development that will shape your future career.
                    </p>
                    <div className="inline-flex items-center px-6 py-3 bg-primary-background bg-opacity-20 rounded-full">
                      <svg className="w-5 h-5 text-primary-background mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-primary-background font-medium">Applications Open Year-Round</span>
                    </div>
                  </div>
                </section>

                {/* Benefits Section */}
                <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-white">
                  <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                      <h2 className="text-text-primary mb-4">Why Join BOF OAU?</h2>
                      <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                        Discover the exclusive benefits and opportunities available to our members
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      <div className="text-center p-6">
                        <div className="w-16 h-16 bg-primary-background rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-text-primary mb-3">Premium Education</h3>
                        <p className="text-text-secondary">Access to exclusive workshops, seminars, and training programs by industry experts</p>
                      </div>

                      <div className="text-center p-6">
                        <div className="w-16 h-16 bg-primary-background rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-text-primary mb-3">Networking</h3>
                        <p className="text-text-secondary">Connect with like-minded peers, alumni, and professionals in the finance industry</p>
                      </div>

                      <div className="text-center p-6">
                        <div className="w-16 h-16 bg-primary-background rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-text-primary mb-3">Career Growth</h3>
                        <p className="text-text-secondary">Leadership opportunities, internship placements, and career development resources</p>
                      </div>

                      <div className="text-center p-6">
                        <div className="w-16 h-16 bg-primary-background rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-text-primary mb-3">Industry Exposure</h3>
                        <p className="text-text-secondary">Real-world projects, case competitions, and direct industry engagement</p>
                      </div>

                      <div className="text-center p-6">
                        <div className="w-16 h-16 bg-primary-background rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-text-primary mb-3">Skill Development</h3>
                        <p className="text-text-secondary">Hands-on training in financial modeling, analysis, and business strategy</p>
                      </div>

                      <div className="text-center p-6">
                        <div className="w-16 h-16 bg-primary-background rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-text-primary mb-3">Recognition</h3>
                        <p className="text-text-secondary">Certificates, awards, and recognition for outstanding performance and contributions</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Application Form */}
                <section className="w-full px-4 sm:px-6 lg:px-8 py-16">
                  <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                      <h2 className="text-text-primary mb-4">Apply for Membership</h2>
                      <p className="text-lg text-text-secondary">
                        Complete the form below to begin your journey with BOF OAU
                      </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-8">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-text-primary mb-2">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              id="fullName"
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-background focus:border-primary-background transition-colors"
                              placeholder="Enter your full name"
                            />
                          </div>

                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-background focus:border-primary-background transition-colors"
                              placeholder="your.email@example.com"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
                              Phone Number *
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-background focus:border-primary-background transition-colors"
                              placeholder="+234 XXX XXX XXXX"
                            />
                          </div>

                          <div>
                            <label htmlFor="department" className="block text-sm font-medium text-text-primary mb-2">
                              Department *
                            </label>
                            <select
                              id="department"
                              name="department"
                              value={formData.department}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-background focus:border-primary-background transition-colors"
                            >
                              <option value="">Select your department</option>
                              <option value="Management & Accounting">Management & Accounting</option>
                              <option value="Economics">Economics</option>
                              <option value="Computer Science">Computer Science</option>
                              <option value="Psychology">Psychology</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="level" className="block text-sm font-medium text-text-primary mb-2">
                              Current Level *
                            </label>
                            <select
                              id="level"
                              name="level"
                              value={formData.level}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-background focus:border-primary-background transition-colors"
                            >
                              <option value="">Select your level</option>
                              <option value="100L">100 Level</option>
                              <option value="200L">200 Level</option>
                              <option value="300L">300 Level</option>
                              <option value="400L">400 Level</option>
                              <option value="500L">500 Level</option>
                              <option value="Postgraduate">Postgraduate</option>
                            </select>
                          </div>

                          <div>
                            <label htmlFor="interests" className="block text-sm font-medium text-text-primary mb-2">
                              Areas of Interest
                            </label>
                            <input
                              type="text"
                              id="interests"
                              name="interests"
                              value={formData.interests}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-background focus:border-primary-background transition-colors"
                              placeholder="e.g., Investment Banking, FinTech, etc."
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="motivation" className="block text-sm font-medium text-text-primary mb-2">
                            Why do you want to join BOF OAU? *
                          </label>
                          <textarea
                            id="motivation"
                            name="motivation"
                            value={formData.motivation}
                            onChange={handleInputChange}
                            required
                            rows={4}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-background focus:border-primary-background transition-colors"
                            placeholder="Tell us about your goals and what you hope to gain from membership..."
                          />
                        </div>

                        <div className="text-center">
                          <button
                            type="submit"
                            className="inline-flex items-center px-8 py-4 bg-primary-background text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors duration-200 shadow-lg"
                          >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5 9.293 10.793a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                            </svg>
                            Submit Application
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </section>

                {/* FAQ Section */}
                <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-white">
                  <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                      <h2 className="text-text-primary mb-4">Frequently Asked Questions</h2>
                    </div>

                    <div className="space-y-6">
                      <div className="border border-gray-200 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-text-primary mb-3">Who can apply for membership?</h3>
                        <p className="text-text-secondary">Any undergraduate or postgraduate student at OAU with an interest in business and finance can apply, regardless of their department.</p>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-text-primary mb-3">Is there a membership fee?</h3>
                        <p className="text-text-secondary">Yes, there is a nominal annual membership fee that covers event costs, materials, and organizational activities. The fee structure is communicated during the application process.</p>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-text-primary mb-3">How long does the application process take?</h3>
                        <p className="text-text-secondary">The application review process typically takes 1-2 weeks. Successful applicants will be notified via email and invited to attend an orientation session.</p>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-text-primary mb-3">What is the time commitment?</h3>
                        <p className="text-text-secondary">Members are expected to attend bi-weekly general meetings and participate in at least 75% of organized events and activities throughout the academic year.</p>
                      </div>
                    </div>
                  </div>
                </section>

                <FooterSection />
              </div>
            </>
          );
        };

        export default JoinUs;