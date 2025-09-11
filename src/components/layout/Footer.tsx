import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-800 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="text-xl font-bold text-white mb-4 block">
              United Acquisitions LLC
            </Link>
            <p className="text-gray-300 mb-4">
              Professional debt collection and recovery services with integrity, compliance, and exceptional results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-secondary-500 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary-500 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary-500 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-secondary-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-secondary-500 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-secondary-500 transition-colors">Our Services</Link></li>
              <li><Link to="/resources" className="text-gray-300 hover:text-secondary-500 transition-colors">Resources</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-secondary-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/legal" className="text-gray-300 hover:text-secondary-500 transition-colors">Terms of Use</Link></li>
              <li><Link to="/legal" className="text-gray-300 hover:text-secondary-500 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/legal" className="text-gray-300 hover:text-secondary-500 transition-colors">SMS Consent</Link></li>
              <li><Link to="/resources" className="text-gray-300 hover:text-secondary-500 transition-colors">FDCPA Compliance</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">P.O. Box 433<br />Orange, CA 92856</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-secondary-500 mr-2 flex-shrink-0" />
                <a href="tel:+18555551234" className="text-gray-300 hover:text-secondary-500 transition-colors">855-555-1234</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-secondary-500 mr-2 flex-shrink-0" />
                <a href="mailto:info@unitedacq.com" className="text-gray-300 hover:text-secondary-500 transition-colors">info@unitedacq.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>
            &copy; {currentYear} United Acquisitions LLC. All rights reserved.
          </p>
          <p className="mt-2 text-sm">
            This is a debt collection company. This is an attempt to collect a debt and any information obtained will be used for that purpose.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;