'use client';

import SidebarPortfolioTemplate from './SidebarPortfolioTemplate';
import CredlyBadge from './CredlyBadge';
import { portfolio, credlyBadgeId } from '@/data/portfolio';

const saveTheme = (theme: 'light' | 'dark') => {
  try {
    localStorage.setItem('theme', theme);
  } catch {
    // Storage unavailable (private mode etc.) — theme still applies for this visit
  }
  document.documentElement.classList.toggle('dark', theme === 'dark');
};

const Portfolio = () => (
  // theme="auto" follows the `dark` class that layout.tsx sets from the saved/system preference
  <SidebarPortfolioTemplate
    {...portfolio}
    theme="auto"
    onThemeChange={saveTheme}
    certificationsExtra={<CredlyBadge badgeId={credlyBadgeId} />}
  />
);

export default Portfolio;
