import { useState, useEffect } from 'react'

function App() {
  const API_URL = 'https://swapi.info/api'

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch(`${API_URL}/people`)
      .then((res) => res.json())
      .then((json) => setCharacters(json))
  }, [])

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>Nombre</td>
            <td>Altura</td>
            <td>Peso</td>
            <td>Color de cabello</td>
            <td>Color de piel</td>
            <td>Color de ojos</td>
            <td>Fecha de nacimiento</td>
            <td>Genero</td>
            <td>Planeta de nacimiento</td>
          </tr>
        </thead>

        <tbody>
          {characters.map((character) => (
            <tr key={character.id}>
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
    </>
  )
}

export default App
