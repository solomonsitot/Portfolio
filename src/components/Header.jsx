import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Importing brand icons

function Header() {
  const [disMenu, setDisMenu] = useState(false);
  const [disSocial, setDisSocial] = useState(false);

  function toggleMenu() {
    setDisMenu(!disMenu);
    setDisSocial(false);
  }

  function toggleSocial() {
    setDisSocial(!disSocial);
    setDisMenu(false);
  }

  return (
    <>
      {/* Header Container */}
      <header className="bg-gray-800 text-white shadow-lg fixed w-full z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center">
           <a href="#"> <h1 className="text-2xl font-bold">SoLo.</h1></a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-10 items-center">
            <ul className="flex gap-8">
              <li className="hover:text-yellow-400 cursor-pointer transition-colors"><a href="#About">About</a></li>
              <li className="hover:text-yellow-400 cursor-pointer transition-colors"><a href="#Works">Works</a></li>
              <li className="hover:text-yellow-400 cursor-pointer transition-colors"><a href="#Contact">Contact Me</a></li>
            </ul>
          </nav>

          {/* Social Icons for Desktop */}
          <div className="hidden md:flex gap-4 items-center">
            <a href="https://x.com/TestSolo20194" aria-label="Twitter" className="hover:text-yellow-400 transition-colors">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="https://github.com/solomonsitot" aria-label="GitHub" className="hover:text-yellow-400 transition-colors">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a href="https://www.linkedin.com/in/solomon-sitotaw/" aria-label="LinkedIn" className="hover:text-yellow-400 transition-colors">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>

          {/* Hamburger and Social Icons for Mobile */}
          <div className="flex md:hidden gap-4 items-center">
            <button onClick={toggleMenu} aria-label="Menu" className="text-xl">
              <FontAwesomeIcon icon={faBars} />
            </button>
            <button onClick={toggleSocial} aria-label="Social Links" className="text-xl">
              <FontAwesomeIcon icon={faUser} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed left-0 w-2/5 bg-gray-900 text-white h-full shadow-lg transition-transform duration-300 ${
            disMenu ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="px-8 py-10 space-y-4">
            <li className="hover:text-yellow-400 cursor-pointer"><a href="#About">About</a></li>
            <li className="hover:text-yellow-400 cursor-pointer"><a href="#Works">Works</a></li>
            <li className="hover:text-yellow-400 cursor-pointer"><a href="#Contact">Contact Me</a></li>
          </ul>
        </div>

        {/* Mobile Social Links */}
        <div
          className={`fixed right-0 w-1/3 bg-gray-900 text-white h-full shadow-lg transition-transform duration-300 ${
            disSocial ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex my-[22vh] flex-col items-center py-10 space-y-8">
            <li>
              <a href="https://x.com/TestSolo20194" aria-label="Twitter" className="hover:text-yellow-400 transition-colors">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </li>
            <li>
              <a href="https://github.com/solomonsitot" aria-label="GitHub" className="hover:text-yellow-400 transition-colors">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/solomon-sitotaw/" aria-label="LinkedIn" className="hover:text-yellow-400 transition-colors">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
