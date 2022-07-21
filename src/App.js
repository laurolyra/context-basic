import React, { useContext, useEffect } from 'react';
import logo from './logo.svg';
import { AchetteContext } from './contexts/AchetteContext';
import './App.css';

function App() {
  const {contagemDoContext, pokemon, alertaGeral} = useContext(AchetteContext);

  useEffect(() => {
    console.log('pokemon do context:', pokemon)
  }, [pokemon])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{contagemDoContext}</h2>
        
        <h3>{pokemon.name}</h3>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button type="button" onClick={() => alertaGeral()}>Alerta!</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
