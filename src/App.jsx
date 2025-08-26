import { useState, useEffect } from 'react'
import './App.css'
import Pagination from './components/Pagination';

function App() {
  const API_URL = 'https://swapi.info/api'

  const [characters, setCharacters] = useState([])
  const [currentPage, setCurrentPage] = useState(1);


  //Api call
  useEffect(() => {
    fetch(`${API_URL}/people`)
      .then((res) => res.json())
      .then((json) => setCharacters(json))
  }, [])


  //Pagination 
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentCharacters = characters.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Altura</th>
            <th>Peso</th>
            <th>Color de cabello</th>
            <th>Color de piel</th>
            <th>Color de ojos</th>
            <th>Fecha de nacimiento</th>
            <th>Genero</th>
            <th>Planeta de nacimiento</th>
          </tr>
        </thead>

        <tbody>
          {currentCharacters.map((character) => (
            <tr key={character.name}>
              <td>{character.name}</td>
              <td>{character.height}</td>
              <td>{character.mass}</td>
              <td>{character.hair_color}</td>
              <td>{character.skin_color}</td>
              <td>{character.eye_color}</td>
              <td>{character.birth_year}</td>
              <td>{character.gender}</td>
              <td>{character.homeworld}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination handleChange={handlePageChange} currentPage={currentPage}
        charactersLength={characters.length} />
    </>
  )
}

export default App
