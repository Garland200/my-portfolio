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
    'Front-End Developer',
    'React Specialist',
    'UI/UX Enthusiast',
    'Problem Solver'
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

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-900 pt-24 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
      {/* Animated Background Elements */}
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

      <div className="w-full mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6 relative z-10">
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

        {/* Enhanced Headshot Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative group flex justify-center lg:justify-end"
        >
          <motion.div 
            animate={floatingAnimation}
            className="relative w-64 h-80 sm:w-80 sm:h-96 overflow-hidden rounded-2xl border-4 border-gray-800 shadow-2xl"
          >
            <div className="w-full h-full bg-gradient-to-br from-blue-400/20 to-purple-600/20">
              <img 
                src={headshot}
                alt="Garland" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="eager"
              />
            </div>
            
            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </motion.div>
          
          {/* Enhanced Decorative Elements */}
          <motion.div 
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -inset-4 border-2 border-blue-400/30 rounded-3xl transform rotate-2 scale-95 group-hover:rotate-0 group-hover:scale-100 transition-all duration-500" 
          />
          <motion.div 
            animate={{ rotate: [0, -3, 3, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -inset-8 border border-purple-400/20 rounded-3xl transform -rotate-1 scale-90 group-hover:rotate-1 group-hover:scale-105 transition-all duration-700" 
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;