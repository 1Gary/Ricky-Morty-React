import imagenRickyMorty from './img/rick-morty.png'
import './App.css';
import Characters from './components/Characters';

import { useState } from 'react';

function App() {

  const[characters, setCharacters] = useState(null);


  const reqApi = async ()=>{

   const Api = await fetch('https://rickandmortyapi.com/api/character');

   const characterApi = await Api.json();

   setCharacters(characterApi.results);

  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Ricky & Morty </h1>
        {characters ? (

          <Characters  characters={characters}  setCharacters={setCharacters}/>

        ):(
          <>
            <img src={imagenRickyMorty} alt='Ricky & Morty' className='img-home' />
            <button onClick={reqApi} className='btn-search'>Buscar Personajes</button>
          </>
        )}
        
      </header>
    </div>
  );
}

export default App;
