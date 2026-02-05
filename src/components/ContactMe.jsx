import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faLinkedin,
  faGithub,
  faInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

function ContactMe() {
  return (
    <section
      id="Contact"
      className="min-h-screen bg-gray-900 flex items-center justify-center px-6 py-20"
    >
      <div className="w-full max-w-6xl">
        {/* ===== Header ===== */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let’s Work Together
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind, a role to discuss, or just want to say
            hello? I’m always open to meaningful conversations.
          </p>
        </div>

        {/* ===== Contact Cards ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Email */}
          <div className="group bg-gray-800/70 backdrop-blur border border-gray-700 rounded-2xl p-8 text-center hover:scale-105 transition">
            <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-white text-2xl"
              />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Email</h3>
            <a
              href="mailto:solomonsitotaw89@gmail.com"
              className="text-cyan-400 hover:text-cyan-300 break-all"
            >
              solomonsitotaw89@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="group bg-gray-800/70 backdrop-blur border border-gray-700 rounded-2xl p-8 text-center hover:scale-105 transition">
            <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center group-hover:scale-110 transition">
              <FontAwesomeIcon icon={faPhone} className="text-white text-2xl" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Phone</h3>
            <a
              href="tel:+251991132272"
              className="text-emerald-400 hover:text-emerald-300"
            >
              +251 991 132 272
            </a>
          </div>

          {/* Telegram */}
          <div className="group bg-gray-800/70 backdrop-blur border border-gray-700 rounded-2xl p-8 text-center hover:scale-105 transition">
            <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center group-hover:scale-110 transition">
              <FontAwesomeIcon
                icon={faPaperPlane}
                className="text-white text-2xl"
              />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Telegram</h3>
            <a
              href="https://t.me/solomon_sitotaw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300"
            >
              @solomon_sitotaw
            </a>
          </div>
        </div>

        {/* ===== Social Links ===== */}
        <div className="flex justify-center gap-10">
          <a
            href="https://t.me/solomon_sitotaw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition transform hover:scale-125"
          >
            <FontAwesomeIcon icon={faTelegram} className="text-3xl" />
          </a>

          <a
            href="https://www.linkedin.com/in/solomon-sitotaw/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-600 transition transform hover:scale-125"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
          </a>

          <a
            href="https://github.com/solomonsitot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200 transition transform hover:scale-125"
          >
            <FontAwesomeIcon icon={faGithub} className="text-3xl" />
          </a>

          <a
            href="https://instagram.com/solomon.sitotaw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 transition transform hover:scale-125"
          >
            <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
