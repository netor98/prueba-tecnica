export default function Pagination({ handleChange, currentPage, totalPages, itemsPage }) {

  console.log(currentPage, totalPages, itemsPage)
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
