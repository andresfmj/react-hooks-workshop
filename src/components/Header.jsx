import React, { useState } from 'react'

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);

    const handleClicked = () => {
        setDarkMode(!darkMode)
    }

    return (
        <div className="Header">
            <h1>ReactHooks</h1>
            <button type="button" onClick={handleClicked}>{ darkMode ? 'Dark Mode' : 'Light Mode'}</button>
        </div>
    );
}

export default Header;
