// src/components/Skills.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  SiReact, 
  SiJavascript, 
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiPython,
  SiFlask,
  SiDjango,
  SiBootstrap,
  SiSass,
  SiGit,
  SiFigma,
  SiJest,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiAws
} from 'react-icons/si';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: [
      { icon: <SiReact />, name: 'React', level: 95, color: '#61DAFB' },
      { icon: <SiJavascript />, name: 'JavaScript', level: 90, color: '#F7DF1E' },
      { icon: <SiTypescript />, name: 'TypeScript', level: 85, color: '#3178C6' },
      { icon: <SiTailwindcss />, name: 'Tailwind', level: 92, color: '#06B6D4' },
      { icon: <SiNextdotjs />, name: 'Next.js', level: 88, color: '#000000' },
      { icon: <SiSass />, name: 'SASS', level: 83, color: '#CC6699' },
    ],
    backend: [
      { icon: <SiNodedotjs />, name: 'Node.js', level: 85, color: '#339933' },
      { icon: <SiPython />, name: 'Python', level: 80, color: '#3776AB' },
      { icon: <SiFlask />, name: 'Flask', level: 75, color: '#ffffff' },
      { icon: <SiDjango />, name: 'Django', level: 70, color: '#092E20' },
      { icon: <SiMongodb />, name: 'MongoDB', level: 78, color: '#47A248' },
      { icon: <SiPostgresql />, name: 'PostgreSQL', level: 82, color: '#336791' },
    ],
    tools: [
      { icon: <SiGit />, name: 'Git', level: 90, color: '#F05032' },
      { icon: <SiFigma />, name: 'Figma', level: 78, color: '#F24E1E' },
      { icon: <SiJest />, name: 'Jest', level: 82, color: '#C21325' },
      { icon: <SiDocker />, name: 'Docker', level: 75, color: '#2496ED' },
      { icon: <SiAws />, name: 'AWS', level: 70, color: '#FF9900' },
      { icon: <SiBootstrap />, name: 'Bootstrap', level: 85, color: '#7952B3' },
    ]
  };

  const coreTech = [
    { icon: <SiReact />, name: 'React', level: 95, color: '#61DAFB' },
    { icon: <SiJavascript />, name: 'JavaScript', level: 90, color: '#F7DF1E' },
    { icon: <SiTypescript />, name: 'TypeScript', level: 85, color: '#3178C6' },
    { icon: <SiPython />, name: 'Python', level: 80, color: '#3776AB' },
    { icon: <SiTailwindcss />, name: 'Tailwind', level: 92, color: '#06B6D4' },
    { icon: <SiNextdotjs />, name: 'Next.js', level: 88, color: '#000000' },
    { icon: <SiFlask />, name: 'Flask', level: 75, color: '#ffffff' },
    { icon: <SiDjango />, name: 'Django', level: 70, color: '#092E20' },
    { icon: <SiBootstrap />, name: 'Bootstrap', level: 85, color: '#7952B3' },
    { icon: <SiSass />, name: 'SASS', level: 83, color: '#CC6699' },
    { icon: <SiGit />, name: 'Git', level: 90, color: '#F05032' },
    { icon: <SiFigma />, name: 'Figma', level: 78, color: '#F24E1E' },
    { icon: <SiJest />, name: 'Jest', level: 82, color: '#C21325' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 300 }
    }
  };

  const categories = [
    { key: 'frontend', label: 'Frontend', icon: '🎨' },
    { key: 'backend', label: 'Backend', icon: '⚙️' },
    { key: 'tools', label: 'Tools & Others', icon: '🛠️' }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Technical Arsenal
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800 rounded-xl p-2 flex gap-2">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.key
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700'
                }`}
              >
                <span>{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          key={activeCategory}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories[activeCategory].map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group relative p-6 bg-gray-800 rounded-xl hover:bg-gray-700/50 transition-all duration-300 border border-gray-700 hover:border-blue-400/30"
            >
              {/* Glowing effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <motion.span 
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl relative z-10"
                    style={{ color: tech.color }}
                  >
                    {tech.icon}
                  </motion.span>
                  <h3 className="text-xl font-semibold text-gray-100 relative z-10">
                    {tech.name}
                  </h3>
                </div>
                <span className="text-gray-400 text-sm relative z-10">
                  {tech.level}%
                </span>
              </div>
              
              <div className="relative h-3 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tech.level}%` }}
                  transition={{ duration: 1.2, delay: index * 0.1 }}
                  className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-blue-400 to-purple-600 shadow-lg"
                  style={{
                    boxShadow: `0 0 10px ${tech.color}40`
                  }}
                />
                {/* Animated shine effect */}
                <motion.div
                  animate={{ x: [-100, 300] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gray-800/50 rounded-2xl p-8 border border-gray-700"
        >
          <h3 className="text-2xl font-bold text-gray-100 mb-4">
            Additional Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-4 text-gray-400">
            {[
              'REST APIs', 'GraphQL', 'WebSocket', 'Microservices', 
              'CI/CD', 'Agile/Scrum', 'Unit Testing', 'Performance Optimization',
              'SEO', 'Accessibility', 'Progressive Web Apps', 'Responsive Design'
            ].map((skill, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1, color: '#60A5FA' }}
                className="bg-gray-700 px-4 py-2 rounded-full text-sm cursor-pointer transition-colors"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-100 mb-12">
            Journey Timeline
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-600"></div>
            
            {[
              { year: '2024', title: 'Senior Frontend Developer', desc: 'Leading React projects with advanced state management' },
              { year: '2023', title: 'Full Stack Developer', desc: 'Building end-to-end web applications' },
              { year: '2022', title: 'Frontend Developer', desc: 'Specializing in React and modern CSS' },
              { year: '2021', title: 'Started Web Development', desc: 'Learning HTML, CSS, and JavaScript fundamentals' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                    <span className="text-blue-400 font-bold text-lg">{item.year}</span>
                    <h4 className="text-gray-100 font-semibold text-xl mt-2">{item.title}</h4>
                    <p className="text-gray-400 mt-2">{item.desc}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-gray-900"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;