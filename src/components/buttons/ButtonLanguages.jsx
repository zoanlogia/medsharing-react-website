import { LOCALES } from '@/i18n/locales';
import { useTheme } from '@/hooks/useTheme';
import { useLanguage } from '@/hooks/useLanguage';

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
