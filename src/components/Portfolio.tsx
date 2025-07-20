'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronDown, Mail, Phone, MapPin, Download, Github, Linkedin, ExternalLink, Code, Database, Globe, Server } from 'lucide-react';

// TypeScript interfaces
interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
}

interface TechStackItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  technologies: string[];
  description: string;
  achievements: string[];
}

interface Education {
  title: string;
  institution: string;
  period: string;
//   description: string;
}

interface Certification {
  title: string;
  institution: string;
  period: string;
  description: string;
}

// Extend Window interface for Credly
declare global {
  interface Window {
    CrederlyUtil?: {
      init: () => void;
    };
  }
}

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [badgeKey, setBadgeKey] = useState(0);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      
      // Force badge re-render when navigating to certifications
      if (sectionId === 'certifications') {
        setTimeout(() => {
          setBadgeKey(prev => prev + 1);
        }, 500);
      }
    }
  };

  const handleResumeDownload = () => {
    // In a real implementation, this would download your actual resume
    // alert('Resume download would be implemented here');
    const link = document.createElement('a');
    link.href = '/LeeQinWen_Resume_v3.pdf';
    link.download = 'LeeQinWen_Resume.pdf';
    link.click();
  };

  const techStack: TechStackItem[] = [
    { name: 'JavaScript', icon: Code, color: 'bg-amber-100 text-amber-800' },
    { name: 'React', icon: Code, color: 'bg-orange-100 text-orange-800' },
    { name: 'Next.js', icon: Globe, color: 'bg-gray-100 text-gray-800' },
    { name: 'Node.js', icon: Server, color: 'bg-green-100 text-green-800' },
    // { name: 'Python', icon: Code, color: 'bg-red-100 text-red-800' },
    // { name: 'MongoDB', icon: Database, color: 'bg-green-100 text-green-800' },
    { name: 'PostgreSQL', icon: Database, color: 'bg-indigo-100 text-indigo-800' },
    { name: 'AWS', icon: Server, color: 'bg-orange-100 text-orange-800' },
  ];


  const projects: Project[] = [
    // {
    //   title: 'E-Commerce Platform',
    //   description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
    //   technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    //   githubUrl: 'https://github.com/yourusername/ecommerce',
    //   liveUrl: 'https://your-ecommerce-demo.com',
    //   image: 'https://via.placeholder.com/400x200/3B82F6/ffffff?text=E-Commerce+Platform'
    // },
    // {
    //   title: 'Task Management App',
    //   description: 'Collaborative task management application built with Next.js and PostgreSQL. Includes real-time updates, team collaboration, and project tracking.',
    //   technologies: ['Next.js', 'PostgreSQL', 'Socket.io', 'Tailwind CSS'],
    //   githubUrl: 'https://github.com/yourusername/taskmanager',
    //   liveUrl: 'https://your-taskmanager-demo.com',
    //   image: 'https://via.placeholder.com/400x200/10B981/ffffff?text=Task+Manager'
    // },
    // {
    //   title: 'Weather Dashboard',
    //   description: 'Interactive weather dashboard with location-based forecasts, historical data visualization, and weather alerts.',
    //   technologies: ['React', 'Chart.js', 'OpenWeather API', 'CSS3'],
    //   githubUrl: 'https://github.com/yourusername/weather-dashboard',
    //   liveUrl: 'https://your-weather-demo.com',
    //   image: 'https://via.placeholder.com/400x200/8B5CF6/ffffff?text=Weather+Dashboard'
    // }
  ];

  const experiences: Experience[] = [
    {
      title: 'Software Engineer / Business Analyst',
      company: 'Secur Solution Group Pte Ltd',
      period: '07/2024 - Present',
      description: 'Primarily Worked with user closely to ensure the daily business workflow is not disrupted. Fixs system bugs to ensure the sytem stablility',
      technologies: ['.NET', 'MSSQL'],
      achievements: [
        'Successfully drove Ministry of Law Case Accounting System project to go-live',
        'Improved application performance by 30% through revised complex sql queries'
      ]
    },
    {
      title: 'Software Engineer / System Analyst',
      company: 'Medisys Innovation Pte Ltd',
      period: '06/2022 - 06/2024',
      description: 'Developed and maintained existing web applications. Worked closely with clients and developer team to deliver custom solutions.',
      technologies: ['React.js', 'PostgreSQL', '.NET'],
      achievements: [
        'Maintained and enhanced Lab Management Software, implement features which improved functionality and user experience',
        'Completed 2 data migration for Aptus Medical Center and Singapore Polytechnic project',
        'Led and managed User Acceptance Testing for 2 key Parkway projects'
      ]
    },
    {
      title: 'Junior Full Stack Software Engineer',
      company: 'Adtiki Sdn Bhd',
      period: '07/2020 - 04/2022',
      description: 'Built responsive Adtiki Ads Campaign website. Gained experience in modern web development practices.',
      technologies: ['Ember.js', 'PostgreSQL', 'Node.Js', 'GraphQL'],
      achievements: [
        'Contributed to implement Uppy uploader into Ads Campaign website',
        'Contributed to implement Annotorious immage annotation library into Ads Campaign website, which allow user to add comment on the image'
      ]
    }
  ];

  const education: Education[] = [
    {
      title: 'Master of Cybersecurity',
      institution: 'University Teknology Malaysia (UTM)',
      period: '2025 - Current',
    //   description: 'Advanced coursework in distributed systems, machine learning, and software architecture.'
    },
    {
      title: 'Bachelor of Science (Honours) Software Engineering',
      institution: 'University Tunku Abdul Rahman (UTAR)',
      period: '2016 - 2020',
    //   description: 'Specialized in software engineering with focus on web technologies and database systems.'
    },
  ];

  const certifications: Certification[] = [
    {
      title: 'AWS Certified Cloud Practitioner',
      institution: 'AWS',
      period: '2023',
      description: 'Practitioner certification in cloud services.'
    },
    {
        title: "Semgrep 101 🔗",
        institution: 'Semgrep',
        period: '2025',
        description: 'Fundamentals of static code analysis, software supply chain security, and secret scanning with Semgrep in this course.'
    }
  ];

  // Load Credly badge script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//cdn.credly.com/assets/utilities/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src*="credly.com"]');
      if (existingScript && document.body.contains(existingScript)) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  // Re-trigger badge loading when badgeKey changes
   useEffect(() => {
    if (badgeKey > 0) {
      setTimeout(() => {
        const script = document.createElement('script');
        script.src = '//cdn.credly.com/assets/utilities/embed.js';
        script.async = true;
        document.body.appendChild(script);
        
        // Remove the temporary script after a short delay
        setTimeout(() => {
          if (document.body.contains(script)) {
            document.body.removeChild(script);
          }
        }, 2000);
      }, 100);
    }
  }, [badgeKey]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fbf6f2' }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-800">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'tech-stack', 'experience', 'education', 'certifications', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-orange-600 transition-colors ${
                    activeSection === section ? 'text-orange-600 font-semibold' : 'text-gray-600'
                  }`}
                >
                  {section.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
       <section id="home" className="pt-20 pb-16 text-white" style={{ backgroundColor: '#D97757' }}>
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-8 bg-white rounded-full flex items-center justify-center text-6xl shadow-lg">
              👋
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Hello, I&apos;m <span className="text-amber-200">Lee Qin Wen</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">
              Software Engineer & Cyber Enthusiast
            </p>
            <p className="text-lg mb-12 max-w-2xl mx-auto text-orange-100">
              I create modern, responsive web applications using cutting-edge technologies. 
              Passionate about clean code, user experience, and continuous learning.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors shadow-lg"
              >
                View My Work
              </button>
              <button
                onClick={handleResumeDownload}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors flex items-center"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </button>
            </div>
          </div>
        </div>
        <div className="text-center">
          <ChevronDown className="w-8 h-8 mx-auto animate-bounce cursor-pointer" onClick={() => scrollToSection('about')} />
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="py-20" style={{ backgroundColor: '#f0eee6' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                // src="https://via.placeholder.com/400x400/3B82F6/ffffff?text=Your+Photo"
                src="/images/ProfilePic.jpg"
                alt="Profile"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                3+ Years Experience in IT industry
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                My journey began with a curiosity about how websites work, which evolved into a 
                passion for creating seamless digital experiences.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I&apos;m always eager to learn new technologies. I believe in writing clean, maintainable code and creating 
                applications that provide real value to users.
                Alongsdie my software development work, I have passion for Cybersecurity and actively self-study to build
                practical skills and expand my expertise
              </p>
              <div className="flex space-x-4">
                {/* <a href="https://github.com/yourusername" className="text-gray-600 hover:text-orange-600 transition-colors">
                  <Github className="w-6 h-6" />
                </a> */}
                <a href="https://www.linkedin.com/in/leeqinwen/" className="text-gray-600 hover:text-orange-600 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
       <section id="projects" className="py-20" style={{ backgroundColor: '#f6ede5' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Projects</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
            <p className="text-gray-600 mt-4">Here are some of my recent projects</p>
          </div>
          {projects.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center text-4xl" style={{ backgroundColor: '#f2e3d9' }}>
                🚀
              </div>
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">Coming Soon</h3>
              <p className="text-gray-600 text-lg max-w-md mx-auto">
                Exciting projects are currently in development. Check back soon to see my latest work!
              </p>
            </div>
          ) : (
            <div className={`gap-8 ${
              projects.length === 1 
                ? 'flex justify-center' 
                : projects.length === 2 
                  ? 'grid grid-cols-1 md:grid-cols-2 justify-items-center max-w-4xl mx-auto'
                  : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            }`}>
              {projects.map((project, index) => (
                <div key={index} className={`rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${
                  projects.length === 1 ? 'w-full max-w-md' : 'w-full'
                }`} style={{ backgroundColor: '#ffffff' }}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    unoptimized
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <a
                        href={project.githubUrl}
                        className="flex items-center text-gray-600 hover:text-orange-600 transition-colors"
                      >
                        <Github className="w-5 h-5 mr-1" />
                        Code
                      </a>
                      <a
                        href={project.liveUrl}
                        className="flex items-center text-gray-600 hover:text-orange-600 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 mr-1" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>


      {/* Tech Stack */}
      <section id="tech-stack" className="py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Tech Stack</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
            <p className="text-gray-600 mt-4">Technologies I work with</p>
          </div>
          <div className={`gap-6 ${
            techStack.length === 1 
              ? 'flex justify-center'
              : techStack.length === 2
                ? 'grid grid-cols-2 justify-items-center max-w-md mx-auto'
              : techStack.length <= 4
                ? 'grid grid-cols-2 md:grid-cols-4 max-w-2xl mx-auto'
              : techStack.length <= 6
                ? 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6'
              : techStack.length <= 8
                ? 'grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8'
              : 'grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6'
          }`}>
            {techStack.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={index}
                  className={`rounded-lg p-6 text-center hover:shadow-lg transition-shadow ${
                    techStack.length === 1 ? 'w-full max-w-xs' : 'w-full'
                  }`}
                  style={{ backgroundColor: '#f2e3d9' }}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${tech.color}`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-gray-800">{tech.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20" style={{ backgroundColor: '#f0eee6' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Experience</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="rounded-lg shadow-lg p-8 border-l-4 border-orange-500" style={{ backgroundColor: '#e3dacc' }}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800">{exp.title}</h3>
                    <p className="text-orange-600 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 md:text-right">{exp.period}</span>
                </div>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-20" style={{ backgroundColor: '#f0eee6' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Education</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>
          <div className="space-y-8">
            {education.map((item, index) => (
              <div key={index} className="rounded-lg p-8 border-l-4 border-orange-500" style={{ backgroundColor: '#e3dacc' }}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-orange-600 font-medium">{item.institution}</p>
                  </div>
                  <span className="text-gray-500 md:text-right">{item.period}</span>
                </div>
                {/* <p className="text-gray-600">{item.description}</p> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-20" style={{ backgroundColor: '#f0eee6' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Certifications</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>
          
          {/* Certification Badges */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Verified Badges</h3>
            <div className="flex justify-center rounded-lg p-8 shadow-lg" style={{ backgroundColor: '#faf9f5' }}>
              <div
                key={`credly-badge-${badgeKey}`}
                dangerouslySetInnerHTML={{
                  __html: `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="993fc5eb-3c2a-4096-8fc9-9da4bd2b3b42" data-share-badge-host="https://www.credly.com"></div>`
                }}
              />
            </div>
          </div>

          {/* Certification List */}
          <div className="space-y-8">
            {certifications.map((item, index) => (
              <div key={index} className="rounded-lg shadow-lg p-8 border-l-4 border-orange-500" style={{ backgroundColor: '#e3dacc' }}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 bg-orange-100 text-orange-800">
                      Certification
                    </span>
                    <h3 className="text-2xl font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-orange-600 font-medium">{item.institution}</p>
                  </div>
                  <span className="text-gray-500 md:text-right">{item.period}</span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
            <p className="text-gray-300 mt-4">Open for any opportunities</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-4 text-orange-400" />
                  <span>kelvinlee0711@live.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-4 text-orange-400" />
                  <span>+65 88378142</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-4 text-orange-400" />
                  <span>Singapore</span>
                </div>
              </div>
            </div>
            {/* <div>
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  ></textarea>
                </div>
                <button
                  onClick={() => alert('Message functionality would be implemented here')}
                  className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Kelvin Lee. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;