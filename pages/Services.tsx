
import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Star } from 'lucide-react';

const ServiceSection: React.FC<{
  title: string;
  desc: string;
  features: string[];
  image: string;
  reversed?: boolean;
  delay?: string;
}> = ({ title, desc, features, image, reversed, delay }) => (
  <div 
    className={`flex flex-col lg:flex-row items-center gap-16 py-20 animate-fade-in-up ${reversed ? 'lg:flex-row-reverse' : ''}`}
    style={{ animationDelay: delay }}
  >
    <div className="lg:w-1/2 w-full group">
      <div className="relative overflow-hidden rounded-3xl shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]">
        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-[500px] object-cover" 
        />
        {/* Floating Badge */}
        <div className={`absolute bottom-8 ${reversed ? 'right-8' : 'left-8'} z-20 bg-white/95 backdrop-blur px-6 py-4 rounded-xl shadow-xl border-l-4 border-accent`}>
           <div className="flex items-center gap-2 text-accent font-bold mb-1">
              <Star size={16} fill="currentColor" /> Premium Grade
           </div>
           <p className="text-slate-900 text-xs font-semibold">Verified Quality Materials</p>
        </div>
      </div>
    </div>

    <div className="lg:w-1/2 w-full">
      <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6 leading-tight">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-10 text-lg leading-relaxed border-l-2 border-gray-200 dark:border-slate-700 pl-6">
        {desc}
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
        {features.map((f, i) => (
          <div key={i} className="flex items-center gap-3 group/item">
            <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover/item:bg-accent group-hover/item:text-white transition-colors">
              <Check size={16} />
            </div>
            <span className="text-gray-700 dark:text-gray-200 font-medium">{f}</span>
          </div>
        ))}
      </div>
      
      <Link to="/contact" className="inline-flex items-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-accent dark:hover:bg-accent dark:hover:text-white transition-all shadow-lg hover:shadow-neon hover:-translate-y-1">
        Request Quote <ArrowRight size={18} />
      </Link>
    </div>
  </div>
);

export const Services: React.FC = () => {
  return (
    <div className="min-h-screen dark:bg-dark transition-colors duration-300">
      {/* Page Header */}
      <div className="relative bg-slate-900 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/50"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 animate-fade-in-up">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Comprehensive construction and design solutions tailored to your lifestyle.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-8 md:p-12 mb-20 border border-gray-100 dark:border-slate-700">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-slate-700">
              <div className="p-4">
                 <div className="text-4xl font-bold text-accent mb-2">150+</div>
                 <div className="text-gray-500 dark:text-gray-400 font-medium">Projects Completed</div>
              </div>
              <div className="p-4">
                 <div className="text-4xl font-bold text-accent mb-2">15</div>
                 <div className="text-gray-500 dark:text-gray-400 font-medium">Years Experience</div>
              </div>
              <div className="p-4">
                 <div className="text-4xl font-bold text-accent mb-2">100%</div>
                 <div className="text-gray-500 dark:text-gray-400 font-medium">Client Satisfaction</div>
              </div>
           </div>
        </div>

        <ServiceSection
          title="Civil Construction"
          desc="We specialize in robust residential and commercial building construction. Our civil works are known for structural integrity, precise RCC frame structures, and high-quality brickwork typical of modern Indian architecture."
          features={['Foundation & RCC', 'Brick & Plastering', 'Structural Repairs', 'Waterproofing', 'Flooring & Tiling', 'Plumbing & Electrical']}
          image="https://images.unsplash.com/photo-1590663645852-5a3d753c1fca?q=80&w=800&auto=format&fit=crop"
          delay="0.2s"
        />

        <div className="h-px bg-gray-200 dark:bg-slate-800 my-8"></div>

        <ServiceSection
          title="POP & False Ceiling"
          desc="Transform your space with our premium POP designs. Whether you want a minimalist look with cove lights or an ornate classical ceiling for your hall, our artisans deliver perfection with Gypsum and POP."
          features={['Gypsum False Ceilings', 'Grid Ceilings', 'Wall Punnings', 'Cornice Mouldings', 'LED Cove Lighting', '3D Ceiling Art']}
          image="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop"
          reversed
          delay="0.4s"
        />

        <div className="h-px bg-gray-200 dark:bg-slate-800 my-8"></div>

        <ServiceSection
          title="Custom Furniture & Decor"
          desc="We provide end-to-end furniture solutions. From modular kitchens with high-gloss finishes to luxury wardrobes, sofas, and beds designed to fit your space perfectly and maximize storage."
          features={['Modular Kitchens', 'Sliding Wardrobes', 'Luxury Sofas & Beds', 'TV Units & Consoles', 'Space Planning', 'Shoe Racks & Lofts']}
          image="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop"
          delay="0.6s"
        />
        
        {/* Bottom CTA */}
        <div className="my-20 p-12 bg-accent rounded-3xl text-center relative overflow-hidden text-white shadow-neon-strong">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
           <div className="relative z-10">
             <h3 className="text-3xl font-bold font-serif mb-4">Have a specific design in mind?</h3>
             <p className="mb-8 opacity-90 text-lg">Send us a photo or sketch, and we'll bring it to life.</p>
             <Link to="/contact" className="bg-white text-accent px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg">
               Contact Our Designers
             </Link>
           </div>
        </div>
      </div>
    </div>
  );
};
