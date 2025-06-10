import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { Testimonial } from '../../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "United Acquisitions has transformed our debt recovery process. Their professional approach and respect for our customer relationships sets them apart from other collection agencies.",
    author: "Jennifer Martinez",
    position: "CFO, Premier Medical Group"
  },
  {
    id: 2,
    quote: "We've seen a 42% increase in recovery rates since partnering with United Acquisitions. Their team's expertise and dedication to compliance gives us complete confidence.",
    author: "David Thompson",
    position: "Finance Director, TechFlow Solutions"
  },
  {
    id: 3,
    quote: "Their approach is both firm and respectful. They've helped us recover debts we thought were lost while maintaining positive relationships with our clients.",
    author: "Lisa Chen",
    position: "Owner, Chen & Associates Law Firm"
  }
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  
  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };
  
  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <SectionTitle
          title="What Our Clients Say"
          subtitle="Don't just take our word for it. Here's what our clients have to say about working with United Acquisitions."
          center
        />
        
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 text-primary-500 opacity-20">
            <Quote size={120} />
          </div>
          
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 md:p-10 rounded-lg shadow-md relative z-10"
          >
            <p className="text-lg md:text-xl text-gray-700 italic mb-6">
              "{testimonials[current].quote}"
            </p>
            <div>
              <h4 className="text-primary-700 font-bold">{testimonials[current].author}</h4>
              <p className="text-gray-600">{testimonials[current].position}</p>
            </div>
          </motion.div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-white shadow-md text-primary-600 hover:text-primary-800 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full ${
                  current === index ? 'bg-primary-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
            
            <button
              onClick={next}
              className="p-2 rounded-full bg-white shadow-md text-primary-600 hover:text-primary-800 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;