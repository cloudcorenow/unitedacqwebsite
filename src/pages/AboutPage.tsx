import React from 'react';
import { motion } from 'framer-motion';
import { Target, Award, Users, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-[#2A5F9E] to-[#1e4675] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About United Acquisitions</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              A trusted partner in debt recovery with a commitment to professionalism and compliance
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-4">
                At United Acquisitions LLC, we believe that effective debt recovery doesn't have to
                come at the cost of customer relationships. Our mission is to help businesses recover
                outstanding debts while maintaining the highest standards of professionalism and compliance.
              </p>
              <p className="text-lg text-gray-600">
                We combine advanced technology, experienced professionals, and ethical practices to
                deliver superior results for our clients while treating consumers with respect and dignity.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800"
                alt="Professional team"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: 'Results-Driven',
                description: 'Focused on maximizing recovery rates for our clients'
              },
              {
                icon: Award,
                title: 'Compliance First',
                description: 'Strict adherence to FDCPA and all regulations'
              },
              {
                icon: Users,
                title: 'Professional',
                description: 'Respectful communication in all interactions'
              },
              {
                icon: TrendingUp,
                title: 'Transparent',
                description: 'Clear reporting and open communication'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center"
              >
                <div className="bg-[#E5C93C]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <value.icon className="h-8 w-8 text-[#2A5F9E]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
