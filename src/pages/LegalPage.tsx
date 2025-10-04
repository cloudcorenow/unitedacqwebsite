import React from 'react';
import { motion } from 'framer-motion';

export default function LegalPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-[#2A5F9E] to-[#1e4675] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Legal Information</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Privacy policy, terms of service, and regulatory compliance
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                United Acquisitions LLC is committed to protecting your privacy and maintaining the
                confidentiality of your personal information.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Information We Collect</h3>
              <p>
                We collect information necessary to conduct our business, including contact information,
                account details, and payment history. This information is collected through various means
                including creditor submissions and public records.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">How We Use Information</h3>
              <p>
                We use collected information solely for debt recovery purposes and as required by law.
                We do not sell or share your personal information with third parties except as necessary
                to fulfill our collection services or as required by law.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                By using this website or engaging with United Acquisitions LLC, you agree to these terms.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Service Scope</h3>
              <p>
                United Acquisitions LLC provides professional debt collection services in compliance
                with all applicable federal and state laws, including the Fair Debt Collection
                Practices Act (FDCPA).
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Disclaimer</h3>
              <p>
                This website provides general information only and does not constitute legal advice.
                For specific questions about your account or rights, please contact us directly.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Regulatory Compliance</h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                United Acquisitions LLC maintains strict compliance with:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Fair Debt Collection Practices Act (FDCPA)</li>
                <li>Fair Credit Reporting Act (FCRA)</li>
                <li>Telephone Consumer Protection Act (TCPA)</li>
                <li>All applicable state debt collection laws</li>
              </ul>
              <p className="mt-6">
                We are properly licensed and bonded in all jurisdictions where required. Our staff
                receives regular training on compliance requirements and consumer rights.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
