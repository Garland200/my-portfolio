// src/components/Projects.jsx
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiPlay, FiCode } from 'react-icons/fi';
import { SiReact, SiTailwindcss, SiTypescript, SiFirebase, SiNextdotjs, SiNodedotjs, SiMongodb, SiStripe } from 'react-icons/si';
import { useState } from 'react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: "AI-Powered Task Manager",
      description: "Revolutionary task management app with AI-driven priority suggestions, natural language processing, and smart scheduling algorithms.",
      longDescription: "Built with React and TypeScript, this application uses machine learning to analyze user behavior and automatically prioritize tasks. Features include drag-and-drop kanban boards, real-time collaboration, voice commands, and intelligent deadline predictions.",
      tech: [<SiReact />, <SiTypescript />, <SiTailwindcss />, <SiNodedotjs />, <SiMongodb />],
      demo: "https://ai-task-manager-demo.vercel.app",
      code: "https://github.com/yourusername/ai-task-manager",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true,
      category: "Full Stack",
      year: "2024"
    },
    {
      title: "Crypto Trading Dashboard",
      description: "Real-time cryptocurrency trading platform with advanced charting, portfolio analytics, and automated trading strategies.",
      longDescription: "A comprehensive trading dashboard featuring WebSocket connections for live price feeds, TradingView charts integration, portfolio performance tracking, and risk management tools. Built with modern React patterns and optimized for high-frequency data updates.",
      tech: [<SiReact />, <SiNextdotjs />, <SiTypescript />, <SiTailwindcss />],
      demo: "https://crypto-dashboard-demo.vercel.app",
      code: "https://github.com/yourusername/crypto-dashboard",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true,
      category: "Frontend",
      year: "2024"
    },
    {
      title: "E-Commerce Platform Pro",
      description: "Full-featured e-commerce solution with payment processing, inventory management, and advanced analytics dashboard.",
      longDescription: "Complete e-commerce ecosystem with Stripe integration, real-time inventory tracking, customer analytics, order management, and admin dashboard. Features include product recommendations, wishlist functionality, and multi-vendor support.",
      tech: [<SiReact />, <SiNextdotjs />, <SiStripe />, <SiFirebase />, <SiTailwindcss />],
      demo: "https://ecommerce-pro-demo.vercel.app",
      code: "https://github.com/yourusername/ecommerce-pro",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true,
      category: "Full Stack",
      year: "2024"
    },
    {
      title: "Social Media Analytics",
      description: "Comprehensive social media analytics platform with sentiment analysis and engagement tracking.",
      longDescription: "Advanced analytics dashboard that aggregates data from multiple social platforms, performs sentiment analysis on posts and comments, tracks engagement metrics, and provides actionable insights for content creators and marketers.",
      tech: [<SiReact />, <SiTypescript />, <SiNodedotjs />, <SiMongodb />],
      demo: "https://social-analytics-demo.vercel.app",
      code: "https://github.com/yourusername/social-analytics",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false,
      category: "Full Stack",
      year: "2023"
    },
    {
      title: "3D Portfolio Showcase",
      description: "Interactive 3D portfolio website with Three.js animations and immersive user experience.",
      longDescription: "Cutting-edge portfolio website featuring 3D models, particle systems, and interactive animations. Built with React Three Fiber and includes physics simulations, dynamic lighting, and responsive 3D layouts.",
      tech: [<SiReact />, <SiTypescript />, <SiTailwindcss />],
      demo: "https://3d-portfolio-demo.vercel.app",
      code: "https://github.com/yourusername/3d-portfolio",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false,
      category: "Frontend",
      year: "2023"
    },
    {
      title: "Real-Time Chat App",
      description: "Modern chat application with video calls, file sharing, and end-to-end encryption.",
      longDescription: "Secure messaging platform with WebRTC video calls, file sharing capabilities, message encryption, group chats, and real-time typing indicators. Features include emoji reactions, message search, and dark/light themes.",
      tech: [<SiReact />, <SiNodedotjs />, <SiMongodb />, <SiTailwindcss />],
      demo: "https://chat-app-demo.vercel.app",
      code: "https://github.com/yourusername/chat-app",
      image: "https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false,
      category: "Full Stack",
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
            Showcasing innovative solutions that push the boundaries of web development
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
                  
                  {/* Play button overlay */}
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

                <h3 className="text-3xl font-bold text-gray-100 mb-4">
                  {project.title}
                </h3>

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

        {/* Other Projects - Grid Layout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-100 mb-8 text-center">
            More Projects
          </h3>
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
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-100">
                    {project.title}
                  </h3>
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

              {/* Hover effect overlay */}
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