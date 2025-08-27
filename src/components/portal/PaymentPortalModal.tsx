import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, AlertCircle } from 'lucide-react';

interface PaymentPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PaymentPortalModal: React.FC<PaymentPortalModalProps> = ({ isOpen, onClose }) => {
  const [iframeError, setIframeError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setIframeError(false);
      setIsLoading(true);
      
      // Set a timeout to detect if iframe fails to load
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleIframeError = () => {
    setIframeError(true);
    setIsLoading(false);
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

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
              {/* Loading State */}
              {isLoading && !iframeError && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading payment portal...</p>
                  </div>
                </div>
              )}

              {/* Error State */}
              {iframeError && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                  <div className="text-center max-w-md mx-auto p-8">
                    <AlertCircle size={64} className="text-orange-500 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-gray-800 mb-4">
                      Unable to Load Payment Portal
                    </h4>
                    <p className="text-gray-600 mb-6">
                      For security reasons, the payment portal cannot be displayed within this page. 
                      Please click the button below to open it in a new, secure window.
                    </p>
                    <button
                      onClick={openExternalPortal}
                      className="btn btn-primary"
                    >
                      <ExternalLink size={20} className="mr-2" />
                      Open Secure Payment Portal
                    </button>
                  </div>
                </div>
              )}

              {/* iframe */}
              <iframe
                src="https://app.simplicitycollect.com/PaymentPortal.aspx?paymentid"
                className={`w-full h-full border-0 ${iframeError ? 'hidden' : ''}`}
                title="Payment Portal"
                sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-top-navigation"
                onLoad={handleIframeLoad}
                onError={handleIframeError}
                style={{ display: iframeError ? 'none' : 'block' }}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PaymentPortalModal;