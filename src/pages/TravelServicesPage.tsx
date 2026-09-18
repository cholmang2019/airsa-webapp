import React from 'react';
import { TravelHeroSection } from '../components/TravelHeroSection';
import { CoreServicesSection } from '../components/CoreServicesSection';
import { SeamlessTravelSection } from '../components/SeamlessTravelSection';
import { TravelCtaSection } from '../components/TravelCtaSection';

export const TravelServicesPage: React.FC = () => {
  return (
    <div id="page-travel-services">
      <TravelHeroSection />
      <CoreServicesSection />
      <SeamlessTravelSection />
      <TravelCtaSection />
    </div>
  );
};
