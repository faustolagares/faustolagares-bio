import React, { useState } from 'react';
import { 
  Globe, 
  Phone, 
  Share, 
  Copy, 
  Bell, 
  BadgeCheck,
  Check
} from 'lucide-react';

const ProfileHeader: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('hey@faustolagares.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col items-center text-center pb-6">
      
      {/* Cover Image */}
      <div className="w-full h-48 sm:h-64 bg-neutral-800 relative">
        <img 
          src="/photos/faustolagares-cover.avif" 
          alt="Cover" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
      </div>

      {/* Avatar */}
      <div className="relative -mt-12 mb-3">
        <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-background bg-background relative z-10">
          <img 
            src="/photos/fausto-lagares.avif" 
            alt="Fausto Lagares" 
            className="w-full h-full object-cover transition-all duration-500"
          />
        </div>
      </div>

      <div className="px-4 space-y-4 w-full flex flex-col items-center">
        {/* Name and Verification */}
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-medium tracking-tight text-primary">Fausto Lagares</h1>
          <BadgeCheck className="w-5 h-5 text-yellow-500/80 fill-yellow-500/10" />
        </div>

        {/* Meta Info */}
        <div className="flex items-center gap-2 text-xs font-normal text-muted uppercase tracking-wide">
          <span>Est. 1999</span>
          <span>•</span>
          <span>Auckland, NZ</span>
          <span>•</span>
          <span>he/him</span>
        </div>

        {/* Bio */}
        <p className="text-sm text-neutral-400 max-w-sm leading-relaxed font-light">
          Fausto Lagares is an avid skateboarder, software designer and content creator based in New Zealand.
        </p>

        {/* Contact Links */}
        <div className="flex items-center gap-4 text-xs text-primary/80">
          <a href="#" className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <Globe className="w-3.5 h-3.5" />
            faustolagares.com
          </a>
          <span className="text-neutral-800">•</span>
          <a href="#" className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <Phone className="w-3.5 h-3.5" />
            555-123-4567
          </a>
        </div>

        {/* Action Bar */}
        <div className="flex items-center gap-2 w-full max-w-md mt-2">
          <button className="p-3 bg-secondary rounded-xl hover:bg-neutral-800 transition-colors border border-border">
            <Share className="w-5 h-5 text-primary/80" />
          </button>
          
          <button 
            onClick={handleCopy}
            className="flex-1 py-3 bg-secondary rounded-xl hover:bg-neutral-800 transition-colors border border-border flex items-center justify-center gap-2 text-sm text-primary/80 group"
          >
            {copied ? <Check className="w-4 h-4 text-green-500/80" /> : <Copy className="w-4 h-4 text-neutral-500 group-hover:text-primary/80 transition-colors" />}
            {copied ? 'Copied' : 'hey@faustolagares.com'}
          </button>

          <button className="p-3 bg-secondary rounded-xl hover:bg-neutral-800 transition-colors border border-border">
            <Bell className="w-5 h-5 text-primary/80" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
