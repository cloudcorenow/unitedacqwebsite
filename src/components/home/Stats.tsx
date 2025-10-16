import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageSquare, ArrowRight } from 'lucide-react';

const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-primary-700">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Contact us today to discuss your debt recovery needs. Our team is ready to help you achieve results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.a
            href="tel:+18887555323"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group bg-white hover:bg-secondary-500 rounded-2xl p-8 text-center transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <div className="text-primary-700 group-hover:text-white flex justify-center mb-4 transition-colors">
              <Phone size={40} />
            </div>
            <h3 className="text-xl font-bold text-primary-800 group-hover:text-white mb-2 transition-colors">
              Call Us
            </h3>
            <p className="text-gray-600 group-hover:text-white transition-colors">
              1-888-755-5323
            </p>
          </motion.a>

          <motion.a
            href="mailto:info@unitedack.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group bg-white hover:bg-secondary-500 rounded-2xl p-8 text-center transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <div className="text-primary-700 group-hover:text-white flex justify-center mb-4 transition-colors">
              <Mail size={40} />
            </div>
            <h3 className="text-xl font-bold text-primary-800 group-hover:text-white mb-2 transition-colors">
              Email Us
            </h3>
            <p className="text-gray-600 group-hover:text-white transition-colors">
              info@unitedacq.com
            </p>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="group bg-secondary-500 hover:bg-secondary-600 rounded-2xl p-8 text-center transition-all duration-300 shadow-lg hover:shadow-xl flex flex-col items-center h-full"
            >
              <div className="text-white flex justify-center mb-4">
                <MessageSquare size={40} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Contact Form
              </h3>
              <p className="text-white/90">
                Send us a message
              </p>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link
              to="/services"
              className="group bg-white hover:bg-primary-600 rounded-2xl p-8 text-center transition-all duration-300 shadow-lg hover:shadow-xl flex flex-col items-center h-full"
            >
              <div className="text-primary-700 group-hover:text-white flex justify-center mb-4 transition-colors">
                <ArrowRight size={40} />
              </div>
              <h3 className="text-xl font-bold text-primary-800 group-hover:text-white mb-2 transition-colors">
                Our Services
              </h3>
              <p className="text-gray-600 group-hover:text-white transition-colors">
                Learn more
              </p>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Stats;