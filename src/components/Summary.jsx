import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faBriefcase,
  faUsers,
  faLaptopCode,
  faChevronRight,
  faCode,
  faBrain,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

function Summary() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const experiences = [
    {
      company: "HabKali Computer Engineering PLC",
      role: "Senior Developer and Project Manager",
      period: "Present",
      icon: faBriefcase,
      color: "from-cyan-500/20 to-blue-500/20",
      textColor: "text-cyan-300",
      responsibilities: [
        "Developing and leading end-to-end software projects",
        "Mentoring teams, and delivering scalable, client-focused solutions",
      ],
    },
    {
      company: "BluZon Solutions",
      role: "Lead UI/UX Consultant",
      period: "2022 - 2023",
      icon: faUsers,
      color: "from-purple-500/20 to-pink-500/20",
      textColor: "text-purple-300",
      responsibilities: [
        "Design and Delivered multiples custom web solutions",
        "Boosting client satisfaction",
      ],
    },
    {
      company: "Addis Pay Financial Technologies",
      role: "Frontend Developer",
      period: "2021 - 2022",
      icon: faLaptopCode,
      color: "from-green-500/20 to-emerald-500/20",
      textColor: "text-green-300",
      responsibilities: [
        "Contributed to web application development and enhancement",
        "Optimizing performance and maintaining security practices",
      ],
    },
  ];

  return (
    <div
      id="About"
      className="min-h-screen px-4 sm:px-6 lg:px-32 py-12 sm:py-16 lg:py-0 bg-gray-900 relative overflow-hidden"
    >
      {/* Background Elements - Adjusted for mobile */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-0 sm:px-4 relative z-10">
        {/* Header - Responsive text sizes */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fadeIn">
          <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
            <div className="w-6 sm:w-8 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
            <FontAwesomeIcon
              icon={faCode}
              className="mx-3 sm:mx-6 text-cyan-400 text-2xl sm:text-3xl"
            />
            <div className="w-6 sm:w-8 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 px-2">
            Professional Summary
          </h1>
        </div>

        {/* Main Content - Responsive gap and layout */}
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
          {/* Left Column - Professional Summary */}
          <div className="lg:w-1/2">
            {/* Summary Card - Responsive padding */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 mr-3 sm:mr-4">
                    <FontAwesomeIcon
                      icon={faBrain}
                      className="text-cyan-300 text-base sm:text-xl"
                    />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    Technical Expertise
                  </h2>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Software Engineer specializing in the MERN stack, with
                    expertise in building secure, scalable, and user-centric web
                    applications. Proficient across the full spectrum from
                    back-end systems with Node.js, Express.js, and MongoDB to
                    responsive front-ends with React and Tailwind CSS. Skilled
                    in developing RESTful APIs and optimizing databases for
                    performance.
                  </p>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    My approach combines strong software engineering principles
                    with practical UI/UX design—including wireframes and
                    prototypes—to deliver intuitive, engaging experiences. I
                    focus on solving complex problems with high-quality,
                    innovative solutions. Let's collaborate to turn your vision
                    into a robust digital reality.
                  </p>
                </div>
              </div>

              {/* Download Button - Responsive sizing */}
              <div className="mt-6 sm:mt-8 text-center lg:text-left">
                <a
                  href="https://drive.google.com/file/d/13CkREAoOAXkLuygjfXDj3eqOT3pT28GP/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center group relative px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center text-cyan-300 font-bold text-base sm:text-lg">
                    <FontAwesomeIcon icon={faDownload} className="mr-2 sm:mr-3" />
                    Download Full Resume
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Compact Timeline */}
          <div className="lg:w-1/2">
            <div className="lg:sticky lg:top-24">
              {/* Timeline Header */}
              <div className="flex items-center justify-between mb-4 sm:mb-6 lg:mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center">
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    className="text-cyan-300 mr-2 sm:mr-3 text-lg sm:text-xl"
                  />
                  Professional Experience
                </h2>
                <span className="text-gray-400 text-xs sm:text-sm">
                  {activeIndex + 1}/{experiences.length}
                </span>
              </div>

              {/* Compact Timeline - Adjusted for mobile */}
              <div className="relative pl-6 sm:pl-8">
                {/* Timeline Line */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/30 via-purple-500/30 to-green-500/30"></div>

                {/* Timeline Items */}
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  {experiences.map((exp, index) => (
                    <div
                      key={index}
                      className={`relative transition-all duration-300 cursor-pointer ${
                        activeIndex === index ? "scale-[1.01] sm:scale-[1.02]" : ""
                      }`}
                      onClick={() => setActiveIndex(index)}
                    >
                      {/* Timeline Node - Responsive positioning */}
                      <div
                        className={`absolute -left-6 sm:-left-8 top-3 sm:top-4 w-3 sm:w-4 h-3 sm:h-4 rounded-full transition-all ${
                          activeIndex === index
                            ? `bg-gradient-to-br ${exp.color.replace("/20", "/50")} scale-110 sm:scale-125`
                            : "bg-gray-700/50"
                        }`}
                      >
                        <div
                          className={`absolute inset-0 rounded-full ${activeIndex === index ? exp.textColor.replace("300", "500") + "/30" : "bg-white/5"} animate-pulse`}
                        ></div>
                      </div>

                      {/* Experience Card - Responsive padding */}
                      <div
                        className={`bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-lg sm:rounded-xl p-4 sm:p-5 lg:p-6 transition-all duration-300 ${
                          activeIndex === index ? "ring-1 ring-cyan-500/30" : ""
                        }`}
                      >
                        <div className="flex items-start justify-between mb-3 sm:mb-4">
                          <div className="flex-1 pr-2">
                            <span
                              className={`inline-block px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-semibold rounded-full mb-2 ${
                                activeIndex === index
                                  ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300"
                                  : "bg-gray-700/50 text-gray-300"
                              }`}
                            >
                              {exp.period}
                            </span>
                            <h3
                              className={`text-base sm:text-lg font-bold transition-colors break-words ${
                                activeIndex === index
                                  ? "text-white"
                                  : "text-gray-300"
                              }`}
                            >
                              {exp.company}
                            </h3>
                            <p
                              className={`text-sm sm:text-base transition-colors break-words ${
                                activeIndex === index
                                  ? exp.textColor
                                  : "text-gray-400"
                              }`}
                            >
                              {exp.role}
                            </p>
                          </div>
                          <div
                            className={`p-2 sm:p-3 rounded-lg transition-all flex-shrink-0 ${
                              activeIndex === index
                                ? `bg-gradient-to-br ${exp.color.replace("/20", "/30")}`
                                : "bg-gray-700/30"
                            }`}
                          >
                            <FontAwesomeIcon
                              icon={exp.icon}
                              className={`${
                                activeIndex === index
                                  ? "text-white"
                                  : "text-gray-400"
                              } text-base sm:text-lg`}
                            />
                          </div>
                        </div>

                        {/* Responsibilities - Responsive text */}
                        <ul className="space-y-1.5 sm:space-y-2">
                          {exp.responsibilities.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <FontAwesomeIcon
                                icon={faChevronRight}
                                className={`text-xs mt-1 mr-2 sm:mr-3 flex-shrink-0 ${
                                  activeIndex === index
                                    ? exp.textColor
                                    : "text-gray-500"
                                }`}
                              />
                              <span
                                className={`text-xs sm:text-sm transition-colors break-words ${
                                  activeIndex === index
                                    ? "text-gray-300"
                                    : "text-gray-400"
                                }`}
                              >
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Dots - Touch friendly */}
                <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
                  {experiences.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`h-2 rounded-full transition-all touch-manipulation ${
                        activeIndex === index
                          ? "bg-cyan-500/70 w-4 sm:w-6"
                          : "bg-gray-700/50 hover:bg-gray-600/50 w-2"
                      }`}
                      aria-label={`Go to experience ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        /* Improve touch targets on mobile */
        @media (max-width: 640px) {
          button, 
          [role="button"],
          a {
            min-height: 44px;
            min-width: 44px;
          }
          
          .touch-manipulation {
            touch-action: manipulation;
          }
        }
      `}</style>
    </div>
  );
}

export default Summary;