import React, { useEffect } from 'react';
import PageHeader from '../components/common/PageHeader';
import SectionTitle from '../components/common/SectionTitle';
import Team from '../components/about/Team';
import Values from '../components/about/Values';
import CTA from '../components/home/CTA';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | United Acquisitions LLC';
  }, []);

  return (
    <>
      <PageHeader 
        title="About United Acquisitions LLC" 
        subtitle="Strategic debt recovery with integrity and exceptional results"
        backgroundImage="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionTitle
                title="Our Story"
                subtitle="Delivering exceptional debt recovery solutions with a strategic, results-driven approach."
              />
              
              <div className="space-y-6 text-gray-700">
                <p>
                  At United Acquisitions LLC, we specialize in comprehensive debt recovery and accounts receivable management with an unwavering commitment to professionalism, integrity, and results. Whether handling accounts placed by third parties or acquired directly, our mission is to deliver exceptional recovery solutions while maintaining the highest standards of ethical conduct.
                </p>
                <p>
                  We understand that every financial situation is unique, which is why our experienced team works closely with consumers to find the most effective path forward—whether through structured payment plans, settlements, or other customized solutions that align with their current circumstances. By fostering open communication and employing a strategic, results-oriented approach, we help clients recover outstanding balances efficiently while ensuring a positive experience for all parties involved.
                </p>
                <p>
                 Our dedicated accounts receivable team delivers strategic, ethical, and compliant debt resolution services. We also ensure accurate credit bureau trade line updates, underscoring our commitment to transparency, fairness, and regulatory compliance.
                </p>
                <p className="text-lg font-medium text-primary-700">
                  Let us help you navigate the path to financial resolution with confidence and achieve the results you deserve.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <img 
                src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="United Acquisitions LLC team meeting" 
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      <Values />
      <CTA />
    </>
  );
};

export default AboutPage;