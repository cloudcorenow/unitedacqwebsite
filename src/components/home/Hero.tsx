import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-primary-800 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-800 to-primary-800/70"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 py-20 md:py-32">
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Strategic Debt Recovery Solutions
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-200 mb-8"
          >
            United Acquisitions LLC specializes in comprehensive debt recovery and accounts receivable management. We combine advanced technology with proven strategies to maximize recovery rates while maintaining the highest standards of compliance and professionalism.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-200 mb-8"
          >
            Our experienced team works diligently to resolve outstanding balances through customized payment solutions, ensuring positive outcomes for consumers while maintaining accurate credit reporting.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link 
              to="/contact" 
              className="btn btn-secondary"
            >
              Get Started Today
            </Link>
            <Link 
              to="/services" 
              className="btn bg-white text-primary-800 hover:bg-gray-100"
            >
              Our Services <ArrowRight size={20} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Accent Bar */}
      <div className="h-2 bg-secondary-600"></div>
    </div>
  );
};

export default Hero;