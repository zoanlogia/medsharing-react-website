import { useContext } from "react"
import { LangageContext } from "../providers/LanguageProvider.jsx"

export const useLanguage = () => {
    const context = useContext(LangageContext)

    if(!context) {
        throw new Error('useLanguage must be used within LanguageProvider')
    }

    return context
}