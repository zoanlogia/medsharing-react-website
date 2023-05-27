import { useContext } from "react"
import  LanguageProvider  from "../providers/LanguageProvider.jsx"

export const useLanguage = () => {

    const context = useContext(LanguageProvider)

    if(!context) {
        throw new Error('useLanguage must be used within LanguageProvider')
    }

    return context
}