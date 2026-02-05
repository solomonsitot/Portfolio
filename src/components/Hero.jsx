import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faServer,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
import heroImage from "../assets/hero.jpg";

const titles = ["Software Engineer", "Web Developer", "UI / UX Designer"];

function Hero() {
  return (
    <section
      id="Home"
      className="relative min-h-screen pt-10 bg-gray-900 text-white flex items-center"
    >
      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-20 pt-32 pb-20">
        <div className="flex flex-col-reverse md:flex-row items-center gap-16">
          {/* ===== Text Section ===== */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Solomon Sitotaw
            </h1>

            {/* 🔥 Sliding Title */}
            <SlidingTitle />

            <p className="text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0 mb-10">
              I build secure, scalable web applications using the MERN stack.
              With strong backend engineering, clean front-end architecture, and
              UI/UX thinking, I transform ideas into reliable digital products
              that users love.
            </p>

            {/* Skill Pills */}
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              <Skill icon={faLaptopCode} label="Frontend" color="" />
              <Skill icon={faServer} label="Backend" color="" />
              <Skill icon={faPalette} label="UI / UX" color="" />
            </div>
          </div>

          {/* ===== Image Section ===== */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-20" />
              <img
                src={heroImage}
                alt="Solomon Sitotaw"
                className="relative w-64 md:w-80 lg:w-96 rounded-full border-4 border-cyan-500 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== Sliding Title Component ===== */
function SlidingTitle() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % titles.length);
        setAnimate(true);
      }, 450);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden h-12 mb-6">
      <h2
        className={`text-2xl md:text-3xl text-cyan-400 font-semibold transition-all duration-500
          ${animate ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}
        `}
      >
        {titles[index]}
      </h2>
    </div>
  );
}

/* ===== Skill Component ===== */
function Skill({ icon, label, color }) {
  return (
    <div className="flex items-center gap-4 group">
      <div
        className={`${color} p-2 rounded-xl group-hover:scale-110 transition`}
      >
        <FontAwesomeIcon icon={icon} className="text-2xl text-white" />
      </div>
      <span className="font-semibold pr-4 text-gray-200">{label}</span>
    </div>
  );
}

export default Hero;
