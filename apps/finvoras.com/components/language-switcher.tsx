"use client";

import { LanguageSwitcher as SharedLanguageSwitcher } from '@repo/i18n';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' }
];

type FinvorasLanguageSwitcherProps = {
  showName?: boolean;
  className?: string;
};

export default function LanguageSwitcher() {
  return (
    <SharedLanguageSwitcher
      languages={languages}
      showName={false}
      variant="switcher"
    />
  );
}