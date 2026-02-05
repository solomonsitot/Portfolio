import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faGamepad,
  faPlane,
  faStore,
  faSuitcase,
  faTrafficLight,
  faXmark,
  faExternalLinkAlt,
  faFilm,
  faBuilding,
  faGraduationCap,
  faLaughBeam,
  faFolder,
  faFolderOpen,
  faChevronRight,
  faChevronDown,
  faSpinner,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import {
  faApple,
  faYoutube,
  faAmazon,
} from "@fortawesome/free-brands-svg-icons";
import { SiNetflix, SiTailwindcss } from "react-icons/si";
import { TbBrandSnapchat } from "react-icons/tb";
import youtube from "../assets/yt_clone.png";
import apple from "../assets/apple_clone.png";
import netflix from "../assets/netflix_clone.png";
import sanke from "../assets/sanke_screen.png";
import trafficLogo from "../assets/sanke_screen.png";
import tourLogo from "../assets/sanke_screen.png";
import adadi from "../assets/adadi.png";
import EATO from "../assets/eato.png";
import presidential from "../assets/presidential.png";
import gh from "../assets/gh.png";
import dreamland from "../assets/dreamland.png";
import zola from "../assets/zola.png";
import Dan from "../assets/dan.png";
import pro from "../assets/professional.png";
import fun from "../assets/fun.png";
import learning from "../assets/learning.png";
import inventoryLogo from "../assets/dan1.png";
import travelLogo from "../assets/tripmatelg.png";
import YMS from "../assets/yms_clone.png";
import traffic from "../assets/traffic.png";
import Tripmate from "../assets/tripmate.png";

// Category Projects Modal Component
function CategoryProjectsModal({ category, projects, onClose, openModal }) {
  if (!category) return null;

  const titles = {
    realworld: "Real-World Applications",
    learning: "Learning Projects",
    fun: "Fun & Experimental",
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md">
      <div className="absolute inset-0 animate-slideUp bg-gradient-to-b from-gray-950 to-gray-900 text-white overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 z-20 bg-black/40 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold">{titles[category]}</h2>
          <button
            onClick={onClose}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        {/* Content - Made scrollable */}
        <div className="px-6 py-10 max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => openModal(project)}
              className="group relative cursor-pointer rounded-2xl overflow-hidden bg-white/5 hover:bg-white/10 transition-all duration-300"
            >
              {/* Status Badge */}
              {project.status === "in-progress" && (
                <div className="absolute top-3 right-3 z-10 px-3 py-1 bg-yellow-500/80 text-yellow-900 text-xs font-bold rounded-full flex items-center gap-1">
                  <FontAwesomeIcon icon={faWrench} className="text-xs" />
                  In Progress
                </div>
              )}

              <img
                src={project.image}
                alt={project.name}
                className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  {project.type === "clone" && (
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                      Clone
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-sm mb-3">
                  {project.shortDescription}
                </p>
                <span className="text-xs text-gray-500">{project.tech}</span>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Project Details Modal Component
function ProjectDetailsModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md">
      <div className="absolute inset-0 animate-fadeIn overflow-y-auto">
        {/* Hero Image */}
        <div className="relative h-[60vh] w-full">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40" />

          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white bg-black/50 hover:bg-black/70 p-3 rounded-full"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto px-6 py-10 text-white">
          <div className="flex items-start justify-between mb-4">
            <h1 className="text-4xl font-bold">{project.name}</h1>
            {project.status === "in-progress" && (
              <div className="flex items-center gap-2 px-4 py-2 bg-yellow-500/20 text-yellow-300 rounded-full">
                <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                <span className="font-medium">In Development</span>
              </div>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm">
              {project.tech}
            </span>
            <span className="px-4 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm">
              {project.type === "clone" ? "Clone Project" : "Original Work"}
            </span>
            {project.category === "realworld" && (
              <span className="px-4 py-1 rounded-full bg-green-500/20 text-green-300 text-sm">
                Production
              </span>
            )}
          </div>

          <p className="text-gray-300 leading-relaxed mb-10">
            {project.description}
          </p>

          {/* Features */}
          {project.features && (
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="grid sm:grid-cols-2 gap-3 text-gray-300">
                {project.features.map((f, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-cyan-400">✔</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold hover:scale-105 transition flex items-center justify-center gap-2"
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} />
              Live Website
            </a>

            {project.github && project.github !== "unavailable" ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-4 rounded-xl bg-white/10 hover:bg-white/20 transition flex items-center justify-center gap-2"
              >
                <FontAwesomeIcon icon={faCode} />
                GitHub Repo
              </a>
            ) : (
              <button
                disabled
                className="flex-1 text-center py-4 rounded-xl bg-gray-800/50 text-gray-500 cursor-not-allowed flex items-center justify-center gap-2"
              >
                <FontAwesomeIcon icon={faCode} />
                Code Private
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Category Card Component (unchanged)
function CategoryCard({ category, isActive, onClick, projectCount }) {
  const colors = {
    realworld: "text-purple-500",
    learning: "text-green-500",
    fun: "text-yellow-500",
  };

  const bgColors = {
    realworld: "bg-purple-500/10",
    learning: "bg-green-500/10",
    fun: "bg-yellow-500/10",
  };

  const titles = {
    realworld: "Real-World Applications",
    learning: "Learning Projects",
    fun: "Fun & Experimental",
  };

  const icons = {
    realworld: pro,
    learning: learning,
    fun: fun,
  };

  const glows = {
    realworld:
      "shadow-[inset_0_0_20px_rgba(59,130,246,0.5),0_0_40px_rgba(59,130,246,0.7)]",
    learning:
      "shadow-[inset_0_0_20px_rgba(147,51,234,0.5),0_0_40px_rgba(147,51,234,0.7)]",
    fun: "shadow-[inset_0_0_20px_rgba(249,115,22,0.5),0_0_40px_rgba(249,115,22,0.7)]",
  };

  return (
    <div
      className={`flex flex-col items-center justify-center p-8 rounded-2xl cursor-pointer transition-all duration-300 ${
        isActive ? `shadow-xl scale-105` : ""
      }`}
      onClick={onClick}
    >
      <div className="relative">
        <div
          className={` rounded-[50%] mb-4 ${glows[category]} animate-float transition-transform duration-300 ${
            isActive ? "scale-110" : ""
          }`}
        >
          <img
            src={icons[category]}
            alt=""
            className={`h-44 w-44 relative z-10`}
          />
        </div>
      </div>
      <h3 className="text-xl font-bold text-white text-center mb-2">
        {titles[category]}
      </h3>
      {isActive && (
        <div className="mt-4">
          <FontAwesomeIcon
            icon={faChevronDown}
            className="text-cyan-400 animate-bounce"
          />
        </div>
      )}
    </div>
  );
}

// Add this CSS to your global styles or Tailwind config
const styles = `
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slideUp {
  animation: slideUp 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-out;
}
`;

// Add the styles to the head
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleCategory = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  const openProjectDetails = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  const closeCategoryModal = () => {
    setActiveCategory(null);
  };

  const projects = [
    // New Real-World Projects
    {
      id: 11,
      category: "realworld",
      type: "other",
      name: "Dreamland College Management",
      customIcon: (
        <FontAwesomeIcon
          icon={faGraduationCap}
          className="w-12 h-12 text-purple-400"
        />
      ),
      color: "text-purple-500",
      image: dreamland, // You'll replace this later
      tech: "React + Node.js + MongoDB",
      description:
        "Comprehensive college management system for Dreamland College. Includes student management, course scheduling, grade tracking, and administrative features.",
      shortDescription: "College management system",
      features: [
        "Student registration system",
        "Course management",
        "Grade tracking",
        "Staff management",
        "Fee management",
        "Report generation",
      ],
      link: "https://collage-mgmt-front.vercel.app/",
      github:
        "https://github.com/solomonsitot/DreamLand-College-Mgmt-System.git",
      status: "in-progress",
    },
    {
      id: 9,
      category: "realworld",
      type: "other",
      name: "East Africa Tour Operator",
      customIcon: (
        <FontAwesomeIcon icon={faPlane} className="w-12 h-12 text-blue-400" />
      ),
      color: "text-blue-500",
      image: EATO, // You'll replace this later
      tech: "React  + MySql",
      description:
        "Professional tour operator website for East Africa Tour Operator company. Features tour packages, booking system, gallery, and customer management for safari and tour services across East Africa.",
      shortDescription: "Tour operator website with booking system",
      features: [
        "Tour package management",
        "Online booking system",
        "Payment integration",
        "Photo gallery",
        "Customer testimonials",
        "Multi-language support",
      ],
      link: "https://eastafricatouroperator.com/",
      github: "https://github.com/solomonsitot/East-Africa-Tour-Operators.git",
    },
    {
      id: 10,
      category: "realworld",
      type: "other",
      name: "Adadi Ethiopia Tours",
      customIcon: (
        <FontAwesomeIcon
          icon={faSuitcase}
          className="w-12 h-12 text-green-400"
        />
      ),
      color: "text-green-500",
      image: adadi, // You'll replace this later
      tech: "React  + MySql",
      description:
        "Tourism website for Adadi Ethiopia Tours offering cultural and historical tours across Ethiopia. Includes tour packages, booking functionality, and detailed itinerary information.",
      shortDescription: "Ethiopian tourism company website",
      features: [
        "Tour package showcase",
        "Online reservation system",
        "Cultural tour information",
        "Photo and video gallery",
        "Customer review system",
        "Contact and inquiry forms",
      ],
      link: "https://adadiethiopiatours.com/",
      github: "https://github.com/solomonsitot/Adadi-Tours.git",
    },

    {
      id: 12,
      category: "realworld",
      type: "other",
      name: "Zelalem Ermiyas Import & Export",
      customIcon: (
        <FontAwesomeIcon icon={faStore} className="w-12 h-12 text-orange-400" />
      ),
      color: "text-orange-500",
      image: zola, // You'll replace this later
      tech: "React + Node.js + MySql",
      description:
        "Corporate website for Zelalem Ermiyas Import & Export business. Showcases products, services, and facilitates business inquiries for import/export operations.",
      shortDescription: "Import/export business website",
      features: [
        "Product catalog",
        "Service showcase",
        "Business inquiry forms",
        "Company profile",
        "Contact management",
        "Multi-language support",
      ],
      link: "https://zelalemermias.com/",
      github: "unavailable",
    },
    {
      id: 13,
      category: "realworld",
      type: "other",
      name: "Presidential Pharmas",
      customIcon: (
        <FontAwesomeIcon icon={faBuilding} className="w-12 h-12 text-red-400" />
      ),
      color: "text-red-500",
      image: presidential, // You'll replace this later
      tech: "React + Node.js + MySql",
      description:
        "Pharmaceutical company website for Presidential Pharmas. Features product information, company services, and healthcare solutions presentation.",
      shortDescription: "Pharmaceutical company website",
      features: [
        "Product portfolio",
        "Healthcare solutions",
        "Company services",
        "Contact information",
        "News updates",
        "Professional design",
      ],
      link: "http://presidentialpharmas.com/",
      github: "https://github.com/solomonsitot/Presidential-Pharmas",
    },
    {
      id: 14,
      category: "realworld",
      type: "other",
      name: "GH Imports (Wow Mart)",
      customIcon: (
        <FontAwesomeIcon icon={faStore} className="w-12 h-12 text-yellow-400" />
      ),
      color: "text-yellow-500",
      image: gh, // You'll replace this later
      tech: "HTML5 + PHP",
      description:
        "E-commerce website for GH Imports, also known as Wow Mart. Features product catalog, shopping cart, and online ordering system for imported goods.",
      shortDescription: "Import business e-commerce platform",
      features: [
        "E-commerce functionality",
        "Product catalog",
        "Shopping cart",
        "Payment gateway",
        "Order tracking",
        "Customer account management",
      ],
      link: "https://www.ghsolutionet.com/",
      github: "unavailable",
    }, // Existing projects...
    {
      id: 1,
      category: "realworld",
      type: "other",
      name: "Tripmate TMS",
      customIcon: <img src={travelLogo} alt="Travel" className="w-12 h-12" />,
      color: "text-blue-500",
      image: Tripmate,
      tech: "MERN Stack",
      description:
        "Tripmate is a comprehensive tourism management system built for a travel agency. It offers users an intuitive platform for booking tours, hotels, and flights, as well as managing travel itineraries and customer reviews.",
      shortDescription: "Complete tourism management system for travel agency",
      features: [
        "Tour package booking system",
        "Hotel and flight integration",
        "Customer review management",
        "Admin dashboard analytics",
        "Payment gateway integration",
        "Real-time booking confirmation",
      ],
      link: "https://tourism-management-front.vercel.app/",
      github: "https://github.com/solomonsitot/tripmate-tms",
    },
    {
      id: 2,
      category: "realworld",
      type: "other",
      name: "Dan Inventory",
      customIcon: (
        <img src={inventoryLogo} alt="Inventory" className="w-12 h-12" />
      ),
      color: "text-blue-500",
      image: Dan,
      tech: "React + Node.js",
      description:
        "Inventory Management System developed for a retail business. Helps businesses keep track of stock, manage orders, streamline operations, and generate reports.",
      shortDescription: "Inventory system for retail business management",
      features: [
        "Real-time stock tracking",
        "Order management system",
        "Supplier database",
        "Sales analytics dashboard",
        "Barcode scanning support",
        "Automated reordering system",
      ],
      link: "https://github.com/solomonsitot/Dan-inventory-demo/tree/main/v%202.0",
      github: "https://github.com/solomonsitot/Dan-inventory-demo",
    },
    // Existing learning and fun projects...
    {
      id: 3,
      category: "learning",
      type: "clone",
      name: "Netflix Clone",
      customIcon: <SiNetflix className="text-red-500 text-4xl" />,
      color: "text-red-500",
      image: netflix,
      tech: "React + Firebase",
      description:
        "A Netflix Clone created as a learning project to master React concepts and Firebase integration. It replicates the popular streaming service with a similar user interface and functionalities.",
      shortDescription: "Streaming service clone built during React learning",
      features: [
        "Video playback with controls",
        "User authentication system",
        "Responsive grid layout",
        "Search functionality",
        "Movie categorization",
        "Firebase database integration",
      ],
      link: "https://netflix-clone-react-77dlujqnl-solomon-sitotaws-projects.vercel.app/",
      github: "https://github.com/solomonsitot/netflix-clone",
    },
    {
      id: 4,
      category: "learning",
      type: "clone",
      name: "YouTube Clone",
      icon: faYoutube,
      color: "text-red-500",
      image: youtube,
      tech: "React + YouTube API",
      description:
        "A YouTube Clone built to learn API integration and video handling. Provides a similar experience to YouTube with video uploads, playback, and recommendations.",
      shortDescription: "Video platform clone with API integration",
      features: [
        "YouTube API integration",
        "Video player with controls",
        "Channel subscription system",
        "Comment functionality",
        "Responsive video grid",
        "Search with filters",
      ],
      link: "https://youtube-clone-react-2ohd3jnwf-solomon-sitotaws-projects.vercel.app/",
      github: "https://github.com/solomonsitot/youtube-clone",
    },
    {
      id: 5,
      category: "learning",
      type: "clone",
      name: "Apple Clone",
      icon: faApple,
      color: "text-gray-500",
      image: apple,
      tech: "HTML + CSS + JS",
      description:
        "An Apple website clone created to practice responsive design and CSS animations. Mimics the clean and sleek design of Apple's official site.",
      shortDescription: "Responsive e-commerce site clone",
      features: [
        "Pixel-perfect responsive design",
        "CSS animations and transitions",
        "Product showcase carousel",
        "Shopping cart functionality",
        "Mobile-first approach",
        "Cross-browser compatibility",
      ],
      link: "https://apple-responsive-clone-mmz33462i-solomon-sitotaws-projects.vercel.app/",
      github: "https://github.com/solomonsitot/apple-clone",
    },
    {
      id: 6,
      category: "fun",
      type: "other",
      name: "Traffic Project",
      customIcon: <img src={trafficLogo} alt="Traffic" className="w-12 h-12" />,
      color: "text-red-500",
      image: traffic,
      tech: "Arduino + C++",
      description:
        "A Traffic Management System project developed during university for urban planning studies. Simulates real-time traffic light control and pedestrian management.",
      shortDescription: "University project for traffic simulation",
      features: [
        "Traffic light simulation",
        "Pedestrian crossing control",
        "Emergency vehicle priority",
        "Traffic density sensors",
        "Real-time monitoring",
        "Pattern analysis",
      ],
      link: "https://github.com/solomonsitot/Arduino-programming",
      github: "https://github.com/solomonsitot/Arduino-programming",
    },
    {
      id: 7,
      category: "learning",
      type: "other",
      name: "YMS Tour and Travel",
      customIcon: <img src={tourLogo} alt="Tour" className="w-12 h-12" />,
      color: "text-pink-500",
      image: YMS,
      tech: "PHP + MySQL",
      description:
        "A comprehensive tour and travel booking platform developed as a final year project. Offers services including flights, hotels, and package tours.",
      shortDescription: "Final year project for travel booking system",
      features: [
        "Multi-user role system",
        "Booking management",
        "Payment processing",
        "Email notifications",
        "Review system",
        "Admin dashboard",
      ],
      link: "https://github.com/solomonsitot/YMS-Tour-and-Travel",
      github: "https://github.com/solomonsitot/YMS-Tour-and-Travel",
    },
    {
      id: 8,
      category: "fun",
      type: "other",
      name: "Snake Game",
      customIcon: (
        <img
          src="https://img.icons8.com/color/96/000000/snake.png"
          alt="Snake Game"
          className="w-12 h-12"
        />
      ),
      color: "text-green-500",
      image: sanke,
      tech: "JavaScript + Canvas",
      description:
        "A classic Snake Game developed for fun using JavaScript and HTML5 canvas. Features smooth animations, increasing difficulty, and a scoring system.",
      shortDescription: "Classic arcade game with modern twist",
      features: [
        "Progressive difficulty levels",
        "High score tracking",
        "Mobile touch controls",
        "Power-up system",
        "Pause and resume",
        "Different game modes",
      ],
      link: "https://javascript-snake.vercel.app/",
      github: "https://github.com/solomonsitot/snake-game",
    },
  ];

  // Group projects by category
  const realworldProjects = projects.filter((p) => p.category === "realworld");
  const learningProjects = projects.filter((p) => p.category === "learning");
  const funProjects = projects.filter((p) => p.category === "fun");

  const getCategoryProjects = (category) => {
    switch (category) {
      case "realworld":
        return realworldProjects;
      case "learning":
        return learningProjects;
      case "fun":
        return funProjects;
      default:
        return [];
    }
  };

  return (
    <div id="Works" className="min-h-screen bg-gray-900 p-4 sm:p-6 lg:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
            My Project Portfolio
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Click on any category folder below to explore my projects
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-12 mb-12">
          <CategoryCard
            category="realworld"
            isActive={activeCategory === "realworld"}
            onClick={() => toggleCategory("realworld")}
            projectCount={realworldProjects.length}
          />
          <CategoryCard
            category="learning"
            isActive={activeCategory === "learning"}
            onClick={() => toggleCategory("learning")}
            projectCount={learningProjects.length}
          />
          <CategoryCard
            category="fun"
            isActive={activeCategory === "fun"}
            onClick={() => toggleCategory("fun")}
            projectCount={funProjects.length}
          />
        </div>

        {/* Category Projects Modal */}
        {activeCategory && (
          <CategoryProjectsModal
            category={activeCategory}
            projects={getCategoryProjects(activeCategory)}
            onClose={closeCategoryModal}
            openModal={openProjectDetails}
          />
        )}

        {/* Project Details Modal */}
        {selectedProject && (
          <ProjectDetailsModal
            project={selectedProject}
            onClose={closeProjectDetails}
          />
        )}
      </div>
    </div>
  );
}

export default Portfolio;
