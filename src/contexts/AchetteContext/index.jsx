import React, {createContext, useEffect, useState} from 'react';

export const AchetteContext = createContext();

const AchetteProvider = ({children}) => {
  const [contagemDoContext, setContagemDoContext] = useState(33);
  const [pokemon, setPokemon] = useState([]);
  const alertaGeral = () => window.alert('alerta!');
  const zeraContagem = () => setContagemDoContext(0);

  async function buscaPokemon() {
    try{
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
      return response.json().then(poke => setPokemon(poke));
    } catch(err) {
      console.error(err);
      // Handle errors here
    }
  }

  useEffect(()=>{
    buscaPokemon()
  },[])

  const context = {
    pokemon,
    contagemDoContext,
    setContagemDoContext,
    alertaGeral,
    zeraContagem
  }

  return (
    <AchetteContext.Provider value={context}>
      {children}
    </AchetteContext.Provider>
  )
}

export default AchetteProvider;
