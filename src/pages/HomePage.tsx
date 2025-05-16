import React from 'react';
import HeroSlider from '../components/HeroSlider';
import QuickLinks from '../components/QuickLinks';
import AnnouncementSection from '../components/AnnouncementSection';
import NewsSection from '../components/NewsSection';
import EventsSection from '../components/EventsSection';
import AboutUsSection from '../components/AboutUsSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSlider />
      <QuickLinks />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <AnnouncementSection />
            <NewsSection />
          </div>
          <div className="lg:col-span-1">
            <EventsSection />
          </div>
        </div>
      </div>
      <AboutUsSection />
    </div>
  );
};

export default HomePage;