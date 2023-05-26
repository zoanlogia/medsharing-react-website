import { createContext, useState } from "react";

// CONTEXT == définition (valeur/default)
export const ThemeContext = createContext({
  theme: "dark",
  setTheme: () => {},
});

// PROVIDER == fournisseur
const ThemeProvider= ({children}) => {
    const [theme, setTheme] = useState("dark")

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;