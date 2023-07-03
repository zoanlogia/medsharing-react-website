import { IntlProvider } from "react-intl"
import { LOCALES } from "../i18n/locales.js"
import { useLanguage } from "../hooks/useLanguage.jsx"
import { messages } from "../i18n/messages.js"

const I18nProvider = ({children}) => {
    const {language} = useLanguage()
    return (
        <IntlProvider defaultLocale={LOCALES.FRENCH} locale={language} messages={messages[language]}>
            {children}
        </IntlProvider>
    )
}

export default I18nProvider