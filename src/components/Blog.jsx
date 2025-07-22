// src/components/Blog.jsx
import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiArrowRight, FiBookmark } from 'react-icons/fi';
import { useState } from 'react';

const Blog = () => {
  const [hoveredPost, setHoveredPost] = useState(null);

  const blogPosts = [
    {
      title: "Building Scalable React Applications with Modern Patterns",
      excerpt: "Explore advanced React patterns including compound components, render props, and custom hooks to build maintainable applications.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "React",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React", "JavaScript", "Architecture"],
      featured: true
    },
    {
      title: "The Future of Web Development: AI Integration",
      excerpt: "How artificial intelligence is revolutionizing web development workflows and what developers need to know.",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "AI",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["AI", "Web Development", "Future"],
      featured: true
    },
    {
      title: "Optimizing React Performance: A Complete Guide",
      excerpt: "Learn advanced techniques for optimizing React applications including memoization, code splitting, and bundle analysis.",
      date: "2024-01-05",
      readTime: "12 min read",
      category: "Performance",
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React", "Performance", "Optimization"],
      featured: false
    },
    {
      title: "CSS Grid vs Flexbox: When to Use What",
      excerpt: "A comprehensive comparison of CSS Grid and Flexbox with practical examples and use cases.",
      date: "2023-12-28",
      readTime: "5 min read",
      category: "CSS",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["CSS", "Layout", "Design"],
      featured: false
    },
    {
      title: "TypeScript Best Practices for React Developers",
      excerpt: "Essential TypeScript patterns and practices that every React developer should know for better code quality.",
      date: "2023-12-20",
      readTime: "10 min read",
      category: "TypeScript",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["TypeScript", "React", "Best Practices"],
      featured: false
    },
    {
      title: "Building Accessible Web Applications",
      excerpt: "A practical guide to implementing accessibility features that make your web applications usable by everyone.",
      date: "2023-12-15",
      readTime: "7 min read",
      category: "Accessibility",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Accessibility", "UX", "Web Standards"],
      featured: false
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="py-20 bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Latest Insights
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Thoughts on web development, technology trends, and best practices
          </p>
        </motion.div>

        {/* Featured Posts */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredPost(index)}
              onHoverEnd={() => setHoveredPost(null)}
              className="group relative bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-400/30 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>

                {/* Bookmark Icon */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-sm p-2 rounded-full text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <FiBookmark />
                </motion.button>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                  <div className="flex items-center gap-1">
                    <FiCalendar className="text-xs" />
                    {formatDate(post.date)}
                  </div>
                  <div className="flex items-center gap-1">
                    <FiClock className="text-xs" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
                >
                  Read More
                  <FiArrowRight />
                </motion.button>
              </div>

              {/* Hover Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredPost === index ? 1 : 0 }}
                className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-600/5 pointer-events-none"
              />
            </motion.article>
          ))}
        </div>

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                
                <div className="absolute top-3 left-3">
                  <span className="bg-gray-900/80 backdrop-blur-sm text-blue-300 px-2 py-1 rounded text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-3 text-gray-500 text-xs mb-3">
                  <span>{formatDate(post.date)}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-lg font-semibold text-gray-100 mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-700 text-gray-400 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium flex items-center gap-1">
                  Read Article
                  <FiArrowRight className="text-xs" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Posts Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow"
          >
            View All Posts
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;