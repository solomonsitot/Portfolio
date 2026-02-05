import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

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

  function closeAll() {
    setDisMenu(false);
    setDisSocial(false);
  }

  return (
    <>
      {/* ===== Header ===== */}
      <header className="fixed top-0 w-full z-50 bg-gray-900 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold tracking-wide text-white">
            Solo<span className="text-yellow-400">.</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {["About", "Works", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="relative text-gray-300 hover:text-white transition group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Socials */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="https://t.me/solomon_sitotaw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition"
            >
              <FontAwesomeIcon icon={faTelegram} />
            </a>
            <a
              href="https://github.com/solomonsitot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/solomon-sitotaw/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>

          {/* Mobile Buttons */}
          <div className="flex md:hidden gap-4">
            <button onClick={toggleMenu} className="text-xl">
              <FontAwesomeIcon icon={faBars} />
            </button>
            <button onClick={toggleSocial} className="text-xl">
              <FontAwesomeIcon icon={faUser} />
            </button>
          </div>
        </div>
      </header>

      {/* ===== Mobile Menu Panel ===== */}
      <div
        className={`fixed inset-0 z-40 transition ${
          disMenu ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity ${
            disMenu ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeAll}
        />

        <div
          className={`absolute left-0 top-0 h-full w-2/3 max-w-xs bg-gray-900 p-8 transform transition-transform duration-300 ${
            disMenu ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            onClick={closeAll}
            className="absolute top-4 right-4 text-xl"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>

          <ul className="mt-16 space-y-6 text-lg">
            {["About", "Works", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={closeAll}
                  className="text-gray-300 hover:text-yellow-400 transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ===== Mobile Social Panel ===== */}
      <div
        className={`fixed inset-0 z-40 transition ${
          disSocial ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity ${
            disSocial ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeAll}
        />

        <div
          className={`absolute right-0 top-0 h-full w-1/2 max-w-xs bg-gray-900 flex flex-col items-center justify-center gap-10 transform transition-transform duration-300 ${
            disSocial ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={closeAll}
            className="absolute top-4 right-4 text-xl"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>

          <a
            href="https://x.com/TestSolo20194"
            className="text-gray-400 hover:text-yellow-400 text-2xl"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://github.com/solomonsitot"
            className="text-gray-400 hover:text-yellow-400 text-2xl"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/solomon-sitotaw/"
            className="text-gray-400 hover:text-yellow-400 text-2xl"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
