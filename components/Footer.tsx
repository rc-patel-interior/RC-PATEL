import React from 'react';
import { Hammer, Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { APP_NAME } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-accent p-1.5 rounded">
                 <Hammer className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white font-serif">{APP_NAME}</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Building dreams with precision and excellence. Your trusted partner for Civil Construction, POP Design, and Interior Renovation.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-accent hover:scale-110 transition-all"><Facebook size={20} /></a>
              <a href="#" className="hover:text-accent hover:scale-110 transition-all"><Instagram size={20} /></a>
              <a href="#" className="hover:text-accent hover:scale-110 transition-all"><Twitter size={20} /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#/" className="hover:text-accent hover:pl-2 transition-all">Home</a></li>
              <li><a href="#/services" className="hover:text-accent hover:pl-2 transition-all">Services</a></li>
              <li><a href="#/gallery" className="hover:text-accent hover:pl-2 transition-all">Portfolio</a></li>
              <li><a href="#/contact" className="hover:text-accent hover:pl-2 transition-all">Contact Us</a></li>
              <li><a href="#/admin" className="hover:text-accent hover:pl-2 transition-all">Admin Panel</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 group">
                <MapPin className="text-accent flex-shrink-0 group-hover:text-white transition-colors" size={18} />
                <span>123 Construction Plaza, Main Road, City Center, Mumbai - 400001</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="text-accent flex-shrink-0 group-hover:text-white transition-colors" size={18} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="text-accent flex-shrink-0 group-hover:text-white transition-colors" size={18} />
                <span>info@rcpatel.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm flex flex-col md:flex-row justify-between items-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with precision.</p>
        </div>
      </div>
    </footer>
  );
};