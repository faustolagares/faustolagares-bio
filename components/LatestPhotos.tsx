import React, { useState } from 'react';
import { Instagram, ChevronLeft, ChevronRight } from 'lucide-react';

const photos = [
  "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&h=500&fit=crop",
  "https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=800&h=500&fit=crop",
  "https://images.unsplash.com/photo-1519681393798-38e36fefce15?w=800&h=500&fit=crop"
];

const LatestPhotos: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % photos.length);
  const prev = () => setCurrent((prev) => (prev - 1 + photos.length) % photos.length);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between px-1">
        <h2 className="text-sm text-neutral-500 font-normal">Latest photos</h2>
        <div className="flex items-center gap-1.5 text-xs text-neutral-600">
          <Instagram className="w-3 h-3 text-pink-500/80" />
          <span>@faustolagares</span>
        </div>
      </div>

      <div className="relative group rounded-2xl overflow-hidden border border-border bg-card">
        <div className="aspect-[4/3] w-full relative">
          <img 
            src={photos[current]} 
            alt={`Photo ${current + 1}`} 
            className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
          />
          
          {/* Controls */}
          <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button onClick={(e) => { e.stopPropagation(); prev(); }} className="p-1.5 rounded-full bg-black/40 text-white backdrop-blur-md hover:bg-black/60 transition-colors border border-white/10">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); next(); }} className="p-1.5 rounded-full bg-black/40 text-white backdrop-blur-md hover:bg-black/60 transition-colors border border-white/10">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {photos.map((_, idx) => (
              <div 
                key={idx} 
                className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${idx === current ? 'bg-white' : 'bg-white/20'}`} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestPhotos;
