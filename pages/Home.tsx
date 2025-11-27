import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, HardHat, Layout, Sofa, ShieldCheck, Clock, Star, Zap, ChevronRight } from 'lucide-react';
import { dbService } from '../services/dbService';

export const Home: React.FC = () => {
  useEffect(() => {
    // Log visitor when home page loads
    dbService.logVisitor();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Parallax */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" 
            alt="Luxury Interior Design Mumbai" 
            className="w-full h-full object-cover animate-scale-in"
            style={{ animationDuration: '20s' }}
          />
          {/* Enhanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-slate-900/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/50"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full pt-20">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-accent/30 bg-accent/10 backdrop-blur-md rounded-full text-accent-glow text-xs md:text-sm font-bold tracking-widest uppercase mb-8 shadow-neon">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              #1 Civil & Interior Specialists in Mumbai
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 text-white leading-tight">
              Crafting <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 drop-shadow-sm">
                Luxury Spaces
              </span>
            </h1>
            
            <p className="text-lg md:text-2xl mb-10 text-gray-300 font-light max-w-2xl leading-relaxed border-l-4 border-accent pl-6 bg-slate-900/30 backdrop-blur-sm p-4 rounded-r-lg">
              Transforming visions into reality with precision civil engineering and bespoke furniture design. The trusted choice for renovations in Mankhurd & beyond.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <Link to="/services" className="group bg-accent hover:bg-amber-500 text-white px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-neon-strong flex items-center justify-center gap-3">
                Explore Services 
                <span className="bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={16} />
                </span>
              </Link>
              <Link to="/contact" className="group bg-white/5 hover:bg-white/10 text-white backdrop-blur-md px-8 py-4 rounded-full text-lg font-bold transition-all border border-white/20 hover:border-white/50 flex items-center justify-center shadow-lg">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
           <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
             <div className="w-1 h-2 bg-white/80 rounded-full"></div>
           </div>
        </div>
      </section>

      {/* Infinite Marquee Section */}
      <section className="bg-accent py-4 overflow-hidden relative shadow-lg z-20 transform -rotate-1 skew-y-1 scale-105 origin-left border-y-4 border-slate-900">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(6)].map((_, i) => (
             <React.Fragment key={i}>
                <span className="text-xl md:text-2xl font-black text-slate-900 uppercase italic tracking-tighter mx-8 flex items-center gap-4">
                  CIVIL CONSTRUCTION <span className="text-white">★</span> 
                  FALSE CEILINGS <span className="text-white">★</span> 
                  MODULAR KITCHENS <span className="text-white">★</span> 
                  LUXURY FURNITURE <span className="text-white">★</span> 
                </span>
             </React.Fragment>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 bg-gray-50 dark:bg-dark transition-colors relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
           <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-accent/10 rounded-full blur-[100px]"></div>
           <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm block mb-3">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white">
              Mastering Every <span className="text-accent relative inline-block">
                Detail
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                icon: HardHat, 
                title: "Civil Construction", 
                desc: "Foundation to finish. We handle structural repairs, waterproofing, and complete building construction with certified materials.",
                img: "https://images.unsplash.com/photo-1590663645852-5a3d753c1fca?q=80&w=800&auto=format&fit=crop" 
              },
              { 
                icon: Layout, 
                title: "POP False Ceilings", 
                desc: "Artistic gypsum and POP designs. From hidden cove lighting to grand classical cornices that define your luxury hall.",
                img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop" 
              },
              { 
                icon: Sofa, 
                title: "Furniture & Decor", 
                desc: "Bespoke carpentry. Modular kitchens with German fittings, sliding wardrobes, and custom TV units.",
                img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop" 
              }
            ].map((service, index) => (
              <div key={index} className="glass-card group rounded-2xl overflow-hidden hover:-translate-y-3 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors z-10"></div>
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute top-4 right-4 z-20 bg-white/90 dark:bg-slate-900/90 backdrop-blur p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                     <service.icon size={24} className="text-accent" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-sm">{service.desc}</p>
                  <Link to="/services" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-accent hover:text-amber-500 transition-colors group-hover:gap-3">
                    Learn More <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Dark Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16 relative z-10">
          <div className="md:w-1/2">
            <div className="inline-block px-3 py-1 border border-accent rounded-full text-accent text-xs font-bold uppercase tracking-widest mb-6">
               The RC Patel Promise
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
              Quality That <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Stands Tall.</span>
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
              We don't just build structures; we build trust. With a dedicated team of skilled laborers and designers, we ensure your project is completed on time and within budget.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {[
                 { icon: ShieldCheck, title: "100% Quality Assured", desc: "Premium raw materials used." },
                 { icon: Clock, title: "On-Time Delivery", desc: "Strict timeline adherence." },
                 { icon: HardHat, title: "Expert Workforce", desc: "Skilled & verified labor." },
                 { icon: Layout, title: "Modern Design", desc: "Latest trends & finishes." },
               ].map((feature, i) => (
                 <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                       <feature.icon size={24} />
                    </div>
                    <div>
                       <h4 className="font-bold text-white">{feature.title}</h4>
                       <p className="text-sm text-gray-500">{feature.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/5 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop" 
                alt="Construction Site" 
                className="w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                 <div>
                    <div className="text-3xl font-bold text-white">15+</div>
                    <div className="text-accent uppercase tracking-wider text-sm font-bold">Years of Excellence</div>
                 </div>
              </div>
            </div>
            {/* Background Accent */}
            <div className="absolute -inset-4 bg-accent/20 rounded-2xl -z-10 blur-xl transform -rotate-2"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-accent to-amber-600 text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] opacity-10"></div>
         <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <div className="inline-block p-4 rounded-full bg-white/20 backdrop-blur-md mb-8 shadow-lg">
               <Zap size={32} className="text-white fill-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready to Build Your Dream?</h2>
            <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
               From the first brick to the final coat of paint, let RC Patel guide you through a seamless renovation experience.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <Link to="/contact" className="bg-white text-accent hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2">
                 Book Consultation <ArrowRight size={20} />
               </Link>
               <Link to="/gallery" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all">
                 View Portfolio
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
};