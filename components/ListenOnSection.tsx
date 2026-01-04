import React from 'react';

interface Platform {
  name: string;
  icon: string;
  url: string;
}

const platforms: Platform[] = [
  { 
    name: 'Spotify', 
    icon: 'https://cdn.simpleicons.org/spotify/1DB954',
    url: '#' 
  },
  { 
    name: 'Google Podcasts', 
    icon: 'https://cdn.simpleicons.org/googlepodcasts/4285F4',
    url: '#' 
  },
  { 
    name: 'Apple Podcasts', 
    icon: 'https://cdn.simpleicons.org/applepodcasts/B150E2',
    url: '#' 
  },
  { 
    name: 'YouTube', 
    icon: 'https://cdn.simpleicons.org/youtube/FF0000',
    url: '#' 
  },
  { 
    name: 'Pocket Casts', 
    icon: 'https://cdn.simpleicons.org/pocketcasts/F43E37',
    url: '#' 
  },
  { 
    name: 'Overcast', 
    icon: 'https://cdn.simpleicons.org/overcast/FC7E0F',
    url: '#' 
  },
];

const ListenOnSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {platforms.map((platform) => (
        <a 
          key={platform.name}
          href={platform.url}
          className="flex items-center gap-4 p-4 bg-card hover:bg-cardHover border border-border/50 rounded-2xl transition-all duration-200 group"
        >
          {/* Icon Container */}
          <div className="w-10 h-10 rounded-lg bg-neutral-900/50 flex items-center justify-center border border-white/5 shrink-0">
            <img 
              src={platform.icon} 
              alt={platform.name} 
              className="w-5 h-5 group-hover:scale-110 transition-transform"
            />
          </div>
          
          {/* Text Content */}
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest leading-none mb-1">
              Listen on
            </span>
            <span className="text-sm font-medium text-primary leading-none group-hover:text-white transition-colors">
              {platform.name}
            </span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ListenOnSection;
