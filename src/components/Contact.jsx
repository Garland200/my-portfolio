// src/components/Contact.jsx
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FiMail, FiMapPin, FiPhone, FiSend, FiGithub, FiLinkedin, FiMessageCircle } from 'react-icons/fi';
import { SiDiscord } from 'react-icons/si';
import { useState } from 'react';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(data);
    setSubmitStatus('success');
    setIsSubmitting(false);
    reset();
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  const contactMethods = [
    {
  icon: <FiMail />,
  title: "Email Me",
  value: "garlandleo200@gmail.com",
  link: "mailto:garlandleo200@gmail.com",
  description: "Best for project inquiries"
},
{
  icon: <FiMapPin />,
  title: "Location",
  value: "Kaduna, Nigeria",
  link: "https://maps.app.goo.gl/...",
  description: "Available for remote work"
},
{
  icon: <FiPhone />,
  title: "Call Me",
  value: "+234 8135206900",
  link: "tel:+2348135206900",
  description: "Let's discuss your project"
}
  ];

  const socialLinks = [
    { icon: <FiGithub />, url: "https://github.com/yourusername", label: "GitHub" },
    { icon: <FiLinkedin />, url: "https://linkedin.com/in/yourprofile", label: "LinkedIn" },
    { icon: <SiDiscord />, url: "https://discord.com/users/yourid", label: "Discord" }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/5 to-purple-600/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-purple-400/5 to-pink-600/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Ready to bring your ideas to life? Let's discuss how we can create something amazing together.
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
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-100 mb-4">
                Let's Connect
              </h3>
              <p className="text-gray-400">
                I'm always excited to work on new projects and collaborate with amazing people. 
                Choose your preferred way to get in touch!
              </p>
            </div>

            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-6 p-6 bg-gray-800 rounded-xl hover:bg-gray-700/50 transition-all duration-300 border border-gray-700 hover:border-blue-400/30"
              >
                <motion.span 
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className="text-2xl text-blue-400 mt-1 p-3 bg-blue-400/10 rounded-lg"
                >
                  {method.icon}
                </motion.span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-1">
                    {method.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-blue-300 transition-colors">
                    {method.value}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    {method.description}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <div className="pt-8 border-t border-gray-800">
              <h4 className="text-lg font-semibold text-gray-100 mb-4">
                Follow Me
              </h4>
              <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-2xl text-gray-400 hover:text-blue-400 transition-colors p-3 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-400/30"
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 bg-gray-800 p-8 rounded-xl border border-gray-700 relative"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-100 mb-2 flex items-center gap-2">
                <FiMessageCircle className="text-blue-400" />
                Send Message
              </h3>
              <p className="text-gray-400">
                Fill out the form below and I'll get back to you within 24 hours.
              </p>
            </div>

            <div>
              <label className="block text-gray-300 mb-2 font-medium">
                Full Name
              </label>
              <input
                {...register("name", { required: true })}
                className="w-full bg-gray-700 text-gray-100 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:bg-gray-600 outline-none transition-all border border-gray-600 focus:border-blue-400"
                placeholder="Your full name"
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
                className="w-full bg-gray-700 text-gray-100 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:bg-gray-600 outline-none transition-all border border-gray-600 focus:border-blue-400"
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="text-red-400 mt-1">Valid email is required</p>
              )}
            </div>

            <div>
              <label className="block text-gray-300 mb-2 font-medium">
                Project Type
              </label>
              <select
                {...register("projectType")}
                className="w-full bg-gray-700 text-gray-100 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:bg-gray-600 outline-none transition-all border border-gray-600 focus:border-blue-400"
              >
                <option value="">Select project type</option>
                <option value="website">Website Development</option>
                <option value="webapp">Web Application</option>
                <option value="ecommerce">E-commerce Platform</option>
                <option value="consultation">Consultation</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-300 mb-2 font-medium">
                Your Message
              </label>
              <textarea
                {...register("message", { required: true })}
                rows="5"
                className="w-full bg-gray-700 text-gray-100 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:bg-gray-600 outline-none transition-all border border-gray-600 focus:border-blue-400 resize-none"
                placeholder="Tell me about your project, timeline, and any specific requirements..."
              ></textarea>
              {errors.message && (
                <p className="text-red-400 mt-1">Message is required</p>
              )}
            </div>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-500/20 border border-green-500/30 text-green-300 p-4 rounded-lg"
              >
                ✅ Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <FiSend className="text-xl" />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;