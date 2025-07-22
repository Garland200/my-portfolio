// src/components/Testimonials.jsx
import { motion } from 'framer-motion';
import { FiStar, FiQuote } from 'react-icons/fi';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      company: "TechCorp",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Garland delivered an exceptional React application that exceeded our expectations. His attention to detail and modern development practices made our project a huge success.",
      rating: 5,
      project: "E-Commerce Platform"
    },
    {
      name: "Michael Chen",
      role: "CTO at StartupXYZ",
      company: "StartupXYZ",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Working with Garland was a game-changer for our startup. He built a scalable, performant web application that helped us secure our Series A funding.",
      rating: 5,
      project: "SaaS Dashboard"
    },
    {
      name: "Emily Rodriguez",
      role: "Design Director",
      company: "Creative Agency",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Garland perfectly translated our designs into pixel-perfect, interactive web experiences. His collaboration skills and technical expertise are outstanding.",
      rating: 5,
      project: "Portfolio Website"
    },
    {
      name: "David Kim",
      role: "Founder",
      company: "InnovateLab",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "The AI-powered features Garland implemented transformed our user experience. His innovative approach to problem-solving is truly impressive.",
      rating: 5,
      project: "AI Task Manager"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-gray-800 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            What clients say about working with me
          </p>
        </motion.div>

        <div className="relative">
          {/* Main Testimonial */}
          <motion.div
            key={activeTestimonial}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900 rounded-2xl p-8 md:p-12 border border-gray-700 relative overflow-hidden"
          >
            {/* Quote Icon */}
            <FiQuote className="absolute top-6 right-6 text-4xl text-blue-400/20" />
            
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Client Info */}
              <div className="text-center md:text-left">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  className="w-24 h-24 rounded-full mx-auto md:mx-0 mb-4 object-cover border-4 border-blue-400/30"
                />
                <h3 className="text-xl font-bold text-gray-100 mb-1">
                  {testimonials[activeTestimonial].name}
                </h3>
                <p className="text-blue-400 mb-1">
                  {testimonials[activeTestimonial].role}
                </p>
                <p className="text-gray-400 text-sm mb-4">
                  {testimonials[activeTestimonial].company}
                </p>
                
                {/* Rating */}
                <div className="flex justify-center md:justify-start gap-1 mb-4">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <FiStar key={i} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                  {testimonials[activeTestimonial].project}
                </span>
              </div>

              {/* Testimonial Content */}
              <div className="md:col-span-2">
                <blockquote className="text-gray-300 text-lg md:text-xl leading-relaxed italic">
                  "{testimonials[activeTestimonial].content}"
                </blockquote>
              </div>
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeTestimonial
                    ? 'bg-blue-400 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          {/* Thumbnail Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {testimonials.map((testimonial, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTestimonial(index)}
                className={`p-4 rounded-xl border transition-all duration-300 text-left ${
                  index === activeTestimonial
                    ? 'border-blue-400 bg-blue-400/10'
                    : 'border-gray-700 bg-gray-800 hover:border-gray-600'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-gray-100 font-medium text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-gray-400 text-xs line-clamp-2">
                  {testimonial.content.substring(0, 80)}...
                </p>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;