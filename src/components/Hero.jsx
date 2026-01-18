// src/components/Hero.jsx
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import { SiReact, SiTailwindcss, SiJavascript } from 'react-icons/si';
import headshot from '../assets/headshot1.png';
import { useEffect, useState, useMemo } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = useMemo(() => [
    'Web Developer',
    'Technical Writer',
    'AI/ML Enthusiast'
  ], []);

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % roles.length;
      const fullText = roles[current];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

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
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-900 pt-24 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-600/10 rounded-full blur-3xl"
        />
      </div>

      <div className="w-full mx-auto -mt-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6 relative z-10 ml-20">
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
            <span className="text-gray-300 h-16 inline-block">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl"
          >
            Crafting pixel-perfect, interactive web experiences that blend creativity 
            with cutting-edge technology. Transforming ideas into digital reality.
          </motion.p>

          {/* CTA + Tech Stack */}
          <motion.div
            initial="initial"
            animate="animate"
            transition={{ staggerChildren: 0.1 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <div className="flex gap-4">
              <motion.button
                variants={variants}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={handleScrollToProjects}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-medium flex items-center gap-2 shadow-lg"
              >
                View My Work
                <FiArrowRight className="mt-1" />
              </motion.button>

              <motion.button
                variants={variants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400 px-8 py-4 rounded-lg font-medium flex items-center gap-2 transition-colors"
              >
                <FiDownload />
                Resume
              </motion.button>
            </div>

            <motion.div
              variants={variants}
              className="flex items-center gap-4 text-gray-400"
            >
              <span className="hidden sm:block h-px w-12 bg-gray-700"></span>
              <div className="flex gap-4">
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                  <SiReact className="w-8 h-8 hover:text-blue-400 transition-colors cursor-pointer" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: -5 }}>
                  <SiTailwindcss className="w-8 h-8 hover:text-cyan-400 transition-colors cursor-pointer" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                  <SiJavascript className="w-8 h-8 hover:text-yellow-400 transition-colors cursor-pointer" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Refined Headshot Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex justify-center lg:justify-center"
        >
          {/* Main headshot container with subtle floating animation */}
          <motion.div 
            animate={{ 
              y: [0, -8, 0],
              rotateY: [0, 2, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative group"
          >
            {/* Glowing backdrop */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
            
            {/* Image container */}
            <div className="relative w-72 h-120 sm:w-80 sm:h-96 rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900">
              <img 
                src={headshot}
                alt="Garland" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="eager"
              />
              
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent" />
              
              {/* Interactive border glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/0 via-purple-500/0 to-blue-400/0 group-hover:from-blue-400/30 group-hover:via-purple-500/30 group-hover:to-blue-400/30 transition-all duration-500" 
                   style={{ 
                     background: 'linear-gradient(45deg, transparent, transparent)',
                     boxShadow: 'inset 0 0 0 1px transparent'
                   }}
                   onMouseEnter={(e) => {
                     e.target.style.boxShadow = 'inset 0 0 0 1px rgba(59, 130, 246, 0.3)';
                   }}
                   onMouseLeave={(e) => {
                     e.target.style.boxShadow = 'inset 0 0 0 1px transparent';
                   }}
              />
            </div>

            {/* Single, clean accent element */}
            <motion.div 
              animate={{ 
                rotate: [0, 1, -1, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -inset-6 border border-blue-400/20 rounded-3xl group-hover:border-blue-400/40 transition-colors duration-500"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;