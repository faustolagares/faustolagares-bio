import React from 'react';
import { Building2, ArrowUpRight } from 'lucide-react';

interface Company {
  name: string;
  description: string;
  url: string;
  displayUrl: string;
  logo: string;
}

const companies: Company[] = [
  {
    name: 'NexLink',
    description: 'AI driven data intelligence for leaders who need visibility, prediction, and control.',
    url: 'https://nexlink.ai',
    displayUrl: 'nexlink.ai',
    logo: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=100&h=100&fit=crop' // Abstract tech blue/dark
  },
  {
    name: 'Nëikka',
    description: 'Strategy, design, and execution for brands that need direction and consistency.',
    url: 'https://neikka.com',
    displayUrl: 'neikka.com',
    logo: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=100&h=100&fit=crop' // Abstract design dark/minimal
  }
];

const CompaniesSection: React.FC = () => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between px-1">
        <h2 className="text-sm text-neutral-500 font-normal">Founding</h2>
        <div className="flex items-center gap-1.5 text-xs text-neutral-600">
          <Building2 className="w-3.5 h-3.5" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {companies.map((company) => (
          <a 
            key={company.name}
            href={company.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col p-4 bg-card hover:bg-cardHover border border-border rounded-2xl transition-all duration-300 group h-full"
          >
            {/* Top Row: Logo and Arrow */}
            <div className="flex items-start justify-between w-full mb-3">
              <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-white/5 overflow-hidden shrink-0 shadow-sm relative">
                <img 
                  src={company.logo} 
                  alt={company.name} 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl"></div>
              </div>
              
              <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-white transition-colors" />
            </div>
            
            {/* Content Area */}
            <div className="flex-1 flex flex-col">
              <h3 className="text-sm font-medium text-primary group-hover:text-white transition-colors mb-1.5">{company.name}</h3>
              <p className="text-xs text-muted font-light leading-relaxed line-clamp-3 group-hover:text-neutral-400 transition-colors mb-3 flex-1">
                {company.description}
              </p>
              
              <span className="text-[10px] text-blue-400/90 font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                {company.displayUrl}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CompaniesSection;
