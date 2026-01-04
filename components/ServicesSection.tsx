import React from 'react';
import { RefreshCcw, Monitor, Check } from 'lucide-react';

const ServicesSection: React.FC = () => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between px-1">
        <h2 className="text-sm text-neutral-500 font-normal">Services</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        
        {/* Card 1 */}
        <div className="bg-card border border-border rounded-2xl p-5 flex flex-col h-full hover:border-neutral-700 transition-colors group">
          <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center mb-4 border border-purple-500/20">
            <RefreshCcw className="w-4 h-4 text-purple-400" />
          </div>
          <h3 className="text-sm font-medium text-primary">Design co-pilot</h3>
          <p className="text-[10px] uppercase font-medium text-neutral-500 mt-4 mb-1 tracking-widest">Fixed Rate Of</p>
          <div className="flex items-baseline gap-1 mb-4">
            <span className="text-xl font-medium text-primary tracking-tight">$5,999</span>
            <span className="text-xs text-neutral-500 font-light">/MONTH</span>
          </div>
          
          <ul className="space-y-2 mb-6 flex-1">
            {['Unlimited revisions', 'High quality design', 'No calls or meetings', 'Simple fixed monthly fee', 'Pause or cancel anytime'].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-neutral-400 font-light">
                <Check className="w-3 h-3 text-neutral-600 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          
          <button className="w-full py-2 bg-secondary hover:bg-neutral-800 border border-border rounded-lg text-xs font-normal text-primary/90 transition-colors">
            Subscribe
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-card border border-border rounded-2xl p-5 flex flex-col h-full hover:border-neutral-700 transition-colors group">
          <div className="w-8 h-8 rounded-full bg-teal-500/10 flex items-center justify-center mb-4 border border-teal-500/20">
            <Monitor className="w-4 h-4 text-teal-400" />
          </div>
          <h3 className="text-sm font-medium text-primary">Landing page</h3>
          <p className="text-[10px] uppercase font-medium text-neutral-500 mt-4 mb-1 tracking-widest">Starting At</p>
          <div className="flex items-baseline gap-1 mb-4">
            <span className="text-xl font-medium text-primary tracking-tight">$1,999</span>
            <span className="text-xs text-neutral-500 font-light">2-4 WEEKS DELIVERY</span>
          </div>
          
          <ul className="space-y-2 mb-6 flex-1">
            {['One page design', 'SEO-ready structure', 'Highly converting', 'Subtle animations', 'Optimized page speed'].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-neutral-400 font-light">
                <Check className="w-3 h-3 text-neutral-600 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          
          <button className="w-full py-2 bg-secondary hover:bg-neutral-800 border border-border rounded-lg text-xs font-normal text-primary/90 transition-colors">
            Schedule Call
          </button>
        </div>

      </div>
    </div>
  );
};

export default ServicesSection;
