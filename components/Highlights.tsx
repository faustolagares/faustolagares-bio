import React from 'react';
import { Highlight } from '../types';

const highlights: Highlight[] = [
  { id: '1', label: 'New Zealand', image: 'https://images.unsplash.com/photo-1469521669194-babb45f99ec7?w=300&h=500&fit=crop' },
  { id: '2', label: 'Italy', image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=300&h=500&fit=crop' },
  { id: '3', label: 'Iceland', image: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=300&h=500&fit=crop' },
  { id: '4', label: 'Portugal', image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd81?w=300&h=500&fit=crop' },
  { id: '5', label: 'Norway', image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=300&h=500&fit=crop' },
];

const Highlights: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto no-scrollbar py-4">
      <div className="flex justify-start gap-3 px-4 min-w-max">
        {highlights.map((item) => (
          <div key={item.id} className="flex flex-col items-center gap-3 cursor-pointer group">
            <div className="w-24 aspect-[9/16] rounded-2xl overflow-hidden border border-white/5 relative bg-neutral-900 shadow-sm">
              <img 
                src={item.image} 
                alt={item.label} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100" 
              />
              {/* Inner ring for subtle definition */}
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none"></div>
            </div>
            <span className="text-xs font-medium text-neutral-500 group-hover:text-primary transition-colors">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
