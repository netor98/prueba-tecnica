export default function Searcher({ term, handleSearch }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Personaje..."
        value={term}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  )
}
