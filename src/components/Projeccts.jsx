// src/components/Projects.jsx
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiPlay, FiCode } from 'react-icons/fi';
import { 
  SiReact, SiTailwindcss, SiTypescript, SiNodedotjs, SiMongodb, 
  SiAngular, SiHtml5, SiCss3, SiJavascript, SiPython 
} from 'react-icons/si';
import { FiCpu } from 'react-icons/fi';
import { useState } from 'react';
import fyurr from '../assets/fyurr.png';
import breakout from "../assets/breakout.png";
import task from "../assets/task.png";
import ls from "../assets/loadshedding.png";
import trivia from "../assets/trivia.png";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: "Fyurr – Music Event Manager",
      description: "Full-stack web app for managing artists, venues, and shows with booking and authentication features.",
      longDescription: "Fyurr is a full-stack application that allows users to book, manage, and list live music events. It includes CRUD functionality for venues, artists, and shows, user authentication, and relational data modeling between entities.",
      tech: [<SiPython />, <SiHtml5 />, <SiCss3 />, <SiJavascript />],
      demo: "https://fyurr-demo.vercel.app",
      code: "https://github.com/GarlandIL/Fyurr",
      image: fyurr,
      featured: true,
      category: "Full Stack",
      year: "2024"
    },
    {
      title: "Trivia App – Interactive Quiz Game",
      description: "Fun web-based quiz game with random questions, scores, and timed challenges.",
      longDescription: "A front-end web app where users can play trivia games across various topics. It fetches randomized questions via API, tracks scores, and provides instant feedback. The interface is responsive and engaging for all devices.",
      tech: [<SiReact />, <SiTailwindcss />, <SiJavascript />],
      demo: "https://trivia-app-demo.vercel.app",
      code: "https://github.com/GarlandIL/Trivia",
      image: trivia,
      featured: true,
      category: "Frontend",
      year: "2024"
    },
    {
      title: "Project Coffee Shop",
      description: "Elegant coffee shop web app with menu display, cart, and responsive design.",
      longDescription: "An interactive coffee shop simulation that lets users browse a menu, customize drinks, and add them to a cart. Designed with clean layouts, smooth transitions, and responsive components for a real e-commerce experience.",
      tech: [<SiHtml5 />, <SiCss3 />, <SiJavascript />],
      demo: "https://coffee-shop-demo.vercel.app",
      code: "https://github.com/GarlandIL/Project-Coffee-Shop",
      image: "https://images.pexels.com/photos/302896/pexels-photo-302896.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true,
      category: "Frontend",
      year: "2024"
    },
    {
      title: "Genetic Algorithm Load Shedding System",
      description: "AI-powered MATLAB system optimizing solar energy distribution through automated load shedding.",
      longDescription: "An intelligent energy optimization system built with MATLAB that uses genetic algorithms to automate load shedding in solar-powered homes. It balances energy flow between solar and grid sources based on usage patterns.",
      tech: [<FiCpu />],
      demo: "https://github.com/GarlandIL/genetic-algorithm-optimized-energy-utilization-system",
      code: "https://github.com/GarlandIL/genetic-algorithm-optimized-energy-utilization-system",
      image: ls,
      featured: false,
      category: "AI & Simulation",
      year: "2023"
    },
    {
      title: "Task Manager App (Angular)",
      description: "Modern Angular-based productivity tool for managing daily tasks efficiently.",
      longDescription: "A responsive web app with full CRUD capabilities, sorting, filtering, and persistent data storage using Angular Material. It helps users organize tasks based on priority and completion status.",
      tech: [<SiAngular />, <SiTypescript />, <SiTailwindcss />],
      demo: "https://task-manager-angular-demo.vercel.app",
      code: "https://github.com/GarlandIL/task-manager",
      image: task,
      featured: false,
      category: "Frontend Framework",
      year: "2024"
    },
    {
      title: "Breakout Game (HTML5 Canvas)",
      description: "Classic arcade-style Breakout Game built with HTML5 Canvas and JavaScript.",
      longDescription: "A modern version of the retro Breakout game featuring paddle control, dynamic brick layouts, collision detection, and score tracking. Fully responsive and optimized for smooth performance across devices.",
      tech: [<SiHtml5 />, <SiCss3 />, <SiJavascript />],
      demo: "https://garlandil.github.io/breakout-game",
      code: "https://github.com/GarlandIL/breakout-game",
      image: breakout,
      featured: false,
      category: "Game Development",
      year: "2023"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A showcase of my most impactful and technically diverse projects
          </p>
        </motion.div>

        {/* Featured Projects - Large Cards */}
        <div className="space-y-12 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative group overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent" />
                  
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="bg-blue-500/90 backdrop-blur-sm rounded-full p-4">
                      <FiPlay className="text-white text-2xl ml-1" />
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="flex items-center gap-4">
                  <span className="text-blue-400 text-sm font-medium">{project.category}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-400 text-sm">{project.year}</span>
                </div>

                <h3 className="text-3xl font-bold text-gray-100 mb-4">{project.title}</h3>

                <p className="text-gray-400 text-lg leading-relaxed">
                  {project.longDescription}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.tech.map((Icon, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.2 }}
                      className="text-2xl text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
                    >
                      {Icon}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 shadow-lg"
                  >
                    <FiExternalLink className="text-lg" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-gray-600 text-gray-300 hover:border-purple-400 hover:text-purple-400 px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors"
                  >
                    <FiCode className="text-lg" />
                    View Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects - Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-100 mb-8 text-center">More Projects</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setActiveProject(index)}
              onHoverEnd={() => setActiveProject(null)}
              className="group relative bg-gray-800 rounded-xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-100">{project.title}</h3>
                  <span className="text-gray-500 text-sm">{project.year}</span>
                </div>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((Icon, i) => (
                    <span
                      key={i}
                      className="text-gray-400 hover:text-blue-400 transition-colors text-lg"
                    >
                      {Icon}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors text-sm"
                  >
                    <FiExternalLink className="text-sm" />
                    Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-400 hover:text-purple-400 transition-colors text-sm"
                  >
                    <FiGithub className="text-sm" />
                    Code
                  </a>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: activeProject === index ? 1 : 0 }}
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 pointer-events-none"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
