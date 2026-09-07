import React from 'react';
import { InternationalHeroSection } from '../components/InternationalHeroSection';
import { InternationalServicesGridSection } from '../components/InternationalServicesGridSection';
import { InternationalProcessSection } from '../components/InternationalProcessSection';
import { InternationalSupportSplitSection } from '../components/InternationalSupportSplitSection';
import { InternationalCtaSection } from '../components/InternationalCtaSection';

export const InternationalServicesPage: React.FC = () => {
  return (
    <div id="page-international-services">
      <InternationalHeroSection />
      <InternationalServicesGridSection />
      <InternationalProcessSection />
      <InternationalSupportSplitSection />
      <InternationalCtaSection />
    </div>
  );
};
