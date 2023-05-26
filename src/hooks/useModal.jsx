import { useContext } from "react"
import { ModalContext } from "../providers/ModalProvider.jsx"

export const useModal = () => {
    const context = useContext(ModalContext)

    if(!context) {
        throw new Error('useModal must be used within ModalProvider')
    }

    return context
}