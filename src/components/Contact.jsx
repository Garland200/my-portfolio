// src/components/Contact.jsx
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FiMail, FiMapPin, FiPhone, FiSend, FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiDiscord } from 'react-icons/si';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Handle form submission
    console.log(data);
  };

  const contactMethods = [
    {
      icon: <FiMail />,
      title: "Email Me",
      value: "hello@yourdomain.com",
      link: "mailto:hello@yourdomain.com"
    },
    {
      icon: <FiMapPin />,
      title: "Location",
      value: "Barcelona, Spain",
      link: "https://maps.app.goo.gl/..."
    },
    {
      icon: <FiPhone />,
      title: "Call Me",
      value: "+34 123 456 789",
      link: "tel:+34123456789"
    }
  ];

  const socialLinks = [
    { icon: <FiGithub />, url: "https://github.com/yourusername" },
    { icon: <FiLinkedin />, url: "https://linkedin.com/in/yourprofile" },
    { icon: <SiDiscord />, url: "https://discord.com/users/yourid" }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind? 
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-6 p-6 bg-gray-800 rounded-xl hover:bg-gray-700/50 transition-colors"
              >
                <span className="text-2xl text-blue-400 mt-1">
                  {method.icon}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-1">
                    {method.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-blue-300 transition-colors">
                    {method.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-3xl text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 bg-gray-800 p-8 rounded-xl"
          >
            <div>
              <label className="block text-gray-300 mb-2 font-medium">
                Full Name
              </label>
              <input
                {...register("name", { required: true })}
                className="w-full bg-gray-700 text-gray-100 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none transition-all"
              />
              {errors.name && (
                <p className="text-red-400 mt-1">Name is required</p>
              )}
            </div>

            <div>
              <label className="block text-gray-300 mb-2 font-medium">
                Email Address
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="w-full bg-gray-700 text-gray-100 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none transition-all"
              />
              {errors.email && (
                <p className="text-red-400 mt-1">Valid email is required</p>
              )}
            </div>

            <div>
              <label className="block text-gray-300 mb-2 font-medium">
                Your Message
              </label>
              <textarea
                {...register("message", { required: true })}
                rows="5"
                className="w-full bg-gray-700 text-gray-100 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none transition-all"
              ></textarea>
              {errors.message && (
                <p className="text-red-400 mt-1">Message is required</p>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:shadow-xl transition-shadow"
            >
              Send Message
              <FiSend className="text-xl" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;