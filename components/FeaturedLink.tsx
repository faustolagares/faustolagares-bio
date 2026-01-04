import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeaturedLinkProps {
  title: string;
  subtitle: string;
  badge: string;
  image?: string;
  Icon?: LucideIcon;
  iconBg?: string;
}

const FeaturedLink: React.FC<FeaturedLinkProps> = ({ title, subtitle, badge, image, Icon, iconBg }) => {
  return (
    <div className="group w-full bg-card hover:bg-cardHover border border-border rounded-2xl p-4 flex items-center gap-4 cursor-pointer transition-all duration-300">
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center overflow-hidden shrink-0 ${iconBg || 'bg-neutral-800'}`}>
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all" />
        ) : Icon ? (
          <Icon className="w-7 h-7 text-primary/90" />
        ) : null}
      </div>
      
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-medium text-primary truncate group-hover:text-white transition-colors">{title}</h3>
        <p className="text-xs text-muted line-clamp-2 mt-0.5 font-light">{subtitle}</p>
        <span className="inline-block mt-2 text-[10px] font-medium text-neutral-400 bg-neutral-900/50 px-2 py-1 rounded border border-neutral-800 uppercase tracking-widest">
          {badge}
        </span>
      </div>
    </div>
  );
};

export default FeaturedLink;
