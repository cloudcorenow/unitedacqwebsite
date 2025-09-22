import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ContactInfo as ContactInfoType } from '../../types';

const contactInfo: ContactInfoType = {
  address: "1111 E. Katella Ave Suite 270, Orange, CA 92867",
  phone: "800-604-4310",
  email: "frank@unitedacq.com",
  hours: "Monday - Friday: 8:00 AM - 6:00 PM PST"
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
      
    </div>
  );
};

export default ContactInfo;