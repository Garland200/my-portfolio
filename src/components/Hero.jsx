// src/components/Hero.jsx
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { SiReact, SiTailwindcss, SiJavascript } from 'react-icons/si';
import headshot from '../assets/headshot1.png';

const Hero = () => {
  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const handleScrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-900 pt-24 px-4 sm:px-8 lg:px-16">
      <div className="w-full mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold"
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              I'm Garland
            </span>
            <br />
            <span className="text-gray-300">Front-End Developer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl"
          >
            Building beautiful, responsive web experiences with modern React.
            Passionate about creating intuitive interfaces that solve real
            problems.
          </motion.p>

          {/* CTA + Tech Stack */}
          <motion.div
            initial="initial"
            animate="animate"
            transition={{ staggerChildren: 0.1 }}
            className="flex flex-col sm:flex-row items-start gap-6"
          >
            <motion.button
              variants={variants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleScrollToProjects}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-medium flex items-center gap-2"
            >
              View My Work
              <FiArrowRight className="mt-1" />
            </motion.button>

            <motion.div
              variants={variants}
              className="flex items-center gap-4 text-gray-400"
            >
              <span className="hidden sm:block h-px w-12 bg-gray-700"></span>
              <div className="flex gap-4">
                <SiReact className="w-8 h-8 hover:text-blue-400 transition-colors" />
                <SiTailwindcss className="w-8 h-8 hover:text-blue-400 transition-colors" />
                <SiJavascript className="w-8 h-8 hover:text-yellow-400 transition-colors" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Headshot Section */}
 {/* Headshot Section */}
 <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative group flex justify-center lg:justify-end"
    >
      <div className="relative w-64 h-100 sm:w-80 sm:h-80 overflow-hidden rounded-2xl border-4 border-gray-800">
        {/* Replace with your actual headshot */}
        <div className="w-full h-full bg-gray-800 animate-pulse">
        <img 
          src= {headshot}
          alt="Garland" 
          className="w-full h-full object-cover"
          loading="eager"
        />
        </div>
      </div>
      
      {/* Decorative Element */}
      <div className="absolute -inset-4 border-2 border-blue-400/30 rounded-3xl transform rotate-2 scale-95 group-hover:rotate-0 group-hover:scale-100 transition-all duration-500" />
    </motion.div>
      </div>
    </section>
  );
};

export default Hero;