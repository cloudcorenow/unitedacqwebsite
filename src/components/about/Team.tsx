import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { TeamMember } from '../../types';

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Michael Rodriguez",
    position: "Founder & CEO",
    bio: "With over 25 years in financial services and debt recovery, Michael founded United Acquisitions with a vision to revolutionize debt collection through ethical practices and innovative technology.",
    image: "https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    name: "Amanda Foster",
    position: "Chief Operations Officer",
    bio: "Amanda oversees all operational aspects of United Acquisitions, ensuring our processes are efficient, compliant, and deliver exceptional results for our clients.",
    image: "https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 3,
    name: "James Patterson",
    position: "Legal Compliance Director",
    bio: "James ensures that all our collection practices adhere to federal and state regulations, protecting both our clients and their customers while maintaining the highest ethical standards.",
    image: "https://images.pexels.com/photos/5668870/pexels-photo-5668870.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 4,
    name: "Sarah Kim",
    position: "Client Relations Manager",
    bio: "Sarah works directly with our clients to understand their unique needs and develop customized collection strategies that align with their business goals and values.",
    image: "https://images.pexels.com/photos/5669644/pexels-photo-5669644.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

const TeamMemberCard: React.FC<{ member: TeamMember; index: number }> = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card overflow-hidden group"
    >
      <div className="h-64 overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary-800 mb-1">{member.name}</h3>
        <p className="text-secondary-600 font-medium mb-3">{member.position}</p>
        <p className="text-gray-600">{member.bio}</p>
      </div>
    </motion.div>
  );
};

const Team: React.FC = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <SectionTitle
          title="Our Leadership Team"
          subtitle="Meet the experienced professionals behind United Acquisitions LLC."
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;