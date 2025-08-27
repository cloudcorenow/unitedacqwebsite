import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

interface PaymentPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PaymentPortalModal: React.FC<PaymentPortalModalProps> = ({ isOpen, onClose }) => {
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
                <a
                  href="https://app.simplicitycollect.com/PaymentPortal.aspx?paymentid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-500 hover:text-primary-600 transition-colors"
                  title="Open in new tab"
                >
                  <ExternalLink size={20} />
                </a>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            
            {/* iframe Content */}
            <div className="h-[calc(100%-4rem)]">
              <iframe
                src="https://app.simplicitycollect.com/PaymentPortal.aspx?paymentid"
                className="w-full h-full border-0"
                title="Payment Portal"
                sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-top-navigation"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PaymentPortalModal;