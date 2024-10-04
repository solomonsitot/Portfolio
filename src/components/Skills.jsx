import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
} from '@fortawesome/free-brands-svg-icons';
import { faMicrochip, faDatabase } from '@fortawesome/free-solid-svg-icons';

function Skills() {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation class based on the data attribute
            const direction = entry.target.getAttribute('data-direction');
            if (direction === 'left') {
              entry.target.classList.add('animate-slideInLeft');
            } else {
              entry.target.classList.add('animate-slideInRight');
            }
            entry.target.classList.add('opacity-100'); // Make the element fully visible
          }
        });
      },
      { threshold: 0.2 }
    );

    const skills = skillsRef.current.querySelectorAll('.skill-card');
    skills.forEach((skill) => {
      observer.observe(skill);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={skillsRef} className="min-h-screen bg-gray-900 flex flex-col items-center py-12">
      {/* Title */}
      <h1 className="text-4xl font-bold text-white text-center mb-12">My Skills</h1>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 lg:px-20">
        {/* Left Slide-in Skills */}
        {skillsData.slice(0, Math.ceil(skillsData.length / 2)).map((skill, index) => (
          <div
            key={index}
            data-direction="left" // Indicate this is a left animation
            className="skill-card flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-md transition-transform duration-500 opacity-0 transform -translate-x-10"
          >
            <FontAwesomeIcon icon={skill.icon} className={`text-${skill.color} text-6xl mb-4`} />
            <p className="text-white font-semibold text-lg">{skill.name}</p>
          </div>
        ))}

        {/* Right Slide-in Skills */}
        {skillsData.slice(Math.ceil(skillsData.length / 2)).map((skill, index) => (
          <div
            key={index}
            data-direction="right" // Indicate this is a right animation
            className="skill-card flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-md transition-transform duration-500 opacity-0 transform translate-x-10"
          >
            <FontAwesomeIcon icon={skill.icon} className={`text-${skill.color} text-6xl mb-4`} />
            <p className="text-white font-semibold text-lg">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const skillsData = [
  { name: 'React', icon: faReact, color: 'blue-500' },
  { name: 'Node.js', icon: faNodeJs, color: 'green-500' },
  { name: 'MongoDB', icon: faDatabase, color: 'yellow-500' },
  { name: 'PHP', icon: faPhp, color: 'indigo-500' },
  { name: 'CSS', icon: faCss3Alt, color: 'blue-400' },
  { name: 'HTML', icon: faHtml5, color: 'orange-500' },
  { name: 'Git', icon: faGitAlt, color: 'red-500' },
  { name: 'GitHub', icon: faGithub, color: 'white' },
  { name: 'JavaScript', icon: faJsSquare, color: 'yellow-400' },
  { name: 'Figma', icon: faFigma, color: 'pink-500' },
  { name: 'Arduino', icon: faMicrochip, color: 'gray-400' },
];

export default Skills;
