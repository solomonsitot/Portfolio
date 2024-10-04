import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilm,
  faPlane,
  faGamepad,
  faCode,
  faRodSnake,
  faTrafficLight,
  faStore,
  faSuitcase,
} from "@fortawesome/free-solid-svg-icons";
import yt from "../assets/YouTube_Logo.svg";
import {
  faAmazon,
  faApple,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import youtube from "../assets/yt_clone.png";
import apple from "../assets/apple_clone.png";
import netflix from "../assets/netflix_clone.png";
import sanke from "../assets/sanke_screen.png";
import Dan from "../assets/dan.png";
import YMS from "../assets/yms_clone.png";
import traffic from "../assets/traffic.png";
import Tripmate from "../assets/tripmate.png";

// Modal Component
function Modal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-90 p-4">
      <div className="relative bg-gray-900 text-white p-8 rounded-lg shadow-lg w-screen h-screen overflow-y-auto flex flex-col lg:flex-row">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-3xl"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Left Side: Project Image */}
        <div className="w-full lg:w-3/4  flex justify-center items-center">
          <img
            src={project.image}
            alt={project.name}
            className="rounded-lg object-cover w-full max-h-[80vh] "
          />
        </div>

        {/* Right Side: Project Details */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center p-4 lg:p-8">
          <h2 className="text-4xl font-bold mb-6">{project.name}</h2>
          <p className="text-gray-300 mb-6 px-4 lg:px-8">{project.description}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}


function Portfolio() {
  const [clone, setClone] = useState("flex");
  const [other, setOther] = useState("flex");
  const [selectedProject, setSelectedProject] = useState(null);

  function showAll() {
    setClone("flex");
    setOther("flex");
  }

  function showClone() {
    setClone("flex");
    setOther("hidden");
  }

  function showOther() {
    setClone("hidden");
    setOther("flex");
  }

  function openModal(project) {
    setSelectedProject(project);
  }

  function closeModal() {
    setSelectedProject(null);
  }

  const projects = [
    {
      id: 1,
      type: "clone",
      name: "Netflix Clone",
      icon: faFilm,
      color: "text-red-500",
      image: netflix,
      description:
        "A Netflix Clone that replicates the popular streaming service with a similar user interface and functionalities. It includes features like browsing, searching, and playing videos in a seamless environment.",
      link: "https://netflix-clone-react-77dlujqnl-solomon-sitotaws-projects.vercel.app/",
    },
    {
      id: 2,
      type: "clone",
      name: "YouTube Clone",
      icon: faYoutube,
      color: "text-red-500",
      image: youtube,
      description:
        "A YouTube Clone that provides a similar experience to the world's largest video-sharing platform, featuring video uploads, playback, and recommendations.",
      link: "https://youtube-clone-react-2ohd3jnwf-solomon-sitotaws-projects.vercel.app/",
    },
    {
      id: 3,
      type: "clone",
      name: "Apple Clone",
      icon: faApple,
      color: "text-gray-500",
      image: apple,
      description:
        "An Apple website clone that mimics the clean and sleek design of Apple's official site. It showcases product pages, shopping cart functionality, and a responsive design.",
      link: "https://apple-responsive-clone-mmz33462i-solomon-sitotaws-projects.vercel.app/",
    },
    {
      id: 4,
      type: "other",
      name: "Tripmate TMS",
      icon: faSuitcase, // Changed icon to globe
      color: "text-blue-500",
      image: Tripmate, // Replace with the correct image path
      description:
        "Tripmate is a comprehensive tourism management system offering users an intuitive platform for booking tours, hotels, and flights, as well as managing travel itineraries and customer reviews.",
      link: "https://tourism-management-front.vercel.app/", // Replace with your project's URL
    },
    
    {
      id: 5,
      type: "other",
      name: "Snake Game",
      icon: faRodSnake,
      color: "text-green-500",
      image: sanke,
      description:
        "A classic Snake Game developed using JavaScript and HTML5 canvas. It features smooth animations, increasing difficulty, and a scoring system.",
      link: "https://javascript-snake.vercel.app/",
    },
    {
      id: 6,
      type: "other",
      name: "Dan Inventory",
      icon: faStore,
      color: "text-blue-500",
      image: Dan,
      description:
        "Dan's Inventory Management System helps businesses keep track of stock, manage orders, and streamline their operations efficiently.",
      link: "https://github.com/solomonsitot/Dan-inventory-demo/tree/main/v%202.0",
    },
    {
      id: 7,
      type: "other",
      name: "YMS Tour and Travel",
      icon: faPlane,
      color: "text-pink-500",
      image: YMS,
      description:
        "A comprehensive tour and travel booking platform offering a range of services including flights, hotels, and package tours with an intuitive user interface.",
      link: "https://github.com/solomonsitot/YMS-Tour-and-Travel",
    },
    {
      id: 8,
      type: "other",
      name: "Traffic Project",
      icon: faTrafficLight,
      color: "text-red-500",
      image: traffic,
      description:
        "A Traffic Management System project designed to simulate real-time traffic light control and pedestrian management for urban planning.",
      link: "https://github.com/solomonsitot/Arduino-programming",
    },
  ];

  return (
    <div id="Works" className="min-h-screen bg-gray-900 p-6">
      <h1 className="text-4xl font-bold text-white text-center mb-12">
        My Portfolio
      </h1>
      <div className="flex justify-center space-x-4 mb-12">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={showAll}
        >
          <FontAwesomeIcon icon={faCode} className="mr-2" /> All
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={showClone}
        >
          <FontAwesomeIcon icon={faFilm} className="mr-2" /> Clones
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={showOther}
        >
          <FontAwesomeIcon icon={faGamepad} className="mr-2" /> Others
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 lg:px-20">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`${
              project.type === "clone" ? clone : other
            } flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer`}
            onClick={() => openModal(project)}
          >
            <FontAwesomeIcon
              icon={project.icon}
              className={`${project.color} text-6xl mb-4`}
            />
            <p className="text-white font-semibold text-lg">{project.name}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal project={selectedProject} onClose={closeModal} />
    </div>
  );
}

export default Portfolio;
