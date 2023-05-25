import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguagesContext';
import { LOCALES } from '../i18n/locales.js';

const ButtonLanguageTexts = () => {
  const { language, switchLanguage } = useContext(LanguageContext);
  const languageText = language === LOCALES.FRENCH ? 'En' : 'Fr';

  return (
    <button className="" onClick={switchLanguage}>
      <div className="rounded-full border text-white">
        <span className="p-6">{languageText}</span>
      </div>
    </button>
  );
};

export default ButtonLanguageTexts;
