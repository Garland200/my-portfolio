// src/components/Skills.jsx
import { motion } from 'framer-motion';
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
  SiJest
} from 'react-icons/si';

const Skills = () => {
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

  return (
    <section id = "skills"  className="py-20 bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Arsenal
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Tools and technologies I wield to craft exceptional digital experiences
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {coreTech.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-6 bg-gray-800 rounded-xl hover:bg-gray-700/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <span 
                    className="text-3xl"
                    style={{ color: tech.color }}
                  >
                    {tech.icon}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-100">
                    {tech.name}
                  </h3>
                </div>
                <span className="text-gray-400 text-sm">
                  {tech.level}%
                </span>
              </div>
              
              <div className="relative h-2 bg-gray-700 rounded-full">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tech.level}%` }}
                  transition={{ duration: 0.8, type: 'spring' }}
                  className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-blue-400 to-purple-600"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-lg">
            Also comfortable with: REST APIs, Webpack, GraphQL, 
            PostgreSQL, Docker, Agile methodologies
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;