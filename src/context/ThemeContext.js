import React, { useState } from 'react'

const ThemeContext = React.createContext(null);

export function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState(false);
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            { children }
        </ThemeContext.Provider>
    )
};


export default ThemeContext;
