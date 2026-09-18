import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { IntroSection } from '../components/IntroSection';
import { ServicesSection } from '../components/ServicesSection';
import { PatientJourneySection } from '../components/PatientJourneySection';
import { SeamlessTravelSection } from '../components/SeamlessTravelSection';
import { FinalCtaSection } from '../components/FinalCtaSection';

export const MedicalTourismPage: React.FC = () => {
  return (
    <div id="page-medical-tourism">
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <PatientJourneySection />
      <SeamlessTravelSection />
      <FinalCtaSection />
    </div>
  );
};
