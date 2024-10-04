import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faServer, faPalette } from "@fortawesome/free-solid-svg-icons";
import heroImage from "../assets/bg removed.png"; // Replace with your actual hero image path

function Hero() {
  return (
    <>
      <div className="flex flex-col pt-[100px] md:flex-row items-center justify-center bg-gray-900 text-white min-h-screen py-10 px-4 md:px-20 lg:px-40">
        {/* Hero Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
          <img
            src={heroImage}
            alt="Hero"
            className="w-3/4 md:w-full max-w-sm rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-500 animate-slideInLeft"
          />
        </div>

        {/* Text and Icons Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center md:text-left md:items-start">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-2 animate-fadeIn animation-delay-200">
            Solomon Sitotaw <span className="inline-block waving-emoji animate-wave">👋</span>
          </h2>
          <h3 className="font-semibold text-xl md:text-2xl lg:text-3xl text-yellow-300 mb-6 animate-fadeIn animation-delay-400">
            Software Engineer
          </h3>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed max-w-xl mb-8 text-gray-300 animate-fadeIn animation-delay-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
            rerum quidem alias animi nobis consectetur nam eligendi facere
            expedita unde, dicta beatae hic laborum ratione ipsum suscipit quo
            voluptas quos.
          </p>

          {/* Icons Section */}
          <div className="flex justify-center md:justify-start gap-6 mt-4 animate-fadeIn animation-delay-800">
            <div className="flex flex-col items-center">
              <FontAwesomeIcon
                icon={faLaptopCode}
                className="text-5xl mb-2 text-blue-400 transition-transform transform hover:scale-110 hover:text-white"
              />
              <p className="font-semibold text-sm md:text-base">Frontend</p>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon
                icon={faServer}
                className="text-5xl mb-2 text-green-400 transition-transform transform hover:scale-110 hover:text-white"
              />
              <p className="font-semibold text-sm md:text-base">Backend</p>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon
                icon={faPalette}
                className="text-5xl mb-2 text-pink-400 transition-transform transform hover:scale-110 hover:text-white"
              />
              <p className="font-semibold text-sm md:text-base">UI/UX Design</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
