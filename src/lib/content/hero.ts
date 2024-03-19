import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: '',
  title: 'Blazingly fast',
  tagline: 'Exceptionally private.',
  description:
    'Deploy Web3 apps that are as fast as legacy solutions. Aleph Zero is a layer 1 that enables teams to deploy scalable, secure, low-cost, and ZK privacy-enhanced products across multiple verticals—from DeFi and gaming to enterprise.',
  specialText: 'Currently available for a job & freelance',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
