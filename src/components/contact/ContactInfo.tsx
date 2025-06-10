import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ContactInfo as ContactInfoType } from '../../types';

const contactInfo: ContactInfoType = {
  address: "P.O. Box 433, Orange, CA 92856",
  phone: "855-555-1234",
  email: "info@unitedacq.com",
  hours: "Monday - Friday: 8:00 AM - 6:00 PM CT"
};

const ContactInfo: React.FC = () => {
  return (
    <div className="bg-primary-800 text-white rounded-lg shadow-md p-6 md:p-8">
      <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <MapPin size={24} className="text-secondary-500 mr-4 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-medium text-white mb-1">Mailing Address</h4>
            <p className="text-gray-300">{contactInfo.address}</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Phone size={24} className="text-secondary-500 mr-4 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-medium text-white mb-1">Phone & Fax</h4>
            <p className="text-gray-300">
              <a href={`tel:${contactInfo.phone}`} className="hover:text-secondary-500 transition-colors">
                Phone: {contactInfo.phone}
              </a>
            </p>
            <p className="text-gray-300">Fax: 855-555-5678</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Mail size={24} className="text-secondary-500 mr-4 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-medium text-white mb-1">Email</h4>
            <p className="text-gray-300">
              <a href={`mailto:${contactInfo.email}`} className="hover:text-secondary-500 transition-colors">
                {contactInfo.email}
              </a>
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Clock size={24} className="text-secondary-500 mr-4 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-medium text-white mb-1">Business Hours</h4>
            <p className="text-gray-300">{contactInfo.hours}</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h4 className="font-medium text-white mb-4">Connect With Us</h4>
        <div className="flex space-x-4">
          <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors p-3 rounded-full" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors p-3 rounded-full" aria-label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </a>
          <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors p-3 rounded-full" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;