import React from 'react';
import { motion } from 'framer-motion';
import { Percent, Users, Award, CreditCard } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: number;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, label, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="text-secondary-500 flex justify-center mb-3">{icon}</div>
      <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{value}</h3>
      <p className="text-gray-300">{label}</p>
    </motion.div>
  );
};

const Stats: React.FC = () => {
  const stats = [
    {
      icon: <Percent size={32} />,
      value: "38%",
      label: "Average Recovery Rate"
    },
    {
      icon: <Users size={32} />,
      value: "1,200+",
      label: "Satisfied Clients"
    },
    {
      icon: <Award size={32} />,
      value: "15+",
      label: "Years of Excellence"
    },
    {
      icon: <CreditCard size={32} />,
      value: "$500M+",
      label: "Recovered for Clients"
    }
  ];
  
  return (
    <section className="py-16 bg-primary-700">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;