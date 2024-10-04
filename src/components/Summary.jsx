import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function Summary() {
  return (
    <div id="About" className="min-h-screen bg-gray-900 flex flex-col items-center py-12 animate-fadeIn">
      {/* Title */}
      <h1 className="text-4xl font-bold text-white text-center mb-8 animate-slideInUp">
        Summary
      </h1>

      {/* Summary Text */}
      <div className="max-w-2xl text-center text-white mb-8 px-6">
        <p className="text-lg leading-relaxed mb-4 animate-slideInLeft">
          I am a passionate Software Engineer with a strong foundation in
          front-end and back-end development, UI/UX design, and a knack for
          creative problem-solving. With a robust skill set in technologies such
          as React, Node.js, MongoDB, and PHP, I am committed to building
          efficient, scalable, and user-friendly applications. I continuously
          strive to enhance my skills and contribute to meaningful projects that
          impact the world positively.
        </p>
        <p className="text-lg leading-relaxed animate-slideInRight">
          I am highly adaptable and thrive in collaborative environments where
          innovation is encouraged. Whether working independently or as part of
          a dynamic team, my goal is to deliver high-quality solutions that
          exceed expectations.
        </p>
      </div>

      {/* Download CV Button with Floating Effect */}
      <div>
        <a
          href="https://drive.google.com/file/d/13CkREAoOAXkLuygjfXDj3eqOT3pT28GP/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-blue-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-600 hover:scale-105 transform transition-all duration-300 ease-out animate-float"
        >
          <FontAwesomeIcon icon={faDownload} className="mr-2" />
          Download CV
        </a>
      </div>
    </div>
  );
}

export default Summary;
