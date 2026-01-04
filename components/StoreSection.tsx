import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Product } from '../types';

const products: Product[] = [
  { 
    id: '1', 
    title: 'Rail Ripper', 
    price: 59, 
    image: 'https://images.unsplash.com/photo-1520045864981-8fee920609bb?w=300&h=400&fit=crop',
  },
  { 
    id: '2', 
    title: 'Ollie', 
    price: 79, 
    badge: '5% OFF',
    image: 'https://images.unsplash.com/photo-1567539552301-359f4a05d68b?w=300&h=400&fit=crop',
  },
  { 
    id: '3', 
    title: 'Flipper', 
    price: 99, 
    image: 'https://images.unsplash.com/photo-1599577977465-9831c28c863a?w=300&h=400&fit=crop',
  }
];

const StoreSection: React.FC = () => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between px-1">
        <h2 className="text-sm text-neutral-500 font-normal">Store</h2>
        <div className="flex items-center gap-1.5 text-xs text-neutral-600">
          <ShoppingBag className="w-3 h-3 text-green-500/80" />
          <span>/faustolagares</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="aspect-[3/4] rounded-xl overflow-hidden mb-2 relative border border-border/50">
               <img 
                 src={product.image} 
                 alt={product.title} 
                 className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
               />
               {product.badge && (
                 <span className="absolute top-2 right-2 bg-neutral-900/80 backdrop-blur text-white text-[9px] font-medium px-1.5 py-0.5 rounded tracking-wide border border-white/10">
                   {product.badge}
                 </span>
               )}
            </div>
            <div className="px-1">
              <h3 className="text-xs font-medium text-primary truncate group-hover:text-white transition-colors">{product.title}</h3>
              <p className="text-xs text-muted font-light">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreSection;
