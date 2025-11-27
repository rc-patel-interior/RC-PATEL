import React from 'react';
import { Hammer, Facebook, Instagram, Twitter, Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import { APP_NAME } from '../constants';

export const Footer: React.FC = () => {
  const phoneNumber = "+918976637493";
  const whatsappUrl = `https://wa.me/918976637493`;
  const telUrl = `tel:${phoneNumber}`;
  const email = "crpmumbai15@gmail.com";
  const address = "Dr. BabaSaheb Ambedkar Nagar No. 2 Mankhurd Mumbai - 43";

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-accent p-1.5 rounded shadow-neon">
                 <Hammer className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white font-serif">{APP_NAME}</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 mb-6">
              Building dreams with precision and excellence. Your trusted partner for Civil Construction, POP Design, and Interior Renovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent hover:scale-110 transition-all p-2 bg-slate-800 rounded-full"><Facebook size={18} /></a>
              <a href="#" className="hover:text-accent hover:scale-110 transition-all p-2 bg-slate-800 rounded-full"><Instagram size={18} /></a>
              <a href="#" className="hover:text-accent hover:scale-110 transition-all p-2 bg-slate-800 rounded-full"><Twitter size={18} /></a>
            </div>
          </div>
          
          {/* Links Column */}
          <div className="animate-fade-in-up delay-100">
            <h3 className="text-lg font-bold text-white mb-4 border-b border-slate-700 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#/" className="hover:text-accent hover:pl-2 transition-all block py-1">Home</a></li>
              <li><a href="#/services" className="hover:text-accent hover:pl-2 transition-all block py-1">Services</a></li>
              <li><a href="#/gallery" className="hover:text-accent hover:pl-2 transition-all block py-1">Portfolio</a></li>
              <li><a href="#/contact" className="hover:text-accent hover:pl-2 transition-all block py-1">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="animate-fade-in-up delay-200">
            <h3 className="text-lg font-bold text-white mb-4 border-b border-slate-700 pb-2 inline-block">Contact Info</h3>
            <ul className="space-y-4 text-sm mb-6">
              <li className="flex items-start gap-3 group">
                <MapPin className="text-accent flex-shrink-0 group-hover:text-white transition-colors mt-0.5" size={18} />
                <span className="group-hover:text-white transition-colors">{address}</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="text-accent flex-shrink-0 group-hover:text-white transition-colors" size={18} />
                <span className="group-hover:text-white transition-colors">{email}</span>
              </li>
            </ul>

            {/* Call Actions */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-white font-bold text-lg mb-1">
                 <Phone className="text-accent" size={20} /> {phoneNumber}
              </div>
              <div className="flex gap-3">
                <a 
                  href={telUrl} 
                  className="flex-1 bg-white text-slate-900 hover:bg-gray-100 font-bold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 active:scale-95"
                >
                  <Phone size={18} /> Call
                </a>
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-600 hover:bg-green-500 text-white font-bold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-green-900/20"
                >
                  <MessageCircle size={18} /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm flex flex-col md:flex-row justify-between items-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center gap-1">Designed with <span className="text-red-500">♥</span> for Excellence</p>
        </div>
      </div>
    </footer>
  );
};