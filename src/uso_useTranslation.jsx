import React from 'react';
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation(); // Hook para usar traducciones

  return (
    <div>
      <h1>{t('welcome_message')}</h1>
    </div>
  );
};

export default MyComponent;
