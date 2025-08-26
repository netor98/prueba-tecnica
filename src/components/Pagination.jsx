export default function Pagination({ handleChange, currentPage, totalPages }) {

  return (
    <div>
      <button onClick={() => handleChange(currentPage - 1)}
        disabled={currentPage == 1}
      >
        Anterior
      </button>



      <button onClick={() => handleChange(currentPage + 1)}
        disabled={currentPage == totalPages}
      >
        Siguiente
      </button>
    </div >
  )
}
