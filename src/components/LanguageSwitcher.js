import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  function handleLanguageChange(event) {
    const language = event.target.value;
    i18n.changeLanguage(language);
  }

  return (
    <select onChange={handleLanguageChange}>
      <option value="en">English</option>
      <option value="th">ไทย</option>
    </select>
  );
}

export default LanguageSwitcher;