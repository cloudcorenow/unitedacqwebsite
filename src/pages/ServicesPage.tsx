import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, FileText, BarChart, Users, Shield } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: Phone,
      title: 'Direct Contact',
      description: 'Professional phone-based collection services with trained specialists'
    },
    {
      icon: Mail,
      title: 'Written Communication',
      description: 'Compliant letter campaigns and digital communication strategies'
    },
    {
      icon: FileText,
      title: 'Skip Tracing',
      description: 'Advanced location services to find debtors and update contact information'
    },
    {
      icon: BarChart,
      title: 'Analytics & Reporting',
      description: 'Detailed performance metrics and transparent reporting'
    },
    {
      icon: Users,
      title: 'Account Management',
      description: 'Dedicated account managers for personalized service'
    },
    {
      icon: Shield,
      title: 'Compliance Management',
      description: 'Full regulatory compliance and legal support'
    }
  ];

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-[#2A5F9E] to-[#1e4675] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive debt recovery solutions tailored to your business needs
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="bg-[#E5C93C]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-[#2A5F9E]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
