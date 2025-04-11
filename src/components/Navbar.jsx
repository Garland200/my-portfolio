import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiFileText } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '#home' },
    { name: 'Projects', path: '#projects' },
    { name: 'Skills', path: '#skills' },
    { name: 'Contact', path: '#contact' },
  ];

  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/yourusername' },
    { icon: <FiLinkedin />, url: 'https://linkedin.com/in/yourprofile' },
    { icon: <FiFileText />, url: '/resume.pdf' },
  ];

  const linkVariants = {
    hover: { 
      scale: 1.05,
      transition: { type: 'spring', stiffness: 300 }
    },
    tap: { scale: 0.95 }
  };

  const handleScroll = (path) => {
    const section = document.querySelector(path);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <a 
            href="#home" 
            onClick={(e) => {
              e.preventDefault();
              handleScroll('#home');
            }}
            className="flex items-center space-x-2 group"
          >
            <motion.div 
              whileHover={{ rotate: 15 }} 
              className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Light
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  whileHover="hover"
                  whileTap="tap"
                  variants={linkVariants}
                >
                  <a
                    href={link.path}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll(link.path);
                    }}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm font-medium"
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Social Icons */}
            <div className="ml-6 flex items-center space-x-4 border-l border-gray-800 pl-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-blue-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
{/* Mobile Menu */}
{/* Mobile Menu */}
<AnimatePresence>
  {isMenuOpen && (
    <motion.div
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100%' }}
      className="md:hidden fixed inset-0 z-50 bg-gray-900"
    >
      <div className="relative h-full flex flex-col p-6">
        {/* Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="self-end p-2 bg-gray-300 hover:text-blue-400 mb-12 rounded-lg text-gray-800"
          aria-label="Close menu"
        >
          <FiX size={28} />
        </button>

        {/* Mobile Links */}
        <div className="flex-1 flex flex-col items-center justify-center space-y-4">
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full"
            >
              <a
                href={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(link.path);
                }}
                className="block py-4 px-6 text-xl bg-gray-100 hover:text-blue-400 
                           text-gray-800 rounded-xl transition-all duration-300
                           hover:bg-gray-700"
              >
                {link.name}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Mobile Social Icons */}
        <div className="mt-auto pt-12 border-t border-gray-800">
          <div className="flex justify-center space-x-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-2xl bg-gray-300 hover:text-blue-400 transition-colors
                           text-gray-800 p-3 rounded-full"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </nav>
  );
};

export default Navbar;