import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Scale } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-[#E5C93C] p-2 rounded-lg">
                <Scale className="h-6 w-6 text-[#2A5F9E]" />
              </div>
              <div>
                <div className="font-bold text-lg">United Acquisitions LLC</div>
                <div className="text-sm text-gray-400">Professional Debt Recovery</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              We provide professional, compliant, and effective debt collection services
              with a focus on maintaining positive relationships.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-[#E5C93C] transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-[#E5C93C] transition-colors">Services</Link></li>
              <li><Link to="/resources" className="text-gray-400 hover:text-[#E5C93C] transition-colors">Resources</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-[#E5C93C] transition-colors">Contact</Link></li>
              <li><Link to="/legal" className="text-gray-400 hover:text-[#E5C93C] transition-colors">Legal</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Mail className="h-5 w-5 text-[#E5C93C] flex-shrink-0 mt-0.5" />
                <a href="mailto:info@unitedacq.com" className="text-gray-400 hover:text-[#E5C93C] transition-colors">
                  info@unitedacq.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-5 w-5 text-[#E5C93C] flex-shrink-0 mt-0.5" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-[#E5C93C] transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-[#E5C93C] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Professional Services<br />United States
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} United Acquisitions LLC. All rights reserved.</p>
          <p className="mt-2">
            Licensed and compliant with FDCPA regulations
          </p>
        </div>
      </div>
    </footer>
  );
}
