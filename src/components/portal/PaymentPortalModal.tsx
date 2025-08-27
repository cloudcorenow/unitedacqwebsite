import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, AlertCircle, Shield } from 'lucide-react';

interface PaymentPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PaymentPortalModal: React.FC<PaymentPortalModalProps> = ({ isOpen, onClose }) => {
  const openExternalPortal = () => {
    window.open('https://app.simplicitycollect.com/PaymentPortal.aspx?paymentid', '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative bg-white rounded-lg shadow-xl w-full max-w-6xl h-[90vh] mx-4"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-xl font-bold text-primary-800">Payment Portal</h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={openExternalPortal}
                  className="p-2 text-gray-500 hover:text-primary-600 transition-colors"
                  title="Open in new tab"
                >
                  <ExternalLink size={20} />
                </button>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            
            {/* Content */}
            <div className="h-[calc(100%-4rem)] relative">
              {/* Secure Payment Message */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50">
                <div className="text-center max-w-md mx-auto p-8">
                  <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield size={40} className="text-primary-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-primary-800 mb-4">
                    Secure Payment Portal
                  </h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    For your security and privacy, our payment portal opens in a new, secure window. 
                    This ensures your payment information is protected with the highest level of encryption.
                  </p>
                  <button
                    onClick={openExternalPortal}
                    className="btn btn-primary text-lg px-8 py-3 mb-4"
                  >
                    <ExternalLink size={24} className="mr-3" />
                    Open Secure Payment Portal
                  </button>
                  <p className="text-sm text-gray-500">
                    You will be redirected to our secure payment processor
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PaymentPortalModal;