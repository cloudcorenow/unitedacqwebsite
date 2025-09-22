import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Briefcase, BookOpen, Users, Zap } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

interface ValueProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const Value: React.FC<ValueProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex gap-4"
    >
      <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold text-primary-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const Values: React.FC = () => {
  const values = [
    {
      icon: <Heart size={24} />,
      title: "Integrity",
      description: "We act with honesty and transparency, ensuring every interaction builds trust and reflects ethical practices."
    },
    {
      icon: <Shield size={24} />,
      title: "Compliance",
      description: "We uphold the highest regulatory and legal standards, protecting our clients and ensuring fairness for consumers."
    },
    {
      icon: <Heart size={24} />,
      title: "Respect",
      description: "We treat all individuals with dignity, maintaining professionalism in every engagement."
    },
    {
      icon: <Shield size={24} />,
      title: "Accountability",
      description: "We take responsibility for our actions, delivering consistent results while safeguarding client reputations."
    },
    {
      icon: <Zap size={24} />,
      title: "Innovation",
      description: "We embrace new technology and strategies to achieve smarter, faster, and more effective recovery solutions."
    },
    {
      icon: <Users size={24} />,
      title: "Partnership",
      description: "We view client relationships as long-term alliances, aligning our efforts with their goals for shared success."
    }
  ];
  
  return (
    <section className="section">
      <div className="container-custom">
        <SectionTitle
          title="Our Core Values"
          subtitle="These principles guide everything we do and shape how we serve our clients and their customers."
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {values.map((value, index) => (
            <Value
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;