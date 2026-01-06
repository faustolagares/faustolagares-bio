import React from 'react';

interface Service {
  title: string;
  description: string;
  href: string;
  image?: string;
}

const services: Service[] = [
  {
    title: 'Brand Identity & Websites',
    description: 'Help people understand who you are, what you do, and why they should trust you through clear branding, websites, and landing pages.',
    href: '#',
    image: '/photos/service-1.png'
  },
  {
    title: 'Lead Generation',
    description: 'Reach people who are already looking for what you offer and turn them into real leads through ads, SEO, and social media.',
    href: '#',
    image: '/photos/service-1.png'
  },
  {
    title: 'AI & Automation',
    description: 'Use AI agents and automation to answer customers, save time, and keep your business running smoothly without extra work.',
    href: '#',
    image: '/photos/service-1.png'
  },
  {
    title: 'Apps & Web Platforms',
    description: 'Build custom web apps and applications that support your operations, improve customer experience, and scale with your business.',
    href: '#',
    image: '/photos/service-1.png'
  }
];

const ServicesGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-3">
      {services.map((service, index) => {
        return (
          <a
            key={index}
            href={service.href}
            className="bg-card hover:bg-cardHover border border-border rounded-2xl overflow-hidden flex flex-col h-full hover:border-neutral-700 transition-colors group"
          >
            {/* Image Section - 5:4 aspect ratio */}
            {service.image && (
              <div className="w-full aspect-[5/4] overflow-hidden bg-neutral-900">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}
            
            {/* Content Section */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-base font-medium text-primary group-hover:text-white transition-colors mb-2">
                {service.title}
              </h3>
              <p className="text-xs text-muted font-light leading-relaxed mb-4">
                {service.description}
              </p>
              <button className="w-full py-2 bg-secondary hover:bg-neutral-800 border border-border rounded-lg text-xs font-normal text-primary/90 transition-colors">
                Learn more
              </button>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default ServicesGrid;

