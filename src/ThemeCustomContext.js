import React, { useState, useContext } from 'react';


const ThemeContext = React.createContext();
const ThemeContextUpdate = React.createContext();

export function UseThemeValue() { // custom hooks
    return useContext(ThemeContext)
}
export function UseThemeValueUpdate() { // custom hooks
    return useContext(ThemeContextUpdate)
}

function ThemeCustomProvider({ children }) { // custom hooks 

    const [theme, setTheme] = useState(() => false)


    function toggle() {
        setTheme(preValue => !preValue)
    }


    return (
        <ThemeContext.Provider value={theme}>
            <ThemeContextUpdate.Provider value={toggle}>
                {children}
            </ThemeContextUpdate.Provider>
        </ThemeContext.Provider>
    )
}


export default ThemeCustomProvider;
