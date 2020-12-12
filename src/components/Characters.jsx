import React, { useState, useEffect, useContext, useReducer } from 'react'
import ThemeContext from '../context/ThemeContext';

const initialState = {
    favorites: []
}

const favoriteReducer = (state, action) => {
    if (action.type == 'ADD_TO_FAVORITE') {
        return {
            ...state,
            favorites: [...state.favorites, action.payload]
        };
    }

    return state;
}

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const { theme, setTheme } = useContext(ThemeContext);
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
    
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(data => setCharacters(data.results))

    }, []);

    const handleClicked = favorite => {
        dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite })
    }

    return (
        <div className="Characters">

            {favorites.favorites.map(fav => (
                <li key={fav.id}>
                    {fav.name}
                </li>
            ))}

            <ul style={styles.listItems}>
                {characters.map(char => (
                    <li key={char.id} style={styles.items} style={theme ? styles.textColorDarkMode : null}>
                        <div style={styles.card}>
                            <img src={char.image} alt={char.name} />
                            <p>{char.name}</p>
                            <button type='button' onClick={() => handleClicked(char)}>Agregar a favoritos</button>
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
