import React from 'react';
import ProfileHeader from './components/ProfileHeader';
import Highlights from './components/Highlights';
import SocialLinks from './components/SocialLinks';
import FeaturedLink from './components/FeaturedLink';
import LatestPost from './components/LatestPost';
import AudioSection from './components/AudioSection';
import ListenOnSection from './components/ListenOnSection';
import CompaniesSection from './components/CompaniesSection';
import LatestVideo from './components/LatestVideo';
import LatestPhotos from './components/LatestPhotos';
import StoreSection from './components/StoreSection';
import ServicesSection from './components/ServicesSection';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { MousePointer2 } from 'lucide-react';

// Main App Component
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black font-sans text-primary selection:bg-neutral-700 selection:text-white">
      
      {/* Main Content Container */}
      <main className="max-w-xl mx-auto">
        
        <ProfileHeader />
        
        <div className="mb-6">
           <Highlights />
        </div>

        <div className="mb-8">
           <SocialLinks />
        </div>

        {/* Content Wrapper for Padding */}
        <div className="px-4 sm:px-6 space-y-12 pb-8">
          
          {/* Featured Cards Stack */}
          <div className="space-y-4">
            <FeaturedLink 
              title="Ultra"
              subtitle="A high quality Framer portfolio template designed for creatives."
              badge="Store"
              Icon={MousePointer2}
              iconBg="bg-white text-black"
            />
            <FeaturedLink 
              title="Grainy Gradients"
              subtitle="16 free 8k wallpapers for desktop and mobile."
              badge="Downloadable"
              image="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=100&h=100&fit=crop"
            />
            <FeaturedLink 
              title="AR & Design"
              subtitle="Opportunities and challenges for designers working with AR."
              badge="Blog Post"
              image="https://images.unsplash.com/photo-1614726365723-49cfa361db4f?w=100&h=100&fit=crop"
            />
          </div>

          <LatestPost />
          <AudioSection />
          <ListenOnSection />
          <CompaniesSection />
          <LatestVideo />
          <LatestPhotos />
          <StoreSection />
          
          {/* Latest Played - Simulated as a small widget */}
          <div className="flex items-center justify-between px-1">
            <h2 className="text-sm text-neutral-500 font-normal">Latest played</h2>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          </div>
          
          <ServicesSection />
          <Testimonials />
          <ContactForm />
          
          <Footer />
        </div>

      </main>

    </div>
  );
};

export default App;
