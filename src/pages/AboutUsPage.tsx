import React from 'react';
import { AboutHeroSection } from '../components/AboutHeroSection';
import { AboutWhoWeAreSection } from '../components/AboutWhoWeAreSection';
import { AboutMissionSection } from '../components/AboutMissionSection';
import { AboutVisionSection } from '../components/AboutVisionSection';
import { AboutOurFocusSection } from '../components/AboutOurFocusSection';
import { AboutBrandValuesSection } from '../components/AboutBrandValuesSection';
import { AboutApproachSection } from '../components/AboutApproachSection';
import { AboutCtaSection } from '../components/AboutCtaSection';

export const AboutUsPage: React.FC = () => {
  return (
    <div id="page-about-us">
      <AboutHeroSection />
      <AboutWhoWeAreSection />
      <AboutMissionSection />
      <AboutVisionSection />
      <AboutOurFocusSection />
      <AboutBrandValuesSection />
      <AboutApproachSection />
      <AboutCtaSection />
    </div>
  );
};
