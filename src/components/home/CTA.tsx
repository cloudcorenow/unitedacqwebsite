import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PhoneCall } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-16 bg-primary-800">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 md:mb-0 md:max-w-xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to maximize your recovery rates?
            </h2>
            <p className="text-gray-200 text-lg">
              Our team of experts is ready to help you recover your outstanding receivables with our proven, ethical, and effective approach.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/contact" className="btn btn-secondary text-lg">
              Contact Us
            </Link>
            <a href="tel:+18555551234" className="btn bg-white text-primary-800 hover:bg-gray-100 text-lg">
              <PhoneCall size={20} className="mr-2" />
              800-604-4310
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;