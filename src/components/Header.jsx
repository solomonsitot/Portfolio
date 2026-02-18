import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faXmark,
  faCode,
  faHome,
  faBriefcase,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faTelegram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Header() {
  const [disMenu, setDisMenu] = useState(false);
  const [disSocial, setDisSocial] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ["About", "Works", "Contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function toggleMenu() {
    setDisMenu(!disMenu);
    setDisSocial(false);
    document.body.style.overflow = !disMenu ? "hidden" : "unset";
  }

  function toggleSocial() {
    setDisSocial(!disSocial);
    setDisMenu(false);
    document.body.style.overflow = !disSocial ? "hidden" : "unset";
  }

  function closeAll() {
    setDisMenu(false);
    setDisSocial(false);
    document.body.style.overflow = "unset";
  }

  const navItems = [
    { name: "Home", href: "#", icon: faHome },
    { name: "About", href: "#About", icon: faBriefcase },
    { name: "Works", href: "#Works", icon: faCode },
    { name: "Contact", href: "#Contact", icon: faEnvelope },
  ];

  const socialLinks = [
    { icon: faGithub, url: "https://github.com/solomonsitot", label: "GitHub" },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/solomon-sitotaw/",
      label: "LinkedIn",
    },
    {
      icon: faTelegram,
      url: "https://t.me/solomon_sitotaw",
      label: "Telegram",
    },
    {
      icon: faXTwitter,
      url: "https://x.com/TestSolo20194",
      label: "X (Twitter)",
    },
  ];

  return (
    <>
      {/* ===== Header ===== */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-gray-900/95 backdrop-blur-lg shadow-lg shadow-black/10 py-3"
            : "bg-gray-900/80 backdrop-blur-sm py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo with animation */}
          <a
            href="#"
            className="relative group text-2xl sm:text-3xl font-bold tracking-tight"
          >
            <span className="text-white">Solomon</span>
            <span className="text-yellow-400 ml-0.5">.</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-200 transition-all duration-300 group-hover:w-full"></span>
          </a>

          {/* Desktop Navigation - Enhanced */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.slice(1).map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-3 lg:px-4 py-2 text-sm lg:text-base font-medium transition-all duration-300 group ${
                  activeSection === item.name
                    ? "text-yellow-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                <span
                  className={`absolute inset-0 bg-yellow-400/10 rounded-lg transition-all duration-300 ${
                    activeSection === item.name
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100"
                  }`}
                ></span>
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-200 transition-all duration-300 group-hover:w-1/2 ${
                    activeSection === item.name ? "w-1/2" : ""
                  }`}
                ></span>
              </a>
            ))}
          </nav>

          {/* Desktop Socials - Enhanced */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group p-2 text-gray-400 hover:text-yellow-400 transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                <FontAwesomeIcon
                  icon={social.icon}
                  className="text-lg lg:text-xl"
                />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  {social.label}
                </span>
              </a>
            ))}
          </div>

          {/* Mobile Buttons - Enhanced */}
          <div className="flex md:hidden gap-3">
            <button
              onClick={toggleMenu}
              className="relative p-2.5 text-gray-300 hover:text-yellow-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 rounded-lg"
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon
                icon={faBars}
                className={`text-xl transition-transform duration-300 ${disMenu ? "rotate-90" : ""}`}
              />
            </button>
            <button
              onClick={toggleSocial}
              className="relative p-2.5 text-gray-300 hover:text-yellow-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 rounded-lg"
              aria-label="Toggle social links"
            >
              <FontAwesomeIcon
                icon={faUser}
                className={`text-xl transition-transform duration-300 ${disSocial ? "rotate-90" : ""}`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* ===== Mobile Menu Panel - Vertically Centered ===== */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ${
          disMenu ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop with blur */}
        <div
          className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
            disMenu ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeAll}
        />

        {/* Menu Panel - Vertically centered content */}
        <div
          className={`absolute left-0 top-0 h-full w-4/5 max-w-sm bg-gradient-to-b from-gray-900 to-gray-800 p-6 sm:p-8 shadow-2xl transform transition-transform duration-500 ease-out ${
            disMenu ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close button */}
          <button
            onClick={closeAll}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-yellow-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 rounded-lg"
            aria-label="Close menu"
          >
            <FontAwesomeIcon icon={faXmark} className="text-2xl" />
          </button>

          {/* Navigation Links - Vertically centered */}
          <div className="h-full flex flex-col justify-center">
            <ul className="space-y-4">
              {navItems.map((item, index) => (
                <li
                  key={item.name}
                  style={{ animationDelay: `${index * 100}ms` }}
                  className={`transform transition-all duration-500 ${
                    disMenu
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-4 opacity-0"
                  }`}
                >
                  <a
                    href={item.href}
                    onClick={closeAll}
                    className="flex items-center gap-4 p-4 text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/10 rounded-xl transition-all duration-200 group"
                  >
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="text-gray-400 group-hover:text-yellow-400 text-xl w-7"
                    />
                    <span className="font-medium text-lg">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Decorative element at bottom */}
          <div className="absolute bottom-8 left-6 right-6">
            <div className="h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* ===== Mobile Social Panel - Simplified & Vertically Centered ===== */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ${
          disSocial ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop with blur */}
        <div
          className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
            disSocial ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeAll}
        />

        {/* Social Panel - Vertically centered icons */}
        <div
          className={`absolute right-0 top-0 h-full w-4/5 max-w-sm bg-gradient-to-b from-gray-900 to-gray-800 p-6 sm:p-8 shadow-2xl transform transition-transform duration-500 ease-out ${
            disSocial ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close button */}
          <button
            onClick={closeAll}
            className="absolute top-4 left-4 p-2 text-gray-400 hover:text-yellow-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 rounded-lg"
            aria-label="Close social panel"
          >
            <FontAwesomeIcon icon={faXmark} className="text-2xl" />
          </button>

          {/* Social Icons - Vertically centered, simplified */}
          <div className="h-full flex flex-col justify-center">
            <div className="flex flex-col items-center gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeAll}
                  style={{ animationDelay: `${index * 100}ms` }}
                  className={`group flex items-center justify-center w-16 h-16 bg-gray-800/50 hover:bg-gray-800 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-3 ${
                    disSocial
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                >
                  <FontAwesomeIcon
                    icon={social.icon}
                    className="text-3xl text-gray-400 group-hover:text-yellow-400 transition-colors duration-200"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Decorative element at bottom */}
          <div className="absolute bottom-8 left-6 right-6">
            <div className="h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .menu-item {
          animation: slideIn 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
}

export default Header;
