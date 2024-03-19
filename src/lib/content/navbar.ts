import { NavbarSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const navbarSection: NavbarSectionType = {
  navLinks: [
    { name: 'Explore', url: '/#about' },
    { name: 'Build ', url: '/#skills' },
    { name: 'Engage', url: '/#experience' },
    { name: 'Content', url: '/#projects' },
  ],
  cta: {
    title: 'resume',
    url: `/${resumeFileName}`,
  },
};
