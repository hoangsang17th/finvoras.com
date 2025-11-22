"use client";

import { LanguageSwitcher as SharedLanguageSwitcher } from '@repo/i18n';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' }
];

type FinvorasLanguageSwitcherProps = {
  showName?: boolean;
  className?: string;
  orientation?: 'horizontal' | 'vertical';
};

export default function LanguageSwitcher({ orientation = 'horizontal', ...props }: FinvorasLanguageSwitcherProps) {
  return (
    <SharedLanguageSwitcher
      languages={languages}
      showName={false}
      variant="switcher"
      // @ts-ignore - orientation is added to SharedLanguageSwitcher but types might not be updated yet
      orientation={orientation}
      {...props}
    />
  );
}