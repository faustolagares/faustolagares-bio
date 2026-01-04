import React from 'react';
import { Twitter, BadgeCheck } from 'lucide-react';

const LatestPost: React.FC = () => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between px-1">
        <h2 className="text-sm text-neutral-500 font-normal">Latest post</h2>
        <div className="flex items-center gap-1.5 text-xs text-neutral-600">
          <Twitter className="w-3 h-3" />
          <span>@faustolagares</span>
        </div>
      </div>

      <div className="bg-card border border-border rounded-2xl p-5 hover:border-neutral-700 transition-colors cursor-pointer group">
        <div className="flex items-start gap-3">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" 
            alt="Avatar" 
            className="w-10 h-10 rounded-full grayscale-[20%] group-hover:grayscale-0 transition-all"
          />
          <div className="flex-1">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-medium text-primary">Fausto Lagares</span>
              <BadgeCheck className="w-3.5 h-3.5 text-blue-400/80 fill-blue-400/10" />
            </div>
            <div className="flex items-center gap-1 text-xs text-neutral-500 font-normal">
              <span>@faustolagares</span>
              <span>·</span>
              <span className="text-blue-400/80 hover:text-blue-400 transition-colors">Follow</span>
            </div>
            
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed font-light">
              Prompting in AI = The new writing ✍️
            </p>
            
            <div className="mt-3 text-[11px] text-neutral-600 font-medium">
              10:39 PM · Jul 23, 2023
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestPost;
