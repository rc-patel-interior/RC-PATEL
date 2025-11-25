import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, PenTool, Layout, HardHat, ShieldCheck, Clock } from 'lucide-react';
import { dbService } from '../services/dbService';

export const Home: React.FC = () => {
  useEffect(() => {
    // Log visitor when home page loads
    dbService.logVisitor();
  }, []);

  return (
    <div className="flex flex-col min-h-screen dark:bg-dark">
      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=2000&auto=format&fit=crop" 
            alt="Construction Background" 
            className="w-full h-full object-cover opacity-80"
          />
          {/* Dark Overlay with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-900"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-10">
          <div className="inline-block px-4 py-1 border border-accent rounded-full text-accent text-sm font-bold tracking-widest mb-6 animate-pulse-slow shadow-neon">
            PREMIUM CIVIL & INTERIORS
          </div>
          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-6 tracking-tight leading-tight text-white drop-shadow-lg">
            Building Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600 drop-shadow-sm">Vision</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-200 font-light max-w-2xl mx-auto">
            RC PATEL delivers precision engineering and artistic interiors. From foundation to false ceilings, we craft excellence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/services" className="bg-accent hover:bg-amber-500 text-white px-10 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 hover:shadow-neon shadow-lg flex items-center justify-center gap-2">
              Explore Services <ArrowRight size={20} />
            </Link>
            <Link to="/contact" className="border-2 border-white/30 backdrop-blur-sm hover:bg-white hover:text-slate-900 text-white px-10 py-4 rounded-full text-lg font-bold transition-all hover:shadow-neon-strong">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white dark:bg-dark transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-accent font-bold tracking-wider uppercase text-sm">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mt-3">
              Mastering Every <span className="text-accent underline decoration-accent/30 underline-offset-8">Detail</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                icon: HardHat, 
                title: "Civil Construction", 
                desc: "Complete structural solutions from foundation to finishing.",
                img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=800&auto=format&fit=crop"
              },
              { 
                icon: Layout, 
                title: "POP False Ceilings", 
                desc: "Modern, artistic, and durable POP designs for home & office.",
                img: "https://images.unsplash.com/photo-1594499015949-c136363c434c?q=80&w=600&auto=format&fit=crop"
              },
              { 
                icon: PenTool, 
                title: "Interior Design", 
                desc: "Turnkey interior solutions, painting, and modular setups.",
                img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop"
              }
            ].map((service, index) => (
              <div key={index} className="group bg-slate-50 dark:bg-slate-800/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-neon transition-all duration-300 border border-transparent hover:border-accent/50">
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                </div>
                <div className="p-8 relative">
                  <div className="absolute -top-10 left-8">
                     <div className="bg-accent w-16 h-16 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <service.icon size={32} />
                    </div>
                  </div>
                 
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 mt-6">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{service.desc}</p>
                  <Link to="/services" className="text-accent font-bold uppercase text-sm tracking-wide flex items-center gap-2 hover:gap-4 transition-all">
                    Learn More <ArrowRight size={16} />
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16 relative z-10">
          <div className="md:w-1/2">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-1 w-10 bg-accent"></span>
              <span className="text-accent font-bold tracking-wider uppercase">Why RC Patel</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
              Excellence in Every <br/><span className="text-accent">Brick & Detail</span>
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
              With years of experience in the industry, we deliver quality that stands the test of time. Our team of skilled engineers and designers ensures your project is completed on time and within budget.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {text: 'Experienced Team', icon: ShieldCheck}, 
                {text: 'Premium Materials', icon: HardHat}, 
                {text: 'On-Time Delivery', icon: Clock}, 
                {text: 'Modern Designs', icon: Layout}
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors border border-transparent hover:border-accent/30">
                  <div className="text-accent">
                    <item.icon size={24} />
                  </div>
                  <span className="text-lg font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 relative group">
            <div className="absolute -inset-4 border-2 border-accent rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500 opacity-60"></div>
            <div className="absolute -inset-4 border-2 border-slate-700 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop" 
              alt="Construction Worker" 
              className="rounded-2xl shadow-2xl relative z-10 w-full hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>
      </section>
    </div>
  );
};