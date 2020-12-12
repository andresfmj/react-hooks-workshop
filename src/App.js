import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Characters from './components/Characters';
import { useContext } from 'react';
import ThemeContext from './context/ThemeContext';

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="App" style={theme ? styles.backgroundDarkMode : null}>
      <Header />
      <h1 style={theme ? styles.textColorDarkMode : null}>Hola App</h1>
      <Characters />
    </div>
  );
}

const styles = {
  backgroundDarkMode: {
    backgroundColor: '#1E1212',
  },
  textColorDarkMode: {
    color: '#84807D'
  }
}

export default App;
