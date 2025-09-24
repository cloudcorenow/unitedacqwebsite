import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CreditCard, Clock, Building, LineChart, ArrowRight } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card group"
    >
      <div className="p-6">
        <div className="text-secondary-600 mb-4 transition-transform group-hover:scale-110">{icon}</div>
        <h3 className="text-xl font-bold text-primary-800 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link to="/services" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
          Learn more <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <CreditCard size={40} />,
      title: "Consumer Debt Collection",
      description: "Recover outstanding consumer debts with our ethical and compliant collection practices that preserve customer relationships."
    },
    {
      icon: <Building size={40} />,
      title: "Commercial Collections",
      description: "Specialized B2B debt recovery services to help your business maintain healthy cash flow and business relationships."
    },
    {
      icon: <LineChart size={40} />,
      title: "Portfolio Management",
      description: "Comprehensive analysis and management of your receivables portfolio to maximize recovery rates."
    }
  ];

  return (
    <section className="section">
      <div className="container-custom">
        <SectionTitle
          title="Our Services"
          subtitle="We offer a comprehensive range of debt collection and accounts receivable management services."
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link to="/services" className="btn btn-primary">
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;