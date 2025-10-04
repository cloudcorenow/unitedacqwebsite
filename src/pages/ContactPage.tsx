import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/forms/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-[#2A5F9E] to-[#1e4675] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Get in touch with our team to learn how we can help your business
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 bg-gray-50 p-6 rounded-xl"
                >
                  <div className="bg-[#E5C93C]/10 p-3 rounded-xl flex-shrink-0">
                    <Mail className="h-6 w-6 text-[#2A5F9E]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:info@unitedacq.com" className="text-[#2A5F9E] hover:text-[#1e4675] transition-colors">
                      info@unitedacq.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex items-start space-x-4 bg-gray-50 p-6 rounded-xl"
                >
                  <div className="bg-[#E5C93C]/10 p-3 rounded-xl flex-shrink-0">
                    <Phone className="h-6 w-6 text-[#2A5F9E]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:+1234567890" className="text-[#2A5F9E] hover:text-[#1e4675] transition-colors">
                      (123) 456-7890
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start space-x-4 bg-gray-50 p-6 rounded-xl"
                >
                  <div className="bg-[#E5C93C]/10 p-3 rounded-xl flex-shrink-0">
                    <MapPin className="h-6 w-6 text-[#2A5F9E]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">
                      Professional Services<br />
                      United States
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-3">Business Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
