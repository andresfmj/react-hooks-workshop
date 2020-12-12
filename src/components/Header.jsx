import React, { useState, useContext, useEffect } from 'react'
import ThemeContext from '../context/ThemeContext'

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
    const { theme, setTheme } = useContext(ThemeContext);

    const handleClicked = () => {
        setDarkMode(!darkMode)
        setTheme(!theme)
    }

    return (
        <div className="Header" style={theme ? styles.headerStylesDarkMode : null}>
            <h1>ReactHooks</h1>
            <button type="button" onClick={handleClicked}>{ darkMode ? 'Light Mode' : 'Dark Mode'}</button>
        </div>
    );
}

const styles = {
    headerStylesDarkMode: {
        // backgroundColor: '#1E1212',
        color: '#84807D'
    }
}

export default Header;
