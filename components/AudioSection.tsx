import React from 'react';
import { Play, PlusCircle, MoreHorizontal, AudioLines } from 'lucide-react';

interface Episode {
  id: string;
  title: string;
  date: string;
  show: string;
  image: string;
}

const episodes: Episode[] = [
  {
    id: '1',
    title: 'Episode 6 | Barra Njie',
    date: 'Mar 15',
    show: 'Between The Lines',
    image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=200&h=200&fit=crop'
  },
  {
    id: '2',
    title: 'Episode 1 | Melwin Pantzar',
    date: 'Jan 4',
    show: 'Between The Lines',
    image: 'https://images.unsplash.com/photo-1619983081563-430f63602796?w=200&h=200&fit=crop'
  },
  {
    id: '3',
    title: 'Episode 8 | LEGENDSEDITION',
    date: 'Apr 11',
    show: 'Between The Lines',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=200&h=200&fit=crop'
  }
];

const AudioSection: React.FC = () => {
  return (
    <div className="bg-card border border-border rounded-2xl p-5 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-medium text-primary tracking-tight">Most popular episodes</h2>
        <AudioLines className="w-5 h-5 text-green-500" />
      </div>

      {/* List */}
      <div className="space-y-1">
        {episodes.map((ep) => (
          <div key={ep.id} className="group relative flex items-center gap-4 p-2 -mx-2 rounded-xl hover:bg-white/5 transition-colors cursor-pointer">
            
            {/* Thumbnail */}
            <div className="w-16 h-16 shrink-0 rounded-lg overflow-hidden relative shadow-md">
              <img src={ep.image} alt={ep.title} className="w-full h-full object-cover" />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0 flex flex-col justify-center gap-1.5">
              <div className="pr-6">
                <h3 className="text-sm font-medium text-white truncate leading-tight">{ep.title}</h3>
                <p className="text-xs text-neutral-400 font-light truncate">
                  {ep.date} • {ep.show}
                </p>
              </div>
              
              <div className="inline-flex">
                <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-md bg-white/10 hover:bg-white/20 transition-colors text-[10px] font-medium text-white tracking-wide">
                  Preview
                </span>
              </div>
            </div>

            {/* Spotify Icon (Top Right absolute) */}
            <div className="absolute top-3 right-2">
               <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white/70">
                 <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.299z" />
               </svg>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3">
               <button className="hidden sm:block text-neutral-400 hover:text-white transition-colors">
                 <PlusCircle className="w-5 h-5" strokeWidth={1.5} />
               </button>
               <button className="hidden sm:block text-neutral-400 hover:text-white transition-colors">
                 <MoreHorizontal className="w-5 h-5" />
               </button>
               <button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform">
                 <Play className="w-4 h-4 fill-black ml-0.5" />
               </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default AudioSection;
