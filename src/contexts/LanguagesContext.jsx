import { createContext, useState } from "react";
import { IntlProvider } from "react-intl";
import { LOCALES } from "../i18n/locales.js";
import { messages } from "../i18n/messages";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(LOCALES.FRENCH);

  const switchLanguage = () => {
    if (language === LOCALES.FRENCH) {
      setLanguage(LOCALES.ENGLISH);
    } else {
      setLanguage(LOCALES.FRENCH);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      <IntlProvider defaultLocale={LOCALES.FRENCH} locale={language} messages={messages[language]}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};
