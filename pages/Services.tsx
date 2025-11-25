import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const ServiceSection: React.FC<{
  title: string;
  desc: string;
  features: string[];
  image: string;
  reversed?: boolean;
}> = ({ title, desc, features, image, reversed }) => (
  <div className={`flex flex-col md:flex-row items-center gap-12 py-16 ${reversed ? 'md:flex-row-reverse' : ''}`}>
    <div className="md:w-1/2">
      <div className="relative group">
        <div className="absolute -inset-2 bg-accent/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <img src={image} alt={title} className="relative z-10 rounded-2xl shadow-xl w-full h-[400px] object-cover hover:shadow-neon transition-all duration-300" />
      </div>
    </div>
    <div className="md:w-1/2">
      <h3 className="text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">{desc}</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2">
            <div className="bg-accent/10 p-1 rounded-full">
              <Check className="text-accent" size={16} />
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium">{f}</span>
          </li>
        ))}
      </ul>
      <Link to="/contact" className="inline-block bg-slate-900 dark:bg-white dark:text-slate-900 text-white px-6 py-3 rounded-lg hover:bg-accent dark:hover:bg-accent hover:text-white transition-colors font-semibold shadow-lg">
        Request Quote
      </Link>
    </div>
  </div>
);

export const Services: React.FC = () => {
  return (
    <div className="pt-10 pb-20 dark:bg-dark">
      <div className="bg-slate-900 dark:bg-black py-16 text-center text-white mb-12 border-b border-slate-800">
        <h1 className="text-4xl md:text-5xl font-serif font-bold">Our Services</h1>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto px-4">From robust civil structures to delicate interior finishes, we handle it all.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServiceSection
          title="Civil Construction"
          desc="We specialize in residential and commercial building construction. Our civil works are known for structural integrity, high-quality material usage, and adherence to safety standards."
          features={['Foundation Work', 'Brick & Plastering', 'Structural Repairs', 'Waterproofing', 'Flooring & Tiling']}
          image="https://images.unsplash.com/photo-1590074218683-9b9a6741b082?w=800&q=80"
        />

        <ServiceSection
          title="POP & False Ceiling"
          desc="Transform your space with our premium POP designs. Whether you want a minimalist look or an ornate classical ceiling, our artisans deliver perfection."
          features={['Gypsum Ceilings', 'Grid Ceilings', 'Wall Punnings', 'Cornice Designs', 'Light Coves']}
          image="https://images.unsplash.com/photo-1594499015949-c136363c434c?w=800&q=80"
          reversed
        />

        <ServiceSection
          title="Turnkey Interior Design"
          desc="We provide end-to-end interior solutions. From planning the layout to the final coat of paint, we manage everything so you can walk into a ready-to-live space."
          features={['Modular Kitchens', 'Wardrobes & Furniture', 'Electrical & Plumbing', 'Painting & Textures', 'Space Planning']}
          image="https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?w=800&q=80"
        />
      </div>
    </div>
  );
};