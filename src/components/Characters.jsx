import React, { useState, useEffect, useContext } from 'react'
import ThemeContext from '../context/ThemeContext';


const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const { theme, setTheme } = useContext(ThemeContext);
    
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(data => setCharacters(data.results))

    }, []);

    return (
        <div className="Characters">
            <ul style={styles.listItems}>
                {characters.map(char => (
                    <li key={char.id} style={styles.items} style={theme ? styles.textColorDarkMode : null}>
                        <div style={styles.card}>
                            <img src={char.image} alt={char.name} />
                            <p>{char.name}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const styles = {
    listItems: {
        listStyleType: 'none',
        margin: '0px',
        padding: '0px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr'
    },
    items: {
        display: 'flex',
        justifyContent: 'center'
    },
    card: {
        border: '1px solid #cecece',
        borderRadius: '12px',
        margin: '6px',
        padding: '2px'
    },
    textColorDarkMode: {
        color: '#84807D'
    }
}

export default Characters;
