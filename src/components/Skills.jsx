import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faGitAlt,
  faCss3Alt,
  faHtml5,
  faFigma,
  faPhp,
  faGithub,
  faJsSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMicrochip,
  faDatabase,
  faRocket,
  faCode,
  faPuzzlePiece,
} from "@fortawesome/free-solid-svg-icons";
import { SiTailwindcss, SiMysql, SiExpress } from "react-icons/si";

function Skills() {
  const skillsRef = useRef(null);
  // const navigate =
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slideUp");
            entry.target.classList.add("opacity-100");

            // Add stagger effect based on index
            const index = entry.target.dataset.index;
            entry.target.style.transitionDelay = `${index * 100}ms`;
          }
        });
      },
      { threshold: 0.1 },
    );

    const skills = skillsRef.current.querySelectorAll(".skill-card");
    skills.forEach((skill, index) => {
      skill.dataset.index = index % 6;
      observer.observe(skill);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={skillsRef}
      className="min-h-screen bg-gray-900  flex flex-col items-center justify-center py-20 px-4"
    >
      {/* Header Section */}
      <div className="text-center mb-16 max-w-3xl">
        <div className="inline-block mb-4">
          <FontAwesomeIcon
            icon={faCode}
            className="text-cyan-400 text-3xl mr-3"
          />
          <h1 className="text-5xl font-bold text-white inline">
            Technical Expertise
          </h1>
          <FontAwesomeIcon
            icon={faPuzzlePiece}
            className="text-cyan-400 text-3xl ml-3"
          />
        </div>
        {/* <p className="text-gray-300 text-xl mt-6 mb-4 leading-relaxed">
          Software Engineer specializing in the MERN stack, with expertise in
          building secure, scalable, and user-centric web applications.
        </p> */}
        <div className="flex items-center justify-center mt-6">
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
          <FontAwesomeIcon
            icon={faRocket}
            className="text-cyan-400 text-2xl mx-6"
          />
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-6xl w-full px-4">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            data-index={index}
            className="skill-card group relative flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl border border-gray-700 transition-all duration-500 opacity-0 transform translate-y-10 hover:scale-105 hover:shadow-2xl hover:border-cyan-500/30 hover:-translate-y-2"
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Skill Icon */}
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div
                className={`text-5xl relative z-10 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ${skill.customColor || ""}`}
              >
                {skill.customIcon || <FontAwesomeIcon icon={skill.icon} />}
              </div>
            </div>

            {/* Skill Name */}
            <p className="text-white font-bold text-lg relative z-10 mb-2">
              {skill.name}
            </p>

            {/* Skill Level Bar */}
            <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden relative z-10">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"
                style={{ width: `${skill.proficiency}%` }}
              ></div>
            </div>

            {/* Hover effect - Tech category */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <span className="text-xs text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                {skill.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="mt-20 text-center max-w-2xl">
        <p className="text-gray-400 text-lg">
          My approach combines strong software engineering principles with
          practical UI/UX design to deliver{" "}
          <span className="text-cyan-300 font-semibold">
            intuitive, engaging experiences
          </span>{" "}
          and
          <span className="text-blue-300 font-semibold">
            {" "}
            high-quality, innovative solutions
          </span>
          .
        </p>
        <button
          onClick={() => {
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: "smooth",
            });
          }}
          className="mt-10 px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-full hover:from-cyan-500 hover:to-blue-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Let's Build Something Amazing
        </button>
      </div>
    </div>
  );
}

const skillsData = [
  {
    name: "React",
    customIcon: <FontAwesomeIcon icon={faReact} />,
    customColor: "text-cyan-400",
    proficiency: 90,
    category: "Frontend",
  },
  {
    name: "Node.js",
    customIcon: <FontAwesomeIcon icon={faNodeJs} />,
    customColor: "text-green-500",
    proficiency: 85,
    category: "Backend",
  },
  {
    name: "Express.js",
    customIcon: <SiExpress />,
    customColor: "text-gray-200",
    proficiency: 85,
    category: "Backend",
  },
  {
    name: "MongoDB",
    customIcon: <FontAwesomeIcon icon={faDatabase} />,
    customColor: "text-green-400",
    proficiency: 80,
    category: "Database",
  },
  {
    name: "MySQL",
    customIcon: <SiMysql />,
    customColor: "text-blue-400",
    proficiency: 75,
    category: "Database",
  },
  {
    name: "PHP",
    customIcon: <FontAwesomeIcon icon={faPhp} />,
    customColor: "text-indigo-400",
    proficiency: 85,
    category: "Backend",
  },
  // {
  //   name: "JavaScript",
  //   customIcon: <FontAwesomeIcon icon={faJsSquare} />,
  //   customColor: "text-yellow-400",
  //   proficiency: 95,
  //   category: "Language",
  // },
  // {
  //   name: "HTML5",
  //   customIcon: <FontAwesomeIcon icon={faHtml5} />,
  //   customColor: "text-orange-500",
  //   proficiency: 95,
  //   category: "Frontend",
  // },
  // {
  //   name: "CSS3",
  //   customIcon: <FontAwesomeIcon icon={faCss3Alt} />,
  //   customColor: "text-blue-400",
  //   proficiency: 90,
  //   category: "Frontend",
  // },
  {
    name: "Tailwind CSS",
    customIcon: <SiTailwindcss />,
    customColor: "text-cyan-300",
    proficiency: 88,
    category: "Frontend",
  },
  {
    name: "Git",
    customIcon: <FontAwesomeIcon icon={faGitAlt} />,
    customColor: "text-orange-500",
    proficiency: 85,
    category: "Tool",
  },
  {
    name: "GitHub",
    customIcon: <FontAwesomeIcon icon={faGithub} />,
    customColor: "text-gray-200",
    proficiency: 90,
    category: "Tool",
  },
  {
    name: "Figma",
    customIcon: <FontAwesomeIcon icon={faFigma} />,
    customColor: "text-pink-400",
    proficiency: 75,
    category: "Design",
  },
  // {
  //   name: "Arduino",
  //   customIcon: <FontAwesomeIcon icon={faMicrochip} />,
  //   customColor: "text-blue-300",
  //   proficiency: 65,
  //   category: "IoT",
  // },
];

export default Skills;
