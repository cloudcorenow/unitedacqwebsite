import React, { useState, useRef } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { submitContactForm } from '../../api/contact';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const turnstileRef = useRef<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const captchaToken = turnstileRef.current?.getValue();

      const result = await submitContactForm({
        ...formData,
        captchaToken,
      });

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
        if (turnstileRef.current) {
          turnstileRef.current.reset();
        }
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again later.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  React.useEffect(() => {
    const loadTurnstile = () => {
      if (window.turnstile && !turnstileRef.current) {
        turnstileRef.current = window.turnstile.render('#turnstile-container', {
          sitekey: import.meta.env.VITE_TURNSTILE_SITE_KEY,
          theme: 'light',
        });
      }
    };

    if (window.turnstile) {
      loadTurnstile();
    } else {
      window.addEventListener('load', loadTurnstile);
    }

    return () => {
      window.removeEventListener('load', loadTurnstile);
    };
  }, []);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2A5F9E] focus:border-transparent transition-all"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2A5F9E] focus:border-transparent transition-all"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2A5F9E] focus:border-transparent transition-all"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2A5F9E] focus:border-transparent transition-all"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2A5F9E] focus:border-transparent transition-all resize-none"
        />
      </div>

      <div id="turnstile-container" className="mb-4"></div>

      {status === 'success' && (
        <div className="flex items-center space-x-2 text-green-700 bg-green-50 px-4 py-3 rounded-xl">
          <CheckCircle className="h-5 w-5" />
          <span>Thank you! Your message has been sent successfully.</span>
        </div>
      )}

      {status === 'error' && (
        <div className="flex items-center space-x-2 text-red-700 bg-red-50 px-4 py-3 rounded-xl">
          <AlertCircle className="h-5 w-5" />
          <span>{errorMessage}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full flex items-center justify-center px-6 py-4 bg-[#2A5F9E] text-white rounded-xl font-semibold hover:bg-[#1e4675] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? (
          'Sending...'
        ) : (
          <>
            <Send className="mr-2 h-5 w-5" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
