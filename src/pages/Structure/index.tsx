import React from 'react';
        import { Helmet } from 'react-helmet';
        import Header from '../../components/common/Header';
        import Footer from '../../components/common/Footer';

        const Structure = () => {
          return (
            <>
              <Helmet>
                <title>Our Structure - BOF OAU | Organizational Leadership Structure</title>
                <meta
                  name="description"
                  content="Discover the organizational structure of BOF OAU. Meet our executive team, faculty advisers, and learn about our governance model that drives excellence in finance education."
                />
                <meta property="og:title" content="Our Structure - BOF OAU | Organizational Leadership Structure" />
                <meta property="og:description" content="Discover the organizational structure of BOF OAU. Meet our executive team, faculty advisers, and learn about our governance model." />
              </Helmet>

              <div className="w-full bg-background-main">
                <Header />
                
                {/* Hero Section */}
                <section className="w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                  <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
                      Our Structure
                    </h1>
                    <p className="text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto">
                      A well-organized leadership structure that ensures effective governance, 
                      strategic decision-making, and sustainable growth of our organization.
                    </p>
                  </div>
                </section>

                {/* Executive Leadership */}
                <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-white">
                  <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                      <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">Executive Leadership</h2>
                      <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                        Our executive team provides strategic leadership and direction to achieve our organizational goals
                      </p>
                    </div>
                    
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* President */}
                      <div className="text-center">
                        <div className="relative mb-6">
                          <img 
                            src="/images/img_ellipse_1.png" 
                            alt="President"
                            className="w-48 h-48 object-cover rounded-full mx-auto shadow-lg"
                          />
                          <div className="absolute inset-0 bg-primary-background bg-opacity-20 rounded-full"></div>
                        </div>
                        <h3 className="text-xl font-bold text-text-primary mb-2">Adebayo Emmanuel</h3>
                        <p className="text-primary-background font-semibold mb-3">President</p>
                        <p className="text-text-secondary leading-relaxed">
                          Leading the organization's strategic vision and ensuring alignment with our mission of empowering future financial leaders.
                        </p>
                      </div>

                      {/* Vice President */}
                      <div className="text-center">
                        <div className="relative mb-6">
                          <img 
                            src="/images/img_ellipse_2.png" 
                            alt="Vice President"
                            className="w-48 h-48 object-cover rounded-full mx-auto shadow-lg"
                          />
                          <div className="absolute inset-0 bg-primary-background bg-opacity-20 rounded-full"></div>
                        </div>
                        <h3 className="text-xl font-bold text-text-primary mb-2">Sarah Adeyemi</h3>
                        <p className="text-primary-background font-semibold mb-3">Vice President</p>
                        <p className="text-text-secondary leading-relaxed">
                          Supporting presidential initiatives and overseeing operational excellence across all organizational activities.
                        </p>
                      </div>

                      {/* Secretary General */}
                      <div className="text-center">
                        <div className="relative mb-6">
                          <img 
                            src="/images/img_ellipse_3.png" 
                            alt="Secretary General"
                            className="w-48 h-48 object-cover rounded-full mx-auto shadow-lg"
                          />
                          <div className="absolute inset-0 bg-primary-background bg-opacity-20 rounded-full"></div>
                        </div>
                        <h3 className="text-xl font-bold text-text-primary mb-2">Michael Ogundimu</h3>
                        <p className="text-primary-background font-semibold mb-3">Secretary General</p>
                        <p className="text-text-secondary leading-relaxed">
                          Managing organizational communications, documentation, and ensuring effective information flow.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Department Structure */}
                <section className="w-full px-4 sm:px-6 lg:px-8 py-16">
                  <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                      <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">Department Structure</h2>
                      <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                        Our specialized departments ensure comprehensive coverage of all organizational functions
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {/* Finance Department */}
                      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="w-12 h-12 bg-primary-background rounded-full flex items-center justify-center mb-4">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zM14 6a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h8zM6 8a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 012-2h2z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-text-primary mb-3">Finance Department</h3>
                        <p className="text-text-secondary mb-4">
                          Manages organizational finances, budgeting, and financial planning for all activities and programs.
                        </p>
                        <div className="text-sm font-medium text-primary-background">Head: Funmi Adeleye</div>
                      </div>

                      {/* Academic Department */}
                      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="w-12 h-12 bg-primary-background rounded-full flex items-center justify-center mb-4">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-text-primary mb-3">Academic Department</h3>
                        <p className="text-text-secondary mb-4">
                          Coordinates educational programs, workshops, and academic partnerships with faculty and industry experts.
                        </p>
                        <div className="text-sm font-medium text-primary-background">Head: David Okafor</div>
                      </div>

                      {/* Public Relations */}
                      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="w-12 h-12 bg-primary-background rounded-full flex items-center justify-center mb-4">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-text-primary mb-3">Public Relations</h3>
                        <p className="text-text-secondary mb-4">
                          Manages external communications, social media presence, and builds relationships with stakeholders.
                        </p>
                        <div className="text-sm font-medium text-primary-background">Head: Blessing Oke</div>
                      </div>

                      {/* Events & Programs */}
                      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="w-12 h-12 bg-primary-background rounded-full flex items-center justify-center mb-4">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-text-primary mb-3">Events & Programs</h3>
                        <p className="text-text-secondary mb-4">
                          Plans and executes all organizational events, competitions, and professional development programs.
                        </p>
                        <div className="text-sm font-medium text-primary-background">Head: James Adebowale</div>
                      </div>

                      {/* Technology & Innovation */}
                      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="w-12 h-12 bg-primary-background rounded-full flex items-center justify-center mb-4">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-text-primary mb-3">Technology & Innovation</h3>
                        <p className="text-text-secondary mb-4">
                          Drives digital transformation initiatives and manages technological infrastructure for the organization.
                        </p>
                        <div className="text-sm font-medium text-primary-background">Head: Kemi Adesola</div>
                      </div>

                      {/* Membership & Welfare */}
                      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="w-12 h-12 bg-primary-background rounded-full flex items-center justify-center mb-4">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-text-primary mb-3">Membership & Welfare</h3>
                        <p className="text-text-secondary mb-4">
                          Manages member recruitment, engagement, and ensures the welfare and development of all members.
                        </p>
                        <div className="text-sm font-medium text-primary-background">Head: Tope Olaniyan</div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Faculty Advisers */}
                <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-white">
                  <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                      <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">Faculty Advisers</h2>
                      <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                        Distinguished faculty members who provide guidance, mentorship, and academic oversight
                      </p>
                    </div>
                    
                    <div className="grid lg:grid-cols-2 gap-12">
                      {/* Faculty Adviser 1 */}
                      <div className="flex items-start space-x-6">
                        <img 
                          src="/images/img_ellipse_4.png" 
                          alt="Dr. Adebola Johnson"
                          className="w-24 h-24 object-cover rounded-full flex-shrink-0"
                        />
                        <div>
                          <h3 className="text-xl font-bold text-text-primary mb-1">Dr. Adebola Johnson</h3>
                          <p className="text-primary-background font-semibold mb-2">Department of Management & Accounting</p>
                          <p className="text-text-secondary leading-relaxed">
                            Professor of Finance with over 15 years of experience in corporate finance and investment management. 
                            Provides strategic guidance on academic programs and industry partnerships.
                          </p>
                        </div>
                      </div>

                      {/* Faculty Adviser 2 */}
                      <div className="flex items-start space-x-6">
                        <img 
                          src="/images/img_ellipse_1_108x108.png" 
                          alt="Prof. Olumide Akinwale"
                          className="w-24 h-24 object-cover rounded-full flex-shrink-0"
                        />
                        <div>
                          <h3 className="text-xl font-bold text-text-primary mb-1">Prof. Olumide Akinwale</h3>
                          <p className="text-primary-background font-semibold mb-2">Department of Economics</p>
                          <p className="text-text-secondary leading-relaxed">
                            Renowned economist specializing in development finance and monetary policy. 
                            Mentors students in research methodologies and economic analysis.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Governance Model */}
                <section className="w-full px-4 sm:px-6 lg:px-8 py-16">
                  <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                      <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">Governance Model</h2>
                      <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                        Our democratic governance structure ensures transparency, accountability, and member participation
                      </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-primary-background rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-text-primary mb-2">Democratic Elections</h3>
                        <p className="text-text-secondary">Annual elections ensure fair representation and leadership rotation</p>
                      </div>

                      <div className="text-center">
                        <div className="w-16 h-16 bg-primary-background rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-text-primary mb-2">Constitutional Framework</h3>
                        <p className="text-text-secondary">Clear constitution defining roles, responsibilities, and procedures</p>
                      </div>

                      <div className="text-center">
                        <div className="w-16 h-16 bg-primary-background rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-text-primary mb-2">Accountability Measures</h3>
                        <p className="text-text-secondary">Regular reporting and feedback mechanisms for transparency</p>
                      </div>
                    </div>
                  </div>
                </section>

                <Footer />
              </div>
            </>
          );
        };

        export default Structure;