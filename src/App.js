import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Characters from './components/Characters';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hola App</h1>
      <Characters />
    </div>
  );
}

export default App;
