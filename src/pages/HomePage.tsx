import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Users, TrendingUp, CheckCircle } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-[#2A5F9E] via-[#1e4675] to-[#2A5F9E] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920')] bg-cover bg-center opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Professional Debt Recovery
              <span className="block text-[#E5C93C] mt-2">With Integrity</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Maximize your recoveries while maintaining positive customer relationships
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#E5C93C] text-[#2A5F9E] rounded-xl font-semibold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold text-lg hover:bg-white/20 transition-all border border-white/20"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'FDCPA Compliant',
                description: 'Fully compliant with all federal and state regulations'
              },
              {
                icon: Users,
                title: 'Professional Approach',
                description: 'Respectful communication that preserves relationships'
              },
              {
                icon: TrendingUp,
                title: 'Proven Results',
                description: 'Industry-leading recovery rates and performance'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-[#E5C93C]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="h-8 w-8 text-[#2A5F9E]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose United Acquisitions?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine technology, expertise, and ethical practices to deliver superior results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Advanced technology and automation',
              'Experienced collection professionals',
              'Transparent reporting and analytics',
              'Customized collection strategies',
              'Regulatory compliance expertise',
              'Dedicated account management'
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3 bg-gray-50 p-4 rounded-xl"
              >
                <CheckCircle className="h-6 w-6 text-[#E5C93C] flex-shrink-0 mt-0.5" />
                <span className="text-lg text-gray-800">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#2A5F9E] to-[#1e4675] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Improve Your Recovery Rates?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today to learn how we can help your business
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#E5C93C] text-[#2A5F9E] rounded-xl font-semibold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg"
          >
            Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
