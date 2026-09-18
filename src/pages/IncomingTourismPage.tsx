import React from 'react';
import { TourismHeroSection } from '../components/TourismHeroSection';
import { TourismIntroSection } from '../components/TourismIntroSection';
import { TourismServicesSection } from '../components/TourismServicesSection';
import { ExperienceIranMasonrySection } from '../components/ExperienceIranMasonrySection';
import { PersonalizedJourneySection } from '../components/PersonalizedJourneySection';
import { TourismCtaSection } from '../components/TourismCtaSection';

export const IncomingTourismPage: React.FC = () => {
  return (
    <div id="page-incoming-tourism">
      <TourismHeroSection />
      <TourismIntroSection />
      <TourismServicesSection />
      <ExperienceIranMasonrySection />
      <PersonalizedJourneySection />
      <TourismCtaSection />
    </div>
  );
};
