import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, PenTool, Layout, HardHat, ShieldCheck, Clock, Star } from 'lucide-react';
import { dbService } from '../services/dbService';

export const Home: React.FC = () => {
  useEffect(() => {
    // Log visitor when home page loads
    dbService.logVisitor();
  }, []);

  return (
    <div className="flex flex-col min-h-screen dark:bg-dark">
      {/* Hero Section */}
      <section className="relative h-[850px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop" 
            alt="Luxury Interior Design Mumbai" 
            className="w-full h-full object-cover opacity-80 animate-scale-in duration-1000"
          />
          {/* Dark Overlay with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/50 to-slate-900"></div>
          {/* Neon Glow effect at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-accent/50 bg-accent/10 backdrop-blur-md rounded-full text-accent-glow text-sm font-bold tracking-widest mb-8 animate-pulse-slow shadow-neon opacity-0 animate-fade-in-up">
            <Star size={14} className="fill-accent text-accent" /> PREMIUM CIVIL & INTERIORS MUMBAI
          </div>
          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-6 tracking-tight leading-none text-white drop-shadow-2xl opacity-0 animate-fade-in-up-delay">
            Building Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 drop-shadow-sm filter">Dream Space</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-100 font-light max-w-2xl mx-auto opacity-0 animate-fade-in-up-delay-2 drop-shadow-md">
            RC PATEL delivers precision engineering and artistic interiors. From robust foundations to luxury POP false ceilings in Mumbai.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Link to="/services" className="bg-accent hover:bg-amber-500 text-white px-10 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 hover:shadow-neon shadow-lg flex items-center justify-center gap-2 ring-2 ring-accent/50 ring-offset-2 ring-offset-slate-900">
              Explore Services <ArrowRight size={20} />
            </Link>
            <Link to="/contact" className="bg-white/10 hover:bg-white text-white hover:text-slate-900 backdrop-blur-md px-10 py-4 rounded-full text-lg font-bold transition-all hover:shadow-neon-strong border border-white/20">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white dark:bg-dark transition-colors duration-300 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 opacity-0 animate-fade-in-up">
            <span className="text-accent font-bold tracking-wider uppercase text-sm">What We Do Best</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mt-3">
              Mastering Every <span className="text-accent underline decoration-accent/30 underline-offset-8">Detail</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: HardHat, 
                title: "Civil Construction", 
                desc: "Complete structural solutions including brickwork, plastering, and waterproofing.",
                img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop" 
              },
              { 
                icon: Layout, 
                title: "POP False Ceilings", 
                desc: "Modern cove lighting, gypsum designs, and artistic ceiling works.",
                img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" 
              },
              { 
                icon: PenTool, 
                title: "Interior Design", 
                desc: "Turnkey interior solutions, modular kitchens, and furniture design.",
                img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=800&auto=format&fit=crop" 
              }
            ].map((service, index) => (
              <div key={index} className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-neon-strong transition-all duration-500 border border-gray-100 dark:border-slate-800 opacity-0 animate-fade-in-up bg-white dark:bg-slate-800" style={{ animationDelay: `${0.2 * (index + 1)}s` }}>
                
                {/* Image Area */}
                <div className="h-72 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80 z-10"></div>
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute bottom-4 left-6 z-20">
                     <div className="bg-accent/90 backdrop-blur-sm w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-lg mb-3 group-hover:scale-110 transition-transform duration-300">
                      <service.icon size={28} />
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 relative">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-accent transition-colors">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed line-clamp-3">{service.desc}</p>
                  <Link to="/services" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white group-hover:text-accent transition-colors">
                    View Details <div className="w-8 h-px bg-current group-hover:w-12 transition-all"></div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-900 dark:bg-black text-white relative overflow-hidden">
        {/* Neon decorative blob */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16 relative z-10">
          <div className="md:w-1/2 opacity-0 animate-fade-in-up">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-1 w-10 bg-accent shadow-neon"></span>
              <span className="text-accent font-bold tracking-wider uppercase">Why RC Patel</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
              Excellence in Every <br/><span className="text-accent">Brick & Detail</span>
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
              With years of experience in the Indian construction industry, we deliver quality that stands the test of time. Our team ensures your home is built with the best materials and finest finishing.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {text: 'Experienced Team', icon: ShieldCheck}, 
                {text: 'Premium Materials', icon: HardHat}, 
                {text: 'On-Time Delivery', icon: Clock}, 
                {text: 'Modern Designs', icon: Layout}
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors border border-white/5 hover:border-accent/30 group cursor-default">
                  <div className="text-accent group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(217,119,6,0.5)]">
                    <item.icon size={24} />
                  </div>
                  <span className="text-lg font-medium group-hover:text-white transition-colors">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 relative group opacity-0 animate-slide-in-right">
            <div className="absolute -inset-4 border-2 border-accent rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500 opacity-60 shadow-neon"></div>
            <div className="absolute -inset-4 border-2 border-slate-700 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500 bg-slate-800"></div>
            <img 
              src="https://images.unsplash.com/photo-1535732820275-9ffd998cac22?q=80&w=800&auto=format&fit=crop" 
              alt="Construction Worker" 
              className="rounded-2xl shadow-2xl relative z-10 w-full hover:scale-[1.02] transition-transform duration-500 border border-slate-700"
            />
          </div>
        </div>
      </section>
    </div>
  );
};