import { LOCALES } from '../i18n/locales.js';
import { useTheme } from '../hooks/useTheme.jsx';
import { useLanguage } from '../hooks/useLanguage.jsx';

const ButtonLanguageTexts = () => {
  const {theme} = useTheme()
  const { language, switchLanguage } = useLanguage();
  
  const languageText = language === LOCALES.FRENCH ? 'En' : 'Fr';


  return (
    <button className="" onClick={switchLanguage}>
      <div className={`rounded-full border ${theme === "light" ? "text-primary" && "border-primary" : "text-white"}`}>
        <span className="p-6">{languageText}</span>
      </div>
    </button>
  );
};

export default ButtonLanguageTexts;
