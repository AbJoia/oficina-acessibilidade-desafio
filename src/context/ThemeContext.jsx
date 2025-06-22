import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export function ThemeContextProvider({children}){
    const [darkThemeIsActive, setDarkThemeIsActive] = useState(false);

    function handleTheme(){
        setDarkThemeIsActive(!darkThemeIsActive);
    }


    return(
        <ThemeContext.Provider value={{darkThemeIsActive, handleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
