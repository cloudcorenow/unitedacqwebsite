import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Briefcase, Shield } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="p-6 bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
    >
      <div className="text-secondary-600 mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-primary-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <CheckCircle size={40} />,
      title: "Compliant Recovery",
      description: "We strictly adhere to all FDCPA, FCRA, and state regulations in our collection practices to protect your business and reputation."
    },
    {
      icon: <Award size={40} />,
      title: "Industry Expertise",
      description: "With extensive experience across multiple industries, we have the knowledge to handle various debt types and complex situations."
    },
    {
      icon: <Briefcase size={40} />,
      title: "Custom Solutions",
      description: "We tailor our approach to your specific needs, whether you're a small business or large enterprise seeking debt recovery."
    },
    {
      icon: <Shield size={40} />,
      title: "Data Security",
      description: "Your information and your customers' data are protected with enterprise-grade security and encryption protocols."
    }
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <SectionTitle
          title="Why Choose United Acquisitions"
          subtitle="We combine industry expertise with ethical practices to deliver exceptional recovery results for our clients."
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;