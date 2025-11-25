import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Hammer, Phone, Moon, Sun } from 'lucide-react';
import { APP_NAME } from '../constants';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
    { name: 'Admin Panel', path: '/admin' }, // Points to protected route
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-slate-900/95 backdrop-blur-md text-white sticky top-0 z-50 shadow-neon border-b border-white/10 dark:border-slate-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-accent p-2 rounded-lg group-hover:shadow-neon transition-all duration-300">
                <Hammer className="h-6 w-6 text-white" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-wide group-hover:text-accent-glow transition-colors">{APP_NAME}</span>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative overflow-hidden group ${
                    isActive(link.path)
                      ? 'text-accent-glow'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent shadow-neon"></span>
                  )}
                  <span className="absolute inset-0 bg-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-md"></span>
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
               {/* Theme Toggle */}
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-white/10 transition-colors text-accent hover:text-white"
                aria-label="Toggle Theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <Link to="/contact" className="bg-accent hover:bg-amber-500 text-white px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-all hover:scale-105 hover:shadow-neon">
                <Phone size={16} /> Get Quote
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden gap-4">
             <button 
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-white/10 transition-colors text-accent"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-slate-800 text-accent'
                    : 'text-gray-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};