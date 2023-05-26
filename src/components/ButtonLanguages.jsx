import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguagesContext';
import { LOCALES } from '../i18n/locales.js';
import { ThemeContext } from '../contexts/ThemeContext.jsx';

const ButtonLanguageTexts = () => {
  const { language, switchLanguage } = useContext(LanguageContext);
  const languageText = language === LOCALES.FRENCH ? 'En' : 'Fr';

  const {theme} = useContext(ThemeContext);

  return (
    <button className="" onClick={switchLanguage}>
      <div className={`rounded-full border ${theme === "light" ? "text-primary" && "border-primary" : "text-white"}`}>
        <span className="p-6">{languageText}</span>
      </div>
    </button>
  );
};

export default ButtonLanguageTexts;
