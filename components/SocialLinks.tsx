import React from 'react';
import { Twitter, Instagram, Github, Linkedin } from 'lucide-react';

const SocialLinks: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-3 px-4 py-4">
      <a href="#" className="flex items-center gap-2 px-4 py-2 bg-secondary/30 rounded-full border border-border hover:bg-neutral-800 hover:border-neutral-700 transition-all group">
        <Twitter className="w-4 h-4 text-primary/80" />
        <span className="text-xs font-normal text-neutral-400 group-hover:text-primary transition-colors">@faustolagares</span>
      </a>
      
      <a href="#" className="flex items-center gap-2 px-4 py-2 bg-secondary/30 rounded-full border border-border hover:bg-neutral-800 hover:border-neutral-700 transition-all group">
        <Instagram className="w-4 h-4 text-pink-500/80" />
        <span className="text-xs font-normal text-neutral-400 group-hover:text-primary transition-colors">@faustolagares</span>
      </a>

      <a href="#" className="flex items-center gap-2 px-4 py-2 bg-secondary/30 rounded-full border border-border hover:bg-neutral-800 hover:border-neutral-700 transition-all group">
        <Github className="w-4 h-4 text-primary/80" />
        <span className="text-xs font-normal text-neutral-400 group-hover:text-primary transition-colors">/faustolagares</span>
      </a>

      <a href="#" className="flex items-center gap-2 px-4 py-2 bg-secondary/30 rounded-full border border-border hover:bg-neutral-800 hover:border-neutral-700 transition-all group">
        <Linkedin className="w-4 h-4 text-blue-500/80" />
        <span className="text-xs font-normal text-neutral-400 group-hover:text-primary transition-colors">/faustolagares</span>
      </a>

      <a href="#" className="flex items-center gap-2 px-4 py-2 bg-secondary/30 rounded-full border border-border hover:bg-neutral-800 hover:border-neutral-700 transition-all group">
        <img src="https://simpleicons.org/icons/spotify.svg" className="w-4 h-4 invert opacity-60" alt="spotify" />
        <span className="text-xs font-normal text-neutral-400 group-hover:text-primary transition-colors">faustolagares.eth</span>
      </a>
    </div>
  );
};

export default SocialLinks;
