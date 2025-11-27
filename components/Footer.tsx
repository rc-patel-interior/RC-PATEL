
import React from 'react';
import { Hammer, Facebook, Instagram, Twitter, Mail, MapPin, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { APP_NAME } from '../constants';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const phoneNumber = "+918976637493";
  const whatsappUrl = `https://wa.me/918976637493`;
  const telUrl = `tel:${phoneNumber}`;
  const email = "crpmumbai15@gmail.com";
  const address = "Dr. BabaSaheb Ambedkar Nagar No. 2, Mankhurd, Mumbai - 43";

  return (
    <footer className="bg-slate-950 text-gray-400 border-t border-slate-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-accent p-2 rounded-lg shadow-neon">
                 <Hammer className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white font-serif">{APP_NAME}</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-500">
              Your premier partner for Civil Construction, POP Design, and Custom Furniture in Mumbai. We build with precision and passion.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="bg-slate-900 p-2.5 rounded-full hover:bg-accent hover:text-white transition-all duration-300 hover:-translate-y-1">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Links Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-accent"></span>
            </h3>
            <ul className="space-y-3">
              {['Home', 'Services', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item === 'Home' ? '' : item.toLowerCase()}`} className="hover:text-accent transition-colors flex items-center gap-2 group">
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-300 text-accent" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Our Services
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-accent"></span>
            </h3>
            <ul className="space-y-3 text-sm">
              <li>Civil Construction</li>
              <li>POP False Ceilings</li>
              <li>Modular Kitchens</li>
              <li>Custom Wardrobes</li>
              <li>Waterproofing</li>
              <li>Painting & Texture</li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
             <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Get In Touch
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-accent"></span>
            </h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <MapPin className="text-accent flex-shrink-0 mt-1" size={18} />
                <span className="text-sm leading-tight">{address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-accent flex-shrink-0" size={18} />
                <a href={`mailto:${email}`} className="text-sm hover:text-white transition-colors">{email}</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-accent flex-shrink-0" size={18} />
                <span className="text-sm font-bold text-white">{phoneNumber}</span>
              </li>
            </ul>
            
            <div className="grid grid-cols-2 gap-3">
              <a href={telUrl} className="flex items-center justify-center gap-2 bg-white text-slate-900 py-2.5 rounded-lg font-bold text-sm hover:bg-gray-200 transition-colors">
                 <Phone size={16} /> Call
              </a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-2.5 rounded-lg font-bold text-sm hover:bg-[#20bd5a] transition-colors shadow-lg shadow-green-900/20">
                 <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} {APP_NAME}. All Rights Reserved.</p>
          <p>
            Designed with <span className="text-red-500 animate-pulse">❤</span> for Mumbai
          </p>
        </div>
      </div>
    </footer>
  );
};
