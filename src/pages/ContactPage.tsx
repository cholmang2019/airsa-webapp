import React from 'react';
import { ContactHeroSection } from '../components/ContactHeroSection';
import { ContactFormSection } from '../components/ContactFormSection';
import { ContactDirectCardsSection } from '../components/ContactDirectCardsSection';
import { ContactPillarsSection } from '../components/ContactPillarsSection';
import { ContactSupportMessageSection } from '../components/ContactSupportMessageSection';
import { ContactFinalCtaSection } from '../components/ContactFinalCtaSection';

export const ContactPage: React.FC = () => {
  return (
    <div id="page-contact">
      <ContactHeroSection />
      <ContactFormSection />
      <ContactDirectCardsSection />
      <ContactPillarsSection />
      <ContactSupportMessageSection />
      <ContactFinalCtaSection />
    </div>
  );
};
