import { createContext, useState } from "react";
import { LOCALES } from "../i18n/locales.js";

// CONTEXT == définition (valeur/default)
export const LanguageContext = createContext({
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
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
