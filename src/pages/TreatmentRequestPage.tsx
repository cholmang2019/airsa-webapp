import React from 'react';
import { RequestHeroSection } from '../components/RequestHeroSection';
import { RequestFormSection } from '../components/RequestFormSection';
import { SupportCtaSection } from '../components/SupportCtaSection';

export const TreatmentRequestPage: React.FC = () => {
  return (
    <div id="page-treatment-request">
      <RequestHeroSection />
      <RequestFormSection />
      <SupportCtaSection />
    </div>
  );
};
