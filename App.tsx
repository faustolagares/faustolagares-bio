import React from 'react';
import ProfileHeader from './components/ProfileHeader';
import Highlights from './components/Highlights';
import SocialLinks from './components/SocialLinks';
import ServicesGrid from './components/ServicesGrid';
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
          
          {/* Services Grid */}
          <ServicesGrid />

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
