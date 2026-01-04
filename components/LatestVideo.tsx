import React from 'react';
import { Youtube, Play } from 'lucide-react';

const LatestVideo: React.FC = () => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between px-1">
        <h2 className="text-sm text-neutral-500 font-normal">Latest video</h2>
        <div className="flex items-center gap-1.5 text-xs text-neutral-600">
          <Youtube className="w-3 h-3 text-red-500/80" />
          <span>@faustolagares</span>
        </div>
      </div>

      <div className="relative group cursor-pointer overflow-hidden rounded-2xl border border-border bg-card">
        <div className="aspect-video w-full relative">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=450&fit=crop" 
            alt="Video thumbnail" 
            className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity grayscale-[20%] group-hover:grayscale-0"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300">
              <Play className="w-6 h-6 text-white ml-1 fill-white/90" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestVideo;
