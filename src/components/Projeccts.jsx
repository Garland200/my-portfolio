// src/components/Projects.jsx
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { SiReact, SiTailwindcss, SiTypescript, SiFirebase } from 'react-icons/si';
import project1 from '../assets/project-1.gif';
import project2 from '../assets/project-2.gif';
import project3 from '../assets/project-3.gif';



const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack React e-commerce solution with real-time inventory management",
      tech: [<SiReact />, <SiTailwindcss />, <SiTypescript />, <SiFirebase />],
      demo: "#",
      code: "#",
      image: project1
    },
    {
      title: "Task Manager App",
      description: "Collaborative task management system with drag-and-drop functionality",
      tech: [<SiReact />, <SiTailwindcss />, <SiFirebase />],
      demo: "#",
      code: "#",
      image: project2
    },
    {
      title: "Portfolio Builder",
      description: "Interactive portfolio generator with customizable templates",
      tech: [<SiReact />, <SiTailwindcss />, <SiTypescript />],
      demo: "#",
      code: "#",
      image: project3
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id = "projects"  className="py-20 bg-gray-900 px-4 sm:px-6 lg:px-8">
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
            Explore my latest web development projects showcasing React expertise and modern design patterns
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gray-800 rounded-xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-100 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((Icon, i) => (
                    <span
                      key={i}
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {Icon}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <FiExternalLink className="text-lg" />
                    Live Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <FiGithub className="text-lg" />
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;