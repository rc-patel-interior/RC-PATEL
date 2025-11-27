import React, { useEffect, useState } from 'react';
import { dbService } from '../services/dbService';
import { PortfolioItem } from '../types';
import { Loader2, ZoomIn } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [photos, setPhotos] = useState<PortfolioItem[]>([]);
  const [filter, setFilter] = useState<'All' | 'Civil' | 'POP' | 'Interior'>('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPhotos = async () => {
      const data = await dbService.getPortfolio();
      // Add some dummy data if empty for demo purposes
      if (data.length === 0) {
        const dummy: PortfolioItem[] = [
          { id: '1', title: 'Modern TV Unit & Hall', category: 'Interior', imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80', dateAdded: '' },
          { id: '2', title: 'Luxury Villa Exterior', category: 'Civil', imageUrl: 'https://images.unsplash.com/photo-1600596542815-e495d9131435?w=800&q=80', dateAdded: '' },
          { id: '3', title: 'POP Ceiling with Cove Light', category: 'POP', imageUrl: 'https://images.unsplash.com/photo-1585128719715-46776b56a0d1?w=800&q=80', dateAdded: '' },
          { id: '4', title: 'L-Shaped Modular Kitchen', category: 'Interior', imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80', dateAdded: '' },
          { id: '5', title: 'Commercial Building Structure', category: 'Civil', imageUrl: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c7c?w=800&q=80', dateAdded: '' },
          { id: '6', title: 'Bedroom False Ceiling', category: 'POP', imageUrl: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?w=800&q=80', dateAdded: '' },
        ];
        setPhotos(dummy);
      } else {
        setPhotos(data);
      }
      setLoading(false);
    };
    loadPhotos();
  }, []);

  const filteredPhotos = filter === 'All' ? photos : photos.filter(p => p.category === filter);

  return (
    <div className="pt-10 pb-20 dark:bg-dark min-h-screen">
      <div className="bg-slate-900 dark:bg-black py-16 text-center text-white mb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5"></div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold relative z-10">Our Project Gallery</h1>
        <p className="mt-4 text-gray-400 relative z-10">A showcase of our finest engineering and design work.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['All', 'Civil', 'POP', 'Interior'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-300 ${
                filter === cat 
                  ? 'bg-accent text-white shadow-neon transform scale-105' 
                  : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-200 dark:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center h-40 items-center">
            <Loader2 className="animate-spin text-accent" size={40} />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPhotos.map((photo, idx) => (
              <div key={photo.id || idx} className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer bg-slate-900">
                <div className="aspect-[4/3] bg-gray-800 overflow-hidden">
                  <img 
                    src={photo.imageUrl} 
                    alt={photo.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                  />
                </div>
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 border-2 border-transparent group-hover:border-accent">
                  <span className="text-accent text-xs font-bold uppercase tracking-wider mb-2">{photo.category}</span>
                  <div className="flex justify-between items-end">
                    <h3 className="text-white text-xl font-bold font-serif">{photo.title}</h3>
                    <div className="bg-accent p-2 rounded-full text-white shadow-neon">
                      <ZoomIn size={20} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {filteredPhotos.length === 0 && !loading && (
          <div className="text-center text-gray-500 py-10 dark:text-gray-400">
            No photos found in this category.
          </div>
        )}
      </div>
    </div>
  );
};