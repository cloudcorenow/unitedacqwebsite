import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

// Declare Turnstile types
declare global {
  interface Window {
    turnstile: {
      render: (element: string | HTMLElement, options: {
        sitekey: string;
        callback?: (token: string) => void;
        'error-callback'?: () => void;
        'expired-callback'?: () => void;
        theme?: 'light' | 'dark' | 'auto';
        size?: 'normal' | 'compact';
      }) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId?: string) => void;
    };
  }
}

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string>('');
  const [captchaError, setCaptchaError] = useState<string>('');
  const [widgetId, setWidgetId] = useState<string>('');
  
  // Cloudflare Turnstile site key (demo key - replace with your actual site key)
  const TURNSTILE_SITE_KEY = '1x00000000000000000000AA';
  
  React.useEffect(() => {
    // Initialize Turnstile when component mounts
    const initTurnstile = () => {
      if (window.turnstile && document.getElementById('turnstile-widget') && !widgetId) {
        const id = window.turnstile.render('#turnstile-widget', {
          sitekey: TURNSTILE_SITE_KEY,
          callback: (token: string) => {
            setCaptchaToken(token);
            setCaptchaError('');
          },
          'error-callback': () => {
            setCaptchaError('CAPTCHA verification failed. Please try again.');
            setCaptchaToken('');
          },
          'expired-callback': () => {
            setCaptchaError('CAPTCHA expired. Please verify again.');
            setCaptchaToken('');
          },
          theme: 'light',
          size: 'normal'
        });
        setWidgetId(id);
      }
    };

    // Wait for Turnstile script to load
    if (window.turnstile) {
      initTurnstile();
    } else {
      const checkTurnstile = setInterval(() => {
        if (window.turnstile) {
          initTurnstile();
          clearInterval(checkTurnstile);
        }
      }, 100);
      
      return () => clearInterval(checkTurnstile);
    }
  }, []);

  // Cleanup function to remove widget on unmount
  React.useEffect(() => {
    return () => {
      if (window.turnstile && widgetId) {
        window.turnstile.remove(widgetId);
      }
    };
  }, [widgetId]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate CAPTCHA
    if (!captchaToken) {
      setCaptchaError('Please complete the CAPTCHA verification.');
      return;
    }
    
    // In a real implementation, you would send the form data to your backend
    console.log('Form submitted:', { ...formState, captchaToken });
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setCaptchaToken('');
      setCaptchaError('');
      setFormState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
      
      // Reset CAPTCHA
      if (window.turnstile) {
        window.turnstile.reset(widgetId);
      }
    }, 1000);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-8"
        >
          <div className="text-success-500 mx-auto mb-4">
            <CheckCircle size={64} />
          </div>
          <h3 className="text-2xl font-bold text-primary-800 mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-6">
            Your message has been received. One of our representatives will contact you shortly.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="btn btn-primary"
          >
            Send Another Message
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Full Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="John Smith"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="(555) 555-5555"
              />
            </div>
            
            <div>
              <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formState.company}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Your Company"
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message*
            </label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="How can we help you?"
            ></textarea>
          </div>
          
          {/* Cloudflare Turnstile CAPTCHA */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Security Verification*
            </label>
            <div id="turnstile-widget" className="mb-2"></div>
            {captchaError && (
              <p className="text-error-500 text-sm">{captchaError}</p>
            )}
          </div>
          
          <div className="text-center md:text-right">
            <button type="submit" className="btn btn-primary">
              <Send size={20} className="mr-2" />
              Send Message
            </button>
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            This is a debt collection company. By submitting this form, you acknowledge that any information provided may be used for debt collection purposes.
          </p>
        </form>
      )}
    </div>
  );
};

export default ContactForm;