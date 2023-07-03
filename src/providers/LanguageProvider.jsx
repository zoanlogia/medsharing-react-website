import { createContext, useState } from "react";
import { LOCALES } from "../i18n/locales.js";

// CONTEXT == définition (valeur/default)
export const LangageContext = createContext({
  language: LOCALES.FRENCH,
  switchLanguage: () => {},
});

// PROVIDER == fournisseur
const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(LOCALES.FRENCH);

  const switchLanguage = () => {
      if (language === LOCALES.FRENCH) {
        setLanguage(LOCALES.ENGLISH);
      } else {
        setLanguage(LOCALES.FRENCH);
      }
  }

  return (
    <LangageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LangageContext.Provider>
  );
};

export default LanguageProvider;
