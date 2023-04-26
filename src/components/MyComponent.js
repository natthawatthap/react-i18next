import React from 'react';
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();

  return (
    <div>
      <p>{t('greeting')}</p>
      <p>{t('farewell')}</p>
    </div>
  );
}

export default MyComponent;
