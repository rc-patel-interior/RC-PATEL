import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const ServiceSection: React.FC<{
  title: string;
  desc: string;
  features: string[];
  image: string;
  reversed?: boolean;
  delay?: string;
}> = ({ title, desc, features, image, reversed, delay }) => (
  <div 
    className={`flex flex-col md:flex-row items-center gap-12 py-16 opacity-0 animate-fade-in-up ${reversed ? 'md:flex-row-reverse' : ''}`}
    style={{ animationDelay: delay }}
  >
    <div className="md:w-1/2 w-full">
      <div className="relative group overflow-hidden rounded-2xl">
        <div className="absolute -inset-2 bg-accent/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <img 
          src={image} 
          alt={title} 
          className="relative z-10 w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700 shadow-xl" 
        />
        {/* Shine effect */}
        <div className="absolute inset-0 z-20 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </div>
    </div>
    <div className="md:w-1/2 w-full">
      <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-6">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">{desc}</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-3">
            <div className="bg-accent/10 p-1.5 rounded-full flex-shrink-0">
              <Check className="text-accent" size={16} />
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium">{f}</span>
          </li>
        ))}
      </ul>
      <Link to="/contact" className="inline-block bg-slate-900 dark:bg-white dark:text-slate-900 text-white px-8 py-3 rounded-lg hover:bg-accent dark:hover:bg-accent hover:text-white transition-colors font-semibold shadow-lg hover:shadow-neon">
        Request Quote
      </Link>
    </div>
  </div>
);

export const Services: React.FC = () => {
  return (
    <div className="pt-10 pb-20 dark:bg-dark min-h-screen">
      <div className="bg-slate-900 dark:bg-black py-20 text-center text-white mb-12 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <h1 className="text-4xl md:text-6xl font-serif font-bold animate-fade-in-up">Our Services</h1>
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto px-4 text-lg animate-fade-in-up-delay">From robust civil structures to delicate interior finishes, we handle it all.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServiceSection
          title="Civil Construction"
          desc="We specialize in residential and commercial building construction. Our civil works are known for structural integrity, RCC frame structure, and high-quality brickwork typical of modern Indian architecture."
          features={['Foundation Work', 'Brick & Plastering', 'Structural Repairs', 'Waterproofing', 'Flooring & Tiling']}
          image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop"
          delay="0.2s"
        />

        <ServiceSection
          title="POP & False Ceiling"
          desc="Transform your space with our premium POP designs. Whether you want a minimalist look with cove lights or an ornate classical ceiling for your hall, our artisans deliver perfection."
          features={['Gypsum Ceilings', 'Grid Ceilings', 'Wall Punnings', 'Cornice Designs', 'Light Coves']}
          image="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=800&auto=format&fit=crop"
          reversed
          delay="0.4s"
        />

        <ServiceSection
          title="Turnkey Interior Design"
          desc="We provide end-to-end interior solutions. From modular kitchens with high-gloss finishes to wardrobe design and final painting, we manage everything."
          features={['Modular Kitchens', 'Wardrobes & Furniture', 'Electrical & Plumbing', 'Painting & Textures', 'Space Planning']}
          image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
          delay="0.6s"
        />
      </div>
    </div>
  );
};