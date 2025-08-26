export default function Table({ filteredCharacters }) {
  // console.log(filteredCharacters)
  return (
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
        {filteredCharacters.map((character) => (
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
  )
}
