export default function Pagination({ handleChange, currentPage, charactersLength }) {

  console.log(charactersLength)
  return (
    <div>
      <button onClick={() => handleChange(currentPage - 1)}
        disabled={currentPage == 1}
      >
        Anterior
      </button>



      <button onClick={() => handleChange(currentPage + 1)}
        disabled={currentPage == Math.ceil(charactersLength / 5)}
      >
        Siguiente
      </button>
    </div>
  )
}
