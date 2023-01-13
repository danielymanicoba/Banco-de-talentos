import { useEffect, useState } from 'react';
import { api, clearBaseURL } from './api/api';
import './App.css';
import { CharacterList } from './components/CharList';

function App() {

  const [currentPage, setCurrentPage] = useState('https://swapi.dev/api/people')
  const [characters, setCharacters] = useState([]);

  useEffect (() => {
    api.get(currentPage)
    .then((res) => {setCharacters(res.data)
    })
    .catch((err) => console.log(err))
    
  }, [currentPage]);

  return (
    <div className="App">
       <>
        <section>
          <h1>PERSONAGENS</h1>

          <button
            onClick={() => setCurrentPage(clearBaseURL(characters.previous))}
          >
            Página anterior
          </button>
          <button
            onClick={() => setCurrentPage(clearBaseURL(characters.next))}
          >
            Pŕoxima página
          </button>
        </section>
        <section>
          <CharacterList characters={characters} /> 
        </section>
      </>
    </div>
  );
}

export default App;
