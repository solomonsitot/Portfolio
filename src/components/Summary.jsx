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
      className="min-h-screen  px-32 bg-gray-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-8 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
            <FontAwesomeIcon
              icon={faCode}
              className="mx-6 text-cyan-400 text-3xl"
            />
            <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Professional Summary
          </h1>
          {/* <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Software Engineer & Technical Leader
          </p> */}
        </div>

        {/* Main Content - Two Columns */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          {/* Left Column - Professional Summary */}
          <div className="lg:w-1/2">
            {/* Summary Card */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 mr-4">
                    <FontAwesomeIcon
                      icon={faBrain}
                      className="text-cyan-300 text-xl"
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    Technical Expertise
                  </h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    Software Engineer specializing in the MERN stack, with
                    expertise in building secure, scalable, and user-centric web
                    applications. Proficient across the full spectrum from
                    back-end systems with Node.js, Express.js, and MongoDB to
                    responsive front-ends with React and Tailwind CSS. Skilled
                    in developing RESTful APIs and optimizing databases for
                    performance.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    My approach combines strong software engineering principles
                    with practical UI/UX design—including wireframes and
                    prototypes—to deliver intuitive, engaging experiences. I
                    focus on solving complex problems with high-quality,
                    innovative solutions. Let's collaborate to turn your vision
                    into a robust digital reality.
                  </p>
                </div>
              </div>

              {/* Download Button */}
              <div className="mt-8 text-center lg:text-left">
                <a
                  href="https://drive.google.com/file/d/13CkREAoOAXkLuygjfXDj3eqOT3pT28GP/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center group relative px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center text-cyan-300 font-bold text-lg">
                    <FontAwesomeIcon icon={faDownload} className="mr-3" />
                    Download Full Resume
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Compact Timeline */}
          <div className="lg:w-1/2">
            <div className="sticky top-24">
              {/* Timeline Header */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-white flex items-center">
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    className="text-cyan-300 mr-3"
                  />
                  Professional Experience
                </h2>
                <span className="text-gray-400 text-sm">
                  {activeIndex + 1}/{experiences.length}
                </span>
              </div>

              {/* Compact Timeline */}
              <div className="relative pl-8">
                {/* Timeline Line */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/30 via-purple-500/30 to-green-500/30"></div>

                {/* Timeline Items */}
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <div
                      key={index}
                      className={`relative transition-all duration-300 cursor-pointer ${
                        activeIndex === index ? "scale-[1.02]" : ""
                      }`}
                      onClick={() => setActiveIndex(index)}
                    >
                      {/* Timeline Node */}
                      <div
                        className={`absolute -left-8 top-4 w-4 h-4 rounded-full transition-all ${
                          activeIndex === index
                            ? `bg-gradient-to-br ${exp.color.replace("/20", "/50")} scale-125`
                            : "bg-gray-700/50"
                        }`}
                      >
                        <div
                          className={`absolute inset-0 rounded-full ${activeIndex === index ? exp.textColor.replace("300", "500") + "/30" : "bg-white/5"} animate-pulse`}
                        ></div>
                      </div>

                      {/* Experience Card */}
                      <div
                        className={`bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl p-6 transition-all duration-300 ${
                          activeIndex === index ? "ring-1 ring-cyan-500/30" : ""
                        }`}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <span
                              className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-2 ${
                                activeIndex === index
                                  ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300"
                                  : "bg-gray-700/50 text-gray-300"
                              }`}
                            >
                              {exp.period}
                            </span>
                            <h3
                              className={`text-lg font-bold transition-colors ${
                                activeIndex === index
                                  ? "text-white"
                                  : "text-gray-300"
                              }`}
                            >
                              {exp.company}
                            </h3>
                            <p
                              className={`transition-colors ${
                                activeIndex === index
                                  ? exp.textColor
                                  : "text-gray-400"
                              }`}
                            >
                              {exp.role}
                            </p>
                          </div>
                          <div
                            className={`p-3 rounded-lg transition-all ${
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
                              } text-lg`}
                            />
                          </div>
                        </div>

                        {/* Responsibilities */}
                        <ul className="space-y-2">
                          {exp.responsibilities.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <FontAwesomeIcon
                                icon={faChevronRight}
                                className={`text-xs mt-1 mr-3 flex-shrink-0 ${
                                  activeIndex === index
                                    ? exp.textColor
                                    : "text-gray-500"
                                }`}
                              />
                              <span
                                className={`text-sm transition-colors ${
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

                {/* Navigation Dots */}
                <div className="flex justify-center mt-8 space-x-2">
                  {experiences.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        activeIndex === index
                          ? "bg-cyan-500/70 w-6"
                          : "bg-gray-700/50 hover:bg-gray-600/50"
                      }`}
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
      `}</style>
    </div>
  );
}

export default Summary;
