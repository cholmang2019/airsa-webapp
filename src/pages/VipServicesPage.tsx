import React from 'react';
import { VipHeroSection } from '../components/VipHeroSection';
import { VipServicesCardsSection } from '../components/VipServicesCardsSection';
import { VipExperienceSplitSection } from '../components/VipExperienceSplitSection';
import { VipJourneyTimelineSection } from '../components/VipJourneyTimelineSection';
import { VipHospitalityStandardSection } from '../components/VipHospitalityStandardSection';
import { VipBrandStatementMasonrySection } from '../components/VipBrandStatementMasonrySection';
import { VipCtaSection } from '../components/VipCtaSection';

export const VipServicesPage: React.FC = () => {
  return (
    <div id="page-vip-services">
      <VipHeroSection />
      <VipServicesCardsSection />
      <VipExperienceSplitSection />
      <VipJourneyTimelineSection />
      <VipHospitalityStandardSection />
      <VipBrandStatementMasonrySection />
      <VipCtaSection />
    </div>
  );
};
