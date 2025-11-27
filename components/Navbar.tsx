
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Hammer, Phone, Moon, Sun } from 'lucide-react';
import { APP_NAME } from '../constants';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
    { name: 'Admin', path: '/admin' }, // Shortened for better mobile fit
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg shadow-lg border-b border-gray-200 dark:border-slate-800' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center gap-3 group">
              <div className={`p-2.5 rounded-xl transition-all duration-300 transform group-hover:rotate-12 shadow-lg ${scrolled ? 'bg-accent text-white' : 'bg-white/10 backdrop-blur text-white border border-white/20'}`}>
                <Hammer className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className={`font-serif text-2xl font-bold tracking-wide transition-colors ${scrolled ? 'text-slate-900 dark:text-white' : 'text-white'}`}>
                  {APP_NAME}
                </span>
                <span className={`text-[10px] uppercase tracking-[0.2em] font-bold ${scrolled ? 'text-accent' : 'text-gray-300'}`}>
                  Interiors
                </span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-baseline space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 relative group overflow-hidden ${
                    isActive(link.path)
                      ? 'text-accent bg-accent/10'
                      : scrolled ? 'text-slate-600 dark:text-gray-300 hover:text-accent' : 'text-gray-200 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent/50 blur-[2px]"></span>
                  )}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4 pl-4 border-l border-gray-200 dark:border-slate-700">
               {/* Theme Toggle */}
              <button 
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors ${
                  scrolled 
                    ? 'text-slate-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800' 
                    : 'text-white hover:bg-white/10'
                }`}
                aria-label="Toggle Theme"
              >
                {isDark ? <Sun size={20} className="hover:text-amber-400 hover:rotate-90 transition-transform" /> : <Moon size={20} className="hover:text-blue-400 hover:-rotate-12 transition-transform" />}
              </button>

              <Link 
                to="/contact" 
                className={`px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-lg ${
                  scrolled
                    ? 'bg-accent hover:bg-amber-600 text-white shadow-accent/20'
                    : 'bg-white text-slate-900 hover:bg-gray-100'
                }`}
              >
                <Phone size={16} className={scrolled ? "animate-pulse" : ""} /> 
                <span>Get Quote</span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${scrolled ? 'text-slate-900 dark:text-white' : 'text-white'}`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors ${
                scrolled 
                  ? 'text-slate-900 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden absolute top-20 left-0 w-full bg-white dark:bg-slate-950 border-b border-gray-200 dark:border-slate-800 shadow-2xl transition-all duration-300 transform origin-top ${
          isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg text-base font-bold transition-all ${
                isActive(link.path)
                  ? 'bg-accent/10 text-accent border-l-4 border-accent'
                  : 'text-slate-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-900 hover:pl-6'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center mt-6 bg-accent text-white py-3 rounded-lg font-bold shadow-lg shadow-accent/20 active:scale-95 transition-transform"
          >
            Request Free Consultation
          </Link>
        </div>
      </div>
    </nav>
  );
};
