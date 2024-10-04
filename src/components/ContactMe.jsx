import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faLinkedin,
    faGithub,
  faTelegram,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

function ContactMe() {
  return (
    <div id="Contact" className="min-h-screen bg-gray-900 flex flex-col items-center py-12">
      {/* Title */}
      <h1 className="text-4xl font-bold text-white text-center mb-12">
        Contact Me
      </h1>

      {/* Contact Information */}
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-12 mb-12">
        {/* Email */}
        <div className="flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 mb-6 md:mb-0">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-white text-4xl mb-4"
          />
          <p className="text-white font-semibold text-lg">Email</p>
          <a
            href="mailto:solomonsitotaw89@gmail.com"
            className="text-blue-500 hover:text-blue-300"
          >
            solomonsitotaw89@gmail.com
          </a>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 mb-6 md:mb-0">
          <FontAwesomeIcon
            icon={faPhone}
            className="text-white text-4xl mb-4"
          />
          <p className="text-white font-semibold text-lg">Phone</p>
          <a
            href="tel:+251991132272"
            className="text-blue-500 hover:text-blue-300"
          >
            +251-991-132-272
          </a>
        </div>

        {/* Address */}
        <div className="flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
          <FontAwesomeIcon
            icon={faTelegram}
            className="text-white text-4xl mb-4"
          />
          <p className="text-white font-semibold text-lg">telegarm</p>
          <a
            href="https://t.me/@solosaj08"
            className="text-blue-500 hover:text-blue-300"
          >
            @solosaj08
          </a>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex space-x-8">
        {/* Twitter */}
        <a
          href="https://x.com/TestSolo20194"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faTwitter} className="text-3xl" />
        </a>
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/solomon-sitotaw/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-600 transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
        </a>
        {/* GitHub */}
        <a
          href="https://github.com/solomonsitot"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-500 transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faGithub} className="text-3xl" />
              </a>
              <a
          href="https://instagram.com/solomon.sitotaw"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
        </a>
      </div>
    </div>
  );
}

export default ContactMe;
