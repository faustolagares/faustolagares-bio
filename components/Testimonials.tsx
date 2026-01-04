import React from 'react';
import { Star, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between px-1">
        <h2 className="text-sm text-neutral-500 font-normal">Testimonials</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Review 1 */}
        <div className="bg-card border border-border rounded-2xl p-5 flex flex-col justify-between hover:border-neutral-700 transition-colors">
          <p className="text-sm text-neutral-300 leading-relaxed mb-6 font-light">
            "Fausto's design expertise elevated our product to new heights. A perfect blend of aesthetics and usability. Working with him was a delight!"
          </p>
          
          <div>
            <div className="flex items-center gap-3 mb-2">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop" className="w-8 h-8 rounded-full grayscale-[20%]" alt="User" />
              <div>
                <h4 className="text-xs font-medium text-primary">John Anderson</h4>
                <p className="text-[10px] text-neutral-500 font-normal">Founder, Gamma</p>
              </div>
            </div>
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-yellow-500/80 fill-yellow-500/80" />)}
            </div>
          </div>
        </div>

        {/* Review 2 */}
        <div className="bg-card border border-border rounded-2xl p-5 flex flex-col justify-between relative group cursor-pointer hover:border-neutral-700 transition-colors">
            <div className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-neutral-800 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-border">
                <ChevronRight className="w-4 h-4 text-primary" />
            </div>
          <p className="text-sm text-neutral-300 leading-relaxed mb-6 font-light">
            "Fausto's UX solutions improved our website's performance. User-friendly design led to higher conversions. Highly recommended!"
          </p>
          
          <div>
            <div className="flex items-center gap-3 mb-2">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop" className="w-8 h-8 rounded-full grayscale-[20%]" alt="User" />
              <div>
                <h4 className="text-xs font-medium text-primary">Jane Smith</h4>
                <p className="text-[10px] text-neutral-500 font-normal">Founder, Delta</p>
              </div>
            </div>
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-yellow-500/80 fill-yellow-500/80" />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
