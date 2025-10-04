import React from 'react';
import { motion } from 'framer-motion';
import { FileText, BookOpen, ExternalLink } from 'lucide-react';

export default function ResourcesPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-[#2A5F9E] to-[#1e4675] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Important information and resources for consumers and businesses
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-[#E5C93C]/10 p-3 rounded-xl flex-shrink-0">
                  <FileText className="h-8 w-8 text-[#2A5F9E]" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Consumer Rights</h2>
                  <p className="text-gray-600 mb-4">
                    The Fair Debt Collection Practices Act (FDCPA) protects consumers from abusive
                    debt collection practices. You have the right to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Be treated with respect and dignity</li>
                    <li>Request validation of the debt</li>
                    <li>Dispute inaccurate information</li>
                    <li>Request that we cease contact</li>
                    <li>File complaints with regulatory agencies</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-[#E5C93C]/10 p-3 rounded-xl flex-shrink-0">
                  <BookOpen className="h-8 w-8 text-[#2A5F9E]" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Helpful Links</h2>
                  <div className="space-y-3">
                    <a
                      href="https://www.ftc.gov/legal-library/browse/rules/fair-debt-collection-practices-act-text"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-[#2A5F9E] hover:text-[#1e4675] transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      FDCPA Full Text - Federal Trade Commission
                    </a>
                    <a
                      href="https://www.consumerfinance.gov/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-[#2A5F9E] hover:text-[#1e4675] transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Consumer Financial Protection Bureau
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
