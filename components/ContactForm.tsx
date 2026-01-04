import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div className="space-y-8">
      
      {/* Map Section */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <h2 className="text-sm text-neutral-500 font-normal">Where I'm based</h2>
          <div className="flex items-center gap-1.5 text-xs text-neutral-500">
             <span className="font-medium text-primary">NZ</span>
             <span className="text-lg grayscale">🇳🇿</span>
          </div>
        </div>
        <div className="w-full h-40 bg-neutral-800 rounded-2xl overflow-hidden border border-border relative group">
          <img 
             src="https://images.unsplash.com/photo-1574751528657-3755452c9380?w=800&h=300&fit=crop&q=80" 
             className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-[20%] transition-all duration-700" 
             alt="Map"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <span className="text-xl font-medium text-white drop-shadow-md tracking-[0.2em] uppercase">Auckland</span>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <h2 className="text-sm text-neutral-500 font-normal">Leave a message</h2>
        </div>
        
        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="text" 
            placeholder="Your name" 
            className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-primary placeholder:text-neutral-600 focus:outline-none focus:border-neutral-500 transition-colors font-light"
          />
          <input 
            type="email" 
            placeholder="Your email" 
            className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-primary placeholder:text-neutral-600 focus:outline-none focus:border-neutral-500 transition-colors font-light"
          />
          <textarea 
            placeholder="Your message" 
            rows={4}
            className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-primary placeholder:text-neutral-600 focus:outline-none focus:border-neutral-500 transition-colors resize-none font-light"
          />
          
          <button 
            type="submit"
            className="w-full bg-neutral-800 hover:bg-neutral-700 text-primary font-normal py-3 rounded-xl transition-colors text-sm border border-border"
          >
            Send
          </button>
        </form>
      </div>

    </div>
  );
};

export default ContactForm;
